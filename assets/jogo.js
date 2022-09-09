let largura = 0
let altura = 0
function tamanhoTela() {
    largura = window.innerWidth;
    altura = window.innerHeight;
    // console.log(largura, altura)
}
tamanhoTela()
function posAleatoria() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (document.getElementById('cor1').src = 'assets/images/coracao_cheio.png') {
            document.getElementById('cor1').src = 'assets/images/coracao_vazio.png'
        } else if (document.getElementById('cor2').src = 'assets/images/coracao_cheio.png') {
            document.getElementById('cor2').src = 'assets/images/coracao_vazio.png'
        } else if (document.getElementById('cor3').src = 'assets/images/coracao_cheio.png') {
            document.getElementById('cor3').src = 'assets/images/coracao_vazio.png'
        }
    }

    let posY = Math.floor(Math.random() * altura - 90)
    let posX = Math.floor(Math.random() * largura - 90)
    posY = posY < 0 ? 0 : posY
    posX = posX < 0 ? 0 : posX
    let mosquito = document.createElement('img')
    mosquito.src = 'assets/images/mosca.png'
    document.body.appendChild(mosquito)
    mosquito.className = tamanhoMosquito() + ' ' + ladoMosquito()
    mosquito.classList.add = 'ladoA'
    mosquito.style.top = posY + 'px'
    mosquito.style.left = posX + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
    }
}

function tamanhoMosquito() {
    let classe = Math.floor(Math.random() * 3)
    if (classe == 2) {
        return 'mosquito3'
    } else if (classe == 1) {
        return 'mosquito2'
    } else {
        return 'mosquito1'
    }

}
function ladoMosquito() {
    let classe = Math.floor(Math.random() * 2)
    if (classe == 1) {
        return 'ladoA'
    } else {
        return 'ladoB'
    }

}


setInterval(posAleatoria, 1500)