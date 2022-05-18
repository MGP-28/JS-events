import { buildTitle } from './bases/componentTitle.js'
import { appendElements } from '../helpers/dom.js'

function buildTextToShow(parent){
    //title props
    const propsTitle = {
        element: 'h1',
        text: 'Use events to change me',
        classes: ['text-2xl', 'font-semibold'],
        attributes: [{name: 'id', value: 'textToShow'}]
    }
    //title container props
    const propsContainer = { classes: ['flex', 'justify-center'] }
    //create title + container div
    const container = buildTitle(propsTitle, propsContainer)
    //append container div (with title) to main
    parent.appendChild(container)
}

export { buildTextToShow }