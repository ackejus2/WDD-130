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
<<<<<<< HEAD
const day = today.getDay;
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekdays[day];
=======
const day = today.getDay();
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekdays[day];
>>>>>>> 0fc938081a60c7f5db58b12f94b80421be996609
