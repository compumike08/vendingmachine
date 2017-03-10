abstract class ProductCategory {
    protected imgPath: string = "img/";

    name: string;
    abstract getImageUrl(): string;
}

class SodaCategory extends ProductCategory {
    name: string = "Soda";
    getImageUrl() {
        return this.imgPath + "SodaCan.png";
    }
}

class ChipsCategory extends ProductCategory {
    name: string = "Potato chips";
    getImageUrl() {
        return this.imgPath + "Chips.png";
    }
}

class CandyCategory extends ProductCategory {
    name: string = "Candy";
    getImageUrl() {
        return this.imgPath + "Candy.png";
    }
}

class CandyBarCategoryCategory extends ProductCategory {
    name: string = "Candy bar";
    getImageUrl() {
        return this.imgPath + "CandyBar.png";
    }
}
