
// Literal type
type UserRole = "admin" | "moderator" | "user";

const userRole: UserRole = "user";
console.log(userRole);

// Basic Union type
type Status = number | string | boolean;  

const role: Status = true;
console.log(role);

// object union type
type admin = {id: number, role: "admin", privileges: string[]};
type user = {id: number, role: "user", plans: string[]};

type UserUnion = admin | user;

const user1 : UserUnion = {id: 212, role: "user", plans: ["free", "premium"]};

