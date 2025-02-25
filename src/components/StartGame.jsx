import React from 'react'
// import styled from 'styled-components'



const StartGame = ({toggle}) => {
  return (
    <div className='container'>
        <div>
        <img src="/images/dices.png" alt="" />

        </div>
        <div>
            <h1>DICE GAME</h1>
        <button onClick={toggle} className='play_btn'>Play Now </button>


        </div>
    </div>
  )
}

export default StartGame
