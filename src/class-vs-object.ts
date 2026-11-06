class Employee{
    name: string;
    baseSalary: number;

    constructor(name: string, baseSalary:number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee("Ashik", 50000);
const employee1 = new Employee("Shohan", 50000);

console.log(employee);
console.log(employee1);