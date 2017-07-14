var x;

x = $(document);
x.ready(puntual);

function puntual(){

	var x;

	x = $('#PR');

	x.change(function(){

		if(x.val() == '1'){

			var informacion = "<div for=anual class=select_title>Plan</div>";
			informacion += "<select class='select-select' name='anual' id='anual' >";
			informacion += "<option value=''>--seleccionar--</option>";
			informacion += "<option value='1'>Anual</option>";
			informacion += "</select>";

			var puntual = $('#puntual');

			puntual.html('');
			puntual.append(informacion);

		}
		if(x.val() == '2'){

			var informacion = "<div for=ap class=select_title>Real</div>";
			informacion += "<select class='select-select' name='ap' id='ap' >";
			informacion += "<option value=''>--seleccionar--</option>";
			informacion += "<option value='1'>Anual</option>";
			informacion += "<option value='2'>Puntual</option>";
			informacion += "</select>";

			var puntual = $('#puntual');

			puntual.html('');
			puntual.append(informacion);

			
		}

	});

	

}