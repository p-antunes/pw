//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os users
    refreshAdmins(); //adicionar função de validação ao formulário
    refreshManagers();
    
    function refreshAdmins() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/admins/')
        .then(res => res.json())
        .then((out) => {
            $('#table_users tbody').empty();
            $.each(out, function(index, admin) {
                $('#table_users tbody').append(
                    `
                <tr>
                    <td>${admin.id_admin}</td>
                    <td>${admin.name}</td>
                    <td>${admin.date_birth}</td>
                    <td>${admin.nationality}</td>
                    <td>${admin.phone_nr}</td>
                    <td>${admin.address}</td>
                    <td>${admin.cc}</td>
                    <td>${"Administrador"}</td>
                    <td><button onclick="edit_user(this)" class="fas fa-edit trash_costumize"></button></td>
                    <td><button onclick="getRowIndex(this)" class="fas fa-trash-alt trash_costumize"></button></td>
                </tr>
            ` 
            );
            
            
            });
        }).catch(err => console.error(err));
    }
    
    function refreshManagers() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/managers/')
        .then(res => res.json())
        .then((out) => {
            
            $.each(out, function(index, manager) {
                $('#table_users tbody').append(
                    `
                <tr>
                    <td>${manager.id_manager}</td>
                    <td>${manager.name}</td>
                    <td>${manager.date_birth}</td>
                    <td>${manager.nationality}</td>
                    <td>${manager.phone_nr}</td>
                    <td>${manager.address}</td>
                    <td>${manager.cc}</td>
                    <td>${"Gestor"}</td>
                    <td><button onclick="edit_user(this)" class="fas fa-edit trash_costumize"></button></td>
                    <td><button onclick="getRowIndex(this)" class="fas fa-trash-alt trash_costumize"></button></td>
                </tr>
            ` 
            );
            contaLinhas();
            
            });
        }).catch(err => console.error(err));
    }
    
};