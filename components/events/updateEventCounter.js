function updateEventCounter(){
    const counter = document.querySelector('#eventCounter')
    counter.textContent++
    if(counter.textContent == 10) {
        const addNewSquareEvent = new Event('addNewSquare')
        document.dispatchEvent(addNewSquareEvent)
    }
}

export { updateEventCounter }