let v1="Manan";
var v2="Hello";
let S="India"

console.table([v1,v2,S]);
console.log(null>0);
console.log(null==0);
console.log(null>=0);
console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
const str=new String("Manan");
console.log(str[0]);
console.log(str.toUpperCase());
console.log(str.length);
console.log(str.charAt(2));
console.log(str.indexOf('p'));


//!DATES
let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toISOString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString());
let mycreartedDate=new Date("01-14-2024");
console.log(mycreartedDate.toLocaleString());
let timestamp=Date.now();
console.log(timestamp);
console.log(mycreartedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newdate=new Date();
console.log(newdate.getMonth()+1);
console.log(newdate.getDay());
console.log(newdate.toLocaleString('default',{
    weekday:"long"
}));


//!ARRAYS
const arr1=[1,2,3,4];
const myarr=new Array(1,2,3,4);
console.log(myarr[2]);
myarr.push(5);
console.log(myarr);
myarr.unshift(9);    //*to add element at start
console.log(myarr);  //* to pop the element from start
myarr.shift();
console.log(myarr);
console.log(myarr.includes(9))
console.log(myarr.indexOf(4));
const newArr=myarr.join();
console.log(myarr);
console.log(newArr););