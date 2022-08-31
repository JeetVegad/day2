const togglebutton = document.querySelector('#togglebutton');
const menu = document.querySelector('#menu');

togglebutton.addEventListener('click' , () =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden');
    }
})