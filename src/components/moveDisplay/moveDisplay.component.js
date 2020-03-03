import React, { useState, useEffect } from 'react'

export const MoveDisplay = (props) => {
  const [buttonClickable, setButtonClickable] = useState(false)

  const moves = {
    0: {
      name: 'GOAL',
      options: ['Play more aggressively', 'Play more defensively'],
      actualName: 'What was good?',
      gif: '/gifs/goal.gif'
    },
    1: {
      name: 'OWN GOAL',
      options: ['Accuse your opponent of cheating', 'Switch position with partner'],
      actualName: 'What was bad?',
      gif: '/gifs/own-goal.gif'
    },
    2: {
      name: 'BALL HAS STALLED',
      options: ['Play the ball again', 'Have a cry and do a frustrated spinny boi'],
      actualName: 'Confused/questions',
      gif: '/gifs/ball-stalled.gif'
    },
    3: {
      name: 'GREAT SAVE',
      options: ['Spin attack!', 'Pass the ball ahead'],
      actualName: 'What was tricky?',
      gif: '/gifs/great-save.gif'
    },
    4: {
      name: 'YOU WIN!',
      options: null,
      actualName: 'Kudos',
      gif: '/gifs/you-win.gif'
    }
  }

  const moveOptions = moves[props.move].options

  const nextMoveClick = () => {
    setButtonClickable(false)
    props.nextMove()
  }

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setButtonClickable(true)
      }, 60000)

      return () => {
        clearTimeout(timer)
      }
    })

  return (
    <div className="moveDisplay">
      <img src={ moves[props.move].gif } />
      <h1>{moves[props.move].name}</h1>
      {
        props.move < 4 ?
        <>
          <p>What will you do next?</p>
          <button className={`btn clickable-${buttonClickable}`} onClick={nextMoveClick} disabled={!buttonClickable}>
            {moveOptions[0]}
          </button>
          <button className={`btn clickable-${buttonClickable}`} onClick={nextMoveClick} disabled={!buttonClickable}>
            {moveOptions[1]}
          </button>
        </> : null
      }
    </div>
  )
}