 document.addEventListener('DOMContentLoaded',function(){

// delete a list
function deleteElement(e,element=""){
  if(e.target.className == element){
  const li = e.target.parentElement;
  list.removeChild(li);
  }
}
const list = document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
  deleteElement(e,element="delete")
})
// edit book name
list.addEventListener('click',function(e){
  if(e.target.className == 'edit'){
      
  const li = e.target.parentElement;
  const bookTitle = li.firstElementChild.textContent

  document.getElementById('myinput').value = String(bookTitle)
  deleteElement(e,element="edit")

  }
})
// add book
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
  e.preventDefault(); 
  const value = addForm.querySelector('input[type="text"]').value;
  if (value != ''){
  //  create elements to be added to the list
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deletebtn =  document.createElement('span');
  const editbtn = document.createElement('span');
  
  // add content
  deletebtn.textContent = 'delete'
  bookName.textContent = value
  editbtn.textContent = 'edit'
  
  // add classes
  bookName.classList.add('name');
  deletebtn.classList.add('delete');
  editbtn.classList.add('edit')
  
  //  append elements to dom
  li.appendChild(bookName);
  li.appendChild(deletebtn);
  li.appendChild(editbtn);
  list.appendChild(li);
  addForm.querySelector('input[type="text"]').value=""
}
})

// hide list
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
  if(hideBox.checked){
    list.style.display ="none";
  }else{
    list.style.display="initial";
  }
})

// filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach(function(book){
    const title = book.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      book.style.display ="block";
    }else{
      book.style.display="none";
    }
  })

})

 })
