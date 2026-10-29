interface HangmanDrawProps {
  attempt: number;
}

function HangmanDraw({ attempt }: HangmanDrawProps) {
  return (
    <section className="relative"> {HangmanFullBody.slice(0, attempt)}
      <div className="bg-black w-2 h-16 absolute right-2 top-0" />
      <div className="bg-black w-64 h-2 ml-26" />
      <div className="h-128 w-2 bg-black ml-32" />
      <div className="w-64 h-2 bg-black" />
    </section>
  );
}

const HangmanHead = () => {
  return (<div className="w-15 h-15 border-6 absolute border-black rounded-full -right-4.5 top-15" />);};
const HangmanRightArm = () => {
  return (<div className="absolute bg-black h-2 w-22 -right-18 top-34 -rotate-18" />);};
const HangmanLeftArm = () => {
  return (<div className="absolute bg-black h-2 w-22 right-2 top-34 rotate-18" />);};
const HangmanRightLeg = () => {
  return (<div className="absolute bg-black h-2 w-30 -right-3 top-84 -rotate-48" />);};
const HangmanLeftLeg = () => {
  return (<div className="absolute bg-black h-2 w-30 -right-22 top-84 rotate-48" />);};
const HangmanBody = () => {
  return <div className="absolute h-46 w-2 bg-black right-2 top-30" />;};

const HangmanFullBody = [
  <HangmanHead />,
  <HangmanBody />,
  <HangmanRightArm />,
  <HangmanLeftArm />,
  <HangmanRightLeg />,
  <HangmanLeftLeg />,
];

export default HangmanDraw;
