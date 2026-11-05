const wrapInArry = <something>(value: something)=>{
    return [value];
}

const stringArr = wrapInArry("Ashik");
const numberArr = wrapInArry(123);

stringArr.map((str)=> str.toUpperCase());
