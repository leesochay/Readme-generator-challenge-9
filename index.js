 // required packages and modules to generate the README.md document
 const inquirer = require('inquirer');
 const fs = require('fs');
 const generateMarkdown = require('./utils/generateMarkdown.js');

// npm inquirer package utilzing the command line interface for questions and answers in creating a README.md document 
// questions section

const questions = () => {
return inquirer.prompt([
     {
         type: 'input',
         name: 'title',
         message: 'what is the title of your project?',
       },
       {
         type: 'input',
         name: 'description',
         message: 'How would you describe your project (motivation, problem solved, learning outcomes)?',
       },
       {
         type: 'input',
         name: 'installation',
         message: 'What are the steps to install your project?',
       },
       {
         type: 'input',
         name: 'usage',
         message: 'How does one use your project?',
       },
       {
         type: 'input',
         name: 'contributing',
         message: 'Are there any collaborators, third party assets, tutorials, etc for your project (enter them here)?',
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
         message: 'What is your email address where users can connect with you?',
       },
     ])
};


// answers object generated that will used in the creation of the README.md document
function init () {
   questions()
     .then((answers) => {
       const readmePageContent = generateMarkdown(answers);
         fs.writeFile('README.md', readmePageContent, (err) =>
           err ? console.log(err) : console.log('Successfully created README.md!')
         );
       });
}
 
init();