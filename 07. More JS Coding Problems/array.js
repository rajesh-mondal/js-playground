const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {i: 121, class: 11, name: 'Smith'};
const friends = [13, 14, 11, 17, 21, 16, 15, 20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
//check array using isArray
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(21));

//concat
const newFriendsAge = [12, 13, 11, 15];
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);