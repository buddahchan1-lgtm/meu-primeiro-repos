const janela = document.getElementById('janela');
const btnAbrir = document.getElementById('botaoAbrir');
const btnFechar = document.getElementById('botaoFechar');

 btnAbrir.onclick = function() {
    janela.style.display = 'block';
}

 btnFechar.onclick = function() {
    janela.style.display = 'none';
}