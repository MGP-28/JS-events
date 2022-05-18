import { createHTMLElement } from '../helpers/dom.js'
import { updateCenterText } from './events/updateCenterText.js'

function buildInputText(parent){
    //build text input element
    const textInput = createHTMLElement('input', '', 
        ['text-black', 'border', 'rounded', 'border-gray-500', 'p-2'],
        [{name: 'id', value: 'userText'}, {name: 'type', value: 'text'}]
    )
    textInput.addEventListener('keyup', updateCenterText)
    //build clear input element
    const clearInput = createHTMLElement('input', '', 
        ['border', 'rounded', 'border-gray-500', 'p-2', 'hover:border-white'],
        [{name: 'value', value: 'CLEAR'}, {name: 'type', value: 'reset'}]
    )
    clearInput.addEventListener('click', (e) => { setTimeout( () => { updateCenterText() }, "100")  })
    //build form
    const form = createHTMLElement('form', '', 
        ['flex', 'gap-5'],
        [{name: 'action', value: ' '}, {name: 'onSubmit', value: 'return false'}],
        [textInput, clearInput]
    )
    //build container
    const container = createHTMLElement('div', '', 
        ['flex', 'justify-center'],
        [],
        [form]
    )
    parent.appendChild(container)
}

export { buildInputText }