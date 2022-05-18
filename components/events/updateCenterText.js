import { getDefaultText } from '../../presenter/handler.js'

import { incrementCounter } from '../../presenter/handler.js'

function updateCenterText(){
    incrementCounter()

    const userText = document.querySelector('#userText')
    let text = userText.value
    if(!text) text = getDefaultText()
    const textToShow = document.querySelector('#textToShow')
    textToShow.textContent = text
}

export { updateCenterText }