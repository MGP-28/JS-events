import { getColorByContent } from '../../presenter/handler.js'
//counter
import { incrementCounter } from '../../presenter/handler.js'

function squareHoverTextColorAdd(event){
    incrementCounter()

    const squareLetter = event.target.textContent
    const color = getColorByContent(squareLetter)
    const textToShow = document.querySelector('#textToShow')
    textToShow.classList.add('text-'+color+'-400')
}

function squareHoverTextColorRemove(event){
    incrementCounter()

    const textToShow = document.querySelector('#textToShow')
    const colorClass = [...textToShow.classList].find(el => el.includes('-400'))
    console.log(colorClass)
    textToShow.classList.remove(colorClass)
}

export { squareHoverTextColorAdd, squareHoverTextColorRemove }