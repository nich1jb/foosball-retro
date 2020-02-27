import React from 'react'

export const Dashboard = () => {

  const play = () => {
    console.log('play move')
  }

  return (
    <div className="App">
      <header>
        <h1>Retro</h1>
      </header>
      <button type="button" id="play-button" className="btn btn-secondary" onClick={play}>Play</button>
    </div>
  )
}