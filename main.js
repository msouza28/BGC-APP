function mostrarDescricao(id) {
    var descricao = document.querySelector('#' + id + ' + .descricao');
    descricao.style.display = 'block';
    if (id === 'kojima') {
        descricao.style.left = '0'; 
        descricao.style.right = 'auto'; 
    }
}

function ocultarDescricao(id) {
    var descricao = document.querySelector('#' + id + ' + .descricao');
    descricao.style.display = 'none';
}