// setInterval()
// let i = 0 ;
// const id = setInterval(() => {
//     console.log(`hello ${++i}`)
// }, 1000);
// setTimeout(() =>{
//     clearInterval(id);
// },5000);


// PROMISSES
// pending начальное состояние, не исполнен и не оклонен
// fulfilled успешно
// rejected отклоненно
// const myFirstPRomise = new Promise((resolve,reject)=> {
// resolve('someValue');//SUCCESS
// reject('failure  reason');// ERROR
// });
//  const p = new Promise((resolve,reject) => {
//     let a = 1+5;
//     if(a==3){
//         resolve("success");
//     }else{
//         reject('fail')
//     }
//  })
//  p
//  .then((message) => {
// console.log("OK" , message);
//  })
//  .catch((err) => {
//     console.log('NE OK', err)
//  })
//  .finally(() => {
//     console.log("WORKED")
//  })

// let age = 29;
// let newPromise = new Promise(function(resolve, reject){
//     if(age <= 21){
//         resolve({age,status: true})
//     }else{
//         reject({age,status:false})
//     }
// })

// newPromise
// .then(result => console.log(result, 'OK'))
// .catch(err => console.log(err,"NE Ok"))
// .finally(() => console.log('FInish'))


// ?REQUESTS

// fetch
// fetch("https://rickandmortyapi.com/api/character")
// .then(result => result.json())
// .then(data => console.log(data.results))
// .catch(err => console.log(err))

// mini mini project 
function render(count = 50){
    let container = document.querySelector('.container')
    container.innerHTML = "";
    fetch(`https://meme-api.herokuapp.com/gimme/50`) //promise
    .then(result => result.json())//promise
    .then(data => data.memes.forEach((item) => {
      container.innerHTML += `
      <div class="card" style="width: 18rem;">
      <img src="${item.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Author: ${item.author}</h5>
        <a href="${item.postLInk}" target="_blank" class="btn btn-primary">Detail</a>
      </div>
  </div>`  
    }))


}
render()
let updatePageBtn =document.querySelector('#update-btn');
updatePageBtn.addEventListener('click', () => {
    render()
})

let selectCount = document.querySelectorAll('.dropdown-item')
selectCount.forEach((item) => {
    item.addEventListener('click', (e) => {
        render(e.target.innerText)
    })
})



