"use strict";
// Problem 1
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log("Problem 1 Outputs:");
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
console.log("\nProblem 2 Outputs:");
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
function concatenateArrays(...arrays) {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
}
console.log("\nProblem 3 Outputs:");
console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
console.log("\nProblem 4 Outputs:");
const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());
function processValue(value) {
    return typeof value === "string" ? value.length : value * 2;
}
console.log("\nProblem 5 Outputs:");
console.log(processValue("hello"));
console.log(processValue(10));
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, curr) => curr.price > max.price ? curr : max);
}
console.log("\nProblem 6 Outputs:");
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
console.log("\nProblem 7 Outputs:");
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"));
            }
            else {
                resolve(n * n);
            }
        }, 1000);
    });
}
console.log("\nProblem 8 Outputs:");
squareAsync(4).then(console.log);
squareAsync(-3).catch(console.error);
