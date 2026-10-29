interface HangmanWordProps { word: string; selectedLetters: string[]; reveal?: boolean; isWinner?: boolean;}
function HangmanWord({
  word,
  selectedLetters,
  reveal = false,
  isWinner = false,
}: HangmanWordProps) {
  return (
    <section className="flex gap-5">
      {word.split("").map((letter, index) => {
        const isGuessed = selectedLetters.includes(letter);
        const isShown = isGuessed || reveal;
        
        let textColor = "text-black";
        if (isWinner) {
          textColor = "text-green-500"; 
        } else if (reveal && !isGuessed) {
          textColor = "text-red-500";   
        }

        return (
          <span key={index} className="uppercase text-6xl font-bold pb-2 border-b-5 border-black" >
            <span className={`${isShown ? "visible" : "invisible"} ${textColor}`}>{letter}</span>
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;