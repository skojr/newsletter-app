class Email {
    constructor(email) {
        this.email = email
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');

        this.card = document.getElementById('card');

        this.emailInput = document.getElementById('email-input');

        this.submitBtn = document.getElementById('submit-button');

        this.emailList = [];

        // Listens for clicking button
        this.submitBtn.addEventListener('click', (e) => this.onButtonSubmit(e));

        // Listens for pressing Enter key
        this.form.addEventListener('keypress', (e) => this.onButtonSubmit(e));

    }

    onButtonSubmit(e) {
        e.preventDefault();
        //console.log('I am clicked');

        if (this.emailInput.value !== '' && !this.emailList.includes(this.emailInput.value)) {
            //console.log('Not empty')

            const email = new Email(this.email);
            
            this.emailList.push(this.emailInput.value);

            console.log(this.emailList);

            this.saveLocalStorage();

        } else {

            this.duplicateMessage();
        }
    }


    
    saveLocalStorage() {
        for (let i=0; i<this.emailList.length; i++) {
        const json = JSON.stringify(this.emailList[i])
        localStorage.setItem('User Email ' +  (i+1), this.emailList[i]);
        }
    }

    duplicateMessage() {
        if (this.emailList.includes(this.emailInput.value)) {
            alert('You are already subscribed!')
           // const alert = document.createElement('div');
           // alert.setAttribute('class', 'alert alert-primary mt-3');
           // this.card.appendChild(alert);
           // alert.innerHTML = 'You are alreay subscribed!';
        }
    }

}

const ui = new UI();