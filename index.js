// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ['What is your project title?', 'What was your motivation?', 'What steps are required to install your project?'];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function generateReadMe(data) {
    return `# ${data.title}
    ## Description
    ${data.motivation}
    ## Table of Contents (Optional)
    ${data.installation}
    ## Usage
    ## Credits
    ## License
    ## Badges
    ## Features
    ## How to contribute
    ## Tests
 `}
inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'motivation',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
])
  .then((answers) => {
    const readmePageContent = generateReadMe(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme.md!')
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
