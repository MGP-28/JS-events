import { createHTMLElement } from '../helpers/dom.js'
import { addNewSquare } from './events/addNewSquare.js'
import { buildSquare } from './square.js'

function buildSquareContainer(parent){
    //create li elements into array
    const items = []
    for (let index = 0; index < 3; index++) {
        const newSquare = buildSquare((index))
        items.push(newSquare)
    }
    //build list
    const list = createHTMLElement('ul', '', 
        ['w-full', 'max-w-xl', 'flex', 'justify-around', 'text-black'],
        [{name: 'id', value: 'squareList'}],
        items
    )
    list.addEventListener('addNewSquare', addNewSquare)
    //build container div
    const container = createHTMLElement('ul', '', 
        ['flex', 'justify-center'],
        [],
        [list]
    )
    //append container div (with ul) to main
    parent.appendChild(container)
}

export { buildSquareContainer }