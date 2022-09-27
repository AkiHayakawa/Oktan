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


// ?
