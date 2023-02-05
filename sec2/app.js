/*
const a = document.getElementById('task-title')
console.log(a)
let lis = document.getElementsByTagName('li')
console.log(lis)
lis[3].style.color = 'red'
lis[3].textContent = 'fragwürdig'

lis = Array.from(lis);
lis.forEach((li, index)=>{
    li.style.color ='green';
    li.textContent=`${index} Fritzens Fritz`;
    lis.reverse()
    lis[3].textContent= 'ASDFGHZUJIKLO'
})

const i = document.querySelectorAll('ul.collection li.collection-item')
console.log(i)

let v;
const l = document.querySelector('ul.collection');
const lit = document.querySelector('li.collection-item:first-child');
k = l.children
console.log('k',k);

//1- element
//2- attribute
//3- text node
//8- commet
//9- document itself
//10- doctype

k[0].textContent = 'alabaster'
k = l.firstElementChild;
console.log(k.style.color='red')


list.firstChild
list.firstElementChild

list.lastChild
list.lastElementChild


//count child elements

console.log(l.childElementCount)

console.log(l.parentNode.parentNode.parentNode)
//parentElementNode
console.log(l.nextSibling.nextSibling.parentNode.parentElement.attributes)
console.log(l.nextElementSibling)

const lix = document.createElement('li');
lix.className = 'collection-item';
lix.id = 'new-item';
lix.setAttribute('title','NewItem');
let xx = document.createTextNode('Helllloooow Woooorld')
lix.appendChild(xx);

const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>'

lix.appendChild(link)

console.log(lix)
document.querySelector('ul.collection').appendChild(lix);


const newHead = document.createElement('h2');
newHead.id = 'task-title';
newHead.appendChild(document.createTextNode('Task List'));


const oldHead = document.getElementById('task-title');
const cardAction = document.querySelector('.card-action');

cardAction.replaceChild(newHead, oldHead);

document.querySelector('.fa-remove').addEventListener('click', function(e){
    e.preventDefault()
    console.log('helllloooo', e,e.bubbles)
});


const clearBtn = document.querySelector('.aaa');
const card = document.querySelector('.card');
const head = document.querySelector('h5');
*/


const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const head = document.querySelector('h5');
//taskInput.value = '';



//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dbclick', runEvent);


function run(e){
    e.preventDefault()
    console.log(`eventtype: ${e.type}`);
    console.log('sdfghjklüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüüü');
    console.log(taskInput.value);
    head.innerText=taskInput.value;
    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('del-item')
    }
};

console.log('asdfghjklöppppppppppppppppppppppp');
form.addEventListener('submit', run);