1. Create one interface of Inventory.
2. Define Purchase,reorder and displaystock.

- interface Inventory {
    purchase(quantity: number);
    reorder(stock:number);
    displayStock(stock:number);
  }

3. Create class Retailshop which implments Inventory.
- create the constructor of it.

- class RetailShop implements Inventory {
    stock:number
    constructor(stock:number){
        this.stock = stock;
    }

4. Purchase :
- if the stock is less than 5 than reorder the stock,100 quantity.
- if the stock less than our quantity than display 'Stock is not available'.
- And reorder 100 quantity.
- else stock is available than deduct the purchase quantity from available stock.

    purchase(quantity: number) {
        
        if (this.stock < 5){
            this.reorder(100);
        }
        else{
            if(this.stock<quantity){
                console.log('Stock is not Available');
                this.displayStock(this.stock);
                this.reorder(100);
            }
            else{
                this.stock -= quantity;
                this.displayStock(this.stock);
            }
        }
    }

5. Reorder :
- If stock is not sufficient than display 'Reorder raised'.
- Add 100 quantity in stock than display updated stock.

reorder(stock: number) {
        console.log('Reorder riased');
        this.stock +=stock;
        this.displayStock(this.stock);
        console.log('Stock Updated');
    }

6. displayStock :
- Display Available stock.

displayStock(stock:number){
        console.log(`Available Stock is : ${stock}`);
    }

7. Define the stock 100 at initial state.
- var myShop = new RetailShop(100);
