
// function renderLicenseBadge(license) {
//   if (license !== 'none'){
//     return `
//     GitHubl`
//   }
// }



function generateMarkdown(data) {
  return `

  # ${data.Title}

  ## Table of Contents
 
 #projectReadme ${data.NAME}
//  https://github.com/${data.Username}/${data.Title}

#projectGithub
 ${data.github}
 # Description
 ${data.Description}
 #Table of Contents
 *[Installation](#installation)
 ${data.installation}
 *[Usage](#usage)
 ${data.Usage}
 *[License](#license)
 ${data.license}
 *[Contributing](#contributing)
 ${data.Contributing}
 *[Tests](#tests)
 ${data.tests}
 *[Questions](#questions)
 ${data.questions}

 #Installation
 The folling necessary dependencines must be installed to run the application

 #Usage
 In order to use this app, ${data.Usage}

 #License
 This project is licensed under the ${data.icense} license.

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

 #Contributors: 
 Contributors: ${data. Contributing}

 #Tests

 The folling is needed to run the test: ${data.Tests}

 #Questions
 If you have any questions about the repo, open an issue or contact ${data.Usage}
`
};


module.exports = generateMarkdown;
