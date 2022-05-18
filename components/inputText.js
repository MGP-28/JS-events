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
        ['h-3/4', 'border', 'rounded', 'border-gray-500', 'py-2', 'px-4', 'bg-purple-500', 'text-black', 'text-sm', 'font-semibold', 'hover:border-white'],
        [{name: 'value', value: 'CLEAR'}, {name: 'type', value: 'reset'}]
    )
    clearInput.addEventListener('click', (e) => { setTimeout( () => { updateCenterText() }, "100")  })
    //build form
    const form = createHTMLElement('form', '', 
        ['flex', 'items-center', 'gap-5'],
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