// this generates the template for the readme file using markdowns to designate what goes where

function generateMarkDown(data) {
    return `
    #${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [Tests](#tests)
        * [Features](#features)
        * [License](#license)

    ---
    ## Installation
    Installation instructions: ${data.installation}
    ---
    ## Usage
    ${data.usage}
    ---
    ## Credits
    Credit to outside third party sources used in development: 
    ${data.credits}
    ---
    ## Tests
    ${data.tests} 
    ---
    ## Features
    ${data.features}
    ---
    ## License
    License used for this project: ${data.license}
    ---

    `;   
}

module.exports = generateMarkDown;