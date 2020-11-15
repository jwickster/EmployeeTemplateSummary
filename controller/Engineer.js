const Employee = require('Employee.js');
const htmlBlocks = require('htmlBlocks.js');

class Engineer extends Employee {
  //constructor to call default destructor, create objects and allocate memory on the heap
  constructor(name, id, email, gitHub, engineerBlock) {
    super(name, id, email);
    
    //github was declared in this class so it was instantiated here
    this.gitHub = gitHub;
    
  }
  
  
  ///Methods
  
  //overrides Employee.js
  getRole() {
    return super.getRole();
  }
  
  getGitHub() {
    return this.gitHub;
  }
  
  getHTML() {
    return htmlBlocks.engineer(this);
  }
  
}
module.exports = Engineer;