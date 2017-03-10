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

class Fanta implements Product {
    name: string = "Fanta";
    price: number = 2.30;
    category = new SodaCategory();
}

class Sprite implements Product {
    name: string = "Sprite";
    price: number = 2.25;
    category = new SodaCategory();
}

class Peanuts implements Product {
    name: string = "Peanuts";
    price: number = 0.5;
    category = new NutsCategory();
}

class Cashews implements Product {
    name: string = "Cashews";
    price: number = 0.55;
    category = new NutsCategory();
}

class Plain implements Product {
    name: string = "Plain";
    price: number = 0.75;
    category = new ChipsCategory();
}

class Cheddar implements Product {
    name: string = "Cheddar";
    price: number = 0.75;
    category = new ChipsCategory();
}

class Mints implements Product {
    name: string = "Mints";
    price: number = 0.35;
    category = new CandyCategory
}

class Gummies implements Product {
    name: string = "Gummies";
    price: number = 0.5;
    category = new CandyCategory
}

class Hersey implements Product {
    name: string = "Hersey";
    price: number = 1;
    category = new CandyBarCategory
}

class MilkyWay implements Product {
    name: string = "MilkyWay";
    price: number = 1.1;
    category = new CandyBarCategory
}
