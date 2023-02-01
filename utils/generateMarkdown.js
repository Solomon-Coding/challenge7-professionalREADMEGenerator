// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  switch(license) {
    case 'None':
      return '';
    case 'MIT License':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache License 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'BSD 2-Clause License':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'None':
      return '';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'MIT License':
      return'https://opensource.org/licenses/MIT';
    case 'BSD 2-Clause License':
      return 'https://opensource.org/licenses/BSD-2-Clause';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license) {
    case 'None':
      return '';
    case 'MIT License':
      return 'MIT License';
    case 'Apache License 2.0':
      return 'Apache License 2.0';
    case 'BSD 2-Clause License':
      return 'BSD 2-Clause License';
  }
}

// console.log(data)
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  console.log(data.link)
 data.license.badge = renderLicenseBadge(data.license);
 data.license.link = renderLicenseLink(data.license);
 data.license.section = renderLicenseSection(data.license);
 console.log(data.license.badge)
 console.log(data.license.link)
 console.log(data.license.section)
  return `# ${data.title}
  ## Description
  # ${data.description}
  ## Table of Contents
  # ${data.contents}
  ## Installation
  # ${data.installation}
  ## Usage
  # ${data.usage}
  ## License
  # ${data.license.badge}
  # [${data.license.link}](${data.license.link})
  # ${data.license.section}
  ## Contributing
  # ${data.contributing}
  ## Tests
  # ${data.test}
  ## Questions
  # ${data.questions}
`;
}

module.exports = generateMarkdown;

// let data = 