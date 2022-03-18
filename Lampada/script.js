onclick = function() {
    var lamp = document.getElementById('lamp');

    if (lamp.src.match('/Imagens/Acesa.jpg')) {
        lamp.src = '/Imagens/Apagada.jpg';
    } else {
        lamp.src = '/Imagens/Acesa.jpg'
    }
}