//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os users
    refreshOcorrences(); //adicionar função de validação ao formulário
        
   function refreshOcorrences() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/approvals/')
        .then(res => res.json())
        .then((out) => {
            $('#table_aprove tbody').empty();
            $.each(out, function(index, reques) {
                $('#table_aprove tbody').append(
                    `
                <tr>
                    <td>${reques.id_request}</td>
                    <td>${"requ_type tipologia"}</td>
                    <td>${"requ_type nível"}</td>
                    <td>${reques.content}</td>
                    <td>${reques.adress}</td>
                    <td>${reques.hour}</td>
                    <td>${reques.description}</td>
                    <td><button onclick="aprove(this)"  class="fas fa-check-circle trash_costumize" name="aprove"></button></td>
                    <td><button onclick="getRowIndex(this)"  class="fas fa-trash-alt trash_costumize" name="lixo"></button></td>
                </tr>
            ` 
            );
            //contaLinhas();
            
            });
        }).catch(err => console.error(err));
    }
};