import React,{useState} from 'react'

const RollDice = ({roleDice, currentDice}) => {


  return (
    <div className='diceContainer'>
        <div className="dice" onClick={roleDice }>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="dice_1" />
        </div>
        <p>Click on Dice to roll</p>
    </div>
  )
}

export default RollDice
