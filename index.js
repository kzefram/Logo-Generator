const fs = require('fs');
const inquirer = require('inquirer');
const Logogenerator = require('./Lib/Logogenerator.js');
const path = require('path');
const {circle, triangle, square} = require('./Lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'file-name',
        question0: 'Enter the name of the logo file: '
    },
    {
        type: 'input',
        name: 'text',
        question1: 'What text would you like? Enter up to three characters. '
    },
    {
        type: 'input',
        name: 'text-colour',
        question2: 'Enter the text colour keyword, hexadecimal#: '
    },
    {
        type: 'list',
        name: 'shapes',
        question3: 'What shape would you like? ',
        shapes: [triangle, circle, square]
    },
    {
        type: 'input',
        name: 'shape-colour',
        question4: 'Enter the shape colour keyword, hexadecimal#:  '
    }
];

function writeToFile(fileName, data) {
    // Use path.join() method to join the segments of a file path
    const filePath = path.join(process.cwd(), fileName);
  
    // Use fs.writeFile() method to write data to the file
    fs.writeFile(filePath, data, (err) =>
      err ? console.log(err) : console.log("File created!")
    );
  }

// writing to the md file
async function init() {
    const prompt = inquirer.createPromptModule();
    const responses = await prompt(questions.question0, questions.question1, questions.question2, questions.question3, questions.question4, questions.questions);
    console.log("Passing your information to create README file.");
    const logo = generatelogo(responses)
    writeToFile("./examples/${file-name}", logo);
  }

// Function call to initialize app
init();