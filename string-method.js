//string methods

var str = 'hello fabevy'

//1.charAt return the index value it's no negative value
console.log(str.charAt(2));

//2.at() return the index value \ negative value use
console.log(str.at(-2));

//3.charcodeat return the askey value
console.log(str.charCodeAt(3));

//4.codePointAt return the askey value
console.log(str.codePointAt(3));

//5.concat() merhe the two strings

var str1 = "hii students"
console.log(str.concat(str1));

//6.includes() it return the boolean value
var str2 = 'fabevy';
console.log(str.includes(str2));

//7.endwith() it return the true false value ,it have two parameter (value,indexposition)

var obj = 'hii how are you welcome'
console.log(obj.endsWith('welcome'));

//8.indexof() it returns the index value
console.log(obj.indexOf('e'));

//9.lastIndexOf
console.log(obj.lastIndexOf('e'));

//10.match it returns the array,index

// let c = 'i love mahi';
// let d = 'h'
// console.log(c.match(d));

//11.lowercase
console.log(str.toLowerCase());
//12.uppercase
console.log(str.toUpperCase());

//13.trim()
let string = ' my love mahi bhai ';
console.log(string.trim());

//14.trimStart()
console.log(string.trimStart());

//15.trimEnd()
console.log(string.trimEnd());

//16.tostring

let num = 135;
console.log(typeof num);
let n = num.toString();
console.log(typeof n);

//17.slice()

let d = 'the number of string'
let x = d.slice(3,10);
console.log(x);

//18.split()

let b = 'rahul';
console.log(b.split(''));

//19.replace()

console.log(d.replace('of','tea'));

//20.replaceAll()

console.log(d.replaceAll('of','you'));

//21.


