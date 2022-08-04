import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/list-template.js";

// elements
const elForm = document.getElementById('form') as HTMLFormElement;
const type = document.getElementById('type') as HTMLSelectElement;
const toFrom = document.getElementById('toForm') as HTMLInputElement;
const details = document.getElementById('details') as HTMLInputElement;
const amount = document.getElementById('amount') as HTMLInputElement;
const ul = document.getElementById('list') as HTMLUListElement;

const list = new ListTemplate(ul)

const handleSubmit = (evt: Event) => {
  evt.preventDefault()

  let budget;

  if (type.value === 'invoice') {
    budget = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    budget = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(budget, type.value, 'start')
}

elForm.addEventListener('submit', handleSubmit)
