class Calculator { //created class to take care of each instance of calculator
    constructor(prevOpTextElement, currentOpTextElement) {
        this.prevOpTextElement = prevOpTextElement;
        this.currentOpTextElement = currentOpTextElement;
        this.clear();
    }
    
    clear() { //will clear the calculator output
        this.currentOperand = '';
        this.prevOperand = '';
        this.operation = undefined;

    }

    delete() { // will delete numbers or operations insert by mistake

    }

    appendNum(number) { //Will append number to what has been put in
        this.currentOperand = number;

    }

    choosenOp (operation) { //will be the choosen Operation by the user

    }

    compute() { //Will compute expression enter by user

    }

    updateDisplay() { //Will update display, whether number, operation was entered or was cleared
        this.currentOpTextElement.innerText = this.currentOperand;
    }
}

const numBtns = document.querySelectorAll('[data-num]'); 
const opBtns = document.querySelectorAll('[data-operator]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const prevOpTextElement = document.querySelector('[data-operand-prev]');
const currentOpTextElement = document.querySelector('[data-operand-current]');


const calculator = new Calculator(prevOpTextElement, currentOpTextElement); //created object to use to point to functions within the class Calculator above

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
    });
});