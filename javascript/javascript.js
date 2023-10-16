const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const resultado = document.getElementsByClassName('resultado')

const jump = () => {
    mario.classList.add('jump')

    setTimeout( () => {
        mario.classList.remove('jump')
    }, 500)
}

const loop = setInterval( () => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    let score = 0

    if (pipePosition <= 200 && marioPosition < 225 && pipePosition > 0) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './imagens/game-over.png'
        mario.style.width = '99px'
        mario.style.marginLeft = '195px'

        clearInterval(loop)
    } 

}, 10)

document.addEventListener('keydown', jump)

