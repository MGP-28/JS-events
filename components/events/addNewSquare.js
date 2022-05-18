import { buildSquare } from '../square.js'
//counter
import { incrementCounter } from '../../presenter/handler.js'

function addNewSquare(){
    incrementCounter()

    const squareList = document.querySelector('#squareList')
    const index = squareList.childNodes.length - 1
    const newSquare = buildSquare(index)
    squareList.appendChild(newSquare)
}

export { addNewSquare }