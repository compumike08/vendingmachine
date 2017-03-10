/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory
}

class Initial implements Product {
    name: string = "Please select a product";
    price: number = 0;
}

class CocaCola implements Product {
    name: string = "Coca-Cola";
    price: number = 2.30;
    category = new SodaCategory();
}
