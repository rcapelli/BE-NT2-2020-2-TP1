const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
let itemCountSpan = document.getElementById('item-count').innerText
let uncheckedCountSpan = document.getElementById('unchecked-count').innerText

const table = document.createElement('table')
const tbody = document.createElement('tbody')
const thead1 = document.createElement('th')
const thead2 = document.createElement('th')
const thead3 = document.createElement('th')
const tr = document.createElement('tr')

function addTodo() {
  checkStatus()
  var tarea = prompt(message())
  if(tarea != null)
  var newH = confirm("Quieres agregar: " + tarea + "?")
  if(newH){
    newElement(tarea)
  }
  addItemCount()
  searchUnchecked()
}

function addItemCount(){
  parseInt(itemCountSpan)
  itemCountSpan++
  document.getElementById('item-count').innerText = itemCountSpan
}

function searchUnchecked(){
  let qCheckbox = document.getElementsByName('checkbox')
  parseInt(uncheckedCountSpan)
  uncheckedCountSpan++
  document.getElementById('unchecked-count').innerText = uncheckedCountSpan
}



function createTable(){
  
  table.classList.add('table')
  list.append(table)
  table.append(tr)
  tr.append(thead1,thead2,thead3)
  thead1.innerText = "Tareas"
  thead2.innerText = "Descripción"
  thead3.innerText = "¿La hiciste?"
  table.append(tbody)
}


function checkStatus(){
  if(list.firstChild == null){
    createTable()
  }
}



function message(){
  return "Ingresá una nueva tarea a realizar"
}


function newElement(tarea){
  let tr = document.createElement('tr')
  table.appendChild(tr)
  let qTh = document.getElementsByTagName('th').length
    for(let x=0;x<qTh;x++){
    let td = document.createElement("td")
    tr.appendChild(td)
      switch(x){
        case 0:
            td.innerText = tarea
            break;
        case 1: 
            td.innerHTML = "<input type='text' placeholder='descripcion'>"
            break;    
        case 2:
            td.innerHTML = "<input type='checkbox' name='checkbox'>"
      }
  
    }
}

