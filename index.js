const inquirer = require('inquirer');
const { createSVG } = require('./lib/shape');

async function generateLogo() {
    const userInput = await inquirer.prompt([
      {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3,
      },
      {
        name: 'textColor',
        message: 'Enter text color:',
      },
      {
        name: 'shape',
        type: 'list',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter shape color:',
      },
    ]);
  
    createSVG(userInput);
  
    console.log('Generated logo.svg');
  }
  
  generateLogo();