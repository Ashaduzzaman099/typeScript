const wrapInArry = <T>(value: T)=>{
    return [value];
}

const stringArr = wrapInArry<string>("Ashik");
const numberArr = wrapInArry<number>(123);

stringArr.map((str)=> str.toUpperCase());

interface userA{
    name: string;
    role: string;
}

interface Blog{
    title: string;
    decscription: string;
    date: string;
}
interface ApiResponse<T>{
    data: T;
    success: boolean;
    successCode: number;

}

type UserResponse = ApiResponse<userA>;
type BlogResponse = ApiResponse<Blog>;

const userRes: UserResponse = {
    data:{
        name: "Ashik",
        role: "Admin"
    },
    success: true,
    successCode: 200,
}