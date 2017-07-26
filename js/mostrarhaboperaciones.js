var x;

x = $(document);
x.ready(mostraroperacioneshab);

function mostraroperacioneshab() {


	$( "input" ).on( "click", function() {

		var anho = $("#anhopera option:selected");

		var opciones = $("input:checked").val();

		if(anho.val() != ''){

				var v3;
				v3 = anho.val();
				var v1 = 2;

			alert(opciones);

			if (opciones == "po1") {
				
				
				var v2 = 1;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2
										};

				$.post("ctablahab/gesinvp",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_p']);
                        				f = f +	 parseFloat(datos[i]['febrero_p']);
                        				m = m +	parseFloat(datos[i]['marzo_p']);
                        				a = a +	 parseFloat(datos[i]['abril_p']);
                        				ma = ma + parseFloat(datos[i]['mayo_p']);
                        				j= j +	 parseFloat(datos[i]['junio_p']);
                        				ju= ju +	parseFloat(datos[i]['julio_p']);
                        				ag= ag + parseFloat(datos[i]['agosto_p']);
                        				s =s +	 parseFloat(datos[i]['septiembre_p']);
                        				o = o +	 parseFloat(datos[i]['octubre_p']);
                        				n = n +	parseFloat(datos[i]['noviembre_p']);
                        				d = d +	 parseFloat(datos[i]['diciembre_p']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_p']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_p']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_p']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee Bolivares Puros');

						}

				});

		 					}// if opcion po1

		 		if (opciones == "po2") {
				
				
				var v2 = 2;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2};

				$.post("ctablahab/gesinvp",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_p']);
                        				f = f +	 parseFloat(datos[i]['febrero_p']);
                        				m = m +	parseFloat(datos[i]['marzo_p']);
                        				a = a +	 parseFloat(datos[i]['abril_p']);
                        				ma = ma + parseFloat(datos[i]['mayo_p']);
                        				j= j +	 parseFloat(datos[i]['junio_p']);
                        				ju= ju +	parseFloat(datos[i]['julio_p']);
                        				ag= ag + parseFloat(datos[i]['agosto_p']);
                        				s =s +	 parseFloat(datos[i]['septiembre_p']);
                        				o = o +	 parseFloat(datos[i]['octubre_p']);
                        				n = n +	parseFloat(datos[i]['noviembre_p']);
                        				d = d +	 parseFloat(datos[i]['diciembre_p']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_p']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_p']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_p']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_p']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert("No posee Dolares Puros");

						}

				});
		 					}// if opcion po2


		 				if(opciones == "po3"){
		 				 	
		 					var postForm ={'v3' : v3,
		 								'v1': v1};
		 					$.post("ctablahab/gesinvpequiv",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							var enero,febrero,marzo,abril,mayo,junio,julio,agost,sept,octu,novi,dici;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	
							var control= false;

							for (var i = 0; i <  datos.length ; i++) {
								var corrida = i;
									if(aux == ''){
										aux = datos[i]['gerehab'];
									}	

									for (var j = 0; j < datos.length ; j++) {

										if(corrida != j){

											if(datos[i]['idhabfk'] == datos[j]['idhabfk'] && datos[i]['idelecfk'] == datos[j]['idelecfk']){
												//alert("consiguio bs y dolares ");
												if (datos[i]['idmoneda'] == 1) {

												    enero = (parseFloat(datos[i]['enero_p'])/10)+parseFloat(datos[j]['enero_p']); 
												    febrero = (parseFloat(datos[i]['febrero_p'])/10)+parseFloat(datos[j]['febrero_p']); 
												    marzo = (parseFloat(datos[i]['marzo_p'])/10)+parseFloat(datos[j]['marzo_p']); 
												    abril = (parseFloat(datos[i]['abril_p'])/10)+parseFloat(datos[j]['abril_p']); 
												    mayo = (parseFloat(datos[i]['mayo_p'])/10)+parseFloat(datos[j]['mayo_p']); 
												    junio = (parseFloat(datos[i]['junio_p'])/10)+parseFloat(datos[j]['junio_p']); 
												    julio = (parseFloat(datos[i]['julio_p'])/10)+parseFloat(datos[j]['julio_p']); 
												    agost = (parseFloat(datos[i]['agosto_p'])/10)+parseFloat(datos[j]['agosto_p']); 
												    sept = (parseFloat(datos[i]['septiembre_p'])/10)+parseFloat(datos[j]['septiembre_p']); 
												    octu = (parseFloat(datos[i]['octubre_p'])/10)+parseFloat(datos[j]['octubre_p']); 
												    novi = (parseFloat(datos[i]['noviembre_p'])/10)+parseFloat(datos[j]['noviembre_p']); 
												    dici = (parseFloat(datos[i]['diciembre_p'])/10)+parseFloat(datos[j]['diciembre_p']); 

										 


												}else{

													enero = (parseFloat(datos[j]['enero_p'])/10)+parseFloat(datos[i]['enero_p']); 
												    febrero = (parseFloat(datos[j]['febrero_p'])/10)+parseFloat(datos[i]['febrero_p']); 
												    marzo = (parseFloat(datos[j]['marzo_p'])/10)+parseFloat(datos[i]['marzo_p']); 
												    abril = (parseFloat(datos[j]['abril_p'])/10)+parseFloat(datos[i]['abril_p']); 
												    mayo = (parseFloat(datos[j]['mayo_p'])/10)+parseFloat(datos[i]['mayo_p']); 
												    junio = (parseFloat(datos[j]['junio_p'])/10)+parseFloat(datos[i]['junio_p']); 
												    julio = (parseFloat(datos[j]['julio_p'])/10)+parseFloat(datos[i]['julio_p']); 
												    agost = (parseFloat(datos[j]['agosto_p'])/10)+parseFloat(datos[i]['agosto_p']); 
												    sept = (parseFloat(datos[j]['septiembre_p'])/10)+parseFloat(datos[i]['septiembre_p']); 
												    octu = (parseFloat(datos[j]['octubre_p'])/10)+parseFloat(datos[i]['octubre_p']); 
												    novi = (parseFloat(datos[j]['noviembre_p'])/10)+parseFloat(datos[i]['noviembre_p']); 
												    dici = (parseFloat(datos[j]['diciembre_p'])/10)+parseFloat(datos[i]['diciembre_p']); 	
 
												}
												if(i > j){
													control = true;
												}
												j = datos.length;

											}else{

													if (datos[i]['idmoneda']== 1 ) {

														enero =	parseFloat(datos[i]['enero_p'])/10;		
														febrero =	parseFloat(datos[i]['febrero_p'])/10;
														marzo =	parseFloat(datos[i]['marzo_p'])/10;
														abril =	parseFloat(datos[i]['abril_p'])/10;
														mayo =	parseFloat(datos[i]['mayo_p'])/10;
														junio =	parseFloat(datos[i]['junio_p'])/10;
														julio =	parseFloat(datos[i]['julio_p'])/10;
														agost =	parseFloat(datos[i]['agosto_p'])/10;
														sept =	parseFloat(datos[i]['septiembre_p'])/10;
														octu =	parseFloat(datos[i]['octubre_p'])/10;
														novi =	parseFloat(datos[i]['noviembre_p'])/10;
														dici =	parseFloat(datos[i]['diciembre_p'])/10;
														//alert('moneda 1 sin $ '+enero);
													}else{

														enero =	parseFloat(datos[i]['enero_p']);		
														febrero =	parseFloat(datos[i]['febrero_p']);
														marzo =	parseFloat(datos[i]['marzo_p']);
														abril =	parseFloat(datos[i]['abril_p']);
														mayo =	parseFloat(datos[i]['mayo_p']);
														junio =	parseFloat(datos[i]['junio_p']);
														julio =	parseFloat(datos[i]['julio_p']);
														agost =	parseFloat(datos[i]['agosto_p']);
														sept =	parseFloat(datos[i]['septiembre_p']);
														octu =	parseFloat(datos[i]['octubre_p']);
														novi =	parseFloat(datos[i]['noviembre_p']);
														dici =	parseFloat(datos[i]['diciembre_p']);
														//alert('dolares puros '+enero);
													}// fin moneda	
											 control = false;
											}// fin comparativo de id de proyecto

										}//if de la corrida	

								}//for j 
							 	
								if(control !== true){


								if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(enero);
                        				f = f +	 parseFloat(febrero);
                        				m = m +	parseFloat(marzo);
                        				a = a +	 parseFloat(abril);
                        				ma = ma + parseFloat(mayo);
                        				j= j +	 parseFloat(junio);
                        				ju= ju +	parseFloat(julio);
                        				ag= ag + parseFloat(agost);
                        				s =s +	 parseFloat(sept);
                        				o = o +	 parseFloat(octu);
                        				n = n +	parseFloat(novi);
                        				d = d +	 parseFloat(dici);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(enero).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(febrero).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(marzo).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(abril).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(mayo).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(junio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(julio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(agost).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(sept).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(octu).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(novi).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(dici).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}//fin ultimo

                        			}//fin aux = a gerehab

								}

								
							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No ´posee dolares Equivalentes');
						}


				}); 



		 				}// fin if opcion po3


		 				if (opciones == "ro1") {
				
				
				var v2 = 1;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2};

				$.post("ctablahab/gesinvreal",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_r']);
                        				f = f +	 parseFloat(datos[i]['febrero_r']);
                        				m = m +	parseFloat(datos[i]['marzo_r']);
                        				a = a +	 parseFloat(datos[i]['abril_r']);
                        				ma = ma + parseFloat(datos[i]['mayo_r']);
                        				j= j +	 parseFloat(datos[i]['junio_r']);
                        				ju= ju +	parseFloat(datos[i]['julio_r']);
                        				ag= ag + parseFloat(datos[i]['agosto_r']);
                        				s =s +	 parseFloat(datos[i]['septiembre_r']);
                        				o = o +	 parseFloat(datos[i]['octubre_r']);
                        				n = n +	parseFloat(datos[i]['noviembre_r']);
                        				d = d +	 parseFloat(datos[i]['diciembre_r']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_r']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_r']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_r']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee Bolivares Puros');

						}

				});

		 					}// if opcion ro1

		 				if (opciones == "ro2") {
				
				
				var v2 = 2;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2};

				$.post("ctablahab/gesinvreal",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_r']);
                        				f = f +	 parseFloat(datos[i]['febrero_r']);
                        				m = m +	parseFloat(datos[i]['marzo_r']);
                        				a = a +	 parseFloat(datos[i]['abril_r']);
                        				ma = ma + parseFloat(datos[i]['mayo_r']);
                        				j= j +	 parseFloat(datos[i]['junio_r']);
                        				ju= ju +	parseFloat(datos[i]['julio_r']);
                        				ag= ag + parseFloat(datos[i]['agosto_r']);
                        				s =s +	 parseFloat(datos[i]['septiembre_r']);
                        				o = o +	 parseFloat(datos[i]['octubre_r']);
                        				n = n +	parseFloat(datos[i]['noviembre_r']);
                        				d = d +	 parseFloat(datos[i]['diciembre_r']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_r']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_r']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_r']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_r']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee dolares Puros');

						}

				});

		 					}// if opcion ro2


					
					if(opciones == "ro3"){
		 				 	
		 					var postForm ={'v3' : v3,
		 								'v1': v1};
		 					$.post("ctablahab/gesinvrealequiv",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							var enero,febrero,marzo,abril,mayo,junio,julio,agost,sept,octu,novi,dici;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	
							var control= false;

							for (var i = 0; i <  datos.length ; i++) {
								var corrida = i;
									if(aux == ''){
										aux = datos[i]['gerehab'];
									}	

									for (var j = 0; j < datos.length ; j++) {

										if(corrida != j){

											if(datos[i]['idhabfk'] == datos[j]['idhabfk'] && datos[i]['idelecfk']== datos[j]['idelecfk']){
												//alert("consiguio bs y dolares ");
												if (datos[i]['idmoneda'] == 1) {

												    enero = (parseFloat(datos[i]['enero_r'])/10)+parseFloat(datos[j]['enero_r']); 
												    febrero = (parseFloat(datos[i]['febrero_r'])/10)+parseFloat(datos[j]['febrero_r']); 
												    marzo = (parseFloat(datos[i]['marzo_r'])/10)+parseFloat(datos[j]['marzo_r']); 
												    abril = (parseFloat(datos[i]['abril_r'])/10)+parseFloat(datos[j]['abril_r']); 
												    mayo = (parseFloat(datos[i]['mayo_r'])/10)+parseFloat(datos[j]['mayo_r']); 
												    junio = (parseFloat(datos[i]['junio_r'])/10)+parseFloat(datos[j]['junio_r']); 
												    julio = (parseFloat(datos[i]['julio_r'])/10)+parseFloat(datos[j]['julio_r']); 
												    agost = (parseFloat(datos[i]['agosto_r'])/10)+parseFloat(datos[j]['agosto_r']); 
												    sept = (parseFloat(datos[i]['septiembre_r'])/10)+parseFloat(datos[j]['septiembre_r']); 
												    octu = (parseFloat(datos[i]['octubre_r'])/10)+parseFloat(datos[j]['octubre_r']); 
												    novi = (parseFloat(datos[i]['noviembre_r'])/10)+parseFloat(datos[j]['noviembre_r']); 
												    dici = (parseFloat(datos[i]['diciembre_r'])/10)+parseFloat(datos[j]['diciembre_r']); 

										 


												}else{

													enero = (parseFloat(datos[j]['enero_r'])/10)+parseFloat(datos[i]['enero_r']); 
												    febrero = (parseFloat(datos[j]['febrero_r'])/10)+parseFloat(datos[i]['febrero_r']); 
												    marzo = (parseFloat(datos[j]['marzo_r'])/10)+parseFloat(datos[i]['marzo_r']); 
												    abril = (parseFloat(datos[j]['abril_r'])/10)+parseFloat(datos[i]['abril_r']); 
												    mayo = (parseFloat(datos[j]['mayo_r'])/10)+parseFloat(datos[i]['mayo_r']); 
												    junio = (parseFloat(datos[j]['junio_r'])/10)+parseFloat(datos[i]['junio_r']); 
												    julio = (parseFloat(datos[j]['julio_r'])/10)+parseFloat(datos[i]['julio_r']); 
												    agost = (parseFloat(datos[j]['agosto_r'])/10)+parseFloat(datos[i]['agosto_r']); 
												    sept = (parseFloat(datos[j]['septiembre_r'])/10)+parseFloat(datos[i]['septiembre_r']); 
												    octu = (parseFloat(datos[j]['octubre_r'])/10)+parseFloat(datos[i]['octubre_r']); 
												    novi = (parseFloat(datos[j]['noviembre_r'])/10)+parseFloat(datos[i]['noviembre_r']); 
												    dici = (parseFloat(datos[j]['diciembre_r'])/10)+parseFloat(datos[i]['diciembre_r']); 	
 
												}
												if(i > j){
													control = true;
												}
												j = datos.length;

											}else{

													if (datos[i]['idmoneda']== 1 ) {

														enero =	parseFloat(datos[i]['enero_r'])/10;		
														febrero =	parseFloat(datos[i]['febrero_r'])/10;
														marzo =	parseFloat(datos[i]['marzo_r'])/10;
														abril =	parseFloat(datos[i]['abril_r'])/10;
														mayo =	parseFloat(datos[i]['mayo_r'])/10;
														junio =	parseFloat(datos[i]['junio_r'])/10;
														julio =	parseFloat(datos[i]['julio_r'])/10;
														agost =	parseFloat(datos[i]['agosto_r'])/10;
														sept =	parseFloat(datos[i]['septiembre_r'])/10;
														octu =	parseFloat(datos[i]['octubre_r'])/10;
														novi =	parseFloat(datos[i]['noviembre_r'])/10;
														dici =	parseFloat(datos[i]['diciembre_r'])/10;
														//alert('moneda 1 sin $ '+enero);
													}else{

														enero =	parseFloat(datos[i]['enero_r']);		
														febrero =	parseFloat(datos[i]['febrero_r']);
														marzo =	parseFloat(datos[i]['marzo_r']);
														abril =	parseFloat(datos[i]['abril_r']);
														mayo =	parseFloat(datos[i]['mayo_r']);
														junio =	parseFloat(datos[i]['junio_r']);
														julio =	parseFloat(datos[i]['julio_r']);
														agost =	parseFloat(datos[i]['agosto_r']);
														sept =	parseFloat(datos[i]['septiembre_r']);
														octu =	parseFloat(datos[i]['octubre_r']);
														novi =	parseFloat(datos[i]['noviembre_r']);
														dici =	parseFloat(datos[i]['diciembre_r']);
														//alert('dolares puros '+enero);
													}// fin moneda	
											 control = false;
											}// fin comparativo de id de proyecto

										}//if de la corrida	

								}//for j 
							 	
								if(control !== true){


								if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(enero);
                        				f = f +	 parseFloat(febrero);
                        				m = m +	parseFloat(marzo);
                        				a = a +	 parseFloat(abril);
                        				ma = ma + parseFloat(mayo);
                        				j= j +	 parseFloat(junio);
                        				ju= ju +	parseFloat(julio);
                        				ag= ag + parseFloat(agost);
                        				s =s +	 parseFloat(sept);
                        				o = o +	 parseFloat(octu);
                        				n = n +	parseFloat(novi);
                        				d = d +	 parseFloat(dici);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(enero).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(febrero).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(marzo).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(abril).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(mayo).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(junio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(julio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(agost).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(sept).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(octu).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(novi).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(dici).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}//fin ultimo

                        			}//fin aux = a gerehab

								}

								
							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No ´posee dolares Equivalentes');
						}


				}); 



		 				}// fin if opcion ro3

		 				if (opciones == "mvo1") {
				
				
				var v2 = 1;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2};

				$.post("ctablahab/gesinvmv",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_mv']);
                        				f = f +	 parseFloat(datos[i]['febrero_mv']);
                        				m = m +	parseFloat(datos[i]['marzo_mv']);
                        				a = a +	 parseFloat(datos[i]['abril_mv']);
                        				ma = ma + parseFloat(datos[i]['mayo_mv']);
                        				j= j +	 parseFloat(datos[i]['junio_mv']);
                        				ju= ju +	parseFloat(datos[i]['julio_mv']);
                        				ag= ag + parseFloat(datos[i]['agosto_mv']);
                        				s =s +	 parseFloat(datos[i]['septiembre_mv']);
                        				o = o +	 parseFloat(datos[i]['octubre_mv']);
                        				n = n +	parseFloat(datos[i]['noviembre_mv']);
                        				d = d +	 parseFloat(datos[i]['diciembre_mv']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_mv']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_mv']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_mv']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee Bolivares Puros');

						}

				});

		 					}// if opcion mvo1

		 					if (opciones == "mvo2") {
				
				
				var v2 = 2;
				var postForm ={'v3' : v3,
								'v1': v1,
								'v2' : v2};

				$.post("ctablahab/gesinvmv",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	

							for (var i = 0; i <  datos.length ; i++){

								if(aux == ''){
                        			aux = datos[i]['gerehab'];
                        		}	

                        			if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(datos[i]['enero_mv']);
                        				f = f +	 parseFloat(datos[i]['febrero_mv']);
                        				m = m +	parseFloat(datos[i]['marzo_mv']);
                        				a = a +	 parseFloat(datos[i]['abril_mv']);
                        				ma = ma + parseFloat(datos[i]['mayo_mv']);
                        				j= j +	 parseFloat(datos[i]['junio_mv']);
                        				ju= ju +	parseFloat(datos[i]['julio_mv']);
                        				ag= ag + parseFloat(datos[i]['agosto_mv']);
                        				s =s +	 parseFloat(datos[i]['septiembre_mv']);
                        				o = o +	 parseFloat(datos[i]['octubre_mv']);
                        				n = n +	parseFloat(datos[i]['noviembre_mv']);
                        				d = d +	 parseFloat(datos[i]['diciembre_mv']);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['enero_mv']).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(datos[i]['febrero_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['marzo_mv']).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(datos[i]['abril_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['mayo_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['junio_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['julio_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['agosto_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['septiembre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['octubre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['noviembre_mv']).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(datos[i]['diciembre_mv']).toFixed(2)+'</td>';
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}


                        			}

							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee Dolares Puros');

						}

				});

		 					}// if opcion mvo2



					if(opciones == "mvo3"){
		 				 
		 					var postForm ={'v3' : v3,
		 								'v1': v1};
		 					$.post("ctablahab/gesinvmvequiv",postForm,function(res){

						if (res.length>3) {
							var datos = $.parseJSON(res);
							var informacion;
							var aux = '';
							var e,f,m,a,ma,j,ju,ag,s,o,n,d;
							var enero,febrero,marzo,abril,mayo,junio,julio,agost,sept,octu,novi,dici;
							e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
							ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;	
							var control= false;

							for (var i = 0; i <  datos.length ; i++) {
								var corrida = i;
									if(aux == ''){
										aux = datos[i]['gerehab'];
									}	

									for (var j = 0; j < datos.length ; j++) {

										if(corrida != j){

											if(datos[i]['idhabfk'] == datos[j]['idhabfk'] && datos[i]['idelecfk']== datos[j]['idelecfk']){
												//alert("consiguio bs y dolares ");
												if (datos[i]['idmoneda'] == 1) {

												    enero = (parseFloat(datos[i]['enero_mv'])/10)+parseFloat(datos[j]['enero_mv']); 
												    febrero = (parseFloat(datos[i]['febrero_mv'])/10)+parseFloat(datos[j]['febrero_mv']); 
												    marzo = (parseFloat(datos[i]['marzo_mv'])/10)+parseFloat(datos[j]['marzo_mv']); 
												    abril = (parseFloat(datos[i]['abril_mv'])/10)+parseFloat(datos[j]['abril_mv']); 
												    mayo = (parseFloat(datos[i]['mayo_mv'])/10)+parseFloat(datos[j]['mayo_mv']); 
												    junio = (parseFloat(datos[i]['junio_mv'])/10)+parseFloat(datos[j]['junio_mv']); 
												    julio = (parseFloat(datos[i]['julio_mv'])/10)+parseFloat(datos[j]['julio_mv']); 
												    agost = (parseFloat(datos[i]['agosto_mv'])/10)+parseFloat(datos[j]['agosto_mv']); 
												    sept = (parseFloat(datos[i]['septiembre_mv'])/10)+parseFloat(datos[j]['septiembre_mv']); 
												    octu = (parseFloat(datos[i]['octubre_mv'])/10)+parseFloat(datos[j]['octubre_mv']); 
												    novi = (parseFloat(datos[i]['noviembre_mv'])/10)+parseFloat(datos[j]['noviembre_mv']); 
												    dici = (parseFloat(datos[i]['diciembre_mv'])/10)+parseFloat(datos[j]['diciembre_mv']); 

										 


												}else{

													enero = (parseFloat(datos[j]['enero_mv'])/10)+parseFloat(datos[i]['enero_mv']); 
												    febrero = (parseFloat(datos[j]['febrero_mv'])/10)+parseFloat(datos[i]['febrero_mv']); 
												    marzo = (parseFloat(datos[j]['marzo_mv'])/10)+parseFloat(datos[i]['marzo_mv']); 
												    abril = (parseFloat(datos[j]['abril_mv'])/10)+parseFloat(datos[i]['abril_mv']); 
												    mayo = (parseFloat(datos[j]['mayo_mv'])/10)+parseFloat(datos[i]['mayo_mv']); 
												    junio = (parseFloat(datos[j]['junio_mv'])/10)+parseFloat(datos[i]['junio_mv']); 
												    julio = (parseFloat(datos[j]['julio_mv'])/10)+parseFloat(datos[i]['julio_mv']); 
												    agost = (parseFloat(datos[j]['agosto_mv'])/10)+parseFloat(datos[i]['agosto_mv']); 
												    sept = (parseFloat(datos[j]['septiembre_mv'])/10)+parseFloat(datos[i]['septiembre_mv']); 
												    octu = (parseFloat(datos[j]['octubre_mv'])/10)+parseFloat(datos[i]['octubre_mv']); 
												    novi = (parseFloat(datos[j]['noviembre_mv'])/10)+parseFloat(datos[i]['noviembre_mv']); 
												    dici = (parseFloat(datos[j]['diciembre_mv'])/10)+parseFloat(datos[i]['diciembre_mv']); 	
 
												}
												if(i > j){
													control = true;
												}
												j = datos.length;

											}else{

													if (datos[i]['idmoneda']== 1 ) {

														enero =	parseFloat(datos[i]['enero_mv'])/10;		
														febrero =	parseFloat(datos[i]['febrero_mv'])/10;
														marzo =	parseFloat(datos[i]['marzo_mv'])/10;
														abril =	parseFloat(datos[i]['abril_mv'])/10;
														mayo =	parseFloat(datos[i]['mayo_mv'])/10;
														junio =	parseFloat(datos[i]['junio_mv'])/10;
														julio =	parseFloat(datos[i]['julio_mv'])/10;
														agost =	parseFloat(datos[i]['agosto_mv'])/10;
														sept =	parseFloat(datos[i]['septiembre_mv'])/10;
														octu =	parseFloat(datos[i]['octubre_mv'])/10;
														novi =	parseFloat(datos[i]['noviembre_mv'])/10;
														dici =	parseFloat(datos[i]['diciembre_mv'])/10;
														//alert('moneda 1 sin $ '+enero);
													}else{

														enero =	parseFloat(datos[i]['enero_mv']);		
														febrero =	parseFloat(datos[i]['febrero_mv']);
														marzo =	parseFloat(datos[i]['marzo_mv']);
														abril =	parseFloat(datos[i]['abril_mv']);
														mayo =	parseFloat(datos[i]['mayo_mv']);
														junio =	parseFloat(datos[i]['junio_mv']);
														julio =	parseFloat(datos[i]['julio_mv']);
														agost =	parseFloat(datos[i]['agosto_mv']);
														sept =	parseFloat(datos[i]['septiembre_mv']);
														octu =	parseFloat(datos[i]['octubre_mv']);
														novi =	parseFloat(datos[i]['noviembre_mv']);
														dici =	parseFloat(datos[i]['diciembre_mv']);
														//alert('dolares puros '+enero);
													}// fin moneda	
											 control = false;
											}// fin comparativo de id de proyecto

										}//if de la corrida	

								}//for j 
							 	
								if(control !== true){


								if(aux != datos[i]['gerehab']){
                        				informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';

									e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;
										aux = datos[i]['gerehab'];
										i--;
                        				
                        			}else{
                        				e = e + parseFloat(enero);
                        				f = f +	 parseFloat(febrero);
                        				m = m +	parseFloat(marzo);
                        				a = a +	 parseFloat(abril);
                        				ma = ma + parseFloat(mayo);
                        				j= j +	 parseFloat(junio);
                        				ju= ju +	parseFloat(julio);
                        				ag= ag + parseFloat(agost);
                        				s =s +	 parseFloat(sept);
                        				o = o +	 parseFloat(octu);
                        				n = n +	parseFloat(novi);
                        				d = d +	 parseFloat(dici);


                        				informacion+= '<tr>';
										informacion+= '<td>'+datos[i]['gerehab']+'</td>';
										informacion+= '<td>'+datos[i]['elemento']+'</td>';
										informacion+= '<td>'+parseFloat(enero).toFixed(2)+'</td>';		
										informacion+= '<td>'+parseFloat(febrero).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(marzo).toFixed(2)+'</td>';
									 	informacion+= '<td>'+parseFloat(abril).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(mayo).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(junio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(julio).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(agost).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(sept).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(octu).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(novi).toFixed(2)+'</td>';
										informacion+= '<td>'+parseFloat(dici).toFixed(2)+'</td>';	
										informacion+= '</tr>';
										if(i == (datos.length-1)){
											informacion+= '<tr >';
										informacion+= '<td class="red-header"></td>';
										informacion+= '<td class="red-header">Total</td>';
										informacion+= '<td class="red-header">'+parseFloat(e).toFixed(2)+'</td>';		
										informacion+= '<td class="red-header">'+parseFloat(f).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(m).toFixed(2)+'</td>';
									 	informacion+= '<td class="red-header">'+parseFloat(a).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ma).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(j).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ju).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(ag).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(s).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(o).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(n).toFixed(2)+'</td>';
										informacion+= '<td class="red-header">'+parseFloat(d).toFixed(2)+'</td>';
										informacion+= '</tr>';
										}//fin ultimo

                        			}//fin aux = a gerehab

								}

								
							}//fin del for i = 0 			

							$('#r3 tbody').html('');
							$('#r3 tbody').append(informacion);	
						}else{
							$('#r3 tbody').html('');
							alert('No posee dolares Equivalentes');
						}


				}); 



		 				}// fin if opcion mvo3


		 					
		 				}else{

		 					alert('Debe seleccionar un año');
		 				}// if anho no sea vacio
		

	});// fin de funcion click


}