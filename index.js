function init () {

  const inquirer = require('inquirer');
  const fs = require('fs');
  const generateMarkdown = require('./utils/generateMarkdown.js');

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
        {
          type: 'input',
          name: 'license',
          message: 'What is the license for this applciation?',
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is the url for your github profile?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is youur email address to connect with users?',
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