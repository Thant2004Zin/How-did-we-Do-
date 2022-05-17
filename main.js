import './style.scss'
import 'atropos/css'
// import 'bootstrap/scss/bootstrap.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import Atropos from 'atropos';

const myAtropos = Atropos({
    el: '.my-atropos',
    // rest of parameters
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px; z-index : 1020;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
    if (innerWidth < 700){
        cursor.classList.remove("cursor")
    }
})