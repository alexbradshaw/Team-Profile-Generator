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

      it("should throw an error if not provided an name", () => {
        const cb = () => new Employee();
        const err = new Error("Expected parameter 'name' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if not provided an id", () => {
        const cb = () => new Employee("Jose");
        const err = new Error("Expected parameter 'id' to be a number");
  
        expect(cb).toThrowError(err);
      });
  
      it("should throw an error if not provided an email", () => {
        const cb = () => new Employee("Noah", 45);
        const err = new Error("Expected parameter 'email' to be a non-empty string");
  
        expect(cb).toThrowError(err);
      });
    });
  });