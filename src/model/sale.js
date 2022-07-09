export default class Sale {
    constructor(description, quantity, unitPrice, total, saleDate) {
        this.description = description;
        this.quantity= quantity;
        this.unitPrice = unitPrice;
        this.total = total;
        this.saleDate = saleDate;
    }
}