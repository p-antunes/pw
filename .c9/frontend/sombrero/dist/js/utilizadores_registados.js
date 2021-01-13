let tabela = document.getElementById("table_users");
var linhas = tabela.getElementsByTagName("tr");

let nUsers = document.getElementById("nUsers");
let count = 0;

function contaLinhas() {

for(let i = 0; i < linhas.length; i++){
     
    count++;
}

nUsers.innerHTML = (count - 1) + " utilizadores registados"; 
count = 0;    
}

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
            
            let cargo = tabela.rows[rowIndex].cells[7].innerHTML;
    
            let id = tabela.rows[rowIndex].cells[0].innerHTML;
            
      if(cargo == "Administrador"){
              
          deleteAdmin();
      
        
      }else{
        
        deleteManager();
      
      }
    
    async function deleteAdmin() {
     
      await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/admins/' + id, { method: "DELETE" });
    }
    
    async function deleteManager() {
     
      await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/managers/' + id, { method: "DELETE" });
    }
    
            document.getElementById("table_users").deleteRow(rowIndex);
            contaLinhas();
                                
            Swal.fire({
                title: 'Removido!',
                text: "O utilizador foi removido com sucesso",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
        }
    })
    
}

function edit_user(element){
  
  var rowJavascript = element.parentNode.parentNode;
  var rowIndex = rowJavascript.rowIndex;
  
  let id = tabela.rows[rowIndex].cells[0].innerHTML;
  let name = tabela.rows[rowIndex].cells[1].innerHTML;
  let cc = tabela.rows[rowIndex].cells[6].innerHTML;
  let morada = tabela.rows[rowIndex].cells[5].innerHTML;
  let nacio = tabela.rows[rowIndex].cells[3].innerHTML;
  let cargo = tabela.rows[rowIndex].cells[7].innerHTML;
  let data_nasc = tabela.rows[rowIndex].cells[2].innerHTML;
  let contact = tabela.rows[rowIndex].cells[4].innerHTML;
  
  localStorage.setItem("user_id", id);
  localStorage.setItem("user_name", name);
  localStorage.setItem("user_cc", cc);
  localStorage.setItem("user_morada", morada);
  localStorage.setItem("user_nacio", nacio);
  localStorage.setItem("user_cargo", cargo);
  localStorage.setItem("user_nasci", data_nasc);
  localStorage.setItem("user_contact", contact);
  
  window.document.location = './editar_dados.html';
  
}