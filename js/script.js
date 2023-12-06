// Seleção de elementos 
const multiplicationForm = document.querySelector('#multiplication_form');
const numberInput = document.querySelector('#number');
const multiplicationInput = document.querySelector('#multiplicator');

const multTitle = document.querySelector("#multiplication_title span")

const multTable = document.querySelector("#multiplication_operations");

// Funções 
const createTable = (number, multNumber) => {
    multTable.innerHTML = "";

    for(i = 1; i <= multNumber; i++) {
        const result = number * i;

        const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;
    
    const parser = new DOMParser();

    const  htmlTemplate = parser.parseFromString(template, "text/html")

    const row = htmlTemplate.querySelector(".row")
    multTable.appendChild(row)
    }

    multTitle.innerHTML = number;
}

// Eventos
multiplicationForm.addEventListener('submit' , (e) => {
    e.preventDefault();

    const numberReal = +numberInput.value;
    const numberMultTable = +multiplicationInput.value;

    if (!numberReal || !numberMultTable) return;

    createTable(numberReal, numberMultTable);

})