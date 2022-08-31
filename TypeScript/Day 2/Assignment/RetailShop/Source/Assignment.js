var RetailShop = /** @class */ (function () {
    function RetailShop(stock) {
        this.stock = stock;
    }
    RetailShop.prototype.purchase = function (quantity) {
        if (this.stock < 5) {
            this.reorder(100);
        }
        else {
            if (this.stock < quantity) {
                console.log('Stock is not Available');
                this.displayStock(this.stock);
                this.reorder(100);
            }
            else {
                this.stock -= quantity;
                this.displayStock(this.stock);
            }
        }
    };
    RetailShop.prototype.reorder = function (stock) {
        console.log('Reorder riased');
        this.stock += stock;
        this.displayStock(this.stock);
        console.log('Stock Updated');
    };
    RetailShop.prototype.displayStock = function (stock) {
        console.log("Available Stock is : ".concat(stock));
    };
    return RetailShop;
}());
var myShop = new RetailShop(100);
myShop.purchase(70);
myShop.purchase(40);
myShop.purchase(20);
