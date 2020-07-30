console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');
const rbutton = document.querySelector('#rbtn');

button.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text ,`Item Added`);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
    
}
rbutton.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text, `Item removed`);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
list.removeChild(document.getElementsByTagName('li')[0]);
document.forms.myForm.reset();
}