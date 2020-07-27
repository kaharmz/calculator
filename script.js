// access html class using a query selector
const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const deletes = document.querySelector('.delete')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'


// Update Screen Function
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// Loop number element
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        //Call inputNumber 
        inputNumber(event.target.value)
            //Call updateScreen 
        updateScreen(currentNumber)
    })
})

//Input Number Function
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// Add click event every operator button
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// Input Operator function
const inputOperator = (operator) => {

    if (calculationOperator === '') {
        // Give value currentNumber to prevNumber
        prevNumber = currentNumber
    }

    // Give operator to calculationOperator as argument
    calculationOperator = operator
        // Empty currentNumber
    currentNumber = '0'
}

// Add click event to equalSign
equalSign.addEventListener("click", () => {
    //Call calculate function
    calculate()
        // Call updateScreen function
    updateScreen(currentNumber)
})

//Calculate function
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = (parseFloat(prevNumber) / parseFloat(currentNumber) * 100)
            break
        default:
            return
    }

    currentNumber = result
    calculationOperator = ''
}

// Add event click
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

// ClearAll function
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// Add event click
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// Input decimal fuction
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// Add eventclick
deletes.addEventListener('click', () => {
    updateScreen(currentNumber.slice(0, -1))
})
