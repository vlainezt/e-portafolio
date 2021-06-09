document.addEventListener("DOMContentLoaded", ()=>{
    let languaje = localStorage.getItem('idioma');

    if(languaje ==='spanish'){
        window.location = "../index.html";
    }
})

function changeSpanish(){
    localStorage.setItem('idioma', 'spanish');
    window.location = "../index.html";
}