let presentdate = new Date()
console.log(presentdate.toString());
console.log(presentdate.toDateString());
console.log(presentdate.toJSON());
console.log(presentdate.toLocaleDateString());





let memorabledate = new Date(2024, 1, 15)
console.log(memorabledate.toDateString());






let memorableday = new Date(2024, 1, 15, 6, 30);
memorableday.setHours(memorableday.getHours() +12);
console.log(memorableday.toLocaleString());





let createdate = new Date("01-14-2023")
console.log(createdate.toLocaleString());





let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(memorableday.getTime());
console.log(Math.floor(Date.now()/1000));





let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate() +1);
console.log(newdate.getMonth() );
newdate.toLocaleDateString('default', {
    weekday: "long",
} )
