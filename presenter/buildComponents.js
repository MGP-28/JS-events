import { buildEventCounter } from '../components/eventCounter.js'
import { buildInputText } from '../components/inputText.js'
import { buildTextToShow } from '../components/textToShow.js'
import { buildSquareContainer } from '../components/squareContainer.js'

function buildUI(){
    const app = document.querySelector('#app')
    buildEventCounter(app)
    buildInputText(app)
    buildTextToShow(app)
    buildSquareContainer(app)
}

export { buildUI }