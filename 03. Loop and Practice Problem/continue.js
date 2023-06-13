var numbers = [45, 87, 89, 56, 32, 51, 25, 39];

for(var i = 0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
        continue; //skip or go to next round
    }
    console.log(number);
}