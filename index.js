// TODO: Include packages needed for this application
//allows index js to access fs functions
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

//const inquirer will pull inquirer from node modules will help with questions as well
//generate Markdown will link to markdown file
const generateMarkdown = require('./utils/generateMarkdown');
c

// const { writeFile, copyFile } = require('utils\Readme-page.js');
// TODO: Create an array of questions for user input

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
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
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'link',
      message: 'What is your email address?',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = () => {
    console.log(`
  =================
  Add a New ReadMe
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the title of your ReadMe?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a name!');
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
        message: 'Enter the GitHub link to your ReadMe.',
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
        message: 'Would you like to enter another Readme?',
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
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, function(err) {
  console.log(fileName)
  console.log(data)
  if (err) {
    return console.log(err)
  } else {
    console.log("Awesome! You did it!")
  }
})
}

//fs will create file name index.html the data being used to the markdown template
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("Readme.Md", generateMarkdown(data));
    console.log(data)
  })
}
// TODO: Create a function to initialize app
init();