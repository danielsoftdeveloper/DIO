const dino = document.querySelector('.dino');

function handleKeyUp(event){
    if(event.keyCode === 32){
        console.log("presionou spaço");
    }
}

document.addEventListener('keyup', handleKeyUp);