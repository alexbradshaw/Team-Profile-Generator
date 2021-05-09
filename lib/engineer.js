const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, ghub){
        super(name, id, email)
        this.github = ghub
    }

    getGithub(){
        return this.github
    }
    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer