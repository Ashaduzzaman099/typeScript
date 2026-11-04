type status = "Pending" | "Approve" | "Reject";

let someStatus: string = "Pending";


const showStatus = (status: Status)=>{
  console.log("Your Status Is " + status);
}

showStatus(someStatus as status);

// Constant Asertion
const configuration = {
  port: 8080,
  prefix: "api/v2",
} as const;

// configuration.port = 5000;