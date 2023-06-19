const lyrics = 'Memories bring back, memories bring back you';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars);

/* slice */
const partial = lyrics.slice(5, 8);
console.log(partial); 

/* substring */
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

/* join */
const lines = [
    'Memories bring back', 
    'memories bring back you'
];

const fullLine = lines.join('.');
console.log(fullLine);