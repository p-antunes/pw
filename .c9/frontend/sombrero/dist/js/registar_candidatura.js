    
    let btnSubmit = document.getElementById("registrate_candi");
    
    btnSubmit.onclick = function(e){
        adicionar_candidatura();
    };
    
    function getAge(dateString) {
    
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }
   
    function adicionar_candidatura(){
        
        const candiForm = document.getElementById("candi_form");
        
        let nome = document.getElementById("name_reg").value;
        let natio = document.getElementById("nacionalidade").value;
        let morada = document.getElementById("morada").value;
        let cpostal = document.getElementById("postal").value;
        let educacao = document.getElementById("user_degree").value;
        let birth = document.getElementById("data_nascimento").value;
        let ncc = document.getElementById("cc").value;
        let validade = document.getElementById("validade").value;
        let ncontact = document.getElementById("ncontact").value;
        let vemail = document.getElementById("email_reg").value;
        
        
        let dados = {};
         
        dados.name = nome;
        dados.date_birth = birth;
        dados.age = getAge(birth);
        dados.nationality = natio;
        dados.cc = ncc;
        dados.phone_nr = ncontact;
        dados.adress = morada;
        dados.education = educacao;
        dados.approval = null;
        dados.email = vemail;
        dados.postal_code = cpostal;
        
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/voluntarys/", {
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
                 
                candiForm.reset(); //limpeza dos dados do form
                Swal.fire({
                    title: 'Submetida!',
                    text: "Candidatura submetida com sucesso",
                    icon: 'sucess',
                    confirmButtonColor: '#681517'
                });
                window.location.replace("registar_voluntario.html"); 
                
               
             }
         }).then(function(result) {
             console.log(result);
         }).catch(function(err) {
             Swal.fire({
                title: 'Erro!',
                text: "Erro de submissão",
                icon: 'error',
                confirmButtonColor: '#681517'
            });
             console.error(err);
         });
         
        
        } 
    