let addBtn = document.getElementById('btn');
let listInput = document.getElementById('msginput');
let tasklist = document.getElementById('list');
loadList()

function addList() {
    let _list = listInput.value.trim(); 
    if (_list) {
        createList(_list); 
        listInput.value = '';
        
        saveList()

    } else {
        alert('Please add a list'); 
    }
}

addBtn.addEventListener("click", addList);

function createList(list) { 
    
    let listitem = document.createElement('li');
   
    listitem.textContent = list;
   
   let deletBtn= document.createElement('box')
   deletBtn.textContent="X"
   deletBtn.className='deletList'
   
   listitem.appendChild(deletBtn)
    tasklist.appendChild(listitem);

    deletBtn.addEventListener('click' ,function(){
        tasklist.removeChild(listitem)
        saveList()
    })
}
function saveList(){
  let listArry= []
  tasklist.querySelectorAll('li').forEach(function(item){
    listArry.push(item.textContent.replace('Delete' , '').trim())
  })
  localStorage.setItem('listArry' ,JSON.stringify(listArry))
}

function loadList(){
    listArry =JSON.parse(localStorage.getItem ('listArry') || [])
    listArry.forEach(createList)
}