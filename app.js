const buttonAll =document.getElementById('btnAll');
const buttonCake=document.getElementById('btnCake');
const buttonCupcake=document.getElementById('btnCupcake');
const buttonSweet=document.getElementById('btnSweet');
const buttonDoughnut=document.getElementById('btnDoughnut');
const storecake=document.querySelectorAll('.store-item');

buttonAll.addEventListener('click',function(e){
    e.preventDefault();
    storecake.forEach((cakes) => {
        cakes.style.display='block';
    })
})

buttonCake.addEventListener('click',function(e){
    e.preventDefault();
    storecake.forEach((cakes) => {
        if(cakes.classList.contains('cakes')){
            cakes.style.display='block';
        }else{
            cakes.style.display='none';
        }
    })
})

buttonCupcake.addEventListener('click',function(e){
    e.preventDefault();
    storecake.forEach((cakes) => {
        if(cakes.classList.contains('cupcakes')){
            cakes.style.display='block';
        }else{
            cakes.style.display='none';
        }
    })
})

buttonSweet.addEventListener('click',function(e){
    e.preventDefault();
    storecake.forEach((cakes) => {
        if(cakes.classList.contains('sweets')){
            cakes.style.display='block';
        }else{
            cakes.style.display='none';
        }
    })
})

buttonDoughnut.addEventListener('click',function(e){
    e.preventDefault();
    storecake.forEach((cakes) => {
        if(cakes.classList.contains('doughnuts')){
            cakes.style.display='block';
        }else{
            cakes.style.display='none';
        }
    })
})

const textBox = document.querySelector('#search-cake');

textBox.addEventListener('input',FilterCakes);

function FilterCakes(){
    const textBoxvalue = document.querySelector('#search-cake').value.toLowerCase().trim();
    storecake.forEach((cakes) => {
        if (cakes.textContent.includes(textBoxvalue)){
            cakes.style.display = 'block';
        }else{
            cakes.style.display = 'none';
        }
    })
}
