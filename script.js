// create a button
// write function that changes screen
// target the screen
let screen = document.querySelector('.screen');
let allButtonArray = document.querySelectorAll('li');

let currentText = '';

function addAllListeners(param){
    for(let i = 0; i < param.length; i++){
        param[i].addEventListener('click', change(1))
    } 
}

addAllListeners(allButtonArray);

function change(param){
    if ( param === undefined ){
        screen.innerHTML = 'Do Math';
    } else{
        currentText = currentText + param.target.innerHTML;
        screen.innerHTML = currentText;
    }
}


change(4);
change(5);
change('+');
change(3);
change(2);

console.log(currentText);