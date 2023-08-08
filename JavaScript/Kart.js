let openShopping = document.querySelector(".shoppingkart");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total1");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 0,
    name: "Java + Web Development",
    image: "JWD.png",
    price: 10000,
    price2: 7000,
  },
  {
    id: 1,
    name: "MasterClass in Data Structure LaunchPad",
    image: "CPP.png",
    price: 14000,
    price2: 6999,
  },
  {
    id: 2,
    name: "Python - The Zero to Hero Bootcamp",
    image: "Python.png",
    price: 14000,
    price2: 2900,
  },
  {
    id: 3,
    name: "Java from Zero to First Job, Practical Guide",
    image: "JAVA.png",
    price: 3600,
    price2: 2999,
  },
  {
    id: 4,
    name: "Web Development Using MERN Stack",
    image: "WebDev.png",
    price: 10600,
    price2: 7999,
  },
];
let listCards = [];

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
        <div class="title">${value.name}</div>
        <hr>
        <img src="../images/${value.image}">
        <hr>
        <div class="price"><s>₹${value.price.toLocaleString()}</s> &nbsp;₹${value.price2.toLocaleString()} </div>
        <button class="AddToCard" onclick="addToCard(${key})">Add To Kart</button>`;
    list.appendChild(newDiv);
  });
}
initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product from list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 0;
    reloadCard();

    const addToCardButtons = document.querySelectorAll(".AddToCard");
    addToCardButtons[key].style.backgroundColor = "green";
    addToCardButtons[key].innerText = "Added";
  }
}

function reloadCard() {
  listCard.innerHTML = "";
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price2;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="../images/${value.image}"/></div>
                <div style="text-align: center; margin-left: 10%;">${
                  value.name
                }</div>
                <div>₹${value.price2.toLocaleString()}</div>
                <div>
                <button class="RemoveFromKart" onclick="changeQuantity(${key}, ${0})">Remove</button>
                </div>
                `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
    const addToCardButtons = document.querySelectorAll(".AddToCard");
    addToCardButtons[key].style.backgroundColor = ""; // Reset the background color
    addToCardButtons[key].innerText = "Add To Kart"; // Reset the text
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price2 = quantity * products[key].price2;
  }
  reloadCard();
}

const Buy = document.getElementsByClassName("BuyNow");
Buy.addEventListener("click", function () {
  alert("Course Purchased");
});
