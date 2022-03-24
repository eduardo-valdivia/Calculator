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
        if(number == '.' && this.currentOperand.includes('.')) return; 
        //if number is a period and period already exists it will stop the function from executing
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOp (operation) { //will be the choosen Operation by the user
        if(this.currentOperand === '') return; //if current is null then it won't let function run
        if(this.prevOperand !== '') { //if its not an empty string compute what has been inputted already
            this.compute();
        }
        this.operation = operation;
        this.prevOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() { //Will compute expression enter by user
        let calculation;
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                calculation = prev + current;
                break;
            case '-':
                calculation = prev - current;
                break;
            case '*':
                calculation = prev * current;
                break;
            case '÷':
                calculation = prev / current;
                break; 
            default:
                return;       
        }
        this.currentOperand = calculation;
        this.operation = undefined;
        this.prevOperand = '';
    }

    updateDisplay() { //Will update display, whether number, operation was entered or was cleared
        this.currentOpTextElement.innerText = this.currentOperand;
        this.prevOpTextElement.innerText = this.prevOperand;
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

opBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOp(button.innerText);
        calculator.updateDisplay();
    });
});

equalsBtn.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});