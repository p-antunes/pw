var tabela = document.getElementById("table_veiculos");
var linhas = tabela.getElementsByTagName("tr");

let nVeiculos = document.getElementById("nveiculos");
let count = 0;

function contaLinhas() {

for(let i = 0; i < linhas.length; i++){
     
    count++;
}

nVeiculos.innerHTML = (count - 1) + " Veículos Registados"; 
count = 0;    
}

//eliminar veiculo
function getRowIndex(element) {
    
    Swal.fire({
        title: 'Tem a certeza?',
        text: "Não será possível reverter a remoção!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#681517',
        cancelButtonColor: '#d333333',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Remover'
}).then((result) => {
  if (result.isConfirmed) {
        var rowJavascript = element.parentNode.parentNode;
        var rowIndex = rowJavascript.rowIndex;
    
        let id = document.getElementById("table_veiculos").rows[rowIndex].cells[0].innerHTML;
    
        Deleteveibd();
    
        async function Deleteveibd() {
     
            await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/' + id, { method: "DELETE" });
        }
    
    document.getElementById("table_veiculos").deleteRow(rowIndex);
    contaLinhas();
                                
            Swal.fire({
                title: 'Removido!',
                text: "O veículo foi removido com sucesso",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
        }
    });
    
  } //fim da funcao eliminar veiculo
  
 let fechar = document.getElementById("close");
 let form = document.getElementById("form_addMat");
 
 fechar.addEventListener("click", function(){
     
    Swal.fire({
        title: 'Fechar?',
        text: "As alterações não vão ser guardadas",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#681517',
        cancelButtonColor: '#d333333',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Fechar'
    }).then((result) => {
        if (result.isConfirmed) {
    
            document.getElementById("add_mat").style.display = "none";
            window.location.replace("veiculos_registados.html");
        }
    }); 
});


//funcao que abre a pagina para adicionar materiais ao veiculo e carrega os materiais no select
function addMaterial(element) {
    
    document.getElementById("add_mat").style.display = "block"; 
    
    var rowJavascript = element.parentNode.parentNode;
    var rowIndex = rowJavascript.rowIndex;
    let idVei = document.getElementById("table_veiculos").rows[rowIndex].cells[0].innerHTML;
    
    
    
    fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat1').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat2').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat3').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat4').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat5').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat6').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat7').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat8').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat9').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/')
        .then(res => res.json())
        .then((out) => {
            $.each(out, function(index, mat) {
                $('#mat10').append(
                    $("<option></option>")
                    .text(mat.id_material + " " + mat.material_type)
            ); 
            
            });
        }).catch(err => console.error(err));
        
    //adicionar os materiais ao veiculo na base de dados
    let btnAddMATtoVEI = document.getElementById("btn_add_mat");
    
    btnAddMATtoVEI.addEventListener("click", function() {
        
        let material1 = String(document.getElementById("mat1").value);
        let mat1 = material1.match(/\d+/g).map(Number);
        
        let idMat1 = parseInt(mat1, 10);
        
        let dados = {};
         
        dados.regist = idVei;
        dados.id_material = idMat1;
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehimats/", {
             headers: { 'Content-Type': 'application/json' },
             method: 'POST',
             body: JSON.stringify(dados)
        }).then(function(response) {

            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                
                throw Error(response.statusText);
                
            }else {
                 
                Swal.fire({
                    title: 'Submetido!',
                    text: "Material submetido no veículo com sucesso",
                    icon: 'success',
                    confirmButtonColor: '#681517'
                }); 
                
                
            }
         }).then(function(result) {
             console.log(result);
         }).catch(function(err) {
            Swal.fire({
                title: 'Erro!',
                text: "Erro de Submissão",
                icon: 'error',
                confirmButtonColor: '#681517'
            });
             
            console.error(err);
            
         });
         
        let dadosput = {};
        
        let avail = "Ocupado";
         
        dadosput.availability = avail;
        
        console.log(dadosput);
         
         fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/avail/" + idMat1,  {
             headers: { 'Content-Type': 'application/json' },
             method: 'PUT',
             body: JSON.stringify(dadosput)
        }).then(function(response) {

            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                
                throw Error(response.statusText);
                
            }else {
                document.getElementById("add_mat").style.display = "none";
                window.location.replace("veiculos_registados.html");
            }
         }).then(function(result) {
             console.log(result);
         }).catch(function(err) {
            Swal.fire({
                title: 'Erro!',
                text: "Erro de Atualização do Material",
                icon: 'error',
                confirmButtonColor: '#681517'
            });
             
            console.error(err);
            
         });
         
    
    }); 
    
}//fim da funcao que abre a pagina para adicionar materiais ao veiculo e carrega os materiais no select

