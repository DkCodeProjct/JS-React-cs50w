// js program for counting, for mrbeast video
// host via github

let numCount = 0;

function increment() {
    numCount += 1;
    document.querySelector('h1').textContent = numCount;    
    if (numCount % 10 === 0) {
        alert(`count is now ${numCount}`);
    }   
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick = increment;
});
