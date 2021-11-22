import { useState } from "react";
import { generateRandom, validateRound } from "./gameutil";
import GameOverPage from "./overuh";

export default function index() {
  const [computerChoice, setComputerChoice] = useState("-");
  const [round, setRound] = useState(0);
  const [isOver, setOver] = useState(false);
  const [userChoice, setUserChoice] = useState("Choose Any Option");
  const [score, setScore] = useState(0);

  const moveToNextRound = () => {
    setUserChoice("Please Choose one");
    setComputerChoice("-");
    setRound(round + 1);
  };

  const onSelectChoice = (e) => {
    const choice = e.target.id;
    const computer = generateRandom();
    setComputerChoice(computer);
    setUserChoice(choice);
    if (round == 9) {
      console.log("Gameu ovaru", score);
      setOver(true);
    } else {
      setScore(score + validateRound(computer, choice));
      setTimeout(function () {
        moveToNextRound();
      }, 800);
    }
  };

  if (isOver) {
    return (
      <>
        <GameOverPage score={score} />
      </>
    );
  } else {
    return (
      <div className="mt-10">
        <div className="flex w-full h-full justify-around score-area">
          <h3>ROUND : {round}/10</h3>
          <h3>SCORE : {score}/10</h3>
        </div>
        <div className="mt-10 w-full h-full flex flex-col items-center">
          <h2 className="m-1">{userChoice}</h2>
          <div className="flex">
            <button
              onClick={onSelectChoice}
              id="Stone"
              className="p-4 m-2 shadow-md bg-purple-700 font-bold text-white rounded-lg text-xl"
            >
              Stone
            </button>
            <button
              onClick={onSelectChoice}
              id="Paper"
              className="p-4 m-2 shadow-md bg-purple-700 font-bold text-white rounded-lg text-xl"
            >
              Paper
            </button>
            <button
              onClick={onSelectChoice}
              id="Scissor"
              className="p-4 m-2 shadow-md bg-purple-700 font-bold text-white rounded-lg text-xl"
            >
              Scissor
            </button>
          </div>
          <div className="mt-10">
            <h2 className="m-1">Computer Choose</h2>
            <h1 className="text-3xl font-bold m-4">{computerChoice}</h1>
          </div>
        </div>
      </div>
    );
  }
}
