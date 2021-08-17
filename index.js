const inquirer = require('inquirer');
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require("./utils/generateMarkdown");

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.log(err) : console.log('Success!'))
  }

function init() {
    inquirer    
        .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projName'
        },
        {
            type: 'input',
            message: 'Enter a description of your project:',
            name: 'projDesc'
        },
        {
            type: 'input',
            message: 'Enter Installation Instructions for your project:',
            name: 'projInstall'
        },
        {
            type: 'input',
            message: 'Enter Usage Instructions for your project:',
            name: 'projUsage'
        },
        {
            type: 'input',
            message: 'Enter Contribution Guidelines for your project:',
            name: 'projContribute'
        },
        {
            type: 'input',
            message: 'Enter any Test Instructions for your project:',
            name: 'projTest'
        },
        {
            type: 'list',
            message: 'Choose a License for your project',
            name: 'license',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'Boost Software License'] 
        },
        {
            type: 'input',
            message: 'Enter your GitHub User Name:',
            name: 'userName'
        },
        {
            type: 'input',
            message: 'Enter your Email Address:',
            name: 'email'
        }
    ])
    .then((data) => {
        console.log(data);
        console.log(generateMarkdown(data));
        writeToFile("./README.md", generateMarkdown(data));
    })
    .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else went wrong
        }
    })
}

init();