//adicionar e remover selects conforme preciso
    let addinput = document.getElementById("maisinputs");

    var n = 3;

    addinput.addEventListener("click", function() {
        
        
        if(n < 11){
        
            let id = "divmat" + n;
            document.getElementById(id).style.display = "block";
            n++;
        }  
    });
    
    let removeinput = document.getElementById("menosinputs");
        
        let letid3 = document.getElementById("divmat3");
        let letid4 = document.getElementById("divmat4");
        let letid5 = document.getElementById("divmat5");
        let letid6 = document.getElementById("divmat6");
        let letid7 = document.getElementById("divmat7");
        let letid8 = document.getElementById("divmat8");
        let letid9 = document.getElementById("divmat9");
        let letid10 = document.getElementById("divmat10");
        
    
        
        removeinput.addEventListener("click", function() {
            
            if(letid10.style.display == "block"){
                n--;
                letid10.style.display = "none";
            } 
            
            else if(letid9.style.display == "block"){
                n--;
                letid9.style.display = "none";
            }
            
            else if(letid8.style.display == "block"){
                n--;
                letid8.style.display = "none";
            }
            
            else if(letid7.style.display == "block"){
                n--;
                letid7.style.display = "none";
            }
            
            else if(letid6.style.display == "block"){
                n--;
                letid6.style.display = "none";
            }
            
            else if(letid5.style.display == "block"){
                n--;
                letid5.style.display = "none";
            }
            
            else if(letid4.style.display == "block"){
                n--;
                letid4.style.display = "none";
            }
            
            else if(letid3.style.display == "block"){
                n--;
                letid3.style.display = "none";
            }
         
        });
        
    //Remover materiais da tabela dos veiculos_materiais
    function removeMaterial(element) {
    
    var rowJavascript = element.parentNode.parentNode;
    var rowIndex = rowJavascript.rowIndex;
    let idVei = document.getElementById("table_veiculos").rows[rowIndex].cells[0].innerHTML;
    let tableMAt = document.getElementById("remove_mat");
    
    //FAZER UM FETCH COM O ID DO VEICULO PARA VER SE ELE ESTÁ NA TABELA E SE NÃO ESTIVER PARA RETORNAR ISTO
    
        
        fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com//vehimats/' + idVei)
        .then(res => res.json())
        .then((out) => {
            $('#table_materiais_assVEi tbody').empty();
            $.each(out, function(index, vei) {
                let material_type = "";
                
                fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com//materials/' + vei.id_material)
                .then(res => res.json())
                .then((out) => {
                    $.each(out, function(index, mat) {
                
                        material_type = mat.material_type;
                        
                        if(vei.id_material !== undefined){
                
                $('#table_materiais_assVEi tbody').append(
                    `
                <tr>
                    <td id="idMatRem">${vei.id_material}</td>
                    <td>${material_type}</td>
                    <td><button onclick="deleteFromVei(this)" class="fas fa-trash-alt trash_costumize"></button></td>
                </tr>
            `    
            );
            tableMAt.style.display = "block";  
            }else{
                Swal.fire({
                title: 'Atenção!',
                text: "Este veículo não tem materiais associados",
                icon: 'info',
                confirmButtonColor: '#681517'
            });
            
            tableMAt.style.display = "none";
            }
            
            });
        }).catch(err => console.error(err));
            
        });
    
            
        }).catch(err => console.error(err));
        
    }
    
        
    //FUNCAO ELIMINAR OS MATERIAIS DE UM VEICULO    
    function deleteFromVei(element) {
    
    Swal.fire({
        title: 'Tem a certeza?',
        text: "Não será possível reverter a remoção!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#681517',
        cancelButtonColor: '#d333333',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Remover'
}).then((result) => {
  if (result.isConfirmed) {
        var rowJavascript = element.parentNode.parentNode;
        var rowIndex = rowJavascript.rowIndex;
    
        let id = document.getElementById("table_materiais_assVEi").rows[rowIndex].cells[0].innerHTML;
    
        DeleteMatFROMVei();
    
        async function DeleteMatFROMVei() {
     
            await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehimats/' + id, { method: "DELETE" });
        }
    
    document.getElementById("table_materiais_assVEi").deleteRow(rowIndex);
    contaLinhas();
                                
            Swal.fire({
                title: 'Removido!',
                text: "O material foi removido com sucesso do veículo",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
            
        
        let dadosput = {};
        
        let avail = "Disponível";
         
        dadosput.availability = avail;
        
        console.log(dadosput);
         
         fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/avail/" + id,  {
             headers: { 'Content-Type': 'application/json' },
             method: 'PUT',
             body: JSON.stringify(dadosput)
        }).then(function(response) {

            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                
                throw Error(response.statusText);
                
            }else {
            }
         }).then(function(result) {
             console.log(result);
         }).catch(function(err) {
            Swal.fire({
                title: 'Erro!',
                text: "Erro de Atualização do Material",
                icon: 'error',
                confirmButtonColor: '#681517'
            });
             
            console.error(err);
            
         });    
        
        }
          
    });
    
  } //fim da funcao eliminar veiculo
    
    
    
    
    



