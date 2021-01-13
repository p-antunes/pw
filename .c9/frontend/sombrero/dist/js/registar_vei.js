let registarVSAT = document.getElementById("registarVSAT");
let registarVFCI = document.getElementById("registarVFCI");
let registarVUCI = document.getElementById("registarVUCI");
let registarVRCI = document.getElementById("registarVRCI");
let registarVLCI = document.getElementById("registarVLCI");
let registarVECI = document.getElementById("registarVECI");
let registarVCOT = document.getElementById("registarVCOT");
let registarVP = document.getElementById("registarVP");
let registarVALE = document.getElementById("registarVALE");
let registarABTM = document.getElementById("registarABTM");


function gerarMatricula() {
    
    //random generator de numeros entre 2 numeros    
    function rand(min, max) {
        let randomNum = Math.random() * (max - min) + min;
        return Math.floor(randomNum);
    }

 
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
    }

    let matricula = (makeid(2) + " " + rand(0, 9) + rand(0, 9) + " " + makeid(2));
    
    return matricula;
}

registarVSAT.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVSAT").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VSAT";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                 
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                }
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

});

registarVFCI.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVFCI").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VFCI";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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
});

registarVUCI.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVUCI").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VUCI";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVRCI.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVRCI").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VRCI";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVLCI.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVLCI").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VLCI";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVECI.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVECI").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VECI";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVCOT.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVCOT").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VCOT";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVP.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVP").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VP";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarVALE.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdVALE").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "VALE";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});

registarABTM.addEventListener("click", function() {
    
    let quantidade = document.getElementById("qntdABTM").value;
    
    for(let i=0; i < quantidade; i++){
    
    let dados = {};
         
        dados.regist = gerarMatricula();
        dados.capacity = 100;
        dados.fuel_average = 60;
        dados.brand = "Audi";
        dados.model = "ABTM";
        dados.fuel_type = "Gasolina";
        console.log(dados);
        
        fetch("https://395d8654ffeb4196bccfb50daba7e22d.vfs.cloud9.us-east-1.amazonaws.com/vehicles/", {
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
                
                if((quantidade > 1) && (i==0)){
                    
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículos submetidos com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html");
                    
                }else if(quantidade == 1){
                    Swal.fire({
                        title: 'Submetido!',
                        text: "Veículo submetido com sucesso",
                        icon: 'success',
                        confirmButtonColor: '#681517'
                    });
                    window.location.replace("registo_veiculos.html"); 
                }
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

});