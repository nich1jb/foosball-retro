import React, { useState } from 'react'
import MoveDisplay from '../moveDisplay'

export const Dashboard = () => {
  const [moveDisplay, setMoveDisplay] = useState(false)
  const [currentMove, setCurrentMove] = useState(0)
  const [movesPlayed, setMovesPlayed] = useState([])

  const play = () => {
    const move = randomNumber()
    setMovesPlayed([...movesPlayed, move])
    setCurrentMove(move)
    setMoveDisplay(true)
  }

  const randomNumber = () => {
    return Math.floor(Math.random() * Math.floor(4))
  }

  const nextMove = () => {
    let move = randomNumber()
    while ((move === currentMove || movesPlayed.includes(move)) && movesPlayed.length !== 4) {
      move = randomNumber()
    }
    if (movesPlayed.length === 4) move = 4
    setMovesPlayed([...movesPlayed, move])
    setCurrentMove(move)
  }

  return (
    <div className="App">
      <p>Order Management Team Retro 4/3/2020</p>
      <header>
        <h1>Foosball!</h1>
        <h2>Choose Your Own Adventure Edition</h2>
      </header>
      { moveDisplay 
      ? <MoveDisplay move={ currentMove } nextMove={nextMove}/> 
      : <>
          <button type="button" className="btn" onClick={ play }>Play</button>
        </> }
    </div>
  )
}