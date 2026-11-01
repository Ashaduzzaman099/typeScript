const abc = (a: number, b: number) =>{
    console.log(a + b);
}
abc(5, 10);

// Array
const arry:string[] = ['abc', "12", "Dhaka"];
// const arry2: Array<string> = ['abc', "12", "Dhaka"];

// Tapple
const dhakaLatLog :readonly [number,number] = [23.812, 90.41];

// Optional Default and rest prameters (...arry)
const concatName = (fname:string, lname?:string) =>{
  if(!lname){
    return fname;
  }

  return fname + " " + lname;
}
concatName("ashik")

// default paramitter
const greetings = (fullName: string, greeting ="Hello" )=>{
  console.log(greeting+ " " +fullName)
}
greetings("Ashik")

// Rest Parameter
const sum = (...numbers:number[]){
  return numbers.reduce((total,sum)=> total + sum,0);
}

sum(1,2,3,5,3);

const logUserAction = (...args:[name:string, age:number, isActive:boolean])=>{
  const [name, age, isActive] =args;
  console.log(name+ " is " + age);
}
logUserAction("Ashik", 25, true);

// Object type, type alias and interface
const user: {
  name: string;
  age: number;
  isActive: boolean;
  action: ()=>void;
  badges: string[];
} = {
  name: "Ashik",
  age: 26,
  isActive: true,
  
}