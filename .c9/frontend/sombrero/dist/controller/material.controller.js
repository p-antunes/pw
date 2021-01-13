//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os users
    refreshMaterials(); //adicionar função de validação ao formulário
        
    function refreshMaterials() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $('#table_material tbody').empty();
            $.each(out, function(index, mat) {
                $('#table_material tbody').append(
                    `
                <tr>
                    <td>${mat.id_material}</td>
                    <td>${mat.material_type}</td>
                    <td class='disponibilidade' id='disponibilidade'>${mat.availability}</td>
                    <td><button onclick="getRowIndex(this)" class="fas fa-trash-alt trash_costumize"></button></td>
                </tr>
            ` 
            );
            contaLinhas();
            
            });
        }).catch(err => console.error(err));
    }
    
    
    
    
    //função de validação
    function validator() {
        let validator = new Validator(document.querySelector('form[name="formNewUser"]'), function(err, res) {
            if (res) {
                saveUsers();
            }
        }, {
            rules: {
                password: function(value) {
                    return (value === document.getElementById("pwd").value);
                }
            },
            messages: {
                en: {
                    password: {
                        incorrect: "Password didn't match"
                    }
                }
            }
        });
    }
    
    
};






