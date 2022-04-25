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
            name: 'licence',
            choices: ['MIT Licence', 'Mozilla Public Licence', 'Apache Licence'],
          },
          {
            type: 'input',
            message: 'Where can users submit questions about this application?',
            name: 'issues',
          },
      ])
    }

// Generate HTML page from prompts
const generateHTML = ({ name, githubUserName, email, title, description, installation, usage, credits, tests, license, issues }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <p class="lead">${name}.</p>
    <p class="lead">${githubUserName}.</p>
    <p class="lead">${email}.</p>
    <h1 class="display-4">${title}</h1>
    <p class="lead">${description}.</p>
    <p class="lead">${installation}.</p>
    <p class="lead">${usage}.</p>
    <p class="lead">${credits}.</p>
    <p class="lead">${tests}.</p>
    <p class="lead">${license}.</p>
    <p class="lead">${issues}.</p>
  </div>
</div>
</body>
</html>`;

// Function to initialize application
const init = () => {
    readmePrompt()
    .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    };
    
    init();