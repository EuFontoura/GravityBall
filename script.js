const bola = document.getElementById('bola');
const gravidade = 0.5;
const coeficienteRebote = 0.7;
const fatorEscala = 0.2; 
const atrito = 0.99;
let velocidadeX = 0;
let velocidadeY = 0;
let posX = 100, posY = 100;
let arrastando = false;
let ultimoX, ultimoY, inicioX, inicioY;

bola.style.position = 'absolute';
bola.style.left = `${posX}px`;
bola.style.top = `${posY}px`;

function atualizar() {
    if (!arrastando) {
        velocidadeY += gravidade;
        posX += velocidadeX;
        posY += velocidadeY;

        velocidadeX *= atrito;

        if (posY > window.innerHeight - bola.clientHeight) {
            posY = window.innerHeight - bola.clientHeight;
            velocidadeY *= -coeficienteRebote;
        }

        if (posY < 0) {
            posY = 0;
            velocidadeY *= -coeficienteRebote;
        }

        if (posX > window.innerWidth - bola.clientWidth) {
            posX = window.innerWidth - bola.clientWidth;
            velocidadeX *= -coeficienteRebote;
        }

        if (posX < 0) {
            posX = 0;
            velocidadeX *= -coeficienteRebote;
        }

        bola.style.left = `${posX}px`;
        bola.style.top = `${posY}px`;

        // log depuração
        // console.log(`posX: ${posX}, posY: ${posY}, velocidadeX: ${velocidadeX}, velocidadeY: ${velocidadeY}`);
    }
    requestAnimationFrame(atualizar);
}

bola.addEventListener('mousedown', (e) => {
    arrastando = true;
    inicioX = e.clientX;
    inicioY = e.clientY;
    ultimoX = e.clientX;
    ultimoY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (arrastando) {
        const deltaX = e.clientX - ultimoX;
        const deltaY = e.clientY - ultimoY;

        posX += deltaX;
        posY += deltaY;

        bola.style.left = `${posX}px`;
        bola.style.top = `${posY}px`;

        ultimoX = e.clientX;
        ultimoY = e.clientY;
    }
});

document.addEventListener('mouseup', (e) => {
    if (arrastando) {
        arrastando = false;

        // O calculo de velocidade é feito através da posição inicial e final do mouse
        const velocidadeInicialX = (e.clientX - inicioX) * fatorEscala;
        const velocidadeInicialY = (e.clientY - inicioY) * fatorEscala;

        velocidadeX = velocidadeInicialX;
        velocidadeY = velocidadeInicialY;

        // log pra ver velocidade inicial
        // console.log(`velocidadeInicialX: ${velocidadeInicialX}, velocidadeInicialY: ${velocidadeInicialY}`);
    }
});

// mudar a cor da bola
const option1 = document.getElementById('img1');
const option2 = document.getElementById('img2');
const option3 = document.getElementById('img3');
option1.addEventListener('click', () => {
    bola.style.background = "url(imgs/panda.webp) center/cover";
});
option2.addEventListener('click', () => {
    bola.style.background = "url(imgs/marmota.webp) center/cover";
});
option3.addEventListener('click', () => {
    bola.style.background = "url(imgs/capibara.webp) center/cover";
});

atualizar();
