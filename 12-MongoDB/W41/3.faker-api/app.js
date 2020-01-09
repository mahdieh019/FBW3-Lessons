var faker = require('faker');
faker.local='de';
var randomName = faker.name.findName();
var randomEmail = faker.internet.email();
var randomCard = faker.helpers.createCard();
let productName=faker.commerce.productName();
let price=faker.commerce.price();

console.log(randomName,randomEmail);
console.log(randomCard.company.name);
console.log(`${productName} : ${price}$`);
console.log(faker.date.future());

