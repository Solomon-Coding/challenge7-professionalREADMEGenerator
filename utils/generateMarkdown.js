// Creates a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
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

// Creates a function that returns the license link
// If there is no license, returns an empty string
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

// Creates a function that returns the license section of README
// If there is no license, returns an empty string
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

// Creates a function to generate markdown for README
function generateMarkdown(data) {
 let badge = renderLicenseBadge(data.license);
 let link = renderLicenseLink(data.license);
 let section = renderLicenseSection(data.license);
  return `
  # ${data.title}

  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  [${link}](${link})

  ${section}

  ## Contributing

  ${data.contributing}

  ## Test

  ${data.test}

  ## Questions

  GitHub: https://github.com/${data.username}

  For questions, please feel free to reach out via email
  at: [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
