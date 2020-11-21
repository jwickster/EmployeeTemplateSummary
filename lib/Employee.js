// TODO: Write code to define and export the Employee class


//Base class with constructor
class Employee {
  //generic contructor with 4 params
  constructor(name,id,email,role= "Employee")
  {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  
  //methods to call
  getName() {
    return this.name;
  }
  //return id
  getId() {
    return this.id;
  }
  //return email
  getEmail() {
    return this.email;
  }
  
  //returns role base class but will be overridden when
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;