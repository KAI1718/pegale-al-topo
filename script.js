 
alerta();
function alerta(){
	alert("Selecciona una velocidad para comenzar el juego \n Ganas al obtner 20 puntos");
}


var puntos=0;
$(function(){
	$(".items").hover(function(){
		var tis = $(this);
		tis.find(".hueco").click(function(){			
			if(tis.hasClass("active")){
				tis.removeClass("active");
				puntos++;
				$("#puntos").html(puntos);
			}
		})
	})
})

topoaleatorio = function(){
	var num = parseInt(Math.random() * 6);
	$(".items").removeClass("active");
	$(".items:nth-child("+num+")").addClass("active");
}

function Ganaste(){ //20 puntos para ganar
	
}
	

function velocidadBaja(){//para cada boton
	var iterval = setInterval(function(){
		topoaleatorio();
	},7000);
}

function velocidadMedia(){//para cada boton
	var iterval = setInterval(function(){
		topoaleatorio();
	}, 3000);
}

function velocidadAlta(){//para cada boton
	var iterval = setInterval(function(){
		topoaleatorio();
	},1000);
}
