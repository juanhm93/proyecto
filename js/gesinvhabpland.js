var x;

x = $(document);
x.ready(gestioninversionpland);

function gestioninversionpland() {
	 
	var x = $("#anhogestinv");
	
	x.change(function(){


		 var anho = $("#anhogestinv option:selected");
		 	 
		 if(anho.val() != ''){
		 	 
		  var v3;
		 	v3 = anho.val();
		 	var postForm ={'v3' : v3};



		 	  $.ajax({
                        type:"POST",
                        url:"ajax/cmostarm/ajaxginvpland",
                        data:  postForm,
                        dateType:"json",
                        success: function(res){



                        	if(res.length > 3){

                        		var datos = $.parseJSON(res);
                        		

                        	 
                        		var informacion;
                        		var aux = '';
                        		var e,f,m,a,ma,j,ju,ag,s,o,n,d;
                        		e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;

                        		for (var i = 0; i <  datos.length ; i++) {
                        		
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

                        		

                        		}
								
										
							$('#habplandol').html('');
							$('#habplandol').append(informacion);	
                        	}






						}//fin funtion success                        	
                
                });       

		 }

	}); 
}



