let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.toggle('active');
    cartbtn.classList.remove('active');
    searchbtn.classList.remove('active');
}

let cartbtn=document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=() =>{
    cartbtn.classList.toggle('active');
    navbar.classList.remove('active');
    searchbtn.classList.remove('active');    
}

let searchbtn=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=() =>{
    searchbtn.classList.toggle('active');
    navbar.classList.remove('active');
    cartbtn.classList.remove('active');
}

window.onscroll=()=>{
    navbar.classList.remove('active');
    cartbtn.classList.remove('active');
    searchbtn.classList.remove('active');
}