const inquirer = require('inquirer');
const fs = require('fs');
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const createHTML = require('./src/createhtml');
// const { default: Choices } = require('inquirer/lib/objects/choices');
const employeeArray = [];

function createManager(){
    inquirer.prompt([{
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
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
    }
])
.then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    employeeArray.push(manager); 
    console.log(employeeArray);
    // call function here to add additional team members
    addMember();
})
}


// TO DO: Create internFunction
function createIntern(){
    inquirer.prompt([{
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
        name: 'email',
    },
    {
        type: 'input',
        message: 'Where did you attend school?',
        name: 'school',
    },
    ])
    .then(answers =>{
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        employeeArray.push(intern); 
        console.log(employeeArray);
        addMember();
    })
    
};
// TO DO: Create engineerFunction
function createEngineer(){
    inquirer.prompt([{
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
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github UserName',
        name: 'github',
      
    },
    ])
    .then(answers =>{
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        employeeArray.push(engineer); 
        console.log(employeeArray);
        addMember();
    })
    
};
// TO DO: Create AddMember Function
function addMember(){
    inquirer.prompt([{
            type: 'list',
            message:'Would you like to add a/another team member?',
            choices: ['engineer', 'intern', 'manager', 'none'],
            name: 'addMember',
    }])
    .then(answers => {
        if(answers.addMember === 'engineer'){
            createEngineer();
        }
        else if (answers.addMember === 'intern'){
            createIntern();
        }
        else if (answers.addMember === 'manager'){
            createManager();
        }
        else {
            fs.writeFileSync("./dist/index.html", createHTML(employeeArray));
        }
    
    })
}

addMember();