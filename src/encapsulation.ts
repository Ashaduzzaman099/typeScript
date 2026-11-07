// // Access Modifiers: public, private, protected, readonly

// class Employee1{
//     constructor(
//         public name: string,
//         private _baseSalary: number){}

//     get baseSalary(): number{
//         return this._baseSalary;
//     }

//     get salaryWithBonus(): number{
//         return this._baseSalary * 1.1;
//     }

//     set baseSalary(newSalary: number){
//         if(newSalary < 0){
//             throw new Error("Salary cannot be negative");
//         }
//         this._baseSalary = newSalary;
//     }

// }

// const employe = new Employee1("Ashik", 50000);
// const employe1 = new Employee1("Shohan", 50000);

// console.log(employe.salaryWithBonus);
