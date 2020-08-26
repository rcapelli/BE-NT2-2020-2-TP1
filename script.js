const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  checkStatus()

  var tarea = prompt(message())
  if(tarea != null)
  var newH = confirm("Quieres agregar: " + tarea + "?")
  if(newH){
    newElement(tarea)
  }
}

function checkStatus(){
  if(list.firstChild == null){
    var table = document.createElement("table")
    var thead1,thead2,thead3 = document.createElement("th")
    thead1.innerText = "asd1"
    thead2.innerText = "qwe2"
    thead3.innerText = "qweq3"
    table.appendChild(thead1)
    table.appendChild(thead2)
    table.appendChild(thead3)

  }
}

function message(){
  return "Ingresá una nueva tarea a realizar"
}

function newElement(tarea){
  var li = document.createElement("li")
  //list.innerHTML = "<li>"+tarea+"</li>"
  list.appendChild(li)
  li.innerText = tarea
}



