
    let btnSubmit = document.getElementById("registrate_mat");
    
    btnSubmit.onclick = function(e){
        adicionar_material();
    };
   
    function adicionar_material(){
        
        const materialForm = document.getElementById("regmaterial_form");
        let quantidade = document.getElementById("regmat_quantity").value;
        let tipo = document.getElementById("regmaterial_type").value;
        
        if(tipo == "Selecione o material pretendido" && quantidade == "Selecione a quantidade do material" ){
            
            Swal.fire({
                title: 'Atenção!',
                text: "Preencha os campos todos",
                icon: 'warning',
                confirmButtonColor: '#681517'
            });
        }
        
        else if(tipo == "Selecione o material pretendido"){
            Swal.fire({
                title: 'Atenção!',
                text: "Selecione o tipo de material",
                icon: 'warning',
                confirmButtonColor: '#681517'
            });
        } 
        
        else if(quantidade == "Selecione a quantidade do material"){
            Swal.fire({
                title: 'Atenção!',
                text: "Selecione quantos materiais do tipo selecionado é que quer adicionar",
                icon: 'warning',
                confirmButtonColor: '#681517'
            });
        }
        
        else{
        
        for(let i = 0; i < quantidade; i++) {
            
        
        let dados = {};
         
        dados.material_type = tipo;
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
        } 
    }
