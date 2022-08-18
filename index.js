// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
   cats.push('Ralph');
   return cats;
}
function destructivelyPrependCat(){
    cats.unshift("Bob");
    return cats;
}
function destructivelyRemoveFirstCat(){
    cats.shift();
    return cats;
}
function destructivelyRemoveLastCat(){
    cats.pop();
    return cats;
}
function appendCat(){
    let newCats = [...cats, "Broom"];
    console.log(newCats);
    return newCats;
}
function prependCat(){
    let newCats1 = ["Arnold",...cats];
    console.log(newCats1);
    return newCats1;
}
function removeLastCat(){
    let newRemovedCatlist = cats.slice(0,2);
    return newRemovedCatlist;
}
function removeFirstCat(){
   let newCatList = cats.slice(1);
   return newCatList;
}
