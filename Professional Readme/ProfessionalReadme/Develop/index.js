// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
fs.writeFile('ReadMe.md', generateMarkdown, err => {
    if(err) throw err;
    console.log('Your ReadMe was succesfully created!');
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
