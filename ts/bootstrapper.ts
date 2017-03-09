/// <reference path="vendingMachine.ts" />

let machine = new VendingMachine();
Big.DP = 2;
machine.size = VendingMachineSize.medium;
ko.applyBindings(machine);
