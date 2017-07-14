function actualizar(){
$(document).ready(function(){ 

	var em = $("#empresam option:selected");
	var mone = $("#moneda option:selected");
	var anho = $("#anho option:selected");

	if(em.val() !='' &&  mone.val() !='' && anho.val() !=''){


			$('#anho').change(function(){
					var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

					$('#tablamixta').html('');
						$("#tablamixta").append("<table id='example' style='font-family:courier; font-size: 11px;border-spacing: 0;width: 100%;border: 1px solid red;' class='display nowrap' cellspacing='1' width='100%' class='mixta'><thead><tr><tr><td></td><td colspan='12' align='center'>real</td></tr><tr> <td></td><td>Enero</td><td>Febrero</td><td>Marzo</td><td>abril</td><td>Mayo</td><td>Junio</td><td>Julio</td><td>Agosto</td><td>Septiembre</td><td>Octubre</td><td>Noviembre</td><td>Diciembre</td></tr></thead><tr><td>Labor</td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td><td><input type='number' name='l1[]' id='l1' value='0'></td></tr><tr><td>Bienestar y Beneficio</td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td><td><input type='number' name='bb[]' value='0'></td></tr><tr><td>Materiales</td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td><td><input type='number' name='m1[]' value='0'></td></tr><tr><td>Servicios y Contratos</td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td><td><input type='number' name='sc[]' value='0'></td></tr><tr><td>Otros</td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td><td><input type='number' name='o1[]' value='0'></td></tr></tbody></table>");	
					 

			});
		

	}

 


}