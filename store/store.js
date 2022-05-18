let eventCounter = 0

const textToShowDefault = 'Use events to change me'

let squares = ['A', 'B', 'C', 'D']
let colorsSquares = ['red', 'green', 'blue', 'yellow']

function incrementCounterStore(){
    eventCounter++
    return eventCounter
}

function getDefaultTextStore(){
    return textToShowDefault
}

function getSquareLetterStore(index){
    return squares[index]
}

function getSquareColorStore(index){
    return colorsSquares[index]
}

function getColorByContentStore(letter){
    const index = squares.indexOf(letter)
    return colorsSquares[index]
}

export { incrementCounterStore, getDefaultTextStore, getSquareLetterStore, getSquareColorStore, getColorByContentStore }