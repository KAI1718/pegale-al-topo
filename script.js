 
alerta();
function alerta(){
	alert("Selecciona una velocidad para comenzar el juego \n Ganas al obtner 10 puntos");
}
var iterval;

var puntos=0;
$(function(){
	$(".items").hover(function(){
		var tis = $(this);
		tis.find(".hueco").click(function(){			
			if(tis.hasClass("active")){
				tis.removeClass("active");
				puntos++;
				$("#puntos").html(puntos);
				if(puntos>=10){
					clearInterval(this.iterval);
					alert("Haz ganado");
					$("#puntos").html("0");
				}
			}
		})
	})
})

topoaleatorio = function(){
	var num = parseInt(Math.random() * 6);
	$(".items").removeClass("active");
	$(".items:nth-child("+num+")").addClass("active");
}
	

function velocidadBaja(){//para cada boton
	clearInterval(this.iterval);
	this.iterval = setInterval(function(){
		topoaleatorio();
	},3000);
}

function velocidadMedia(){//para cada boton
	clearInterval(this.iterval);
	this.iterval = setInterval(function(){
		topoaleatorio();
	}, 2000);
}

function velocidadAlta(){//para cada boton
	clearInterval(this.iterval);
	this.iterval = setInterval(function(){
		topoaleatorio();
	},1000);
}
