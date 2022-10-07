// 1. Создайте инпут и при помощи этого инпута меняйте цвет бэкграунда на тот,
//  который будет прописан в этом 
// инпуте(учесть, что может быть передан не только текст, но еще и HEX, а также rgb)
// let input = document.querySelector('#input')
// let body = document.querySelector('body')
// input.addEventListener("input", color)
// function color(){
//     body.style.backgroundColor = `${input.value}`
//     // console.log(input.value)
// }

// 2. Создайте блок и две кнопки для него(left и right), 
// кнопка лефт отвечает за прокрутку блока в лево на 180 градусов,
//  а right аналогично вправо(используйте transition для отслеживания результата)
// let block = document.querySelector('.block')
// let left = document.querySelector('.left')
// let right = document.querySelector('.right')
// right.addEventListener('click', () => {
//     block.style.transition = '2s'
//     block.style.transform = "rotate(180deg)"
// })
// left.addEventListener('click', () => {
//     block.style.transition = '2s'
//     block.style.transform = "rotate(-180deg)"
// })


// 3. Математическое округление. Создайте инпут,
//  который будет округлять десятичное число в зависимости от его десятичной части к примеру, 
// если ввести 5,7 вывести 6, если 5,4 вывести 

// let input = document.querySelector('#input')
// input.addEventListener('input',() => {
// console.log(Math.round(input.value))
// })


// 4. Реализуйте логику контактной книжки, 
// то есть, реализовать CR(создание и просмотр)
//  Контакт должен иметь поля(name, lastName, age, address).
//  Использовать bootstrap, json-server;(дизайн на ваше усмотрение)

// let block = document.querySelector('.block')
let button = document.querySelector('.button')
// button.addEventListener('click', user)

let buttonadd = document.querySelector('.add')
buttonadd.addEventListener('click',BBOT)
// function useradd(){
//     block.innerHTML = ''
// block.innerHTML += (`<div class="card" style="width: 18rem;">
// <div class="card-body">
// <input type="text"  class="name">
// <input type="text" class="lastname">
// <input type="text" class="age">
// <input type="text" class="address">
// </div>
// </div>`)
// }
// let pname = prompt('введите имя')
// let plastName = prompt('введите lastName')
// let page = prompt('введите age')
// let paddress = prompt('введите address')
const api = 'http://localhost:9000/contacts'

  let nameinp = document.querySelector(".name")
let lastNameinp = document.querySelector(".lastname")
let ageinp = document.querySelector(".age")
let addressinp = document.querySelector(".address")
async function BBOT() {

    let obj = {
      name: nameinp.value,
      lastName: lastNameinp.value,
      age: ageinp.value,
      address: addressinp.value,
    };
    fetch(api, {
      method: "Post",
      body: JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
    });
  }


//   let userObj = {
//     username:usernameInp.value,
//     age:ageInp.value,
//     password:passwordInp.value,
//     isAdmin:isAdminInp
// }
// fetch(USERS_API,{
//     method:'Post',
//     body: JSON.stringify(userObj),
//     headers:{
//         "Content-Type":"application/json;charset=utf-8"
//     }
// })