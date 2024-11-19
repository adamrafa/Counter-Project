let counter = 0
const counterDisplay = document.getElementById('counter')
const incrementBtn = document.getElementById('increment-button')
const decrementBtn = document.getElementById('decrement-button')
const resetBtn = document.getElementById('reset-button')

function updateCounter(){
   counterDisplay.textContent = counter 
}
function increment(){
    counter++;
    updateCounter();
}
function decrement(){
    if( counter > 0){
        counter--
    }
    updateCounter();
}
function reset (){
    counter = 0;
    updateCounter();
}


incrementBtn.addEventListener('click' , increment)
decrementBtn.addEventListener('click' , decrement)
resetBtn.addEventListener('click' , reset)