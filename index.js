// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         message: 'README description:',
//         name: 'description',
//     },
//     {
//         type: 'input',
//         message: 'Table of Contents:',
//         name: 'contents',
//     },
//     {
//         type: 'input',
//         message: 'Installation:',
//         name: 'installation',
//     },
//     {
//         type: 'input',
//         message: 'Usage:',
//         name: 'usage',
//     },
//     {
//         type: 'list-input',
//         message: 'License:',
//         choices: licenseOptions,
//     },
//     {
//         type: 'input',
//         message: 'Contributing',
//         name: 'contributing',
//     },
//     {
//         type: 'input',
//         message: 'Test',
//         name: 'test',
//     },
//     {
//         type: 'input',
//         message: 'Questions',
//         name: 'questions',
//     },
// ];

const licenseOptions = ['None','Apache License 2.0','MIT License',
    'BSD 2-Clause License'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const md = generateMarkdown(data)
    fs.writeFile("README.md",md, (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success: README.md File Generated!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            // fix if possible
            {
                type: 'input',
                message: 'Project Title:',
                name: 'title',
            },
            {
                type: 'input',
                message: 'README description:',
                name: 'description',
            },
            {
                type: 'input',
                message: 'Installation:',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Usage:',
                name: 'usage',
            },
            {
                type: 'list',
                message: 'License:',
                name: 'license',
                choices: licenseOptions,
            },
            {
                type: 'input',
                message: 'Contributing:',
                name: 'contributing',
            },
            {
                type: 'input',
                message: 'Test:',
                name: 'test',
            },
            {
                type: 'input',
                message: 'GitHub username:',
                name: 'username',
            },
        ])
        .then((data) => {
            const prompt = {
                title: data.title,
                description: data.description,
                installation: data.installation,
                usage: data.usage,
                license: data.license,
                contributing: data.contributing,
                test: data.test,
                username: data.username
            }

        writeToFile(prompt.title,prompt)
});
}

// Function call to initialize app
init();
