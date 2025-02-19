let numeros = []
let resultado = document.getElementById('msg')
let lista = document.getElementById('lista')

function adicionar(){
    let num = document.getElementById('numero').value
    let n = Number(num)

    if (n < 1 || n > 100){
        window.alert('Número inválido')
        return
    } 
    if (numeros.includes(n)){
        window.alert('Número já adicionado')
        return
    }

    numeros.push(n)
    
    let opcao = document.createElement('option')
    opcao.text = `Número adicionado: ${n}`
    lista.appendChild(opcao)

    document.getElementById("numero").value = ''
    document.getElementById("numero").focus()
}

function finalizar(){
    if (numeros.length === 0){
        window.alert('Adicione ao menos um número válido')
        return
    }
    let total = numeros.length
    let maior = Math.max(...numeros) 
    let menor = Math.min(...numeros)
    let soma = numeros.reduce((acc, num) => acc + num, 0)
    let media = soma / total
    
            resultado.innerHTML = 
            `<p>Total de números cadastrados foi: ${total}</p>
            <p>Maior número informado: ${maior}</p>
            <p>Menor número informado: ${menor}</p>
            <p>Somando todos os valores, temos ${soma}</p>
            <p>A média dos valores informados foi: ${media.toFixed(2)}</p>`
}

function limpar(){
    numeros = []
    resultado.innerHTML = ''
    lista.innerHTML = ''
}