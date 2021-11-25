const dino = document.querySelector('.dino');
let isJumping = false;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
       if(!isJumping){
        jump();
        
       }
    }
}

function jump() {
    let position = 0;
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