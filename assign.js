var fruit={
    name:"Oranges",
    price:30,
    quantity:2,
    fruitCost:function(price,quantity){
        totalCost=price*quantity;
        return this.fruitCost=totalCost}     

    }

fruit.fruitCost(30,2);
console.log(fruit.quantity  + " " + fruit.name + " " +  "for KES " + totalCost.toFixed(2));