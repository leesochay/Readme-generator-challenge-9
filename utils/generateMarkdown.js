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
  
    function renderLicenseLink (license) {
      if (license === 'GNU General Public License v3.0') {
          data.url = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. Please refer to [License: GPL v3](https://choosealicense.com/licenses/gpl-3.0/) for more information.';
      } else if (license === 'Mozilla Public License 2.0') {
        data.url = 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work. Please refer to [License: MPL 2.0](https://choosealicense.com/licenses/mpl-2.0/) for more information.';
      } else if (license === 'Apache License 2.0') {
        data.url = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: Apache](https://choosealicense.com/licenses/apache-2.0/) for more information.';
      } else if (license === 'MIT License') {
        data.url = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: MIT](https://choosealicense.com/licenses/mit/) for more information.';
      } else if (license === 'Boost Software License 1.0') {
        data.url = 'A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: Boost](https://choosealicense.com/licenses/bsl-1.0/) for more information.';
      } else if (license === 'The Unlicense') {
        data.url = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code. Please refer to [License: Unlicense](https://choosealicense.com/licenses/unlicense/) for more information.';
      } else {
         data.url = '';
     }
     return data.url;
     }
     renderLicenseLink(data.license[0]);

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
${data.url}

## Questions
My GitHub username is ${data.github} and you can link to my profile at https://github.com/${data.github}.  
For any questions, please feel free to email me at ${data.email}`;
}

module.exports = generateMarkdown;
