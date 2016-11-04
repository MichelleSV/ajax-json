$(document).ready(function(){
	$.ajax({
		url: "http://localhost:3002/demo.json",
		type : "GET",
		success : function(response){
			//nombres
			var nombres = "<ul>";
			for( var i = 0 ; i < response.length ; i++ ){
				nombres += "<li>" + response[i].nombre + "</li>";
			}
				nombres += "</ul>";
			$("#nombres").html(nombres);
			//apellidos
			var apellidos = "<ul>";
			for( var i = 0 ; i < response.length ; i++ ){
				apellidos += "<li>" + response[i].apellido + "</li>";
			}
			apellidos += "</ul>";
			$("#apellidos").html(apellidos);
			//correos
			var correos = "<ul>";
			for( var i = 0 ; i < response.length ; i++ ){
				correos += "<li>" + response[i].correo + "</li>";
			}
				correos += "</ul>";
			$("#correos").html(correos);
		},
		error:function(error){
			console.log(error);
		}
	});
});
