//* TODO ELEMAN EKLEME

//* ELEMAN SECİMİ
const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask  =document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");


eventListeners();
function eventListeners(){
    //*submit event
    form.addEventListener("submit",addNewItem);
    //* delete an item
    taskList.addEventListener("click",deleteItem);

  //* delete all item
  btnDeleteAll.addEventListener("click",deleteAll);
}
function addNewItem(e){
   
    if(input.value === ''){
        alert('add new item')
        //console.log("submit");
    }

    //* li olusturma

    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild( document.createTextNode(input.value));
    //*a olusturmak
    const a = document.createElement("a");
    a.className= "delete-item float-right";
    a.href="#";
    a.innerHTML='<i class="fas fa-times"></i>';


    li.appendChild(a);
    taskList.appendChild(li);

    input.value="";


    e.preventDefault();
};

//?  TODO ELEMAN SİLME

function deleteItem(e){
  //  console.log(e.target);
  if(confirm("silmek istediğne eminmisn?")){
    if(e.target.className === "fas fa-times"){
        //console.log(e.target);
        e.target.parentElement.parentElement.remove();
    }
};
e.preventDefault();
}
   
//* tüm elemanları silmek istersek

function deleteAll(e){


  let liste = document.querySelectorAll(".list-group-item");
  if(liste.length>0){
    liste.forEach(function(todo){
        todo.remove();
    });
  }else{
    alert("bir tane todo");
  }
   e.preventDefault();
}