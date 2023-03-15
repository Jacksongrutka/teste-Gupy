const estados = [
    { nome: 'sp', valor: 67836.43 },
    { nome: 'rj', valor: 36678.66 },
    { nome: 'mg', valor: 29229.88 },
    { nome: 'es', valor: 27165.48 },
    { nome: 'Outros', valor: 19849.53 }
  ];
let valorTotal = 0 
var total = 0
estados.forEach(element => {
    valorTotal = valorTotal + element.valor
});

estados.forEach(element => {
    var divisao = element.valor / valorTotal
    var multiplicacao = divisao * 100
    console.log("o rendimento de ", element.nome," em relaçao ao rendimento total de toda distribuidora representa ", multiplicacao,"% !")
});
