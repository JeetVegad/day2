
interface Inventory {
    purchase(quantity: number);
    reorder(stock:number);
    displayStock(stock:number);
  }
  
  class RetailShop implements Inventory {
    stock:number
    constructor(stock:number){
        this.stock = stock;
    }
  
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
  
    reorder(stock: number) {
        console.log('Reorder riased');
        this.stock +=stock;
        this.displayStock(this.stock);
        console.log('Stock Updated');
    }
  
    displayStock(stock:number){
        console.log(`Available Stock is : ${stock}`);
    }
  }
  
  var myShop = new RetailShop(100);
  myShop.purchase(70);
  myShop.purchase(40);
  myShop.purchase(20);