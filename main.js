document.addEventListener("DOMContentLoaded", function () {

    // Função para rolar suavemente até uma seção 
    function scrollToSection(secaoID) {
        
        // Obtém a posição da seção 
        var posicao = document.getElementById(secaoID).offsetTop;

        // Faz a página rolar suavemente até a posição da seção
        window.scrollTo({
            top: posicao,
            behavior: 'smooth'
        });
    }

    // Obtém todos os links de navegação
    var linkNav = document.querySelectorAll('.menu a');

    // Adiciona um ouvinte de evento para cada link de navegação
    linkNav.forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            var secao = this.getAttribute('href').slice(1); // Obtém o identificador da seção
            scrollToSection(secao); // Chama a função scrollToSection com o identificador da seção
        });
    });
});


