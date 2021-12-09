// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
https://github.com/${data.Username}/${data.title}
# Description
${data.Description}
# Table of Contents 
* [Installation](Installation)
* [Usage](#Usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#Tests)
* [Questions](#Questions)
# Installation
Please install these dependencies to run this application: ${data.Installation}
# Usage
To use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing
​Contributors: ${data.Contributing}
# Tests
The following is needed to run the test: ${data.Tests}
# Questions
If you have any questions regarding this app, please contact me at: ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;