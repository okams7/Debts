import { Transaction } from "./classes/Transaction.js";
const form = document.querySelector('.form-container');
const transaction = document.querySelector('#transaction');
const fromTo = document.querySelector('#from-to');
const amount = document.querySelector('#amount');
const trStatus = document.querySelector('#status');
const fromToLabel = document.querySelector('#fromToLabel');
const sumParagraph = document.querySelector('#sum');
const reaction = document.querySelector('#reaction');
let transactions = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let trans = new Transaction(transaction.value, fromTo.value, amount.valueAsNumber, trStatus.options[trStatus.selectedIndex].text);
    console.log(trans);
    transactions.push(trans);
    sumParagraph.textContent = getAmount().toString();
    if (getAmount() >= 0) {
        reaction.textContent = "رائع";
    }
    else {
        reaction.textContent = "عليك القيام ببعض الاعمال الاضافية";
    }
    addParagraph(trans.format());
});
transaction.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    console.log(`selectedValue: ${selectedValue}`);
    if (selectedValue == "creditor") {
        fromToLabel.innerText = "الى :";
    }
    else {
        fromToLabel.innerText = "من :";
    }
});
function addParagraph(text) {
    const paragraph = document.createElement('h2');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
}
function getAmount() {
    let sum = 0;
    transactions.forEach(element => {
        console.log(element.amount);
        sum += element.amount;
    });
    return sum;
}
