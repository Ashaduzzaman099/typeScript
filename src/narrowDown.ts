// TypeOf
let numb = 123;
console.log(typeof numb)

// Type Guard
const printa = (value: string | number)=>{
  if(typeof value === "string")
  {
    return value.toUpperCase();
  }else{
    return value;
  }

}


// Truthiness
type users = {
  name: string,
  address:{
    zipcode:number,
  }
} | null

const loggedInU: users ={
  name: "Ashik",
  address:{
    zipcode: 5433
  }
}

const showUser =(user:users)=>{
  if(user && user.address){
    console.log(user.address.zipcode);
    return;
  }
  throw new Error("User not Found");
}
