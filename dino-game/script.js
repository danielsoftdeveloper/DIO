const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isJumping = false;
let ponto = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jump();

        }
    }
}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {

        if (position >= 180) {
            //stop jumping
            clearInterval(upInterval);

            //going down
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;

                } else {
                    // landing   
                    position -= 10;
                    dino.style.bottom = position + 'px';
                }
            }, 20);

        } else {
            //jump up
            position += 150;
            dino.style.bottom = position + 'px';
        }

    }, 20);

}

function createCharacter() {
    const enimies = document.createElement('div');
    let characterPosition = 1000;
    let randomTime = Math.random() * 9000;
    let character = Math.floor(Math.random() * 6);

    document.querySelector('.badge').innerText = ponto;


    if (character == 1) {
        enimies.classList.add('cactus');

    }
    else if (character == 2) {
        enimies.classList.add('greenturtle');

    }
    else if (character == 3) {
        enimies.classList.add('goomba');

    }
    else if (character == 4) {
        enimies.classList.add('spiny');

    }
    else {
        enimies.classList.add('cloud');

    }

    enimies.style.left = 1000 + 'px';
    background.appendChild(enimies);

    let leftInterval = setInterval(() => {

        if (characterPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(enimies);

            if (enimies.classList.value !== 'cloud') {
                ponto++;
            }

        } else if (characterPosition > 0 && characterPosition < 60 && position < 60 && enimies.classList.value != 'cloud') {
            // Game over
            clearInterval(leftInterval);
            document.body.innerHTML = `<div><h1 class="game-over">Fim de Jogo</<h1>  <br />  <h2 class="game-over">Score: </<h2> ${ponto} </div>`;
            return;

        } else {
            characterPosition -= 7;
            enimies.style.left = characterPosition + 'px';

        }

    }, 20);

    setTimeout(createCharacter, randomTime);

}

createCharacter();
document.addEventListener('keyup', handleKeyUp);