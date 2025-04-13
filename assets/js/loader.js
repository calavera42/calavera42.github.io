const anim = "/-\\|"

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const mainpg = document.getElementById("main")
    const phrase = document.getElementById("phrase");

    let counter = 0;

    const ticker = setInterval(() => {
        phrase.textContent = anim[(counter++) % anim.length];
    }, 100);

    document.fonts.ready.then(() => {
        mainpg.style.visibility = "visible";
        loader.remove();
        
        clearInterval(ticker);
    });
})