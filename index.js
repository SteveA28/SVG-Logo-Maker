const inquirer = require('inquirer');
const { createSVG } = require('./lib/shapes');

async function generateLogo() {
    const userInput = await inquirer.prompt([
      {
        name: 'text',
        message: 'Enter up to three characters:',
        validate: input => input.length <= 3,
      },
      {
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        name: 'shape',
        type: 'list',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);
  
    createSVG(userInput);
  
    console.log('Generated logo.svg');
  }
  
  generateLogo();