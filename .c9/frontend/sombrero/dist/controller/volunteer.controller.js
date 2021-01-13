//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os users
    refreshVoluntarios(); //adicionar função de validação ao formulário
    validator();
    
    
    
        
    function refreshVoluntarios() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/voluntarys/')
        .then(res => res.json())
        .then((out) => {
            $('#table_volun tbody').empty();
            $.each(out, function(index, vol) {
                $('#table_volun tbody').append(
                    `
                <tr>
                    <td>${vol.id_volunt}</td>
                    <td>${vol.name}</td>
                    <td>${vol.age}</td>
                    <td>${vol.email}</td>
                    <td>${vol.education}</td>
                    <td>${vol.phone_nr}</td>
                    <td>${vol.nationality}</td>
                    <td><button onclick="getRowIndex(this)" class="fas fa-trash-alt trash_costumize"></button></td>
                </tr>
            ` 
            );
                contaLinhas();
            });
        }).catch(err => console.error(err));
    }
};






