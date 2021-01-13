
function getRowIndex(element) {
    var rowJavascript = element.parentNode.parentNode;
    var rowIndex = rowJavascript.rowIndex;
    
    document.getElementById("table_aprove").deleteRow(rowIndex);
        
  }
  
var tabela = document.getElementById("table_aprove");
var linhas = tabela.getElementsByTagName("tr");
let nVolun = document.getElementById("npedidos");
let count = 0;


function contaLinhas() {

for(let i = 0; i < linhas.length; i++){
     
    count++;
}

nVolun.innerHTML = (count - 1) + " Pedidos"; 
count = 0;    
}
 
//recusar pedido
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
    
            Deleterequestbd();
    
            function Deleterequestbd() {
     
                let dadosput = {};
        
                let veri = "Desaprovado";
                 
                dadosput.verification = veri;
                
                console.log(dadosput);
                 
                 fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/approvals/verification/" + id,  {
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
                        text: "Erro de Atualização do Pedido",
                        icon: 'error',
                        confirmButtonColor: '#681517'
                    });
                     
                    console.error(err);
                    
                 });
            }
    
    document.getElementById("table_aprove").deleteRow(rowIndex);
    contaLinhas();
                                
            Swal.fire({
                title: 'Removida!',
                text: "O Pedido foi recusado",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
        }
    })
  }
  
  //aprovar pedido a ocorrencia
  function aprove(element) {
      
      let local = tabela.rows[rowIndex].cells[4].innerHTML;
      
    let dados = {};
         
        dados.local = local;
        dados.distance = null;
        dados.occurence_type = 
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/", {
             headers: { 'Content-Type': 'application/json' },
             method: 'POST',
             body: JSON.stringify(dados)
        }).then(function(response) {


            if (!response.ok) {
                 console.log(response.status); //=> number 100–599
                 console.log(response.statusText); //=> String
                 console.log(response.headers); //=> Headers
                 console.log(response.url); //=> String
                 if (response.status === 409) {
                    alert("Duplicated ID");
                 }
                 else {
                     throw Error(response.statusText);
                 }
             }
             else {
                 materialForm.reset(); //limpeza dos dados do form
                 
                 if((quantidade > 1) && (i==0)){
                    Swal.fire({
                        title: 'Submetidos!',
                        text: "Materiais submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    
                    window.location.replace("registar_material.html");
                     
                } else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Material submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    
                    window.location.replace("registar_material.html"); 
                }
               
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
      
  }
  



