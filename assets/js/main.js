import { buildUI } from '../../presenter/buildComponents.js'

buildUI()

//dev tools

classesHTMLtoJsArray('')

function classesHTMLtoJsArray(string){
    const words = string.split(' ')
    let outputString = 'JS READY -> '
    words.forEach(word => {
        outputString += (`'${word}', `)
    });
    outputString = outputString.slice(0, -2)
    console.log(outputString)
}