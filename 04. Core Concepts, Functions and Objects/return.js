function add(num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    // console.log(sum);
    return sum;
}

var total = add(80, 20);
console.log('total:', total);

// another example
function bringBurger(money){
    var burgerPrice = 100;
    var quantity = money / burgerPrice;
    return quantity;
}

myTaka = 400;
var burgers = bringBurger(myTaka);
console.log('Eating burgers:', burgers);