const fs = require('fs');
const inquirer = require('inquirer');
const Logogenerator = require('./Lib/Logogenerator.js');
const path = require('path');

const questions = [
    {
        type: 'input',
        name: 'text',
        question1: 'What text would you like? Enter up to three characters.'
    },
    {
        type: 'input',
        name: 'text-colour',
        question2: 'Enter the colour keyword, hexadecimal#, RGBA code: '
    },
    {
        type: 'choice',
        name: 'shapes',
        question3: 'What shape would you like?'
    }
]