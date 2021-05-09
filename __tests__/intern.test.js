const Intern = require('../lib/intern')

describe("Intern", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and school if provided valid arguments", () => {
        const inte = new Intern("Alexandra", 53, 'alexandra.mendoza@gmail.com', 'Baylor');
  
        expect(inte.name).toEqual("Alexandra");
        expect(inte.id).toEqual(53);
        expect(inte.email).toEqual('alexandra.mendoza@gmail.com');
        expect(inte.school).toEqual('Baylor');
      });
  
      it("should return name, id, email, and school when methods are executed", () => {
        const inte = new Intern("Jeremy", 52, 'jbizzle89@gmail.com', 'Georgia Tech');
  
        expect(inte.getName()).toEqual("Jeremy");
        expect(inte.getId()).toEqual(52);
        expect(inte.getEmail()).toEqual('jbizzle89@gmail.com');
        expect(inte.getSchool()).toEqual('Georgia Tech');
        expect(inte.getRole()).toEqual('Intern')
      });
    });
  });