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
