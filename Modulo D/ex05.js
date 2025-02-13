//Por array:
console.log('Dias da semana do calendário gregoriano:')
var agora = new Date()
var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
var diaSem = diasDaSemana[agora.getDay()]
console.log(`O dia de hoje é ${diaSem}`)
//Por switch-case:
var diaSemanaNumero = agora.getDay()
var diaSemana

switch (diaSemanaNumero) {
    case 0:
        diaSemana = "Domingo"
        break
    case 1:
        diaSemana = "Segunda-feira"
        break
    case 2:
        diaSemana = "Terça-feira"
        break
    case 3:
        diaSemana = "Quarta-feira"
        break
    case 4:
        diaSemana = "Quinta-feira"
        break
    case 5:
        diaSemana = "Sexta-feira"
        break
    case 6:
        diaSemana = "Sábado"
        break
    default:
        diaSemana = "Como você encontrou esse dia de semana?"
        break
}

console.log(`Hoje é ${diaSemana}`)