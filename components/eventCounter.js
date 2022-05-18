import { updateEventCounter } from './events/updateEventCounter.js'
import { createHTMLElement, appendElements } from '../helpers/dom.js'

function buildEventCounter(parent){
    //span element for number
    const spanCounter = createHTMLElement('span', '0', ['font-bold'], [{name: 'id', value: 'eventCounter'}]) 
    //build title
    const title = createHTMLElement('h1', 'Number of events: ',
        [],
        [],
        [spanCounter]
    )
    title.addEventListener('updateEventCounter', updateEventCounter)
    //build title container
    const container = createHTMLElement('div', '', 
        ['flex', 'justify-center'], 
        [], 
        [title]
    )
    //append container div (with title) to main
    parent.appendChild(container)
}

export { buildEventCounter }