// Interface
interface Animal {
    name: string;
    species: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Buddy",
    species: "Canine",
    breed: "Golden Retriever"
}

// type intersection
type Cat = {
    name: string;
}
type Lion = Cat & {
    species: string;
}

const lion: Lion ={
    name: "Simba",
    species: "Panthera leo"
}

//  Marge Interface but ! type marge like interface
interface Istaff {
    name: string;
}

interface Istaff{
    sallary: number;
}

const staff: Istaff ={
    name: "Ashik",
    sallary: 50000,
}

