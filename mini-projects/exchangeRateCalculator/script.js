const currencyElOne = document.getElementById("currency--one");
const currencyElTwo = document.getElementById("currency--two");
const amountElOne = document.getElementById("amount--one");
const amountElTwo = document.getElementById("amount--two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  const currencyOne = currencyElOne.value;
  const currencyTwo = currencyElTwo.value;

  // importing API
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const rate = data.rates[currencyElTwo.value];
      //   console.log(rate);

      rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

      amountElTwo.value = (amountElOne.value * rate).toFixed(2);
    });
}

// Event listeners
currencyElOne.addEventListener("change", calculate);
amountElOne.addEventListener("input", calculate);
currencyElTwo.addEventListener("change", calculate);
amountElTwo.addEventListener("input", calculate);

// Swapping currencies
swap.addEventListener("click", () => {
  const temp = currencyElOne.value;
  currencyElOne.value = currencyElTwo.value;
  currencyElTwo.value = temp;
  console.log(currencyElTwo);
  calculate();
});

calculate();
