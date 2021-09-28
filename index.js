// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// generates page
const generatePage = require('./src/page-template');

//team profile
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const employeeArray = [];

// manager questions
const managerQuestions = () => {
  return inquirer.prompt([
    { 
      type: 'input',
      name: 'name',
      message: 'Name of manager of this team',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter manager name!');
          return false;
        }
      }
    },
    { 
      type: 'input',
      name: 'id',
      message: 'Please enter manager ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter manager ID!');
          return false;
        }
      }
    },
    { 
      type: 'input',
      name: 'email',
      message: 'Please enter manager email',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter manager email!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeInput => {
            if  (officeInput) {
              return true;
            } else {
              console.log('Please enter manager email!');
              return false;
            }
          }
    }
  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber} = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    employeeArray.push(manager); 
    console.log(manager); 
  })
};
//employee questions
const employeeQuestions = () => {
  console.log(`
=================
Add a New Employee
=================
`);

  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What position does this employee have',
      choices: ['Engineer', 'Intern']
    },
    { 
      type: 'input',
      name: 'name',
      message: 'Name of employee',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter employee name!');
          return false;
        }
      }
    },
    { 
      type: 'input',
      name: 'id',
      message: 'Please enter employee ID',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter employee ID!');
          return false;
        }
      }
    },
    { 
      type: 'input',
      name: 'email',
      message: 'Please enter employee email',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter employee email!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Please enter the employee's github username!")
            }
        }
    }, {
      type: 'input',
      name: 'school',
      message: "Please enter the intern's school",
      when: (input) => input.role === "Intern",
      validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter the intern's school!")
          }
      }
  },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
  ])
.then(employeeInput => {
  let {role, name, id, email} = employeeInput
  let employee; 

  if (role === "Engineer") {
      employee = new Engineer (github, name, id, email);

      console.log(employee);
  
    } else if (role === "Intern") {
      employee = new Intern (name, id, email, school);

      console.log(employee);
  }

  teamArray.push(employee); 

  if (confirmAddEmployee) {
      return addEmployee(teamArray); 
  } else {
      return teamArray;
  }
})

};

// function to generate HTML page file using file system 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // if there is an error 
      if (err) {
          console.log(err);
          return;
      // when the profile has been created 
      } else {
          console.log("Your team's profiles have been created!")
      }
  })
}; 

managerQuestions()
.then(employeeQuestions)
.then(teamArray => {
  return generateHTML(teamArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});