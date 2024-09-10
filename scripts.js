// Step 1: Define the variable
let variable = document.getElementById('input').value;
let output = document.getElementById('output');


document.getElementById('input').onkeyup = function(e) {
    let variable = document.getElementById('input').value;
    let numbers = variable.split(',').map(num => parseInt(num.trim(), 10) / 100 * 4);
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    let average = sum / numbers.length;
    if(!average) {
        average = "";
    }
    output.innerText = average.toFixed(2);
}
