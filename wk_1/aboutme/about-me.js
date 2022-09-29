console.log("It worked!");
const favoriteFoods = ["Tomato Soup", "Grilled Cheese", "Shepherds Pie", "Stir Fry"];
const para = document.createElement("p");
para.textContent = `My favorite foods: ${favoriteFoods}`;
document.body.appendChild(para);
favoriteFoods.shift();
para.textContent = `My favorite new foods: ${favoriteFoods}`;
favoriteFoods.push("Chocolate Chip Cookies");
para.textContent = `My final favorite foods: ${favoriteFoods}`;

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
console.log(today);
const day = today.getDay;
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekdays[day];
