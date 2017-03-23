/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: Product) {}
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    paid: KnockoutObservable<number> = ko.observable(0);
    selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new Initial));
    cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    acceptedCoins: Coins.Coin[] = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
    canPay: KnockoutComputed<boolean> = ko.pureComputed(() => this.paid() -
        this.selectedCell().product.price >= 0);

    set size(givenSize: VendingMachineSize) {
        this.cells([]);

        for (let index = 0; index < givenSize; index++) {
            let product = ProductFactory.GetProduct();
            this.cells.push(new Cell(product));
        }
    }

    select = (cell: Cell): void => {
        cell.sold(false);
        this.selectedCell(cell);
    }

    acceptCoin = (coin: Coins.Quarter): void => {
        let oldTotal = new Big(this.paid());
        let coinValue = new Big(coin.value);
        this.paid(parseFloat(oldTotal.plus(coinValue).toString()));
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return;
        }
        let currentPaid = new Big(this.paid());
        let productPrice = new Big(this.selectedCell().product.price);
        let currentStock = this.selectedCell().stock();
        this.paid(parseFloat(currentPaid.minus(productPrice).toString()));
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}
