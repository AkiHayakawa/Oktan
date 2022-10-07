 // Import stylesheets


// Запросы, XMLHttpRequest, AJAX.  Домашняя работа

// Создать контактную книжку на основе Todo List.
// Функционал должен включать в себя:

// 1. Создание контакта (Имя, Фамилия, номер телефона)
// let btn = document.querySelector('.btn')
// let nameUser = document.querySelector('.name')
// let lastName = document.querySelector('.lastName')
// let number = document.querySelector('.number')
// let userList = document.querySelector('.user')

// const USER_API = 'http://localhost:8000/users'

// btn.addEventListener('click',BBOD)
// userList.style.display = "none"
// async function BBOD(){
//  userList.style.display = "block"
//  let obj = {
//         name:nameUser.value,
//         lastName:lastName.value,
//         number:number.value,
        
//     }
//     let btnAdd = document.querySelector('.btnAdd')
// btnAdd.addEventListener('click',add)
//     function add(){
//     console.log( typeof(number.value))
//     fetch(USER_API, {
//         method: 'POST',
//         body: JSON.stringify(obj),
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         }
//     })

// }
// nameUser.value =""
// lastName.value =""
// number.value = ""
   
// }
// 1. Создание контакта (Имя, Фамилия, номер телефона)
// 2. Удаление контакта
// 3. Список контактов на главном экране
// 4. Использовать json-server.
// 5. Редактирование контакта
// 6. Пагинация(дополнительно)
// 7. Поиск(дополнительно)

const USERS_API = 'http://localhost:8000/users';

// inputs group
let username = document.querySelector('.name');
let lastName = document.querySelector('.lastName');
let number = document.querySelector('.number');
let btnAdd = document.querySelector('.btnAdd')
btnAdd.addEventListener('click',add)

async function add(){
    let Obj = {
        name: username.value,
        lastName:lastName.value,
        number: number.value

    };

    fetch(USERS_API, {
        method: 'POST',
        body: JSON.stringify(Obj),
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });

    
};
async function render(){
    let productsList = document.querySelector('#products-list');
    productsList.innerHTML= '';
    let res = await fetch(USERS_API);
    let data = await res.json();

    data.forEach(item => {
        productsList.innerHTML += `
        <div class="card m-5" style="width: 18rem;">
                 <div class="card-body">
                <p class="card-text">${item.name}</p>
                <p class="card-text">${item.lastName}</p>
                <p class="card-text">${item.number}</p>
                <a href="#" class="btn btn-info btn-delete" id="${item.id}">DELETE</a>
                <a href="#" class="btn btn-dark btn-update" id="${item.id}">update</a>
            </div>
        </div>
        `
    });
Delete()
};
render();

// delete
async function deleteUser(e){
    let userId = e.target.id;

    await fetch(`${USERS_API}/${userId}`, {
        method: 'DELETE'
    });

    render();
};

function Delete(){
    let btnDelete = document.querySelectorAll('.btn-delete');
    btnDelete.forEach(item => {
        item.addEventListener('click', deleteUser);
    });
};

// update
let btnUpdate = document.querySelector('.btn-update')
let saveUpdate = document.querySelector('.btnUpdate');


async function addUs(e){
    let userId = e.target.id;
    let res = await fetch(`${USERS_API}/${userId}`);
    let Obj = await res.json();
    console.log(Obj)
    username.value = Obj.name;
    lastName.value = Obj.lastName;
    number.value = Obj.number;



    
};

function addEditEvent(){
    let btnEditProduct = document.querySelectorAll('.btn-update');
    btnEditProduct.forEach(item => {
        item.addEventListener('click', addUs);
    });
};

async function saveChanges(e){
    let Obj = {
          id: e.target.id,
          name: username.value,
          lastName: lastName.value,
          number: number.value,
     
    };

    await fetch(`${USERS_API}/${e.target.id}`, {
        method: 'PUT',
        body: JSON.stringify(Obj),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });

    username.value = '';
    lastName.value = '';
    number.value = '';




    render();
};

saveUpdate.addEventListener('click', saveChanges);



// 2. Удаление контакта
// 3. Список контактов на главном экране
// 4. Использовать json-server.
// 5. Редактирование контакта
// 6. Пагинация(дополнительно)
// 7. Поиск(дополнительно)

