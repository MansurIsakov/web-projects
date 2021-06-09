const main = document.getElementById("main");
const addBtn = document.getElementById("add");
const doubleBtn = document.getElementById("double");
const millionairesBtn = document.getElementById("millionaires");
const sortBtn = document.getElementById("sort");
const calc__wealthBtn = document.getElementById("calc__wealth");

let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser() {
  const res = await fetch(`https://randomuser.me/api`);
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Double everyones money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// Filter money
function filterMoney() {
  data = data.filter((user) => user.money >= 1000000);
  updateDOM();
}

// Sort money
function sortMoney() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// Calculate total wealth
function calcWealth() {
  const wealth = data.reduce((acc, num) => acc + num.money, 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;
  main.appendChild(wealthEl);
}

// Add new obj to data array
function addData(obj) {
  data.push(obj);

  updateDOM();
}

// Update DOM
function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Formate number as money
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// event listener
addBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortMoney);
millionairesBtn.addEventListener("click", filterMoney);
calc__wealthBtn.addEventListener("click", calcWealth);
