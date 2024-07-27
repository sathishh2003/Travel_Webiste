const header = document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky",window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

navbar.style.display = 'none';

menu.onclick = () => {

        if(navbar.style.display === 'none'){
            navbar.style.display = 'block';
        }
        else{
            navbar.style.display = 'none';
        }

    };

   /*  contactUs */

const btn = document.getElementById("btn");
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');

btn.addEventListener('click',()=>{

    

    if(name.value === ""){
        name.style.border = "2px solid red";
    }
    else if(mobile.value === ""){
        mobile.style.border = "2px solid red";
    }
    else if(email.value === ""){
        email.style.border = "2px solid red";
    }
    else{
    window.location.href = 'index.html';
    }

    if(name.value !== ""){
        name.style.border = "none";
    }
    if(mobile.value !== ""){
        mobile.style.border = "none";
    }
    if(email.value !== ""){
        email.style.border = "none";
    }
});

