function validarForm()
{
    var validacao = true

    var conteudo_nome = document.forms['meuForm'].campo_nome.value;
    if(conteudo_nome =="")
    {
        alert("É necessario preencher o Nome.");
        meuForm.campo_nome.focus();
        validacao = false;
        return;

    }

    var email = document.forms['meuForm'].campo_email.value;
    if(email =="" || email.indexOf('@')==-1 || email.indexOf('.')==-1)
    {   
        alert("É necessario colocar um email válido");
        meuForm.campo_email.focus();
        validacao = false;
        return;
    }

    var mensagem = document.forms['meuForm'].campo_message.value;
    if(mensagem == "")
    {
        alert("É necessario escrever uma mensagem");
        validacao = false;
        return;
    }

    if(validacao == true)
    {
        document.forms['meuForm'].submit(alert("dados enviados"));
    }

}