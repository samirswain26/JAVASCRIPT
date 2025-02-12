let Myobject = {
    IN : "India",
    USA : "United States Of America",
    UK : "United Kingdom"
}

for (const key in Myobject) {
    // console.log(`${key} is shortcut for ${Myobject[key]}`);
}

let myarray = ["js", "ruby", "C++", "py"]
for (const key in myarray) {
    console.log(key);     // It will give the key value i.e index value only of an array.
    console.log(myarray[key]);   // It prints each index (key) and its corresponding value (myarray[key]) separately as individual lines.
}



let map = new Map()
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("UK", "United Kingdom")

for (const key in map) {
    console.log(key);
    // The "for...in" loop iterates over the enumerable properties of an object. However, Map in JavaScript is not an object with enumerable properties; it is a special iterable collection. Therefore, "for...in" does not work on Map.
}
