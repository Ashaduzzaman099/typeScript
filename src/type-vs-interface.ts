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