const Manager = require('../lib/manager')

describe("Manager", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and github if provided valid arguments", () => {
        const man = new Manager("Nicholas", 2, 'nicktoa34@gmail.com', 533);
  
        expect(man.name).toEqual("Nicholas");
        expect(man.id).toEqual(2);
        expect(man.email).toEqual('nicktoa34@gmail.com');
        expect(man.officeNumber).toEqual(533);
      });
  
      it("should return name, id, email, and github when methods are executed", () => {
        const man = new Manager("James", 5, 'jamboy@gmail.com', 604);
  
        expect(man.getName()).toEqual("James");
        expect(man.getId()).toEqual(5);
        expect(man.getEmail()).toEqual('jamboy@gmail.com');
        expect(man.getOffice()).toEqual(604);
        expect(man.getRole()).toEqual('Manager')
      });

    it("should throw an error if not provided an office number", () => {
      const cb = () => new Manager("Slaton", 76, 'slatonsith@gmail.com');
      const err = new Error("Expected parameter 'office number' to be a number");

      expect(cb).toThrowError(err);
    });
    });
  });