function initAdicionarRemover() {
    const iconeI = document.querySelectorAll('.main-card');

    function adicionarClasseAtivo(event) {
        const i = event.currentTarget.querySelectorAll('i');

        i.forEach(function(element) {
            element.classList.add('ativo')
        })
    }
    
    function removerClasseAtivo(event) {
        const i = event.currentTarget.querySelectorAll('i')
        
        i.forEach(function(element) {
            element.classList.remove('ativo')
        })
    }
    
    iconeI.forEach((element) => {
        element.addEventListener('mouseover', adicionarClasseAtivo)
        element.addEventListener('mouseout', removerClasseAtivo)
    })
}
initAdicionarRemover()