document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const body = document.body;

      
        body.classList.remove('error-background');
        body.classList.remove('formularioEnviado');
        

        
        if (username.length < 4 || username.length > 10) {
            
            event.preventDefault(); // esto evita que se mande el formulario
            body.classList.add('error-background'); // Agrega la clase 'error-background' al archivoscss
            return;
        }

        if (password.length < 4) {
            
            event.preventDefault(); 
            body.classList.add('error-background'); 
            return;
        }
        else {
            event.preventDefault();
            body.classList.add('formularioEnviado')
        }
        
    });
});
