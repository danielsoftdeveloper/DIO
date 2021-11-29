const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let position = 0;
let isJumping = false;

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
            //para subida
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;

                } else {
                    // controle velocidade descida    
                    position -= 10 ;
                    dino.style.bottom = position + 'px';
                }
            }, 20);

        } else {
            //subindo
            position += 20;
            dino.style.bottom = position + 'px';
        }

    }, 20);

}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;
    console.log(randomTime); 

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {


        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            // Game over se encostar no dino
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</<h1>';
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';

        }

    }, 20);

    setTimeout(createCactus, randomTime);

}

createCactus();
document.addEventListener('keyup', handleKeyUp);