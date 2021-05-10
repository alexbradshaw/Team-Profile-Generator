class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
        if (typeof this.name !== 'string' || !this.name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }
        if (typeof this.id !== 'number') {
            throw new Error("Expected parameter 'id' to be a number");
        }
        if (typeof this.email !== 'string' || !this.email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
        }
    }

    getName(){
    return this.name
    }
    getId(){
    return this.id
    }
    getEmail(){
    return this.email
    }
    getRole(){ 
    return 'Employee'
    }
}

module.exports = Employee