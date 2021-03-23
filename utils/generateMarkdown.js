

function generateMarkdown(data) {
  return `

 #${data.Title}

 # Description
 ${data.Description}
 
 #Table of Contents
 *[Installation]
 ${data.installation}
 *[Usage]
 ${data.Usage}
 *[License]
 *Github
 ${data.github}
 ${data.license}
 *[Contributing]
 ${data.Contributing}
 *[Tests]
 ${data.tests}
 
 #Installation
 The following necessary dependencines must be installed to run the application ${data.installation}

 #Usage
 In order to use this app, ${data.Usage}

 #License
 This project is licensed under the ${data.license} license.


 #Contributors: 
 Contributors: ${data. Contributing}

 #Tests
 The following is needed to run the test: ${data.tests}

 #Questions
 If you have any questions about the repo, open an issue or contact ${data.email}
`
};


module.exports = generateMarkdown;
