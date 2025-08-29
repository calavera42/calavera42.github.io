const anim = "/-\\|"

let stage = 0;

let loader;
let mainpg;
let ticker;

function done() 
{
    stage++;

    if(stage == 2)
    {
        mainpg.style.visibility = "visible";
        loader.remove();
        
        clearInterval(ticker);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const phrase = document.getElementById("phrase");
    const img = document.querySelector('img')
    loader = document.getElementById("loader");
    mainpg = document.getElementById("main")

    let counter = 0;

    ticker = setInterval(() => {
        phrase.textContent = `Baixando recursos ${anim[(counter++) % anim.length]}`;
    }, 100);

    if (img.complete) {
        done()
    } else {
        img.addEventListener('load', done)
    }

    document.fonts.ready.then(() => {
        done()
    });
})