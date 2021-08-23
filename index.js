const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { create } = require("domain");

const team = [];

const addMember = [
    {
        type: "list",
        name: "addMembers",
        message: "Please add a team member or select finish:",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Finish"
        ]
    }
];

const managerData = [
    {
        type: "input",
        name: "name",
        message: "Please enter team manager's name:"  
    },
    {
        type: "input",
        name: "id",
        message: "Manager's employee ID:" 
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email:"
        
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number:"
    }
];

const engineerData = [
    {
        type: "input",
        name: "name",
        message: "Please enter engineer's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email"
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's Github username:"
    }
];

const internData = [
    {
        type: "input",
        name: "name",
        message: "Please enter intern's name:"
    },
    {
        type: "input",
        name: "id",
        message: "Intern's employee ID:"
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email:"
    },
    {
        type: "input",
        name: "school",
        message: "School intern is enrolled in:"
    }
];

function createTeam () {
    inquirer.prompt(addMember).then((answers) => {
    if (answers.addMembers === "Manager") {
        console.log("Manager");
        getManagerInfo()
    } else if (answers.addMembers === "Engineer") {
        console.log("Engineer");
        getEngineerInfo();
    } else if (answers.addMembers === "Intern") {
        console.log("Intern");
        getInternInfo();
    } else if (answers.addMembers === "Finish") {
        writeHTML();
    };
});
};

let cardDeck = `<!-- Team cards added here -->`;

function getManagerInfo() {
    inquirer.prompt(managerData).then((answers) => {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.phone);
        let managerHTML = `
            <div class="card w-25 bg-light m-3 shadow rounded">
                <div class ="card-header text-light">
                    <h2 class="name">${newManager.name}</h2>
                    <h3 class="title">${newManager.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${newManager.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${newManager.email}">${newManager.email}</a></li>
                        <li class="list-group-item">Phone: ${newManager.officeNumber}</li>
                    </ul>
                </div>
            </div>
             `;
        team.push(newManager);
        cardDeck += managerHTML;
        createTeam();
    })
};

function getEngineerInfo () {
    inquirer.prompt(engineerData).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        let engineerHTML = `
            <div class="card w-25 bg-light m-3 shadow rounded">
                <div class="card-header text-light">
                    <h2 class="name">${newEngineer.name}</h2>
                    <h3 class="title">${newEngineer.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${newEngineer.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${newEngineer.email}">${newEngineer.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${newEngineer.github}">${newEngineer.github}</a></li>
                    </ul>
                </div>
            </div>
                
        `;
        team.push(newEngineer);
        cardDeck += engineerHTML;
        createTeam();
    });
};

function getInternInfo() {
    inquirer.prompt(internData).then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        let internHTML = `
            <div class="card w-25 bg-light m-3 shadow rounded">
                <div class="card-header text-light">
                    <h2 class="name>${newIntern.name}</h2>
                    <h3 class="title">${newIntern.role}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${newIntern.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${newIntern.email}">${newIntern.email}</a></li>
                        <li class="list-item-group">School: ${newIntern.school}</li>
                    </ul>
                </div>
            </div>
        `;
        team.push(newIntern);
        cardDeck += internHTML;
        createTeam();
    });
};

function writeHTML() {
    let mainHTML = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <title>Team Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css"/>
        </head>
    
        <body>
            <!--Header-->
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 id="header">My Team</h1>
                </div>
            </div>
    
            <!--Team member cards-->
            <div class="container">
                <div class="row">
                    <div class="team-cards">
                        ${cardDeck}
                    </div>
                </div>
            </div>
        </body>
    </html> 
        `;

    fs.writeFile('./dist/index.html', mainHTML, (err) =>
        err ? console.log(err) : console.log("You're team has been created!"));
};

createTeam();
