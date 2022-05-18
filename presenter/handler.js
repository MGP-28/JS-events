import { incrementCounterStore, getDefaultTextStore, getSquareLetterStore, getSquareColorStore, getColorByContentStore } from '../store/store.js'
import { updateEventCounter } from '../components/events/updateEventCounter.js'

function incrementCounter(){
    const eventCounter = incrementCounterStore()
    updateEventCounter(eventCounter)
}

function getDefaultText(){
    return getDefaultTextStore()
}

function getColorByContent(letter){
    return getColorByContentStore(letter)
}

function getSquareColor(index){
    return getSquareColorStore(index)
}

function getSquareLetter(index){
    return getSquareLetterStore(index)
}

export { incrementCounter, getDefaultText, getColorByContent, getSquareColor, getSquareLetter }