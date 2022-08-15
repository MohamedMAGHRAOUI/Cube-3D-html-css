const barre = document.querySelector('#barre');
const nav_a = document.querySelectorAll('nav a');

function animationBarre(e){
    barre.style.left=e.offsetLeft + "px";
    barre.style.width=e.offsetWidth + "px";
    
}

nav_a.forEach(element=>{
    element.addEventListener('mousemove', (e)=>{
        animationBarre(e.target);
    })

})