const fs = require('fs');
const inquirer = require('inquirer');
const {generatelogo} = require('./Lib/shapes.js'); 
const path = require('path');
const { Shapes, Circle, Square, Triangle } = require('./Lib/shapes.js');


const questions = [
    {
        type: 'input',
        name: 'file-name',
        message: 'Enter the name of the logo file: '
    },
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like? Enter up to three characters. '
    },
    {
        type: 'input',
        name: 'text-colour',
        message: 'Enter the text colour keyword, hexadecimal#: '
    },
    {
        type: 'list',
        name: 'shapes',
        message: 'What shape would you like? ',
        choices: ['triangle', 'circle', 'square']
    },
    {
        type: 'input',
        name: 'shape-colour',
        message: 'Enter the shape colour keyword, hexadecimal#:  '
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
    const responses = await inquirer.prompt(questions);
    console.log("Passing your information to create you logo...");
    const logo = generatelogo(responses); 
    writeToFile(`./examples/${responses['file-name']}`, logo);
}

// Function call to initialize app
init();
