const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        console.log("presionou spaço");
        jump();
    }
}

function jump() {
    let position = 0;

    let upInterval = setInterval(() => {
        if (position >= 180) {
            //para subida
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);

                } else {
                    // controle velocidade descida    
                    position -= 5;
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

document.addEventListener('keyup', handleKeyUp);