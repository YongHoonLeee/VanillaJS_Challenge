var numberClicked = false;
function add (char) {
    if(numberClicked == false) {
        if(isNaN(char) == true) { 
           
        } else { 
            document.getElementById('result').value += char; 
        }
    } else {
        document.getElementById('result').value += char;
    }

    
    if(isNaN(char) == true) { 
        numberClicked = false; 
    } else {
        numberClicked = true;
    }
}
function calculate() {
    var display = document.getElementById('result');
    var result = eval(display.value); 
    document.getElementById('result').value = result;
}
function reset() {
    document.getElementById('result').value = "";
    document.getElementById('result').value = "";
}