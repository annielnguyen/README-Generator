// // TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

// // TODO: Create an array of questions for user input

const generateMarkdown = require("./utils/generateMarkdown.js");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "Give a description of your project",
  },
  {
    type: "input",
    name: "TableContents",
    message: "Table of Contents",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "Give instructions on what needs to be installed in order to run this app.",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is this app used?",
  },
  {
    type: "list",
    name: "License",
    message: "What license is being used?",
    choices: ["MIT", "ISC", "GNU", "Apache_2.0"],
    default: ["MIT"],
  },
  {
    type: "input",
    name: "Contribution",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "Tests",
    message:
      "What are the commands needed in order to run this app? Give instructions.",
  },
  {
    type: "list",
    name: "Questions",
    message: "What is the best way to reach you for questions?",
    choices: ["email", "phone"],
    default: ["email"],
  },
  {
    type: "input",
    name: "Username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
];
// // TODO: Create a function to write README file
function writeToFile(readme, data) {
  fs.writeFile("README.md", data, (err) => {
    //   err ? console.log(err) : console.log('Success!')
    // }
    console.log("README.md");
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("Your README file has been created!");
    }
  });
}

//function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile("README.md", generateMarkdown(response));
  });
}
// Function call to initialize app
init();
