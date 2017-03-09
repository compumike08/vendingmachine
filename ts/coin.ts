abstract class Coin {
    abstract getImageUrl(): string
}

class Quarter extends Coin {
    private value: number = .25;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "img/Quarter.png";
    }
}

class Dime extends Coin {
    private value: number = .10;
    get Value() {
        return this.value;
    }
    set Value(newValue: number) {
        this.value = newValue;
    }
    getImageUrl(): string {
        return "img/Dime.png";
    }
}
