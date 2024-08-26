let array = []
let res = document.getElementById("res")
function gerar(max,min){
    let valor_aleatorio = 0
    for(let i=0;i<5;i++){
        valor_aleatorio = Math.floor(Math.random() * (10 - 0 + 1) ) + 0
        array.push(Number(valor_aleatorio))
    }
    console.table(array)
    res.innerHTML = `O array gerado é igual a: ${array}`
}
function media(){
    let soma = 0
    for(let i=0;i<array.length;i++){
        soma += array[i]
    }
    let media = soma / array.length
    console.log(soma)
    res.innerHTML += `<br>A soma é igual a: ${media}`
}