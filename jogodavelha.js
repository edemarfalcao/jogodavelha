document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const playerDisplay = document.querySelector ('#player')

    let currentPlayer = 'playerX'

    squares.forEach(squares => {
        squares.addEventListener('click', clickOutcome)
    })

    function clickOutcome (e) {
     const squaresArray = Array.from(squares)
     const index = squaresArray.indexOf(e.target)
     playerDisplay.innerHTML = currentPlayer

     if(currentPlayer === 'playerX') {
         squares[index].classList.add('playerX')
         currentPlayer = 'playerO'
     } else {
         squares[index].classList.add('playerO')
         currentPlayer = 'playerX'
     }
    }



})