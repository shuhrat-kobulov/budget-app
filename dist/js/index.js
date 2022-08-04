import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { ListTemplate } from "./classes/list-template.js";
var BudgetType;
(function (BudgetType) {
    BudgetType["invoice"] = "invoice";
    BudgetType["payment"] = "payment";
})(BudgetType || (BudgetType = {}));
// elements
const elForm = document.getElementById('form');
const type = document.getElementById('type');
const toFrom = document.getElementById('toForm');
const details = document.getElementById('details');
const amount = document.getElementById('amount');
const ul = document.getElementById('list');
const list = new ListTemplate(ul);
const handleSubmit = (evt) => {
    evt.preventDefault();
    let budget;
    if (type.value === BudgetType.invoice) {
        budget = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        budget = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(budget, type.value, 'start');
};
elForm.addEventListener('submit', handleSubmit);
