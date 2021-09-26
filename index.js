const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "user",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please add a description of your project."
    }, 
    {
        type: "list",
        name: "license",
        message: "What license do you want your porject to have?",
        choices: [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'BSD 2-Clause "Simplified" License', 
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v3',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions."
    }, 
    {
        type: "input",
        name: "usage",
        message: "Please provide usage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines?"
    }, 
    {
        type: "input",
        name: "tests",
        message: "What information does the user need to know about tests?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/' + fileName, data, err => {
            if (err) {
                reject(err);
                return;
            } 

            resolve({
                ok: true,
                message: 'Your README.md file has been created!'
            });
        });
    });
}

// function to initialize program
function init() {
    return inquirerResponse = inquirer.prompt(questions);
}

// function call to initialize program
init()
.then(questionAnswers => {
    return generateMarkdown(questionAnswers);
})
.then(markup => {
    return writeToFile("README.md", markup);
})
.then(message => {
    return console.log(message);
})
.catch(err => {
    console.log(err);
});
