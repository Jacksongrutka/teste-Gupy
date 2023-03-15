let menorValor = []
let maiorValor = []
let mediaArray = []
let media = 0
let diasQueEstaoNaMedia = 0

async function criarFaturamento(){
    const url = "./faturamento.json"
    const response = await fetch(url)
    return await response.json()
}

async function main (){
    const faturamento = await criarFaturamento()
    const faturamentoArray = Object.entries(faturamento)
        .map(([dia, faturamento]) => ({ dia, faturamento }))

        menorValor = faturamentoArray[0]
        maiorValor = faturamentoArray[0]

    faturamentoArray.forEach(element => {
        if(element.faturamento == 0){
            return
        }else if(element.faturamento < menorValor.faturamento){
            menorValor = element
        }else if(element.faturamento > maiorValor.faturamento){
            maiorValor = element
        }
        mediaArray.push(element.faturamento)
    })
    mediaArray.forEach(element => {
        media = media + element
    })
    media = media / mediaArray.length
    media = media.toFixed(2)
    mediaArray.forEach(element => {
        if(element > media){
            diasQueEstaoNaMedia++
        }
    })
    console.log("o menor valor é ", menorValor.faturamento,", o maior valor é " ,maiorValor.faturamento,", e a quantidade de dias que ficaram acima da media foram ", diasQueEstaoNaMedia," dias!");

}
main()

