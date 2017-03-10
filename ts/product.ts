/// <reference path="productCategory.ts" />

interface Product {
    name: string;
    price: number;
    category?: ProductCategory
}

class CocaCola implements Product {
    name: string = "Coca-Cola";
    price: number = 2.30;
    category = new SodaCategory();
}
