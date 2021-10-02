const menu = document.querySelector('.ham');
const nav = document.querySelector('.nav');
let menuOpen = false;

menu.addEventListener('click', ()=>{
    if(!menuOpen){
        menu.classList.add('open');
        menuOpen=true;
        nav.style.right='0px';
    }
    else{
        menu.classList.remove('open');
        menuOpen=false;  
        nav.style.right='-800px';
    }
});


