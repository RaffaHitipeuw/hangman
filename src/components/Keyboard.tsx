import clsx from "clsx";

const KEYS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface KeyboardProps {
  onKeyboardClick: (letter: string) => void;
  inactiveLetters: string[];
  activeLetters: string[];
  disabled?: boolean;
}

function Keyboard({
  onKeyboardClick,
  inactiveLetters,
  activeLetters,
  disabled = false,
}: KeyboardProps) {
  return (
    <section className="flex flex-wrap gap-2 w-150">
      {KEYS.map((letter, index) => {
        const lowerLetter = letter.toLowerCase();
        const isInactive = inactiveLetters.includes(lowerLetter);
        const isActive = activeLetters.includes(lowerLetter);

        return (
          <button
            key={index}
            onClick={() => onKeyboardClick(lowerLetter)}
            disabled={isInactive || isActive || disabled}
            className={clsx(
              "border p-5 font-semibold",
              isInactive && "bg-gray-600",
              isActive && "bg-green-600",
              (isInactive || isActive || disabled) && "cursor-not-allowed opacity-60"
            )}
          >
            {letter}
          </button>
        );
      })}
    </section>
  );
}

export default Keyboard;