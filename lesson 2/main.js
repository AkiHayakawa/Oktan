// async function func(){
//    let res = await fetch();
// console.log(res);
// await fetch()
// };

// function func1(){
//     fetch()
//     console.log('hello');
// }

// function func(){
//     fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(res => console.log(res))
//     console.log("hello");
// }
// func()

//  async function func(){
//   await  fetch('https://jsonplaceholder.typicode.com/posts/')
//     .then(res => console.log(res))
//     console.log("hello");
// }
// func()

// async function func(){
//     let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
//     let data = await res.json()
//     console.log(data);
// };
// func();

// try/catch
// try {
//     let res = fetch('https://jsonplaceholder.typicode.com/posts/')
//     let data = res.json()
//     console.log(data);
//     console.log('hello');
// } catch(e){
//     console.log(e);
// }
// console.log('The world');

// crud json-server
// create
function addProduct() {
  let title = prompt("Enter title");
  let price = +prompt("Enter price");
  let product = {
    title: title,
    price: price,
  };
  fetch("http://localhost:8000/products", {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  alert();
}
// read
async function readProducts() {
  let res = await fetch("http://localhost:8000/products");
  let data = await res.json();
  let list = document.querySelector("ul");
  list.innerHTML = "";
  data.forEach(element => {
    list.innerHTML += `<li style="border-bottom: 2px solid black; width:20%;">
    <p>ID: ${element.id}</p>
    <p>Title: ${element.title}</p>
    <p>Ptice:${element.price}</p>
    </li>`
  });
}
// update 
function updateProduct(){
    let productId = +prompt('Enter Product id')
    let newTitle = prompt('Enter new title')
    let newPrice = prompt('Enter new price')
    fetch(`http://localhost:8000/products/${productId}`,{
        method: 'PATCH',
        body:JSON.stringify({title: newTitle,price:newPrice}),
    headers:{'Content-Type':"application/json;charset=utf-8"}})

alert('Ok')
readProducts();

}
// delete 
async function deleteProduct(){
    let productId = +prompt('Enter product ID')
    await fetch(`http://localhost:8000/products/${productId}`,{
        method:"Delete"
    })
    alert("ok")
    readProducts()
}
