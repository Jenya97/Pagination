// const todo_task=document.querySelector('.todo_task');
// // const add_todo=document.querySelector('.add_todo');
// // const todoParent=document.querySelector('.todoParent')


// // function createTodo(a){
// //     let div=document.createElement('div');
// //     div.innerHTML=`<input type="checkbox" class="check" ${a.checked && "checked"}>
// //     <input type="text" value="${a.task}" readonly="true" class="todo_item">
// //     <button class="change">change</button>
// //     <button class="delete">delete</button>`
// //     const del=div.querySelector(".delete");

// //     del.addEventListener('click',()=>{
// //       fetch(`https://retoolapi.dev/QIsGql/data/${a.id}`,{
// //        method:'Delete',
// //       })
// //       div.remove()
// //     })
// //      const change=div.querySelector(".change");

// //     change.addEventListener('click',()=>{
      
// //       if( change.previousElementSibling.getAttribute('readonly')){
// //          change.previousElementSibling.removeAttribute('readonly')
// //          change.innerText="save"
// //       }
// //       if(change.innerText=="save" && change.previousElementSibling.value!==a.task){
// //          fetch(`https://retoolapi.dev/QIsGql/data/${a.id}`,{
// //        method:'Patch',
// //        headers:{
// //          "Content-type":"application/json"
// //        },
// //        body:JSON.stringify({task:change.previousElementSibling.value, checked:a.checked})
// //       })
// //       .then(res=>{
// //         change.previousElementSibling.setAttribute('readonly',true)
// //         change.innerText="change"
// //       }
// //    )
// //       }

// //     })
// //      const check=div.querySelector(".check");
// //     check.addEventListener('change',()=>{
// //       fetch(`https://retoolapi.dev/QIsGql/data/${a.id}`,{
// //        method:'Put',
// //        headers:{
// //          "Content-type":"application/json",
// //          "Access-Control-Allow-Origin":"origin",
// //        },
// //        body:JSON.stringify({task:check.nextElementSibling.value, checked:!a.checked})
// //       })
// //     })
// //   todoParent.append(div);

// // }
// // add_todo.addEventListener('click',()=>{
// // if(todo_task.value){
// //     fetch('https://retoolapi.dev/QIsGql/data',{
// //    method:'Post',
// //    headers:{
// //      'Content-type':'application/json'
// //    },
// //    body:JSON.stringify({task:todo_task.value,checked:false})
// //   })
// //   .then(res=>res.json())
// //   .then(newTodo=>createTodo(newTodo))
// // }
// // todo_task.value=''
// // })


// // fetch('https://retoolapi.dev/QIsGql/data')
// // .then(response=>response.json())
// // .then(data=>data.map(item=>createTodo(item)))


// // const todo_task=document.querySelector('.todo_task');
// // // todo_task.addEventListener('focus',()=>{
// // //   todo_task.style.background="red"
// // // })//input mtnel 
// // // todo_task.addEventListener('blur',()=>{
// // //   todo_task.style.background="yellow"
// // // })//inputic durs gal

// // todo_task.addEventListener('input',(e)=>{
// // console.log(e.target.value);
// // })

// const list = [
//     {
//         id:0,
//         name:'iphone 14',
//         img:'./img/iphone14.jpg',
//         price:'799$',
//     },
//     {
//         id:1,
//         name:'iphone 13',
//         img:'./img/iphone13.jpg',
//         price:'699$',
//     },
//     {
//         id:2,
//         name:'iphone 12',
//         img:'./img/iphone12.jpg',
//         price:'599$',
//     },
//     {
//         id:3,
//         name:'iphone 11',
//         img:'./img/iphone11.jpg',
//         price:'499$',
//     },
//     {
//         id:4,
//         name:'iphone X',
//         img:'./img/iphonex.jpg',
//         price:'399$',
//     },
//     {
//         id:5,
//         name:'iphone 8',
//         img:'./img/iphone8.jpg',
//         price:'299$',
//     },
// ]

// const cart={}
// list.map(item=>{
//       let div=document.createElement('div');
//     div.innerHTML=`<h2>${item.name}</h2><button class="add">add</button>`
//     const btn=div.querySelector('.add')
//     btn.addEventListener('click',()=>{
//      if (item.id in cart) {
//     cart[item.id].qty++;
// } else {
//     let cartItem = {
//         ...item,
//         qty: 1
//     };
//     cart[item.id] = cartItem
// }
//     })
//     document.body.append(div)
  
// })

