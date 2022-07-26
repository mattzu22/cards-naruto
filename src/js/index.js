const cards = document.getElementsByClassName('card') 
let cardAberto = document.querySelector('.ativo')
let contador = 0
const setaAvancar = document.getElementById('avancar')
const setaVoltar = document.getElementById('voltar')
  

setaAvancar.addEventListener('click', () => {   
    contador++
   
    mostraOuEsconderSlider()
    mostrarOuDesativarSetas()
})

setaVoltar.addEventListener('click', () => {
    contador--
   
    mostraOuEsconderSlider()
    mostrarOuDesativarSetas()
})


function mostraOuEsconderSlider() {
    const cardAtivo = cards[contador]

    cardAberto.classList.remove('ativo')
    cardAberto = cardAtivo

    cardAtivo.classList.add('ativo')
}

function mostrarOuDesativarSetas(){
    if(contador <= 0){
        setaVoltar.classList.add('desabilitar-seta')
    }else{
        setaVoltar.classList.remove('desabilitar-seta')
    }
  
    if(contador >= cards.length -1){
        setaAvancar.classList.add('desabilitar-seta')
    }else{
        setaAvancar.classList.remove('desabilitar-seta')
    }
}