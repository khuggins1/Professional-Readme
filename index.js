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
      name: "link",
      message: "What is your email address?",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email.');
          return false;
        }
      }
    }
  ]
const promptReadme = readmeData => {
    console.log(`
  =================
  Add a New ReadMe
  =================
  `);
  if (!readmeData.readme) {
    readmeData.readme = [];
  };
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
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
        name: 'link',
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
        name: 'confirmAddReadMe',
        message: 'Would you like to enter another Readme?',
        // consider when method here when functiion allows conditional code based on the answers user supplied
        default: false,
        validate: readme => {
          if (readme) {
            return true;
          } else {
            console.log('Please enter yes or no!')
            return false;
          }
        }}
      
      .then(readmeData => {
        readmeData.readme.push(readmeData);
        if (readmeData.confirmAddReadme) {
          return promptReadme(readmeData);
        } else {
          return readmeData;
        }
        
      }),
  ])
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