// Aguardar o carregamento completo da página
window.addEventListener('load', function () {
    let currentIndex = 0; // Começa na primeira imagem
    const totalItems = 5; // Total de imagens no carrossel
  
    // Função para alterar a imagem no carrossel
    function changeImage() {
      currentIndex = (currentIndex + 1) % totalItems; // Vai para o próximo item e volta ao primeiro após o último
      const radios = document.querySelectorAll('input[name="position"]');
      radios[currentIndex].checked = true; // Marca o botão de rádio correspondente
    }
  
    // Altere o carrossel a cada 3 segundos (3000ms)
    setInterval(changeImage, 3000);
  });
  