let largura = 0
let altura = 0
let dificuldade
let def = window.location.search
def = def.replace('?', '')
if (def === 'Noob') {
    dificuldade = 1500
} else if (def === 'Mediano') {
    dificuldade = 1000
} else if (def === 'Spartano') {
    dificuldade = 750
}
function tamanhoTela() {
    largura = window.innerWidth;
    altura = window.innerHeight;
}
let tempo = 49
tamanhoTela()
let intervalo = setInterval(function () {
    document.getElementById('time').innerHTML = `${tempo}`
    tempo -= 1
    if (tempo == -1) {
        window.location.href = 'vitoria.html'
    }
}, 1000)
let a
let b
let c
function posAleatoria() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        a = document.getElementById('cor1').src
        b = document.getElementById('cor2').src
        c = document.getElementById('cor3').src

        if (a == b && a == c) {
            document.getElementById('cor1').src = 'assets/images/coracao_vazio.png'
        } else if (b == c) {
            document.getElementById('cor2').src = 'assets/images/coracao_vazio.png'
        } else if (c != a) {
            document.getElementById('cor3').src = 'assets/images/coracao_vazio.png'
            window.location.href = 'game_over.html'

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
    mosquito.style.top = posY + 'px'
    mosquito.style.left = posX + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove()
        document.getElementById('tapa').play()
        document.getElementById('tapa').volume = 0.5

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
function reiniciar() {
    window.location.href = 'index.html'
}
window.addEventListener("mousemove", function () {
    this.document.getElementById('audo').play()
    this.document.getElementById('audo').volume = 0.1
})

let inicializador = setInterval(posAleatoria, dificuldade)
