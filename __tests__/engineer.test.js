const Engineer = require('../lib/engineer')

describe("Engineer", () => {
    describe("Initialization", () => {
      it("should create an object with a name, id, email, and github if provided valid arguments", () => {
        const eng = new Engineer("Jake", 20, 'jakeguest@gmail.com', 'jguest12');
  
        expect(eng.name).toEqual("Jake");
        expect(eng.id).toEqual(20);
        expect(eng.email).toEqual('jakeguest@gmail.com');
        expect(eng.github).toEqual('jguest12');
      });
  
      it("should return name, id, email, and github when methods are executed", () => {
        const eng = new Engineer("Lucas", 8, 'lmendes12@gmail.com', 'lucasm52');
  
        expect(eng.getName()).toEqual("Lucas");
        expect(eng.getId()).toEqual(8);
        expect(eng.getEmail()).toEqual('lmendes12@gmail.com');
        expect(eng.getGithub()).toEqual('lucasm52');
        expect(eng.getRole()).toEqual('Engineer')
      });
    });
  });