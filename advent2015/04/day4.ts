//npx tsx day4.ts

//Method Overloading
class Logger {
  static log(message: any): void;
  static log(message: any, category: string): void;
  static log(message: string, category?: string): void {
    console.log(message, category);
  }
}
Logger.log({ name: "Bob" });

//

//Method Overloading with varying Types
class Product {
  constructor(public name: string, public price: number) {}
}
class Products {
  private products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
  filter(name: string): Product[];
  filter(name: any, price: any): Product[];
  filter(name: string, price?: number): Product[] {
    if (price) {
      return this.products.filter((product) => {
        product.name === name && product.price === price;
      });
    } else {
      return this.products.filter((product) => product.name === name);
    }
  }
}
const products = new Products();
products.add(new Product("Table", 400));
products.add(new Product("Chair", 100));
products.add(new Product("Lamp", 30));
console.log(products.filter("Table", 400));

//Class with Strong Types and Constructor Instantiation
// class Product {
//   name;
//   price;
//   constructor(name: string, price: number) {
//     this.name = name;
//     this.price = price;
//   }
//   copy(name: string) {
//     const copiedProduct = new Product(name, this.price);
//     copiedProduct.name = name;
//     copiedProduct.price = this.price;
//     return copiedProduct;
//   }
// }
// const table1 = new Product("Table1", 300);
// const table2 = table1.copy("Table2");
// console.log(table1.price);
// console.log(table2);

//

//Generic Type Promise
const promisedResponse: Promise<Response> = fetch("https://swapi.dev/api/");
// promisedResponse.then((res) => console.log(res));

//

//Generic Typed Array and Interface
function firstOrNull<T = string>(array: T[]): T | null {
  return array.length === 0 ? null : array[0];
}
const first = firstOrNull([1, 2, 3]);
console.log(first);
interface Component<T1 = string, T2 = { text: string }> {
  name: T1;
  props: T2;
  log: () => void;
}
const button1: Component = {
  name: "Button",
  props: {
    text: "Save",
  },
  log: () => console.log("Save button"),
};
console.log(button1.props.text);
// console.log(button1.props.text2);

//

//Mapped Types ("in keyof")
// type Form<T> = {
//   errors: {
//     [K in keyof T]?: string;
//   };
//   values: T;
// };
// interface Contact {
//   name: string;
//   email: string;
// }
// const contactForm: Form<Contact> = {
//   errors: {
//     email: "This must be a valid email address",
//     // age: "You must enter your age"
//   },
//   values: {
//     name: "Bob",
//     email: "bob@someemail.com",
//   },
// };

//

//Generic Type Class
class List<T> {
  private items: T[] = [];
  add(item: T) {
    return this.items.push(item);
  }
}
const numList = new List<number>();
numList.add(5050);
numList.add(67);
console.log(numList);

//

//Parameter Constraint - "extends"
interface Logable {
  log: () => void;
}
function logItems<T extends Logable>(items: T[]): void {
  items.forEach((item) => item.log());
}
const heading = {
  name: "Heading",
  props: { text: "Chapter 1" },
  log: () => console.log("Chapter 1 heading"),
};
const button2 = {
  name: "Button",
  props: { text: "Save" },
  log: () => console.log("Save button"),
};
logItems([heading, button2]);
