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

function getManagerInfo() {
    inquirer.prompt(managerData).then((answers) => {
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.phone);
        team.push(newManager);
        createTeam();
    })
};

function getEngineerInfo () {
    inquirer.prompt(engineerData).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(newEngineer);
        createTeam();
    });
};

function getInternInfo() {
    inquirer.prompt(internData).then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(newIntern);
        createTeam();
    });
};



