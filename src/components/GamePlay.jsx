import React, { useState } from "react";
import TotleScore from "./TotleScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (!selectedNumber) {
      setError("You have not selected any number");

      return;
    }

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = ()=>{
    setScore(0)
  }

  const gameRules =()=>{
    setShowRules (prev=>!prev)
  }

  return (
    <main>
      <div className="mains">
        <TotleScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />

      <div div className="game_btn">
        
          <button onClick={resetScore} className='btn'>Reste Game</button>
          <button onClick={gameRules} className="btn">{showRules ? "Hide":"Show"}Rules</button>
        
      </div>
    {  showRules && <Rules/>}
    </main>
  );
};

export default GamePlay;
