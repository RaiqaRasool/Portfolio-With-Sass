const menu_btn=document.querySelector(".menu-btn");
const hamberger=document.querySelector(".menu-btn-burger");
const nav_menu=document.querySelector(".nav-menu");
const nav_menu_items=document.querySelectorAll(".nav-menu-item");



function toggling_menu(){
    hamberger.classList.toggle("open"); 
    nav_menu.classList.toggle("open");
    nav_menu_items.forEach(item=>item.classList.toggle("open"));

    
}
menu_btn.addEventListener("click",toggling_menu);