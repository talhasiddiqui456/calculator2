import inquirer from 'inquirer';

// Calculator logic
const performOperation = (num1: number, num2: number, operator: string): number | null => {
    switch (operator) {
        case 'Addition':
            return num1 + num2;
        case 'Subtraction':
            return num1 - num2;
        case 'Multiplication':
            return num1 * num2;
        case 'Division':
            return num2 !== 0 ? num1 / num2 : null;
        default:
            return null;
    }
};

// Questions for the user
const questions = [
    {
        type: 'input',
        name: 'num1',
        message: 'Enter the first number:',
        validate: (value: string) => !isNaN(Number(value)) || 'Please enter a valid number',
        filter: (value: string) => Number(value),
    },
    {
        type: 'input',
        name: 'num2',
        message: 'Enter the second number:',
        validate: (value: string) => !isNaN(Number(value)) || 'Please enter a valid number',
        filter: (value: string) => Number(value),
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Choose an operation:',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
];

// Main function
const runCalculator = async () => {
    const answers = await inquirer.prompt(questions);
    const { num1, num2, operator } = answers;

    const result = performOperation(num1, num2, operator);
    if (result !== null) {
        console.log(`The result of ${operator} is: ${result}`);
    } else {
        console.log('Error: Division by zero is not allowed.');
    }
};

runCalculator();
