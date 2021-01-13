
var tabela = document.getElementById("table_volun");
var linhas = tabela.getElementsByTagName("tr");
let nVolun = document.getElementById("ncandidatos");
let count = 0;


function contaLinhas() {

for(let i = 0; i < linhas.length; i++){
     
    count++;
}

nVolun.innerHTML = (count - 1) + " Candidaturas"; 
count = 0;    
}
 
//eliminar candidato
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
    
            let id = tabela.rows[rowIndex].cells[0].innerHTML;
    
            Deletevolunbd();
    
            async function Deletevolunbd() {
     
              await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/voluntarys/' + id, { method: "DELETE" });
            }
    
    document.getElementById("table_volun").deleteRow(rowIndex);
    contaLinhas();
                                
            Swal.fire({
                title: 'Removida!',
                text: "A candidatura foi eliminada",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
        }
    })
  }
  