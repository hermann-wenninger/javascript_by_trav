const a = document.getElementById('task-title')
console.log(a)
let lis = document.getElementsByTagName('li')
console.log(lis)
lis[3].style.color = 'red'
lis[3].textContent = 'fragwürdig'

lis = Array.from(lis);
lis.forEach((li)=>li.style.color ='green')