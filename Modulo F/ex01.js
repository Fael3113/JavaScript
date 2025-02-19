let num = [5, 8, 2, 9, 3]
num.push(6)
console.log(`Nosso vetor é: ${num}`)
console.log(`O primeiro valor é: ${num[0]}`)
console.log(`Nosso vetor tem ${num.length} elementos`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log(`Valor não encontrado`)
} else{
    console.log(`O valor da selecionado está na posição: ${pos}`)
}
