function updateEventCounter(counter){
    const counterElement = document.querySelector('#eventCounter')
    counterElement.textContent = counter
    if(counter == 10) {
        /*const addNewSquareEvent = new Event('addNewSquare')
        document.dispatchEvent(addNewSquareEvent)*/
    }
}

export { updateEventCounter }