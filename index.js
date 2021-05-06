const inq = require('inquirer')
const inql = require('inquirer-loop')
const fs = require('fs')

inq.registerPrompt("loop", require("inquirer-loop")(inq));

inq
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projName',
        },
        {
            type: 'input',
            message: 'What was your motivation for this project?',
            name: 'projMotiv',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'projWhy',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'projProb',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'projLearn',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'projInst',
            default: 'npm install'
        },
        {
            type: 'input',
            message: 'What is the name of your image (Include file ending)',
            name: 'projPic',
        },
        {
            type: 'list',
            message: 'What license do you need?',
            name: 'license',
            choices: [
                'MIT (Free use with preservation of copyright/license notices)',
                'GNU (Free use but contributors must waive right to patents. Copyright/license notices must be preserved)',
                'The Unlicense (No conditions, dedicates works to public domain)'],
            default: 'MIT'
        },
        {
            type: 'input',
            message: 'What are the steps to contribute?',
            name: 'contributing',
            default: 'This project is complete. No contributions necessary.'
        },
        {
            type: 'input',
            message: 'What are tests you can run to make sure the project runs as expected?',
            name: 'tests',
            default: 'N/A'
        },
        {
            type: 'input',
            message: 'What is your github username?',
            name: 'ghub',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ])
    .then(res => {
        fs.writeFile('team-profile.html',
            `

`, err => console.log(err))
    })

    .catch(err => console.error(err))
