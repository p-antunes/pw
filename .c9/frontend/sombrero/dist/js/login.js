let redefinir = document.getElementById("redefinirpass");

redefinir.addEventListener("click", function() {
    Swal.fire({
        title: 'Recuperar Palavra-Passe',
        text: "Insira o seu e-mail para que lhe possamos enviar um link para recuperação da password.",
        input: 'text',
        inputAttributes: {
        autocapitalize: 'off'
    },
        showCancelButton: true,
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#681517',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            return fetch(`//api.github.com/users/${login}`)
            .then(response => {
            
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            
            return response.json()
        })
      .catch(error => {
            Swal.showValidationMessage(
                `Email não encontrado: ${error}`
            )
        })    
  },
    allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
});