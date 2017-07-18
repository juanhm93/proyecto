var x;

x = $(document);
x.ready(mostrarhab);

function mostrarhab() {


	$( "input" ).on( "click", function() {

		var anho = $("#anhogestinv option:selected");

		var opciones = $("input:checked").val();

		if(anho.val() != ''){

				var v3;
				v3 = anho.val();

			alert(opciones);

			if (opciones == "ph1") {
				
				alert(v3);
				var v2 = 1;
				var postForm ={'v3' : v3,
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

							$('#r2 tbody').html('');
							$('#r2 tbody').append(informacion);	
						}

				});

		 					}// if opcion ph1

		 		if (opciones == "ph2") {
				
				alert(v3);
				var v2 = 2;
				var postForm ={'v3' : v3,
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

							$('#r2 tbody').html('');
							$('#r2 tbody').append(informacion);	
						}

				});

		 					}// if opcion ph2


		 				if(opciones == "ph3"){
		 					var v2 = 2;
		 					var postForm ={'v3' : v3};
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

											if(datos[i]['idhab'] == datos[j]['idhab']){
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

												 //   alert('meoneda 1'+enero);


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

												  //  alert('moneda 2'+enero);
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
													//	alert('dolares '+enero);
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
										}//fin ultimo

                        			}//fin aux = a gerehab

								}

								
							}//fin del for i = 0 			

							$('#r2 tbody').html('');
							$('#r2 tbody').append(informacion);	
						}

				});



		 				}// fin if opcion ph3


		 					
		 				}else{

		 					alert('Debe seleccionar un año');
		 				}// if anho no sea vacio
		

	});// fin de funcion click


}