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
        this.form.addEventListener('keypress', (e) => this.onFormEnter(e));

    }

    onFormEnter(e) {
        if (e.key === "Enter") {
            // Cancel the default action, if needed
            e.preventDefault();
            // Trigger the button element with a click
            this.onButtonSubmit();
          }
    }

    onButtonSubmit(e) {
        //console.log('I am clicked');

        if (this.emailInput.value !== '' && !this.emailList.includes(this.emailInput.value)) {
            //console.log('Not empty')

            const email = new Email(this.email);
            
            this.emailList.push(this.emailInput.value);

            console.log(this.emailList);

            this.saveLocalStorage();
            this.render();

        } else {

            this.duplicateMessage();
        }

        if (this.emailInput == '') {
            alert('Please enter an email');
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

    render() {
        const form = document.getElementById('div');
        form.remove();

        //Create new div
        const newForm = document.createElement('div');
        newForm.setAttribute('id', 'new-form');
        this.card.append(newForm);

        // Check
        const checkBadge = document.createElement('div');
        checkBadge.setAttribute('id', 'check-badge');
        checkBadge.setAttribute('class', 'fa-solid fa-circle-check mb-5 fa-2xl');
        newForm.append(checkBadge);

        // Heading
        const h1New = document.createElement('h1');
        newForm.append(h1New);
        h1New.innerHTML = 'Thanks for subscribing!';

        // Paragraph
        const message = document.createElement('p');
        newForm.append(message);
        message.innerHTML = 'A confirmation email has been sent to ' + this.emailInput.value + '. Please open it and click the button inside to confirm your subscription.'

        // Button
        const dismissBtn = document.createElement('button');
        dismissBtn.setAttribute('class', 'btn btn-info');
        newForm.append(dismissBtn);
        dismissBtn.innerHTML = 'Dismiss message'

        dismissBtn.addEventListener('click', (e) => this.goBack(e));

        return document;
        
    }

    goBack() {
        // Clear card
        const newForm = document.getElementById('new-form');
        document.getElementById('new-form').remove();

        // Call card
        const newCard = document.getElementById('card');

        // Add heading
        const h1New = document.createElement('h1');
        h1New.setAttribute('class', 'fs-1');
        newCard.append(h1New);
        h1New.innerHTML = 'Stay updated!';

        // Add paragraph
        const pNew = document.createElement('p');
        newCard.append(pNew);
        pNew.innerHTML = 'Join 60,000+ product managers receiving monthly updates on:'

        // Add list
        const ul = document.createElement('ul');
        const lFirst = document.createElement('li');
        const lSecond = document.createElement('li');
        const lThird = document.createElement('li');
        ul.append(lFirst);
        ul.append(lSecond);
        ul.append(lThird);
        lFirst.innerHTML = 'Product discovery and building what matters';
        lSecond.innerHTML = 'Measuring to ensure updates are a success';
        lThird.innerHTML = 'And much more!';

        newCard.append(ul);

        // Add form
        const formNew = document.createElement('form');
        newCard.append(formNew)

        // Add label
        const label = document.createElement('label');
        label.setAttribute('class', 'form-label fw-bold');
        newCard.append(label);

        // Add input
        const newInput = document.createElement('input');
        newInput.setAttribute('class', 'form-control');
        newInput.setAttribute('placeholder', 'email@company.com');
        newCard.append(newInput);

        // Add button
        const btnNew = document.createElement('button');
        btnNew.setAttribute('class', 'btn btn-dark fw-bold');
        btnNew.setAttribute('type', 'button');
        btnNew.innerHTML = 'Subscribe to monthly newsletter';
        newCard.append(btnNew);

        btnNew.addEventListener('click', (e) => this.onButtonSubmit(e));

        formNew.addEventListener('keypress', (e) => this.onFormEnter(e));

        return document;
    }


}

const ui = new UI();