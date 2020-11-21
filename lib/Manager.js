// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
const htmlBlocks = require("./htmlBlocks.js")


class Manager extends Employee {
  constructor(name,id,email,officeNumber){
    //inherited from Employee
    super(name,id,email);
    //created officeNumber
    this.officeNumber = officeNumber;
  }
  
  
  getRole() {
    //overidden to return Manager
    return "Manager"
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getHTML() {
    return htmlBlocks.manager(this);
  }
};

module.exports = Manager;