// remove duplicate items from an array
const names = ['warner', 'khawaja', 'smith', 'travis', 'green', 'warner', 'smith' ];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);