const inquirer = require("inquirer");
const fs = require("fs");
const open = require("open");
//Created by me classes
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const htmlBlocks = require("./lib/htmlBlocks.js");
// const Employee = require("./lib/Employee.js");

const team = [htmlBlocks.header(), htmlBlocks.footer()];


//initialize function with user inputs

function initialize(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `Manager name?`
    },
    {
      type: "input",
      name: "id",
      message: `Manager's ID?`
    },
    {
      type: "input",
      name: "email",
      message: `Manager's email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `Manager's office number?`
    }
  ])
}

///Function to build team

function buildTeam(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"Add Team Member",
      //Karens to replicate issue with none
      choices: ["Engineer","Intern","None", "Karens"]
    }
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `Engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `Engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `Engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `Engineer's GitHub??`
        }
      ]).then((answers)=>{
        //decalre engineer instance
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
        //splice
        team.splice(team.length-1,0,engineer.getHTML());
        //call buildTeam method
        buildTeam();
      })
    }
    if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `Intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `Intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `Intern's Email?`
        },
        {
          type: "input",
          name: "school",
          message: `Intern's School?`
        }
      ]).then(function(answers) {
        //
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        //
        team.splice(team.length - 1, 0, intern.getHTML());
        buildTeam();
      })
    }
  
    if(answer.role === "Karens"){
      return inquirer.prompt([
        {
          type: "name",
          name: "fool",
          message: "fool"
        
        }
        //process.exit(1)
      ]);
      process.exit(1);
    }
    
    
    
    
    
    if(answer.role === "None"){
      return inquirer.prompt([
        {
          type: "input",
          name: "close",
          message: "Application closed select enter to continue"
          
        }
       //process.exit(1)
      ]);
      process.exit(1);
    }
    
    return printHTML(team);
  });
}


function printHTML(team){
  fs.writeFile("Team.html", team , function(err) {
    if (err) {
      throw err;
    }
    //else
    console.log('Team constructed!');
  });
  open("Team.html");
}


///Entrypoint of file

initialize()
    .then(function(answers) {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      //splice method to seperate team
      team.splice(team.length - 1, 0, manager.getHTML());
      buildTeam();
    });
