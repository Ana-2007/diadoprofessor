document.addEventListener("DOMContentLoaded", function () {
    var mensagem = document.getElementById("mensagem");
    var mostrarMensagemBtn = document.getElementById("mostrarMensagem");

    mostrarMensagemBtn.addEventListener("click", function () {
        mensagem.innerHTML = "Feliz dia a você, professor, que sempre fará parte da nossa história." +
         "Professor, obrigado por tornar possível, conjuntamente, a construção do conhecimento." +
          "A você que me ensina a ver o mundo em todas as suas belezas e possibilidades," +
         "feliz dia dos professores! Obrigado por nos conduzir à jornada do saber." +
    });
});

