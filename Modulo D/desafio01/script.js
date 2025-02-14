var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

var escrito = window.document.querySelector('div#msg')
escrito.innerHTML = `Agora são ${hora}:${minuto} horas.`

var img = window.document.querySelector('img#img')
if (hora < 6){
    img.src = 'imagem/pexels-helen-alp-46790226-14604533.jpg'
    document.body.style.background = '#3F84D5'
} else if (hora < 12){
    img.src = 'imagem/pexels-dorothycastillo-2270328.jpg'
    document.body.style.background = '#D1C192'
} else if (hora < 18){
    img.src = 'imagem/pexels-nihat-12231-69224.jpg'
    document.body.style.background = '#B9846F'
} else {
    img.src = 'imagem/pexels-pixabay-414144.jpg'
    document.body.style.background = '#515154'
}