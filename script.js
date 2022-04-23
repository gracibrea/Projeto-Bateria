//EVENTOS

//identificar quando a tecla é pressionada e executar uma função
document.body.addEventListener('keyup', (event) => {
    //console.log(event.code.toLowerCase()); //código da tecla pressionada
    playSound(event.code.toLowerCase()); //código da tecla pressionada colocado em lowercase para coincidir com o id da tecla e tocar o som específico
   
})

//selecionar o botão composer e adicionar evento de click
document.querySelector('.composer button').addEventListener('click', () => {
//ler o que foi inserido no input
    let song = document.querySelector('#input').value;
//verificar se a variável song não está vazia
    if(song !== '') {
//transformar o input em array para tocar na sequencia determinada
        let songArray = song.split('');
    }
//reproduzir o que está no input
    playComposition(song);
});

//FUNÇÕES

//identificar a tecla pressionada cfe id do som a ser tocado, de forma dinâmica, por variável
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
//mostrar na tela a tecla que está sendo pressionada
    let keyElement = document.querySelector(`div[number-key="${sound}"]`)

//valida se foi encontrado um audioElement e toca
    if(audioElement) {
//resolve o delay da tecla 5 que tem um som mais longo, fazendo com que, mesmo apertando várias vezes, rapidamente, ela volte imediatamente à posição 0 e saia o som. Sem ele a tecla só toca o som, depois que termina de soar totalmente o prato
        audioElement.currentTime = 0;
        audioElement.play();
    }

//valida se foi encontrado a keyElement
    if(keyElement) {
//adiciona a classe active (do CSS) para mostrar na tela
        keyElement.classList.add('active'); 
//depois de 300 milessegundos, remove a classe active
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(songArray) {
//1 pegar o array, 2 dar um loop no array para tocar cada um dos sons da composição num intervalo de 250 entre itens
    let wait = 0;
    for(let songItem of songArray) {
        setTimeout(() =>{
            playSound(`numpad${songItem}`);
        }, wait);

        wait += 250;
    }
}


//APRENDIZADO
/*
Eventos -> eventListener


