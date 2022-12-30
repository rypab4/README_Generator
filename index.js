// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?',
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of the project',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0','BSD-3','none'],
        
    },
    {
        type: 'text',
        name: 'dependencies',
        message: 'What command should be run to install dependencies',
        default: 'npm i',
    },
    {
        type: 'text',
        name: 'dependencies',
        message: 'What command should be run to install dependencies',
        default: 'npm i',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
