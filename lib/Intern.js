// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");
const htmlBlocks = require("./htmlBlocks.js")


class Intern extends Employee {
  //contructor
  constructor(name,id,email,school){
    //super
    super(name,id,email)
    //build school object
    this.school = school
  }
  getRole() {
    //override Employee with intern
    return "Intern"
  }
  getSchool() {
    return this.school;
  }
  getHTML() {
    return htmlBlocks.intern(this);
  }
}

module.exports = Intern;