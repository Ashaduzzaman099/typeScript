abstract class UIElement {
    constructor(protected id:string) {
        
    }
    abstract render(): string
}


class InputField extends UIElement{
    constructor(id: string, private type: string, private name: string, private placeholder: string){
        super(id);
    }

    render(){
        return `<input type="${this.type}" id="${this.id}" name="${this.name}" placeholder="${this.placeholder}" />`;
    }
}

class button extends UIElement{
    constructor(id: string, private type: string, private value: string){
        super(id);
    }

    render(){
        return `<button type="${this.type}" id="${this.id}">${this.value}</button>`;
    }
}
const emailInput = new InputField("email", "email", "userEmail", "Enter your email");
const passwordInput = new InputField("password", "password", "userPassword", "Enter your password");
const submitButton = new button("submit", "submit", "Submit");

console.log(emailInput.render());
console.log(passwordInput.render());
console.log(submitButton.render());