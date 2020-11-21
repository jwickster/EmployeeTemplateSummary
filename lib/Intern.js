// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee.js');
const htmlBlocks = require('./htmlBlocks');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, school)
    this.school = school
  }
  
  
  getSchool() {
    return this.school;
  }
  
  
  getHTML() {
    return htmlBlocks.intern(this);
  }
  
  //overrides method in Employee
  getRole() {
    return 'Intern';
  }
  
  
}

export default Intern;
// export default Employee;