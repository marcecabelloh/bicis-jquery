
	/* Escribe tú código aquí */

	$(document).ready(function validateForm(){
	
	/* Escribe tú código aquí */
	/*declaro variables que llaman a los id y sus valores ingresados por el ususario*/
		var name = $("#name").val();
		var lastname = $("#lastname").val();
		var mail = $("#input-email").val();
		var password = $("#input-password").val();


/* intento validar nombre apellido correo y contraseña */

		if(!(/[A-Za-z\s]/.test(name))){
			alert("Ingrese su nombre");
		}
		if(!(/[A-Za-z\s]/.test(lastname))){
			alert("Ingrese su apellido");
		}
		if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
  			alert("Ingrese un correo válido");
		}
		if((password.length < 6) || (password == 123456) || (password == 098765)){
			alert("Ingrese una clave válida");
		}
	

});

	validateForm()