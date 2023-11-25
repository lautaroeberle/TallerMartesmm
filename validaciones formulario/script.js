document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        
        if (username.length < 4 || username.length > 10) {
            alert("El nombre de usuario debe tener entre 4 y 10 caracteres.");
            event.preventDefault(); //esto evita que se mande el formulario
            return;
        }

       
        if (password.length < 4) {
            alert("La contraseña debe tener al menos 4 caracteres.");
            event.preventDefault(); 
            return;
        }

      
    });
});
