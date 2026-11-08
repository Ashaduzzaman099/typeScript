abstract class SoftwerEngnierr{
    constructor(
        public name: string,
        protected _baseSalary: number){}

    get baseSalary(): number{
        return this._baseSalary;
    }

    set baseSalary(newSalary: number){
        if(newSalary < 0){
            throw new Error("Salary cannot be negative");
        }
        this._baseSalary = newSalary;
    }

    abstract calculateSalary(): number;

}

class DevOps extends SoftwerEngnierr{
  calculateSalary(){
    return this.baseSalary + 5000;
  }
}

class AppDeveloper extends Employee{}