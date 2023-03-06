const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const input3 = document.querySelector('#input3')
const result1 = document.querySelector('.res1')
const result2 = document.querySelector('.res2')
const result3 = document.querySelector('.res3')
const form = document.querySelector('form')
const month = document.querySelector('.month')
const year = document.querySelector('.year')
const calculate = document.querySelector('#btn4')
const clear = document.querySelector('#btn5')
const input = document.querySelectorAll("input")
const sym = document.querySelectorAll('.spa')
// const results = document.querySelectorAll('h2')

year.classList.add("changeColor")

month.addEventListener("click", () => {

    if (year.classList.contains("changeColor")) {
        month.classList.add("changeColor")
        year.classList.remove("changeColor")
        input3.value = input3.value * 12
    }
})

year.addEventListener("click", () => {
    if (month.classList.contains("changeColor")) {
        year.classList.add("changeColor")
        month.classList.remove("changeColor")
        input3.value = Math.round(input3.value / 12)
    }
})
form.addEventListener("submit", (e) => {

    e.preventDefault();
    let P = Number(input1.value);
    const r = Number(input2.value) / 12 / 100;
    const n = Number(input3.value * 12);




    if (year.classList.contains("changeColor")) {
        let EMI = (P * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
        let totalInterest = (EMI * n) - P;
        let totalPayment = totalInterest + parseFloat(P);
        result1.innerText = "₹" + Math.round(EMI).toLocaleString();
        result2.innerText = "₹" + Math.round(totalInterest).toLocaleString();
        result3.innerText = "₹" + Math.round(totalPayment).toLocaleString();
    }


    if (month.classList.contains("changeColor")) {

        let P = Number(input1.value);
        const r = Number(input2.value) / 12 / 100;
        const n = Number(input3.value);

        let EMI = (P * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
        let totalInterest = (EMI * n) - P;
        let totalPayment = totalInterest + parseFloat(P);
        result1.innerText = "₹" + Math.round(EMI).toLocaleString();
        result2.innerText = "₹" + Math.round(totalInterest).toLocaleString();
        result3.innerText = "₹" + Math.round(totalPayment).toLocaleString();
    }
})


clear.addEventListener('click', () => {
    for (let i = 0; i < input.length; i++) {
        input[i].value = " ";
    }
})


