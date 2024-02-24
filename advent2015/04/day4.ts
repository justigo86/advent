class Product {
  constructor(public name: string, public price: number) {}
}

class Products {
  private products: Product[] = [];
  add(product: Product) {
    this.products.push(product);
  }
  filter(name: string): Product[];
  filter(name: string, price?: number): Product[] {
    return this.products.filter((product) => {
      product.name === name && product.price === price;
    });
  }
}

const products = new Products();
products.add(new Product("Table", 400));
products.add(new Product("Chair", 100));
products.add(new Product("Lamp", 30));
// console.log(products.filter("Table", 400));

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
