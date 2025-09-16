//1
const favoriteFoods = ["Pizza", "Sushi", "Tacos", "Burgers", "Pasta"];
console.log(favoriteFoods);
//2
favoriteFoods.push("Ice Cream");
console.log(favoriteFoods);
//3
favoriteFoods.shift();
console.log(favoriteFoods);
//4
console.log(favoriteFoods.length);
//how to add empty it already it is declared

//5
favoriteFoods.includes("Sushi");
console.log(favoriteFoods);

//6
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(favoriteFoods[i]);
};

//7
favoriteFoods.forEach((food, index) => {
  console.log(`${index}: ${food}`);
});


