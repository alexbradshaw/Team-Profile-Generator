const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, and email if provided valid arguments", () => {
        const emp = new Employee("Sarah", 3, 'sarahturner@gmail.com');
  
        expect(emp.name).toEqual("Sarah");
        expect(emp.id).toEqual(3);
        expect(emp.email).toEqual('sarahturner@gmail.com');
      });
  
      it("should return name, id, and email when methods are executed", () => {
        const emp = new Employee("Alex", 18, 'alexanderbradshaw5@gmail.com');
  
        expect(emp.getName()).toEqual("Alex");
        expect(emp.getId()).toEqual(18);
        expect(emp.getEmail()).toEqual('alexanderbradshaw5@gmail.com');
        expect(emp.getRole()).toEqual('Employee')
      });
    });
  });