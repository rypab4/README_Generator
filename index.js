// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Please write a short description of the project.',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache_2.0', 'GPLv3','BSD_3','none'],
        
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to the repo?',

    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) =>{
        console.log('Generating README....');
        writeToFile('./samples/README.md', generateMarkdown({ ...inquirerResponses}));
    })
}

// Function call to initialize app
init();
