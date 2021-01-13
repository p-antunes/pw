
var tabela = document.getElementById("table_material");
var linhas = tabela.getElementsByTagName("tr");

let nMaterials = document.getElementById("nmateriais");
let count = 0;

function contaLinhas() {

for(let i = 0; i < linhas.length; i++){
     
    count++;
}

nMaterials.innerHTML = (count - 1) + " materiais registados"; 
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
    
            let id = document.getElementById("table_material").rows[rowIndex].cells[0].innerHTML;
    
            Deletematbd();
    
            async function Deletematbd() {
     
                await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/' + id, { method: "DELETE" });
            }
    
            document.getElementById("table_material").deleteRow(rowIndex);
            contaLinhas();
                                
            Swal.fire({
                title: 'Removido!',
                text: "O material foi removido com sucesso",
                icon: 'success',
                confirmButtonColor: '#681517'
            });
        }
    })
    
}

/*
for(var i = 0; i < linhas.length; i++){
    var linha = linhas[i];
    linha.addEventListener("click", function(){
  	//Adicionar ao atual
	selLinha(this, false); //Selecione apenas um
                //selLinha(this, true); //Selecione quantos quiser
	});
}


function selLinha(linha, multiplos){
  if(!multiplos){
  	var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
           var linha_ = linhas[i];
           linha_.classList.remove("selecionado");    
        }
    }
  linha.classList.toggle("selecionado");
}


let btnDelete = document.getElementById("delete-material");
let alertBox1 = document.getElementById("alert_box1");


  

  btnDelete.addEventListener("click", function() {
  
    let selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se está selecionado
    if (selecionados.length < 1) {
        alertBox1.style.display = "block";
        return false;
    }
    
    for (let i = 0; i < selecionados.length; i++) {
      let selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td");
      for (const ln of selecionados) {

        
        let alertBox = document.getElementById("alert_box");
        alertBox.style.display = "block";
        
        let sim = document.getElementById("sim");
        let nao = document.getElementById("nao");
        
        sim.addEventListener("click", function() {
            alertBox.style.display = "none";
            
             $(document).ready(function() {
              Deletematbd();
            });
            
            async function Deletematbd() {
              
              let id = selecionado[0].innerHTML;
              await fetch('https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/materials/' + id, { method: "DELETE" });
            }
            
            ln.remove();
            tudo();
        });
        
        nao.addEventListener("click", function() {
            alertBox.style.display = "none";
        });
        
      }
    }
   
  }); 
  
  
    let ok = document.getElementById("ok");
         
         ok.addEventListener("click", function() {
            alertBox1.style.display = "none";
        });
    
        
 EDITAR MATERIAL - N FUNCIONA
  
  let btnEditar = document.getElementById("editar_dados");
    
  btnEditar.addEventListener("click", function() {
       
       let selecionados = tabela.getElementsByClassName("selecionado");
        //Verificar se está selecionado
        if (selecionados.length < 1) {
        alertBox1.style.display = "block";
        return false;
    }
    
        for (let i = 0; i < selecionados.length; i++) {
            let selecionado = selecionados[i];
            selecionado = selecionado.getElementsByTagName("td");
           
            
            for (const ln of selecionados) {
                
                selecionado.getElementsByClassName("disponibilidade").contentEditable = "true";
            }
        }

    }); */
    