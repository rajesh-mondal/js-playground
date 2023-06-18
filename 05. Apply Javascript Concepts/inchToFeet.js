function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const myInches = 89;
const myFeet = inchToFeet(myInches);
console.log('my feet:', myFeet);