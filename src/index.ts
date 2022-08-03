// form
const elForm = document.getElementById('form') as HTMLFormElement;

// inputs
const type = document.getElementById('#type') as HTMLSelectElement;
const toFrom = document.getElementById('#toFrom') as HTMLInputElement;
const details = document.getElementById('#details') as HTMLInputElement;
const amount = document.getElementById('#amount') as HTMLInputElement;

const handleSubmit = (evt: Event) => {
  evt.preventDefault()

  console.log('submit')
}

elForm.addEventListener('submit', handleSubmit)
