const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        if (typeof this.name !== 'string' || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof this.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a number");
        }
        if (typeof this.email !== 'string' || !this.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
        if (typeof this.school !== 'string' || !this.school.trim().length) {
            throw new Error("Expected parameter 'school' to be a non-empty string");
        }
    }

    getSchool(){
        return this.school
    }
    getRole(){
        return 'Intern'
    }
}

module.exports = Intern