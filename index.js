const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./Develop/generateMarkDown.js');

const questions= [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what are the installation requirements?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'provide instructions for hwo to use this application',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'provide credits to any third party sources used here',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'provide any tests used or where to find them below',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'what features does your project have?',
        name: 'features',
    },
    {
        type: 'list',
        message: 'please select a license for this project',
        name: 'license',
        choices: [
            'MIT License',
            'GNU',
            'GPLv3',
            'Apache'
        ],
    },
];

// async function init() {
//     try {
//         const userInput = await inquirer.prompt(questions);
//         let readMeInfo = generateMarkDown(userInput);
//         fs.writeFile('README.md', readMeInfo, (err) => {
//             if (err)
//             {
//                 throw err;
//             }
//         });
//     }
//     catch (err) {
//         throw err;
//     }
// }

// init();

let writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('Success!');
    });
};

let init = () => {
    inquirer.prompt(questions)
        .then(answers => {
                const createMd = generateMarkDown(answers);
                writeToFile('README.md', createMd)
        });
};
// Function call to initialize app
init();