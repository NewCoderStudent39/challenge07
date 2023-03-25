//generate an array of questions for the readme that will be exported

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
        type: 'input',
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

module.exports = {
    questions: questions,
};