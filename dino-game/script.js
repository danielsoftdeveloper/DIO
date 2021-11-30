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
            //stop jumping
            clearInterval(upInterval);

            //going down
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;

                } else {
                    // landing   
                    position -= 10 ;
                    dino.style.bottom = position + 'px';
                }
            }, 20);

        } else {
            //jump up
            position += 50;
            dino.style.bottom = position + 'px';
        }

    }, 20);

}

function createCharacter() {
    const enimies = document.createElement('div');
    let characterPosition = 1000;
    let randomTime = Math.random() * 6000;
    let persona = Math.floor(Math.random() * 10);
    //console.log(randomTime); 

    if(persona >= 0 && persona < 4){
        enimies.classList.add('cactus');
    } 
    if (persona >= 4 ) {
        enimies.classList.add('goomba');        
    }

    enimies.style.left = 1000 + 'px';
    background.appendChild(enimies);

    let leftInterval = setInterval(() => {

        if (characterPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(enimies);
        } else if(characterPosition > 0 && characterPosition < 60 && position < 60){
            // Game over se encostar no dino
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</<h1>';
        } else {
            characterPosition -= 7;
            enimies.style.left = characterPosition + 'px';

        }

    }, 20);

    setTimeout(createCharacter, randomTime);

}

createCharacter();
document.addEventListener('keyup', handleKeyUp);