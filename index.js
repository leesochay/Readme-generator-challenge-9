function init () {

  // TODO: Include packages needed for this application
  const inquirer = require('inquirer');
  const fs = require('fs');
  
  generateMarkdown = ({ title, description, installation, usage, contributing, tests}) =>
  `# ${title}
  
  ## Table of Contents (Optional)
          -Description
          -Installation
          -Usage
          -Contributing
          -Tests
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
      
  ## Usage
  ${usage}
      
  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}`;
  
  inquirer
  .prompt([
      {
          type: 'input',
          name: 'title',
          message: 'what is your title',
        },
        {
          type: 'input',
          name: 'description',
          message: 'what is a good description',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'What is required to install your project?',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Provide instructions to use your project.',
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Provide attribution for collaborators, third party assets, tutorials, etc.',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Include any tests for your application and how to run them.',
        },
      ])
  
      .then((answers) => {
          const readmePageContent = generateMarkdown(answers);
      
          fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
          );
        });
  
      }
  
      init();