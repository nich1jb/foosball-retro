import React from 'react'

export const MoveDisplay = (props) => {
  const gifs = [
    'https://media.giphy.com/media/3ohs7KViF6rA4aan5u/giphy.gif',
    'https://media.giphy.com/media/fXzzSq1G7kYqWKRIPU/giphy.gif',
    'https://media.giphy.com/media/nqtYybzXsCy763Q5EQ/giphy.gif',
    'https://media.giphy.com/media/3oEjI5PXQRdol15MHe/giphy.gif',
    'https://media.giphy.com/media/yx400dIdkwWdsCgWYp/giphy.gif'
  ]

  return (
    <div>
      <img src={ gifs[props.move] } />
    </div>
  )
}