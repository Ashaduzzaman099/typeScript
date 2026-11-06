export{}

interface userA{
    name: string;
    role: string;
}

interface ApiResponse<T>{
    data: T;
    success: boolean;
    successCode: number;

}

const fetchUser = async(): Promise<userA | undefined> =>{
    try{
        const response = await fetch("/api/user/endpoint");
        const data = (await response.json()) as ApiResponse<userA>;

        if(!response.ok || !data.success){
            throw new Error(`Failed to fetch user data ${data.successCode}`);
        }

        return data.data;
    }catch(error){
        if(error instanceof Error){
            console.error(error.message);
        }else{
            console.error("An unknown error occurred");
        }
    }
    
}

const userData = await fetchUser();
if(userData){
    console.log(`User Name: ${userData.name}`);
    console.log(`User Role: ${userData.role}`);
}