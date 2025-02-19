function parimpar(n){
    if (n%2 == 0){
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

console.log('Paridade: '+parimpar(3))

function soma(n1, n2){
    return n1 + n2
}

console.log('Soma: '+soma(4,4))

let valor = function(x){
    return x*2
}

console.log('Multiplicação: '+valor(5))

function fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}

console.log('Fatorial: '+fatorial(5))

function fatorialRec(n) {
    if (n < 0) {
        return "Número inválido"
    } else {
        return n <= 1 ? 1 : n * fatorialRec(n - 1)
    }
}
console.log('Fatorial (recursivo): '+fatorialRec(5))

