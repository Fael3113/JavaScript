function verificar() {   
    var data = new Date()
    var ano = data.getFullYear()

    var txano = document.querySelector('input#ano')
    var fano = Number(txano.value)
    var txsex = document.getElementsByName('radsex')
    var res = document.querySelector('div#res')

    var img = document.querySelector('img#imagem')

    //Verificar se o ano é valido
    if (!fano || fano > ano){
        window.alert('[ERRO] Ocorreu um erro, verifique os dados novamente!')
        return
    } 

    var idade = ano - fano
    var genero = ''

    if (txsex[0].checked){
        genero = 'Homem'
    } else if (txsex[1].checked) {
        genero = 'Mulher'
    } else {
        genero = 'Não informado'
    }

    if (idade < 18) {
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        img.src = 'imagem/pexels-vika-glitter-392079-1620760.jpg'
    } else if (idade > 18 && idade < 50) {
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        img.src = 'imagem/pexels-j-carter-53083-254069.jpg'
    } else if (idade > 50 && idade < 150){
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
        img.src = 'imagem/pexels-mikhail-nilov-6972758.jpg'
    } else if (idade > 150) {
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`;
        res.innerHTML += `Encontramos Matusalém! 🧓`;
        img.src = 'imagem/images.jpeg'
    } 
}    