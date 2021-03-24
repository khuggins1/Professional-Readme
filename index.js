// TODO: Include packages needed for this application
//allows index js to access fs functions
const inquirer = require('inquirer');
const fs = require('fs');


//const inquirer will pull inquirer from node modules will help with questions as well
//generate Markdown will link to markdown file
const generateMarkdown = require('./utils/generateMarkdown');


// const { writeFile, copyFile } = require('utils\Readme-page.js');
// TODO: Create an array of questions for user input

var questions =
  [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
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
      type: "input",
      name: "github",
      message: "Enter your GitHub Username (Required)",
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
      type: "input",
      name: "email",
      message: "What is your email address? If someone has questions?",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Title',
      message: 'What is the title of your ReadMe?',
      validate: title => {
        if (title) {
          return true; 
        } else {
          console.log('Please enter a name!');
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How does someone test your Readme?',
      validate: tests => {
        if (tests) {
          return true; 
        } else {
          console.log('Enter something!');
          return false; 
        }
      }
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Provide a description of the ReadMe (Required)',
      validate: description => {
        if (description) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    }, 
    {
      type: 'input',
      name: 'Usage',
      message: 'How does someone use this Readme?',
      validate: Usage => {
        if (Usage) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    }, 
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use?',
      choices: [
        "community", 
        "MIT",
        "GNU"
      ]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What is needed to run ReadMe?',
      validate: installation => {
        if (installation) {
          return true;
        } else {
          console.log('What is needed dude?');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'gitlink',
      message: 'Enter the GitHub link to your ReadMe.',
      validate: githublink => {
        if (githublink) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'Contributing',
      message: 'Are there any contributers?',
      // consider when method here when functiion allows conditional code based on the answers user supplied
      default: false,
      validate: contributers => {
        if (contributers) {
          return true;
        } else {
          console.log('Please enter yes or no!')
          return false;
        }
      }},
  ]

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
});
}
  
// fs will create file name index.html the data being used to the markdown template
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile("readme.md", generateMarkdown(data));
    console.log(data)
  })
}
// TODO: Create a function to initialize app
init();
