function iniciarContagem(elemento, duracao, audioInt) {
    let tempoRestante = duracao;
    elemento.innerHTML = `T-${String(tempoRestante).padStart(2, '0')}S`;

    const intervalo = setInterval(() => {
        tempoRestante--;
        elemento.innerHTML = `T-${String(tempoRestante).padStart(2, '0')}S`;

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            clearInterval(audioInt);

            elemento.innerHTML = "T-00S";
            if(history.length == 0)
                window.location = "https://calavera.xyz/";
            else
                history.go(-1);
        }
    }, 1000);
    console.log('a')
}

document.addEventListener("DOMContentLoaded", () =>{
    const elementos = document.querySelectorAll('.cntdwn');
    const audio = new Audio("https://calavera.xyz/assets/audio/beep.mp3");

    audio.volume = .15;

    const audioInt = setInterval(() => {
        audio.play();
    }, 1000);
    elementos.forEach(el => iniciarContagem(el, 15, audioInt));
})