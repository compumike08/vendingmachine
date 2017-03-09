abstract class Coin {
    constructor(public value: number) {
        this.value = value;
    };
    abstract getImageUrl(): string;
}

class Quarter extends Coin {
    constructor() {
        super(0.25);
    };
    getImageUrl(): string {
        return "img/Quarter.png";
    };
}

class Dime extends Coin {
    constructor() {
        super(0.10);
    };
    getImageUrl(): string {
        return "img/Dime.png";
    };
}
