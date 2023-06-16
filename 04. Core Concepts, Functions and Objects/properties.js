var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// console.log(shoppingCart);

/* when you know the specific property name,
use dot notation to get the property value */
var penCount = shoppingCart.pen;
// alternative way
var penCount2 = shoppingCart['pen'];

//for get only properties name
var properties = Object.keys(shoppingCart);
console.log(properties);
//for get only property values
var propertyValues = Object.values(shoppingCart);
console.log(propertyValues);

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property value
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart['mouse'] = 29;
console.log(shoppingCart);
shoppingCart[propertyName] = 89;
console.log(shoppingCart);