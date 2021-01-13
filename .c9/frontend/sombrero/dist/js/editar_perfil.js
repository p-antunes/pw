let editar_perfil = document.getElementById("editar_perfil");
let guardar = document.getElementById("guardar_perfil");

guardar.style.display = "none";

var guardarVisivel = false;

let name = document.getElementById("user_name");
let email = document.getElementById("user_email");
let adress = document.getElementById("user_adress");
let cpostal = document.getElementById("user_postal");
let local = document.getElementById("user_local");
let birth = document.getElementById("user_birthday");
let natio = document.getElementById("user_natio");
let cc = document.getElementById("user_cc");
let contact = document.getElementById("user_contact");
let degree = document.getElementById("user_degree");
let pass = document.getElementById("user_pass");
let cargo = document.getElementById("cargo");


//aviso de q o user n pode alterar o cargo 
cargo.addEventListener("click", function() {
    if(guardarVisivel == true){
        
        Swal.fire({
            title: 'Atenção!',
            text: "Não pode alterar o seu cargo!",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
});

//funçao paraa validar o email
function ValidateEmail(email) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[gmail]+(?:\.[com]+)*$/;
    var mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[hotmail]+(?:\.[com]+)*$/;
    var mailformat2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[outlook]+(?:\.[com]+)*$/;
    var mailformat3 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[outlook]+(?:\.[pt]+)*$/;
    
    if(email.value.match(mailformat)) {
        
        return true;
        
    } else if(email.value.match(mailformat1)){
        
        return true;
        
    } else if(email.value.match(mailformat2)){
        
        return true;
        
    } else if(email.value.match(mailformat3)){
        
        return true;
        
    } else {
        
        return false;
        
    }
}

//torna os inputs editaveis
editar_perfil.addEventListener("click", function() {
    
    name.disabled = false;
    email.disabled = false;
    adress.disabled = false;
    cpostal.disabled = false;
    local.disabled = false;
    birth.disabled = false;
    natio.disabled = false;
    cc.disabled = false;
    contact.disabled = false;
    degree.disabled = false;
    pass.disabled = false;
    
    editar_perfil.style.display = "none";
    guardar.style.display = "block";
    guardarVisivel = true;
    
});

guardar.addEventListener("click", function() {
    
    //validacoes de inputs vazios
    if(name.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha o seu nome",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(email.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha o seu email",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(adress.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua morada",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(cpostal.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha o seu código postal",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(local.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua localidade",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(birth.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua data de nascimento",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    else if(natio.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua nacionalidade",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    else if(cc.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha o seu cartão de cidadão",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(contact.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha o seu contacto",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(degree.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua formação",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(pass.value == ""){
        Swal.fire({
            title: 'Atenção!',
            text: "Preencha a sua password",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    //validaçao de dados corretos
    else if(contact.value.length < 9){
        Swal.fire({
            title: 'Atenção!',
            text: "Forneça um contacto correto",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    else if(cc.value.length < 8){
        Swal.fire({
            title: 'Atenção!',
            text: "Forneça um número de identificação correto",
            icon: 'warning',
            confirmButtonColor: '#681517'
        });
    }
    
    //validaçao do email
    else if(ValidateEmail(email) == false) {
        Swal.fire({
            title: 'Erro',
            text: "Email inválido!",
            icon: 'error',
            confirmButtonColor: '#681517'
        });
        document.email.focus();
    }
    
    else{
       
    name.disabled = true;
    email.disabled = true;
    adress.disabled = true;
    cpostal.disabled = true;
    local.disabled = true;
    birth.disabled = true;
    natio.disabled = true;
    cc.disabled = true;
    contact.disabled = true;
    degree.disabled = true;
    pass.disabled = true;
    
    guardar.style.display = "none";
    editar_perfil.style.display = "block";
    
    }
    
});