const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, oNum){
        super(name, id, email)
        this.officeNumber = oNum 
        if (typeof this.name !== 'string' || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof this.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a number");
        }
        if (typeof this.email !== 'string' || !this.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof this.officeNumber !== 'number') {
            throw new Error("Expected parameter 'office number' to be a number");
        }
    }

    getOffice(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager