// Inheritance in TypeScript

class Employee1{
    constructor(
        public name: string,
        protected _baseSalary: number){}

    get baseSalary(): number{
        return this._baseSalary;
    }

    get salaryWithBonus(): number{
        return this._baseSalary * 1.1;
    }

    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }

    describe(): string{
        return `${this.name} earns a base salary of ${this._baseSalary}`;
    }

}

class Manager extends Employee1{
    constructor(name: string, _baseSalary: number, public teamSize: number){
        super(name, _baseSalary);
    }
    describeWork(){
        return `${this.name} manages a team of ${this.teamSize} members.`;

    }
    describeManager(): string{
        return `${this.name} earns a base salary of ${this._baseSalary} and manages a team of ${this.teamSize} members.`;
    }
}

const employe = new Employee1("Ashik", 50000);
const employe1 = new Employee1("Shohan", 50000);
const manager = new Manager("Rahat", 30000, 15)

console.log(manager.describe());
// console.log(employe.salaryWithBonus);
