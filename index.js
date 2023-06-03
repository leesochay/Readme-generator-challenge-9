function init() {



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = ['What is your project title?',
                   'Provide a short description of your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
                   'What is required to install your project?',
                   'Provide instructions to use your project.',
                   'Provide attribution for collaborators, third party assets, tutorials, etc.',
                   'Include any tests for your application and how to run them.'];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

function generateMarkdown(data) {
    return `# ${data.title}
    
    ## Table of Contents (Optional)
        -Description
        -Installation
        -Usage
        -Contributing
        -Tests

    ## Description
    ${data.description}
    
    ## Installation
    ${data.installation}
    
    ## Usage
    ${data.usage}
    
    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}
   
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
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'input',
        name: 'contributing',
        message: questions[4],
      },
      {
        type: 'input',
        name: 'tests',
        message: questions[5],
      },

])
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);

    fs.writeFile('readme.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created Readme.md!')
    );
  });

// TODO: Create a function to initialize app
}

// Function call to initialize app
init();
