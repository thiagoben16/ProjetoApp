const botoes = document.querySelectorAll('#card-principal-btn');

botoes.forEach((botao)=>{
    
    botao.addEventListener('pointerdown', (e)=>{
        e.preventDefault();
        botao.classList.add('pressionado');

    })
    botao.addEventListener('pointerup', (e)=>{
        e.preventDefault();
        botao.classList.remove('pressionado');
    })

    botao.addEventListener('pointercancel', (e)=>{
        e.preventDefault();
        botao.classList.remove('pressionado')
    })

})