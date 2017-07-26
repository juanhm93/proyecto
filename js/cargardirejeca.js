var x;

x = $(document);
x.ready(direccionejecutiva);

function direccionejecutiva() {

		$("#anhodir").change(function(){

	var prma = $("#PR option:selected");
	var invop = $('#invop option:selected');
	var mone = $("#moneda option:selected");
    var anhodir = $("#anhodir option:selected");


     
    if(prma.val() != ''){

    	if (invop.val() != '') {

    		if(  mone.val() != ''){

    				 if(anhodir.val() !=''){


    				 	 
                			var  v2 = invop.val();
                			var  v3 = mone.val();
                  			var  v4 = anhodir.val();


                    var postForm = {
                        
                        'v2' : v2,
                        'v3' : v3,
                        'v4' : v4
                    };

                    if(prma.val() == '1'){

                    	$.post('cdirejep/dirupdate',postForm,function(pro){


                 		if(pro.length < 4){

                 		var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                            informacion +="<thead>";
                            informacion +="<tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion +="<td colspan='12' align='center'>real</td>";
                            informacion +="</tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion += "<td>Enero</td>";
                            informacion += "<td>Febrero</td>";
                            informacion += "<td>Marzo</td>"; 
                            informacion += "<td>abril</td>"; 
                            informacion += "<td>Mayo</td>"; 
                            informacion += "<td>Junio</td>"; 
                            informacion += "<td>Julio</td>"; 
                            informacion += "<td>Agosto</td>"; 
                            informacion += "<td>Septiembre</td>"; 
                            informacion += "<td>Octubre</td>"; 
                            informacion += "<td>Noviembre</td>"; 
                            informacion += "<td>Diciembre</td>"; 
                            informacion += "</tr>"; 
                            informacion += "</thead>"; 
                            informacion += "<tbody>"; 
                            informacion += "<tr>"; 
                            informacion += "<td>Labor</td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Bienestar y Beneficio</td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Materiales</td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td></tr>";
                            informacion += "<tr>";
                            informacion += "<td>Servicios y Contratos</td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Otros</td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "</tr>";
                            informacion += "</tbody>";
                            informacion += "</table>";
                            $("#direccion").html('');	
						    $("#direccion").append(informacion);

                 			

                 		}else{

                 			var datos = $.parseJSON(pro);
        
                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                        	informacion +="<thead>";
                        	informacion +="<tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion +="<td colspan='12' align='center'>real</td>";
                        	informacion +="</tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion += "<td>Enero</td>";
                        	informacion += "<td>Febrero</td>";
                        	informacion += "<td>Marzo</td>"; 
                        	informacion += "<td>abril</td>"; 
                        	informacion += "<td>Mayo</td>"; 
                        	informacion += "<td>Junio</td>"; 
                        	informacion += "<td>Julio</td>"; 
                        	informacion += "<td>Agosto</td>"; 
                        	informacion += "<td>Septiembre</td>"; 
                        	informacion += "<td>Octubre</td>"; 
                        	informacion += "<td>Noviembre</td>"; 
                        	informacion += "<td>Diciembre</td>"; 
                        	informacion += "</tr>"; 
                        	informacion += "</thead>"; 
                        	informacion += "<tbody>"; 
                        	informacion += "<tr>"; 
                        	informacion += "<td>Labor</td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['enero_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['febrero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['marzo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['abril_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['mayo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['junio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['julio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['agosto_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['septiembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['octubre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['noviembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['diciembre_p']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Bienestar y Beneficio</td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['enero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['febrero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['marzo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['abril_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['mayo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['junio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['julio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['agosto_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['septiembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['octubre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['noviembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['diciembre_p']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Materiales</td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['enero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['febrero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['marzo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['abril_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['mayo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['junio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['julio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['agosto_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['septiembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['octubre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['noviembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['diciembre_p']+"'></td></tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Servicios y Contratos</td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['enero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['febrero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['marzo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['abril_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['mayo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['junio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['julio_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['agosto_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['septiembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['octubre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['noviembre_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['diciembre_p']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Otros</td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['enero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['febrero_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['marzo_p']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['abril_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['mayo_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['junio_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['julio_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['agosto_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['septiembre_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['octubre_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['noviembre_p']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['diciembre_p']+"'></td>"; 
                        	informacion += "</tr>";
                        	informacion += "</tbody>";
                        	informacion += "</table>";                                                    
                                $("#direccion").html('');   
                                $("#direccion").append(informacion);

                 		

                 		}//fin del else segunda opcion



                    });




                    }//fin de condicion prma = 1 



                     if(prma.val() == '2'){

                    	$.post('cdirejep/dirupdatereal',postForm,function(pro){

                    		alert(pro);
                 		if(pro.length < 4){
                 		var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                            informacion +="<thead>";
                            informacion +="<tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion +="<td colspan='12' align='center'>real</td>";
                            informacion +="</tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion += "<td>Enero</td>";
                            informacion += "<td>Febrero</td>";
                            informacion += "<td>Marzo</td>"; 
                            informacion += "<td>abril</td>"; 
                            informacion += "<td>Mayo</td>"; 
                            informacion += "<td>Junio</td>"; 
                            informacion += "<td>Julio</td>"; 
                            informacion += "<td>Agosto</td>"; 
                            informacion += "<td>Septiembre</td>"; 
                            informacion += "<td>Octubre</td>"; 
                            informacion += "<td>Noviembre</td>"; 
                            informacion += "<td>Diciembre</td>"; 
                            informacion += "</tr>"; 
                            informacion += "</thead>"; 
                            informacion += "<tbody>"; 
                            informacion += "<tr>"; 
                            informacion += "<td>Labor</td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Bienestar y Beneficio</td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Materiales</td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td></tr>";
                            informacion += "<tr>";
                            informacion += "<td>Servicios y Contratos</td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Otros</td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "</tr>";
                            informacion += "</tbody>";
                            informacion += "</table>";
                            $("#direccion").html('');	
						    $("#direccion").append(informacion);

                 		}else{

                 			var datos = $.parseJSON(pro);

                 			
                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                        	informacion +="<thead>";
                        	informacion +="<tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion +="<td colspan='12' align='center'>real</td>";
                        	informacion +="</tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion += "<td>Enero</td>";
                        	informacion += "<td>Febrero</td>";
                        	informacion += "<td>Marzo</td>"; 
                        	informacion += "<td>abril</td>"; 
                        	informacion += "<td>Mayo</td>"; 
                        	informacion += "<td>Junio</td>"; 
                        	informacion += "<td>Julio</td>"; 
                        	informacion += "<td>Agosto</td>"; 
                        	informacion += "<td>Septiembre</td>"; 
                        	informacion += "<td>Octubre</td>"; 
                        	informacion += "<td>Noviembre</td>"; 
                        	informacion += "<td>Diciembre</td>"; 
                        	informacion += "</tr>"; 
                        	informacion += "</thead>"; 
                        	informacion += "<tbody>"; 
                        	informacion += "<tr>"; 
                        	informacion += "<td>Labor</td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['enero_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Bienestar y Beneficio</td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Materiales</td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['diciembre_r']+"'></td></tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Servicios y Contratos</td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Otros</td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['abril_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['mayo_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['junio_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['julio_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['agosto_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['septiembre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['octubre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['noviembre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['diciembre_r']+"'></td>"; 
                        	informacion += "</tr>";
                        	informacion += "</tbody>";
                        	informacion += "</table>";				
                 		    $("#direccion").html('');	
						    $("#direccion").append(informacion);

                 		}//fin del else segunda opcion



                    });




                    }//fin de condicion prma = 2

                     if(prma.val() == '3'){

                    	$.post('cdirejep/dirupdatemv',postForm,function(pro){


                 		if(pro.length < 4){
                 			var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                            informacion +="<thead>";
                            informacion +="<tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion +="<td colspan='12' align='center'>real</td>";
                            informacion +="</tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion += "<td>Enero</td>";
                            informacion += "<td>Febrero</td>";
                            informacion += "<td>Marzo</td>"; 
                            informacion += "<td>abril</td>"; 
                            informacion += "<td>Mayo</td>"; 
                            informacion += "<td>Junio</td>"; 
                            informacion += "<td>Julio</td>"; 
                            informacion += "<td>Agosto</td>"; 
                            informacion += "<td>Septiembre</td>"; 
                            informacion += "<td>Octubre</td>"; 
                            informacion += "<td>Noviembre</td>"; 
                            informacion += "<td>Diciembre</td>"; 
                            informacion += "</tr>"; 
                            informacion += "</thead>"; 
                            informacion += "<tbody>"; 
                            informacion += "<tr>"; 
                            informacion += "<td>Labor</td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Bienestar y Beneficio</td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Materiales</td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td></tr>";
                            informacion += "<tr>";
                            informacion += "<td>Servicios y Contratos</td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Otros</td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "</tr>";
                            informacion += "</tbody>";
                            informacion += "</table>";
                            $("#direccion").html('');
                            $("#direccion").append(informacion);  

                 		}else{

                 			var datos = $.parseJSON(pro);
                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                        	informacion +="<thead>";
                        	informacion +="<tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion +="<td colspan='12' align='center'>real</td>";
                        	informacion +="</tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion += "<td>Enero</td>";
                        	informacion += "<td>Febrero</td>";
                        	informacion += "<td>Marzo</td>"; 
                        	informacion += "<td>abril</td>"; 
                        	informacion += "<td>Mayo</td>"; 
                        	informacion += "<td>Junio</td>"; 
                        	informacion += "<td>Julio</td>"; 
                        	informacion += "<td>Agosto</td>"; 
                        	informacion += "<td>Septiembre</td>"; 
                        	informacion += "<td>Octubre</td>"; 
                        	informacion += "<td>Noviembre</td>"; 
                        	informacion += "<td>Diciembre</td>"; 
                        	informacion += "</tr>"; 
                        	informacion += "</thead>"; 
                        	informacion += "<tbody>"; 
                        	informacion += "<tr>"; 
                        	informacion += "<td>Labor</td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['enero_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['febrero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['marzo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['abril_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['mayo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['junio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['julio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['agosto_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['septiembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['octubre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['noviembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['diciembre_mv']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Bienestar y Beneficio</td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['enero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['febrero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['marzo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['abril_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['mayo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['junio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['julio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['agosto_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['septiembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['octubre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['noviembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['diciembre_mv']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Materiales</td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['enero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['febrero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['marzo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['abril_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['mayo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['junio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['julio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['agosto_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['septiembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['octubre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['noviembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['diciembre_mv']+"'></td></tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Servicios y Contratos</td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['enero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['febrero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['marzo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['abril_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['mayo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['junio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['julio_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['agosto_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['septiembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['octubre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['noviembre_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['diciembre_mv']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Otros</td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['enero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['febrero_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['marzo_mv']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['abril_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['mayo_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['junio_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['julio_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['agosto_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['septiembre_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['octubre_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['noviembre_mv']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['diciembre_mv']+"'></td>"; 
                        	informacion += "</tr>";
                        	informacion += "</tbody>";
                        	informacion += "</table>";
                        	$("#direccion").html('');	
						$("#direccion").append(informacion);

                 		}//fin del else segunda opcion



                    });




                    }//fin de condicion prma = 3

                    





    				 }else{
    				 	alert('Debe escoger una opcion para años');
    				 }

    		}else{

    			alert('Debe escoger un tipo de moneda');
    		
    		}	


    	} else{

    		alert('Debe escoger la opcion Inversion u Operaciones');
    	}

    }else{

    	alert('Debe escoger la opcion Plan o Real');
    }


});

}