// TODO: Write code to define and export the Employee class

//Employee class
class Employee {
  //contructor to instantiate name, id, email and role from class
  constructor(name, id, email, role = "Employee"){
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
  getName(){
    return this.name;
  }
  
  
  
  
}
