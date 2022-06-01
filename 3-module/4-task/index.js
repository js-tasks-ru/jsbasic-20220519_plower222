function showSalary(users, age) {
  let arrValues = [];
  for (let el of users) {
    if (el.age <= age) {
      arrValues.push(`${el.name}, ${el.balance}`);
    }
  }
  return arrValues.join("\n");
}

// // Объект одного пользователя
// let user1 = {
//   "balance": "$1,825.65",
//   "picture": "https://placehold.it/32x32",
//   "age": 21,
//   "name": "Golden Branch",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// let user2 = {
//   "balance": "$1,490.15",
//   "picture": "https://placehold.it/32x32",
//   "age": 25,
//   "name": "Duncan Randall",
//   "gender": "male",
//   "greeting": "Hello, Golden Branch! You have 7 unread messages.",
//   "favouriteFruit": "banana"
// };

// // Массив пользователей
// let users = [user1, user2];

// console.log(showSalary(users, 30));

