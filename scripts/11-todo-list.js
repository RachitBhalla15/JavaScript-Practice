const todoList=[{
  name:'make dinner', 
  dueDate: '2022-12-22'
},{
  name:'wash dishes',
  dueDate:'2022-12-22'}
];

  renderTodoList();

function renderTodoList(){
    let todolistHTML='';

    for(let i=0; i<todoList.length; i++){
      const todoObject=todoList[i];
      const name=todoObject.name;
      const dueDate=todoObject.dueDate;
      //destructuring :const {name}=todoObject; //shortcut for name 
      const html=`
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i},1);
        renderTodoList();
      " class="delete-button"> Delete </button>
      `;  //generating html using js
      todolistHTML+=html;
    }

    document.querySelector('.js-todo-list').innerHTML=todolistHTML;
}

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name= inputElement.value;
  
  const dateInput=document.querySelector('.js-due-date');
  const dueDate=dateInput.value;

  todoList.push({
    name: name,
    dueDate: dueDate});//shorthand we can write just name, dueDate

  inputElement.value='';
  renderTodoList();
}