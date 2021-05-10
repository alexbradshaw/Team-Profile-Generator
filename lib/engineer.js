const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, ghub){
        super(name, id, email)
        this.github = ghub
        if (typeof this.name !== 'string' || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof this.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a number");
        }
        if (typeof this.email !== 'string' || !this.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof this.github !== 'string' || !this.github.trim().length) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }
    }
    
    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer