// Problem 1
function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }
  
  console.log("Problem 1 Outputs:");
  console.log(formatString("Hello"));         
  console.log(formatString("Hello", true));   
  console.log(formatString("Hello", false));  
  
  
  function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4);
  }
  
  console.log("\nProblem 2 Outputs:");
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
  ];
  console.log(filterByRating(books));
  
  
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  
  
  console.log("\nProblem 3 Outputs:");
  console.log(concatenateArrays(["a", "b"], ["c"]));     
  console.log(concatenateArrays([1, 2], [3, 4], [5]));   
  
  class Vehicle {
    private make: string;
    private year: number;
  
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
  
    public getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    private model: string;
  
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
  
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  console.log("\nProblem 4 Outputs:");
  const myCar = new Car("Toyota", 2020, "Corolla");
  console.log(myCar.getInfo());   
  console.log(myCar.getModel());  
  
  
  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
  
  console.log("\nProblem 5 Outputs:");
  console.log(processValue("hello")); 
  console.log(processValue(10));      
  
  
  interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, curr) => curr.price > max.price ? curr : max);
  }
  
  console.log("\nProblem 6 Outputs:");
  const products: Product[] = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
  ];
  console.log(getMostExpensiveProduct(products)); 
  

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }
  
  console.log("\nProblem 7 Outputs:");
  console.log(getDayType(Day.Monday));  
  console.log(getDayType(Day.Sunday)); 
  
  
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  
  console.log("\nProblem 8 Outputs:");
  squareAsync(4).then(console.log);      
  squareAsync(-3).catch(console.error);  
  