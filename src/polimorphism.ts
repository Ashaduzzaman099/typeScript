class Employee{
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

    calculatePay(taxRate: number){
      return this.baseSalary - this.baseSalary * taxRate;
    }

}

class ManagerA extends Employee{
  override calculatePay(){
    return this.baseSalary + 500;
  }

}

class Developer extends Employee{
  constructor(name: string, _baseSalary: number, public type: string){
    super(name, _baseSalary)
  }

  override calculatePay(taxRate: number){
    return (this.baseSalary + 3000) - this.baseSalary * taxRate;
  }
}

const employee = new Employee("Ashik", 30000);
const manager1 = new ManagerA("Habib", 30000);
const developer = new Developer("Hasan", 4000, "Softwer Enginerrr");
console.log(employee.calculatePay(0.1));
console.log(manager1.calculatePay());
console.log(developer.calculatePay(0.1))