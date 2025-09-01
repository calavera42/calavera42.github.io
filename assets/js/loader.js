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

    if (img == undefined || img.complete) {
        done()
    } else {
        img.addEventListener('load', done)
    }

    document.fonts.ready.then(() => {
        done()
    });

    const ref = atob("Y2VpZmFkb3IsYWJpc21vLG1vcnRlLHBlY2Fkbw==").split(",");
    const audio = new Audio("../assets/audio/rmbl.mp3");
    audio.loop = true;

    const inputs = document.querySelectorAll(".word-input");

    inputs.forEach((el, idx) => {
        el.addEventListener("input", () => {
            const v = el.value.trim().toLowerCase();
            if (ref.indexOf(v) !== -1) {
                el.classList.add("shake");

                audio.play();

                if (idx < inputs.length - 1) {
                    inputs[idx + 1].focus();
                }

                const all = Array.from(inputs).map(x => x.value.trim().toLowerCase());
                const unique = [...new Set(all.filter(x => ref.indexOf(x) !== -1))];
                if (unique.length === ref.length) {
                    document.dispatchEvent(new Event("workDone"));
                }
            }
        });
    });
})