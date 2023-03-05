const inquirer = require('inquirer');
const fs = require('fs');

questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please enter your ID.',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'input',
    },
]
 
inquirer
.prompt(questions)
.then((answers) => {
    console.log(answers.name);
})

.catch((err) => {
    if(err){
        console.log(err)
    }
});

