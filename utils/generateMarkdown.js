// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  function renderLicenseBadge (license) {
    if (license === 'GNU General Public License v3.0') {
        data.badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'Mozilla Public License 2.0') {
      data.badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    } else if (license === 'Apache License 2.0') {
      data.badge = '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)';
    } else if (license === 'MIT License') {
      data.badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Boost Software License 1.0') {
      data.badge = '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    } else if (license === 'The Unlicense') {
      data.badge = '!![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    } else {
       data.badge = '';
   }
   return data.badge;
   }
    renderLicenseBadge(data.license[0]);
  

  return `# ${data.title}

 ${data.badge}

## Table of Contents (Optional)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

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

## License
${data.license}

## Questions
My GitHub username is ${data.github} and you can link to my profile at https://github.com/${data.github}.  
For any questions, please feel free to email me at ${data.email}`;
}

module.exports = generateMarkdown;
