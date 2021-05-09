const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, oNum){
        super(name, id, email)
        this.officeNumber = oNum 
    }

    getOffice(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager