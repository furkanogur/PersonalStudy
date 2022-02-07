//UI variables

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');

//call event listeners
eventListeners();


function eventListeners() {
    // submit event
    form.addEventListener('submit', addNewItem);

    //delete an item
    taskList.addEventListener('click', deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click', deleteAllItems)
}

//add newitem
function addNewItem(e) {

    if (input.value === '') {
        alert('add new item')
        return;
    };
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(input.value));

    //create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></li>'

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);

    //clear input
    input.value = '';

    e.preventDefault();

}

//delete an item

function deleteItem(e) {
    if (confirm('are you sure ?')) {
        if (e.target.className === 'fas fa-times') {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

function deleteAllItems(e) {
    if (confirm('are you sure ?')) {


        //taskList.innerHTML = '';

        for (let i = 0; i < taskList.children.length; i) {
            if (taskList.children[i].nodeType === 1) {
                taskList.children[i].remove();
            }
        }
    }
    e.preventDefault();
}