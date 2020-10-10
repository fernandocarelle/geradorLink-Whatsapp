const { result } = require("lodash");

function mascaraTel(){

    let tel = document.getElementById('telefone').value;

    tel=tel.replace(/\D/g,"");             //Remove tudo o que não é dígito
    tel=tel.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    tel=tel.replace(/(\d)(\d{4})$/,"$1-$2");    //Coloca hífen entre o quarto e o quinto dígitos
    
    document.getElementById('telefone').value = tel;
}


function gerarLink(){
    let number = document.getElementById('telefone').value;
    number=number.replace(/\D/g,"");
    let text = document.getElementById('texto').value;
    let result;

    if(number.length < 10) {
        alert("Número inválido");
        window.location.reload();

    } else {
        if(text.length > 0) {
            result = 'https://api.whatsapp.com/send?phone=+55' + number + '&text=' + text;
        } else {
            result = 'https://api.whatsapp.com/send?phone=+55' + number;
        }
    
        document.getElementById('linkGerado').style.display = 'flex';
        document.getElementById('copia').style.display = 'flex';
        document.getElementById('novoLink').style.display = 'flex';
        document.getElementById('linkGerado').value = result;
    
        document.getElementById('telefone').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('linkButton').style.display = 'none';
    }

}

function gerarNovoLink() {
    document.getElementById('linkGerado').style.display = 'none';
    document.getElementById('copia').style.display = 'none';
    document.getElementById('novoLink').style.display = 'none';
    
    document.getElementById('telefone').value = "";
    document.getElementById('texto').value = "";

    document.getElementById('telefone').style.display = 'flex';
    document.getElementById('texto').style.display = 'flex';
    document.getElementById('linkButton').style.display = 'flex';
}

function copiarTexto(){
    //captura o elemento input
    const inputTest = document.querySelector("#linkGerado");
    //seleciona todo o texto do elemento
    inputTest.select();
    //executa o comando copy
    //aqui é feito o ato de copiar para a area de trabalho com base na seleção
    document.execCommand('copy');
    alert("Link copiado com sucesso!")

    document.getElementById('linkGerado').style.display = 'none';
    document.getElementById('copia').style.display = 'none';
    document.getElementById('novoLink').style.display = 'none';
    
    document.getElementById('telefone').value = "";
    document.getElementById('texto').value = "";

    document.getElementById('telefone').style.display = 'flex';
    document.getElementById('texto').style.display = 'flex';
    document.getElementById('linkButton').style.display = 'flex';
};