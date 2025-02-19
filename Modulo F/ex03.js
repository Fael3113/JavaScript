let num = [10, 300, 40]
num.sort()
console.log(`Nosso vetor é: ${num}`)
//.sort() converte em string os valores e ordena em forma alfabetica em código ASCII, e não em forma crescente como o imaginado ao fazer numeros com apenas um algarismo
num.sort((a, b) => a - b)
//.sort((a, b) => b - a) para decrescente
console.log(`Nosso vetor é: ${num}`)
//Dessa forma temos nosso array ordenado corretamente 
//A função funciona basicamente com um if-else:
// Se a - b < 0 (negativo), significa que A deve vir antes de B
// Se a - b > 0 (positivo), significa que B deve vir antes de A
// Se a - b === 0, os valores são iguais e a posição não muda.
