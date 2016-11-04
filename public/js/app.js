var nombre = "<p><strong>Nombre : </strong>__nombre__</p>";
$(document).ready(function(){
	$.ajax({
		url: "http://localhost:3001/demo.json",
		type : "GET",
		success : function(response){
			$("#datos").html(nombre.replace("__nombre__",response.nombre)
							.replace("__apellido__",response.apellido)
							.replace("__edad__",response.edad)
							.replace("__fechaNac__",response.fechaNacimiento)
							.replace("__dni__",response.dni)
							.replace("__email__",response.email)
						);
			var nombres = "<ul>";
			for( var i = 0 , l = response.length ; i < l ; i++ ){
				response[i].nombre;
			}
			nombres += "</ul>";
			$("nombres").html(hobbies);
		},
		error:function(error){
			console.log(error);
		}
	});
});
