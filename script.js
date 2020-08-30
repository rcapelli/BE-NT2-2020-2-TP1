const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
let uncheckedCountSpan = document.getElementById('unchecked-count')

const table = document.createElement('table')
const thead1 = document.createElement('th')
const thead2 = document.createElement('th')
const thead3 = document.createElement('th')
const thead4 = document.createElement('th')
const tr = document.createElement('tr')

function addTodo() {
  let tarea = prompt(message())
  if(tarea === "" || tarea === null){
    alert(messageError())
  }else{
    var newH = confirm("Quieres agregar: " + tarea + "?")
    if(newH){
      checkStatus()
      newElement(tarea)
      addItemCount()
    }
  }
}

function createTable(){
  
  table.classList.add('table', 'text-center')
  list.append(table)
  table.append(tr)
  tr.append(thead1,thead2,thead3,thead4)
  thead1.innerText = "Tareas"
  thead2.innerText = "Descripción"
  thead3.innerText = "¿La hiciste?"
  //table.append(tbody)
}
function addItemCount(){
  let count = parseInt(itemCountSpan.innerText)
  count++
  itemCountSpan.innerText = count.toString()

  let unchecked = parseInt(uncheckedCountSpan.innerText)
  unchecked++
  uncheckedCountSpan.innerText = unchecked.toString()
}

function searchUnchecked(){
  let qCheckbox = document.getElementsByName('checkbox')
  parseInt(uncheckedCountSpan)
  uncheckedCountSpan++
  document.getElementById('unchecked-count').innerText = uncheckedCountSpan
}

function refreshState(checkbox){
  let count = parseInt(uncheckedCountSpan.innerText)
    if(checkbox.checked == true){
      count--
    }else{
      count++
    }
  uncheckedCountSpan.innerText = count.toString()
}

function checkStatus(){
  if(list.firstChild == null){
    createTable()
  }
}

function message(){
  return "Ingresá una nueva tarea a realizar"
}

function messageError(){
  return "No ingresaste nada!"
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
            td.innerHTML = "<textarea rows='5' cols='45' placeholder='descripcion de la tarea'>"
            break;    
        case 2:
            td.innerHTML = "<input type='checkbox' name='checkbox' onClick='refreshState(this)'>"
            break;
      }
    }
}

