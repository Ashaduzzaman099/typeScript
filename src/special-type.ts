// Top Type
let worldCup:any = "World Cup 2026";
worldCup = 2443;

const something: unknown = "Hello Ashik"
// something.length

// Core Type
const num: number = 123;
// Nullish Type(null)
interface Customer{
  name: string
}
type loggedInUser = Customer | null
const currentUser: loggedInUser = null;
// Unit Type
const abcd = ()=>{
  console.log("Return type void");
}
// Sub-type of unit type

// Bottom Type
const error = (msg:string)=>{
  throw new Error(msg);
}

const x:undefined = error("abc");