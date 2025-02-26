
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.innerText;

        if (buttonText === 'C') {
            
            currentInput = '';
            display.value = '';
        } else if (buttonText === '=') {
          
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                display.value = 'Error';
                currentInput = '';
            }
        } else {
           
            display.value = currentInput;
        }
    });
});
