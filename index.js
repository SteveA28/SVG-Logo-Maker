const inquirer = require('inquirer');
const fs = require('fs');
const { Circle } = require('./lib/shape');

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

  // Use the appropriate subclass based on the user's choice
  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle(userInput.shapeColor);
      break;
    // Add cases for 'triangle' and 'square' as needed

    default:
      throw new Error('Invalid shape choice');
  }

  // Call the render method to create SVG with the collected input
  const svgContent = shape.render();

  // Write SVG content to logo.svg
  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

// Run the application
generateLogo();
