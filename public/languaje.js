document.addEventListener("DOMContentLoaded", ()=>{
    let languaje = localStorage.getItem('idioma');

    if(languaje ==='english'){
        window.location = "./en/index.html";
    }
})

function changeEnglish(){
    localStorage.setItem('idioma', 'english');
    window.location = "./en/index.html";
}