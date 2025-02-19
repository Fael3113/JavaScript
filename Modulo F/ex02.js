let valores = [8, 1, 6, 4, 5, 9]

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

for(let pos = 0; pos < valores.length; pos++){
    console.log(`A ${pos+1}ª posição tem o valor ${valores[pos]}`)
    //pos+1 é meramente ilustrativa para na saída ser mais agradável de se ver (sem começar com 0, como o padrão da linguagem)
    //Mais fácil de manipular
}

for(let pos in valores){
    console.log(`A ${pos}ª posição tem o valor ${valores[pos]}`)
    //Mais práticao, porém com modificações limitadas, para fazer algo como o exemplo acima, seria preciso utilizar o metodo Number()
}