import { ListTemplate } from "./classes/listTemplate.js"
import { Transaction } from "./classes/Transaction.js"

const form = document.querySelector('.form-container') as HTMLFormElement
const transaction = document.querySelector('#transaction') as HTMLSelectElement
const fromTo = document.querySelector('#from-to') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
const trStatus = document.querySelector('#status') as HTMLSelectElement
const fromToLabel = document.querySelector('#fromToLabel') as HTMLLabelElement
const sumParagraph = document.querySelector('#sum') as HTMLParagraphElement
const reaction = document.querySelector('#reaction') as HTMLParagraphElement
const ul = document.querySelector('ul')! // لا داعي لاستدعاء اسم الكلاس بما انه العنصر الوحيد من هذا النوع

const list = new ListTemplate(ul)
let transactions: Transaction[] = []

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let trans = new Transaction(transaction.value, fromTo.value, amount.valueAsNumber, trStatus.options[trStatus.selectedIndex].text)
    console.log(trans)
    transactions.push(trans)

    sumParagraph.textContent = getAmount().toString()
    if (getAmount() >= 0) {
        reaction.textContent = "رائع"
    }
    else {
        reaction.textContent = "عليك القيام ببعض الاعمال الاضافية"
    }
    // addParagraph(trans.format());
    list.render(trans, trans.transaction, 'end')
})

transaction.addEventListener('change', (e: Event) => {
    const selectedValue = (e.target as HTMLSelectElement).value;
    console.log(`selectedValue: ${selectedValue}`)
    if (selectedValue == "creditor") {
        fromToLabel.innerText = "الى :"
    } else {
        fromToLabel.innerText = "من :"
    }
})

// function addParagraph(text: string) {
//     const paragraph = document.createElement('h2');
//     paragraph.textContent = text;
//     document.body.appendChild(paragraph);
// }

function getAmount(): number {
    let sum = 0
    transactions.forEach(element => {
        console.log(element.amount)
        sum += element.amount
    });

    return sum
}