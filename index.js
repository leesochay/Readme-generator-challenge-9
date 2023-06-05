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
          type: 'checkbox',
          name: 'license',
          message: 'Please select an open source license, or "Other" if open source is not applicable.',
          choices: ['GNU General Public License v3.0', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'Other' ],
          },
        {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is youur email address to connect with users?',
        },
      ])
  
      .then((answers) => {
        console.log(answers)  
        const badge = 'badge';
        answers[badge] = '';
        const url = 'url';
        answers[url] = '';
        console.log(answers)
        const readmePageContent = generateMarkdown(answers);
          fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
          );
        });
  
      }
  
      init();