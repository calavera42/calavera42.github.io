const anim = "/-\\|"
let stage = 0;

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
    const loader = document.getElementById("loader");
    const mainpg = document.getElementById("main")
    const phrase = document.getElementById("phrase");

    let counter = 0;

    const ticker = setInterval(() => {
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