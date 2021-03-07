// TODO: Include packages needed for this application
//allows index js to access fs functions
const inquirer = require('inquirer');

const fs = require('fs');

//const inquirer will pull inquirer from node modules will help with questions as well


//generate Markdown will link to markdown file
const generateMarkdown = require('./utils/generateMarkdown');

const pageHTML = generateMarkdown(name, github);
// TODO: Create an array of questions for user input
const questions = [];

const questions = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your project?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the ReadMe (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a description!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to use?',
        choices: ['community', 'MIT', 'GNU'],
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please choose a license!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddReadMe',
        message: 'Would you like to enter another project?',
        //consider when method here when functiion allows conditional code based on the answers user supplied
        default: false,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter yes or no!');
            return false;
          }
        }
      }
    ]);
};

promptUser()
  .then(answers => console.log(answers))
  .then(questions)
  .then(projectAnswers => console.log(projectAnswers));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

//fs will create file name index.html the data being used to the markdown template
fs.writeFile('index.html', pageHTML, err => {
    if(err) throw err;
    console.log('Your ReadMe was succesfully created!');
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
