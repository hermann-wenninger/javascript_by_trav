//debugger;
//console.time('start');
/*
let a = 32;
let b = 42;
let x = {a:123,b:3455,c:567};
Object.freeze(x)
console.log(Object.isFrozen(x))
console.log('x',x)
console.log(a+b);
alert('12345678');

console.log('dsfghjkl');
console.log({a:123,b:1456});
console.log([1,2,3,4,5,6]);
console.table({a:123,b:3455,c:567,d:(a)=> a*a});

console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
*/

//data types
/*
let s = "string" //string
let n = 1234    //number
let bo = true    //bool
let z = undefined // undefined
let nn = null //object
let a = [1,2,3,4,5]
let sym = Symbol()




console.log(s,n,bo,z,nn,a,sym)
console.log('typeof--->',typeof s, typeof n, typeof bo, typeof z, typeof nn, typeof a,typeof sym)
console.log(sym)

//konversion
let val = String(a); //object to string
val = String(new Date())
val = (4567).toString()
val = (1).toLocaleString()

val = Number(true)
val = parseFloat("1111.234")
val = parseInt("1234.3456")
console.log(val)*/
/*
const n1 = 1000;
const n2 = 20;
let val = n1 + n2;
console.log(val);

const l = Math
console.log(l)

let a = 'hmanner'
let b = 'wennering is a programmer developer and artist'

let val = `my name is ${a} ${b}`
console.log(val)
console.log('my name is',a.concat(' ', b))
console.log(a.indexOf("a"))
console.log(a.lastIndexOf('n'))
console.log(a.substring(1,3))
console.log(a.slice(1,4))
console.log(b.split(' '))
console.log(b.replace('artist', 'poor artist'))
console.log(b.includes('sdfghj'))




let hello = ()=>'hello man'
let name = 'wenn hmann'
let age = 59
let job = 'web developer'
let city = 'munich'
let html =
`<ul>
<li> Name:${name} </li>
<li> Job: ${job} </li>
<li> City: ${city} </li>
<li> Age: ${age} </li>
<li>${234 + 345} </li>
<li> ${hello()}</li>
<li> ${age > 50 ? 'a good and erfahrener programer' :'jongster'}</li>
</ul>`


document.body.innerHTML = html
console.log(html)

const arr = [22,33,44,55,66,77]
const arr2 = new Array(22,33,44,55,66,77)
const fruit = ['Äpfel', 'Birnen','Bananen']
const mix = [9922,33,{a:234,b:567},'guten abend', 'gute nacht', new Date()]

console.log(Array.isArray(mix), mix.length,mix[mix.length -1])

mix.push(1234567890)
let aaa = arr.unshift(9777777)
aaa = arr.unshift(88888)
console.log(mix)
console.log('aaaa unshift',aaa)
console.log(arr)
console.log(mix.pop())
console.log(mix.pop())
console.log(mix.pop())
console.log(mix.shift())
console.log(mix.splice(1,3))
console.log(mix.reverse())
console.log(mix.concat(fruit))
console.log(mix.concat(fruit).sort())
console.log(arr.sort((x,y)=> x-y))

const person = {
    fname: 'hmann',
    lname: 'wenni',
    age: 59,
    email: 'info@wennhmann.de',
    job:['betreuer', 'artist', 'developer'],
    recap: function(){return this.fname},
}

let val = person.fname;
console.log(val)
console.log(person.recap())

console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");

setTimeout(console.clear(),13000)

let xyz
const today = new Date();
const birthday = new Date(12-23-1973);
console.log(today)
console.log( typeof today)
console.log(birthday)

let x = today.getMonth()+1;
x = today.getHours();
x = today.getMinutes();
x = today.getMilliseconds();
console.log(x);

const color = 'red';
switch(color){
    case 'blue': console.log('asdfghjkl');
    case 'red': console.log('asdfghjkl');break;*/
    
((name)=>console.log("qwerttzuio",name))('hmannnnnn');

const todo = {
    add:function(o){
        console.log('aaaaaaaaaaaaaaaaaaaaa',o)
    }
}
todo.add(333);

for(let i = 0; i<22; i++){
    console.log(i, 'SDFGHJK')
    if(i%3 === 0){
        console.log(33333333333)
    }
}
/*
let k =0;
while(k<12){
    console.log('fffffffffuck',k);
    k+20;
}
*/

const user ={
    a:1,
    b:2,
    d:444,
    e:555,
    f:8888,
}
for(let x in user){
    console.log(x,':', user[x])
}

console.log(window.navigator)