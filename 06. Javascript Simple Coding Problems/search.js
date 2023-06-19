const lyrics = 'Memories bring back, memories bring back you';
const searchString = 'bacK';
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
//in one line
const doesExistOneLine = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

/* IndexOf */
console.log(lyrics.indexOf('backok'));
if(lyrics.indexOf('back') !== -1){
    console.log('Exists inside the string');
}else{
    console.log('Can not find it');
}

/* startsWith */
// console.log(lyrics.startsWith('Memories'));
const lyricsStarts = lyrics.startsWith('Memories');
console.log(lyricsStarts);

/* endsWith */
const fileName = 'memories.pdf';
const fileEnd = fileName.endsWith('.pdf');
console.log(fileEnd);