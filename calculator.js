//Check out calculator_hints.js for hints if you're stuck

let result = document.getElementById('result-screen');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){  //switch selecting from the cases when certain buttons are clicked to perform outcome
                                
            case 'C': //clearing the numbers or arithmetic done
                result.innerText = '';
                break;
            case '=': //evaluate expression
                try{
                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = "Error"
                }
                break;
            case '←': // deleting number or expression
                if (result.innerText){
                   result.innerText = result.innerText.slice(0, -1);
                }
                break;
                
            default:
                //need to add 0 printed frist
                
                result.innerText += e.target.innerText; //display what was clicked
        }
    });
});
