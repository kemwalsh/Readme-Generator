// Packages required for application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of prompts for Readme Generator
const readmePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Please provide your full name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUserName',
        },
        {
            type: 'input',
            message: 'What is your email adress?',
            name: 'email',
        },
        {
          type: 'input',
          message: 'What is the title of your project?',
          name: 'title',
        },
        {
          type: 'input',
          message: 'What is the description for your project?',
          name: 'description',
        },
        {
          type: 'input',
          message: 'What are the steps required to install your project?',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Provide instructions and examples for use.',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'List your collaborators, if any.',
          name: 'credits',
        },
        {
          type: 'input',
          message: 'Describe the tests written for your application and how to use them.',
          name: 'tests',
        },
        {
          type: 'list',
          message: 'Which license are you using?',
          name: 'license',
          choices: ['MIT', 'Mozilla', 'Apache'],
        },
      ])
    }

// Generate Readme.md from prompts
const generateReadme = ({ name, githubUserName, email, title, description, installation, usage, credits, tests, license}) =>
`# ${title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Questions](#questions)
- [Contributing](#contributing)
- [License](#license)

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Tests
${tests}

## Questions
${name} </br>
Email : ${email} </br>
GitHub: https://github.com/${githubUserName}/

## Contributing
${credits}

## License
${license}
`

// Function to initialize application
const init = () => {
    readmePrompt()
    .then((answers) => fs.writeFileSync('readmeTest.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to readmeTest.md'))
        .catch((err) => console.error(err));
    };
    
    init();