$(document).ready(function(){
	tablajuez();
})
/*==========================================DETALLES================================================*/
function detallesjuez(Nombre,Carrera,Habilidad,Hobbie,Facebook,FNacimiento,Sexo){
	$('#institucion').val(Nombre);
	$('#carrera').val(Carrera);
	$('#habilidad1').val(Habilidad);
	$('#hobbie1').val(Hobbie);
	$('#facebook').val(Facebook);
	$('#fecha1').val(FNacimiento);
	$('#sexo').val(Sexo);
}
/*==========================================FIN DETALLES================================================*/
/*==========================================EDITAR JUEZ================================================*/

function editarjuez(Id,Correo,Psw,Celular){
	$('#id').val(Id);
	$('#correoe').val(Correo);
	$('#p').val(atob(Psw));
	$('#celulare').val(Celular);
}

function editandojuez(){
	id=$('#id').val();
	correo=$('#correoe').val();
	contrasena=$('#p').val();
	celular=$('#celulare').val();
	$.ajax({
		url: '../modulosc/juez/juez.php',
		type:'POST',
		data:{"ideditar":id,"correo":correo,"contraseña":contrasena,"celular":celular}
	})
	.done(function(resultado){
		alert(resultado);
	})
}
/*==========================================FIN EDITAR JUEZ================================================*/
/*==========================================ELIMINAR JUEZ================================================*/
let idEliminar="";
function eliminarjuez(id){
	idEliminar=id;
}
function eliminandojuez(){
	$.ajax({
		url: '../modulosc/juez/juez.php',
		type:'POST',
		data:{id:idEliminar}
	})
	.done(function(resultado){
		alert(resultado);
		tablajuez();
	})

}


/*==========================================FIN ELIMINAR JUEZ================================================*/
function tablajuez(){
	$("#juez").dataTable({
		"destroy":true,
		"bDeferRender": true,			
		"sPaginationType": "full_numbers",
		"ajax": {
			"url": "../modulosc/juez/tablajuez.php",
        	"type": "POST"
		},					
		"columns": [
			{ "data": "id" },
			{ "data": "nombre" },
			{ "data": "email" },
			{ "data": "celular" },
			{ "data": "detalles" },
			{ "data": "acciones" }
			],
		"oLanguage": {
            "sProcessing":     "Procesando...",
		    "sLengthMenu": 'Mostrar <select>'+
		        '<option value="10">10</option>'+
		        '<option value="20">20</option>'+
		        '<option value="30">30</option>'+
		        '<option value="40">40</option>'+
		        '<option value="50">50</option>'+
		        '<option value="-1">All</option>'+
		        '</select> registros',    
		    "sZeroRecords":    "No se encontraron resultados",
		    "sEmptyTable":     "Ningún dato disponible en esta tabla",
		    "sInfo":           "Mostrando del (_START_ al _END_) de un total de _TOTAL_ registros",
		    "sInfoEmpty":      "Mostrando del 0 al 0 de un total de 0 registros",
		    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
		    "sInfoPostFix":    "",
		    "sSearch":         "Filtrar:",
		    "sUrl":            "",
		    "sInfoThousands":  ",",
		    "sLoadingRecords": "Por favor espere - cargando...",
		    "oPaginate": {
		        "sFirst":    "Primero",
		        "sLast":     "Último",
		        "sNext":     "Siguiente",
		        "sPrevious": "Anterior"
		    },
		    "oAria": {
		        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
		        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
		    }
        }
	});
}