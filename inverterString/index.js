let input = prompt("digite uma palavra")
let palavraInvertida = ""

function inverterString(palavra){
    letras = palavra.split("")
    for (let index = letras.length -1; index >= 0 ; index--) {
        palavraInvertida += letras[index]
    }
}
inverterString(input)
alert("invertendo sua palavra fica "+ palavraInvertida + "!")