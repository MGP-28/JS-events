import { squareHoverTextColorAdd, squareHoverTextColorRemove } from './events/squareHoverTextColor.js'
import { createHTMLElement } from '../helpers/dom.js'
import { getSquareColor, getSquareLetter } from '../presenter/handler.js'

function buildSquare(index){
    //build html element
    const letter = getSquareLetter(index)
    const color = getSquareColor(index)
    const liProps = {
        text: letter,
        classes: ['w-20', 'h-20', 'bg-'+color+'-500', 'flex', 'justify-center', 'items-center', 'rounded'],
        attributes: [
            {name: 'id', value: 'square'+letter}
        ]
    }
    const liSquare = createHTMLElement('li', liProps.text, liProps.classes, liProps.attributes)
    liSquare.addEventListener('mouseenter', squareHoverTextColorAdd)
    liSquare.addEventListener('mouseleave', squareHoverTextColorRemove)
    return liSquare
}

export { buildSquare }