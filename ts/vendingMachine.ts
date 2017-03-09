/// <reference path="./coin.ts" />
/// <reference path="./product.ts" />
/// <reference path="./productFactory.ts" />

enum VendingMachineSize {
    small = 6,
    medium = 9,
    large = 12
}

class Cell {
    constructor (public product: CocaCola) {}
    stock = ko.observable(3);
    sold = ko.observable(false);
}

class VendingMachine {
    paid: KnockoutObservable<number> = ko.observable(0);
    selectedCell: KnockoutObservable<Cell> = ko.observable(new Cell(new CocaCola));
    cells: KnockoutObservableArray<Cell> = ko.observableArray([]);
    acceptedCoins: Quarter[] = [new Quarter()];
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

    acceptCoin = (coin: Quarter): void => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.Value);
    }

    pay = (): void => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return;
        }
        let currentPaid = this.paid();
        // Use rounding trick to compensate for floating point value rounding differences
        this.paid(Math.round(((currentPaid - this.selectedCell().product.price)*100))/100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    }
}
