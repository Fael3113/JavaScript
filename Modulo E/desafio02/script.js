function tabuada(){
    let txnumero = document.getElementById('numero')
    let n = Number(txnumero.value)
    let n2 = 1

    let res = document.getElementById('msg')

    if (n == 0){
        res.innerHTML = `Não há como fazer tabuada de zero!`
        return
    } 

    res.innerHTML = `Resultado da tabuada é: <br>`

    while (n2 <= 10){
        let resultado = n * n2 
        res.innerHTML += `${n} x ${n2} = ${resultado} <br>`
        n2 ++
    }
}    
function limpar(){
    let res = document.getElementById('msg')

    res.innerHTML = `Mesa limpa`

    setTimeout(() => {
        res.innerHTML = `Preparando tabuada...`
    }, 2000)
}