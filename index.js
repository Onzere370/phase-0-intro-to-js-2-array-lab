// Write your solution here!
    const cats = [
        "Milo",
        "Otis",
        "Garfield",
    ];
    function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
    }
    function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}
    function destructivelyRemoveLastCat(Garfield) {
    cats.pop(Garfield);
}
    function destructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}
    function nondestructivelyAppendCat(Broom) {
       cats.push(Broom);
}
    function nondestructivelyPrependCat(Arnold) {
cats.unshift(Arnold);
}
    function nondestructivelyRemoveLastCat(Garfield) {
cats.pop(Garfield);
}
function nondestructivelyRemoveFirstCat(Milo) {
    cats.shift(Milo);
}
function appendCat(Broom) {
    return[...cats,Broom];
}
function prependCat(Arnold) {
    
    return[Arnold,...cats];
}
function removeLastCat() {
    
        const remove = cats.slice(0,2);
        return remove;
    }
    
        //const remove = cats.slice(Garfield);
        //return remove;
    
    //return [Milo,Otis,Garfield]
    //cats.slice(Garfield);

function removeFirstCat() {
    
        const first = cats.slice(1, 3);
        return first;
    }
    //return [Milo,Otis,Garfield];
   //cats.slice(Milo);
   
