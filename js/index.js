/* Asociamos función canvasApp a carga de página */
window.addEventListener('load', calculadora, false);	

function calculadora(){ 

	var boton_html = document.getElementById("boton_calc");

	var valor_boton = null;

	var cero = document.getElementById("cero");
	var uno = document.getElementById("uno");
	var igual = document.getElementById("igual");
	var mas = document.getElementById("mas");

	cero.addEventListener('click', botonSel, false);
    uno.addEventListener('click', botonSel, false);
    igual.addEventListener('click', botonSel, false);
    mas.addEventListener('click', botonSel, false);

	var sumas = 0;
	
	function changer(id, newValue) {
		var element = document.getElementById(id);
		element.innerHTML = newValue;
	}

	function poner_Num(id, newValue) {
		var element = document.getElementById(id);
		element.innerHTML = element.innerHTML + newValue;
	}

	function botonSel(e) {
		var boton = e.target;
			var simb_boton = boton.getAttribute('id');
			
			switch(simb_boton){
			case("cero"):
			    valor_boton="0";
				pulso_Cero();
		        break; 
			case("uno"):
			    valor_boton="1"; 
				pulso_Uno();
		  	    break;
		    case("igual"):
			    valor_boton="=";
				pulso_Igual();
		        break; 
		    case("mas"):
			    valor_boton="+";
				pulso_Suma();
		        break; 
		  }
		console.log(valor_boton);
		boton_html.innerHTML = valor_boton;
	  
    }

	function pulso_Cero(){
		poner_Num("calculadora","0");
	
	}

	function pulso_Uno(){
		poner_Num("calculadora","1");	
	}

	function suma(nums) {
		var total = 0;
		for (i in nums) {
			total += parseInt(nums[i], 2);
		}
		var result = total.toString(2);
		changer("calculadora", result); 
	}

	function pulso_Igual(){
		var div = document.getElementById("calculadora");
		var element = div.innerHTML;
		if (element.indexOf("+") !== -1) {
			var nums = element.split("+");
			suma(nums);
		}
		sumas = 0;
	}


	function pulso_Suma(){
			poner_Num("calculadora","+");

	
	}

}
