<?php 
	if(!empty($_POST)){
		if(empty($_POST['nombre1']) || is_numeric($_POST['nombre1']) || strlen($_POST['nombre1']) >= 20){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Ingresa un nombre valido</strong>
                 </div>
			<?php
		}else
		if(empty($_POST['App1']) || is_numeric($_POST['App1']) || strlen($_POST['App1']) >= 20){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Apellido paterno invalido</strong>
                 </div>
			<?php
		}else
		if(empty($_POST['Apm1']) || is_numeric($_POST['Apm1']) || strlen($_POST['Apm1']) >= 20){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Apellido materno invalido</strong>
                 </div>
			<?php
		}else
		if(empty($_POST['email1']) || !filter_var($_POST['email1'], FILTER_VALIDATE_EMAIL)){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Correo incorrecto</strong>
                 </div>
			<?php
		}else
		if(empty($_POST['telefono1']) || strlen($_POST['telefono1']) != 10){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Telefono incorrecto</strong>
                 </div>
			<?php
		}else
		if(empty($_POST['psw'])){
			?>
				<div class="alert alert-danger alert-dismissible fade show text-center" role="alert">
                       <strong> Contraseña incorrecta</strong>
                 </div>
			<?php
		}else{
			
		}
	}

?>