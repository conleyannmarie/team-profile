   // import Employee constructor 
   const Employee = require('./Employee');

   // manager constructor extends employee constructor 
   class Engineer extends Employee {
       constructor (name, id, email, github) {
           // calling employee constructor
   
           super(name, id, email);
   
           this.github = github;
       }
// github from import
       getGithub() {
           return this.github;
       }
   
       // override employee role to manager 
       getRole () {
           return "Engineer";
       }
   }
   
   // to be exported 
   module.exports = Engineer; 