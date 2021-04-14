// console.log("hello")
const titleField = document.querySelector('#title');
const btn  = document.querySelector('#btn');

btn.addEventListener('click',function(){
    console.log(titleField.value);
})