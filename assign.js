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


// Examples showing difference in function,object and method

function name(){
    var name="Sharon";
    console.log(name);
    
}
name();

var plant={
    name:"Sunflower",
    leaves:"Green",
    flower:"yellow",   

}
console.log(plant.flower);

var house={
    roof:"Ironsheet",
    door:"mettalic",
    windows:4,
    price:500,
    // total cost of the windows
    windowsCost:function (windows,price) {
        totalCost=price*windows;
       return this.windowsCost=totalCost}
        
    }
    
house.windowsCost(500,4);
console.log(" A " + ""+ "house made of  " +house.roof +" " +  "roof" + "" +  "and" + " ",house.door +" "+ "door"   )
