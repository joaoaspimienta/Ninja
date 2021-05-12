const texto = document.querySelector('.textoNinja')
const ninja = document.querySelector('.ninja')

ninja.addEventListener('click', ninjaSome)

function ninjaSome() {
    this.classList.add('sumido');
    texto.innerText = 'Husheushue, vacilão';
}