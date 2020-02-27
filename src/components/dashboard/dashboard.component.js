import React, { useState } from 'react'
import MoveDisplay from '../moveDisplay'

export const Dashboard = () => {
  const [moveDisplay, setMoveDisplay] = useState(false)
  const [randomMove, setRandomMove] = useState(0)

  const handleClick = () => {
    const rand = Math.floor(Math.random() * Math.floor(5))
    setRandomMove(rand)
    setMoveDisplay(true)
  }

  return (
    <div className="App">
      <header>
        <h1>Retro</h1>
      </header>
      <button type="button" id="play-button" className="btn btn-secondary" onClick={ handleClick }>Play</button>
      { moveDisplay ? <MoveDisplay move={ randomMove }/> : null }
    </div>
  )
}