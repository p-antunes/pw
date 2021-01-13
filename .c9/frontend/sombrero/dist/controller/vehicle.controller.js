//quando inicia a página faz
window.onload = function() {
    //chama a função para atualizar os users
    refreshVeiculos(); //adicionar função de validação ao formulário
    validator();
    document.getElementById("formNewUser").onsubmit = function(e) {
        //validação do formulário ao submeter
        validator();
    };
    
    
        
    function refreshVeiculos() {
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/')
        .then(res => res.json())
        .then((out) => {
            $('#table_veiculos tbody').empty();
            $.each(out, function(index, vei) {
                $('#table_veiculos tbody').append(
                    `
                <tr>
                    <td name="regist">${vei.regist}</td>
                    <td>${vei.capacity}</td>
                    <td>${vei.fuel_average}</td>
                    <td>${vei.fuel_type}</td>
                    <td>${vei.brand}</td>
                    <td>${vei.model}</td>
                    <td><button onclick="addMaterial(this)" class="fas fa-plus-circle add_costumize"></button></td>
                    <td><button onclick="removeMaterial(this)" class="fas fa-minus-circle add_costumize"></button></td>
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






