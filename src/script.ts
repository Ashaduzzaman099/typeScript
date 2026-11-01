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