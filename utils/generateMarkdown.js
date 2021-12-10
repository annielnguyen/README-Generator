// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license) {
//     return `![${License} License](https://img.shields.io/badge/license-${license
//       .split(" ")
//       .join("%20")}-yellow)`;
//   } else {
//     return "";
//   }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}
// if (license) {
//   return `![${License} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
// `;
// } else {
//   return '';
// };
// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
// function renderLicenseSection(license) {
// if (license) {
//   return `![${License} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)
// `;
// } else {
//   return '';
// };

// // TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `
  [![License: MIT](https://img.shields.io/badge/License-${data.License}-yellow.svg)](https://opensource.org/licenses/MIT)

# Project Name: ${data.Title}
https://github.com/${data.Username}/${data.Title}
## Description
${data.Description}
## Table of Contents
  
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Tests](#tests)
* [Questions](#questions)
  

## License
This project is licensed under the ${data.License} license. 
  
## Installation
  Please install these dependencies to run this application: ${data.Installation}
  
## Usage
  To use this app, ${data.Usage}

## Contribution
  ​Contributors: ${data.contributing}

## Tests
  The following is needed to run the test: ${data.Tests}

## Questions
  My GitHub profile link is: https://github.com/${data.Username}.
  If you have any questions regarding this app, please contact directly at: ${data.Email}.
  `;
}

module.exports = generateMarkdown;
