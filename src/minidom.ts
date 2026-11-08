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

class Form extends UIElement{
    private children: UIElement[] = []; 
    appendElement(child: UIElement){
        this.children.push(child);
    }

    render(){
        return `<form id="${this.id}">${this.children.map(child => child.render()).join('\n ')}</form>`;
    }
}
const emailInput = new InputField("email", "email", "userEmail", "Enter your email");
const passwordInput = new InputField("password", "password", "userPassword", "Enter your password");
const submitButton = new button("submit", "submit", "Submit");
const formElement = new Form("myForm");

formElement.appendElement(emailInput);
formElement.appendElement(passwordInput);
formElement.appendElement(submitButton);


console.log(formElement.render());


const rootElement = document.getElementById("root");
if(rootElement){
    rootElement.innerHTML = formElement.render();
}
// console.log(emailInput.render());
// console.log(passwordInput.render());
// console.log(submitButton.render());