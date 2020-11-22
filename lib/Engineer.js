// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');
const htmlBlocks = require('./htmlBlocks.js');

  class Engineer extends Employee {
      constructor(name, id, email, gitHub, engineerBlock) {
        super(name, id, email);
        this.gitHub = gitHub;
      }
      
      getRole() {
        return super.getRole("Engineer");
      }
      
      //Github getter
      getGitHub() {
        return this.gitHub;
      }
      
      ///HTML getter
      getHTML(){
        return htmlBlocks.engineer(this);
      }
      
  }


module.exports = Engineer;