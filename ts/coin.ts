namespace Coins {

    let imgPath: string = "img/";

    export abstract class Coin {
        constructor(public value: number) {
            this.value = value;
        };
        abstract getImageUrl(): string;
    }

    export class Quarter extends Coin {
        constructor() {
            super(0.25);
        };
        getImageUrl(): string {
            return imgPath + "Quarter.png";
        };
    }

    export class Dime extends Coin {
        constructor() {
            super(0.10);
        };
        getImageUrl(): string {
            return imgPath + "Dime.png";
        };
    }

    export class Half extends Coin {
        constructor() {
            super(0.5);
        };
        getImageUrl(): string {
            return imgPath + "Half.png";
        };
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        };
        getImageUrl(): string {
            return imgPath + "Dollar.jpg";
        };
    }
}
