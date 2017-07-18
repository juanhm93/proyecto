var x;
x = $(document);
x.ready(proyectorealb);
	
function proyectorealb() {
	 
	var x = $("#anhoproyectoi");
	
	x.change(function(){


		 var anho = $("#anhoproyectoi option:selected");
		 	 
		 if(anho.val() != ''){
		 	 
		  var v3;
		 	v3 = anho.val();
		 	var postForm ={'v3' : v3};



		 	  $.ajax({
                        type:"POST",
                        url:"ajax/cmostarm/ajaxprorealb",
                        data:  postForm,
                        dateType:"json",
                        success: function(res){



                        	if(res.length > 3){

                        		var datos = $.parseJSON(res);
                        		alert(datos[0]['descripcion']);

                        	 
                        		var informacion;
                        		var aux = '';
                        		var e,f,m,a,ma,j,ju,ag,s,o,n,d;
                        		e = 0.0;f = 0.0;m = 0.0;a = 0.0;ma = 0.0;j = 0.0;
                        			ju = 0.0;ag = 0.0;s = 0.0;o = 0.0;n = 0.0;d = 0.0;

                        		for (var i = 0; i <  datos.length ; i++) {
                        		
                        		if(aux == ''){
                        			aux = datos[i]['descripcion'];
                        		}	

                        			if(aux != datos[i]['descripcion']){
                        				informacion+= '<tr >';
										informacion+= '<td colspan="2" class="red-header">Total '+datos[i]['numcategoria']+' '+datos[i]['descripcion']+' </td>';
										informacion+= '<td class="red-header"></td>';
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
										aux = datos[i]['descripcion'];
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
                        				informacion+= '<td>'+datos[i]['numcategoria']+' '+datos[i]['descripcion']+'</td>';
										informacion+= '<td>'+datos[i]['renglon']+'</td>';
										informacion+= '<td>'+datos[i]['titulo']+'</td>';
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
										informacion+= '<td colspan="2" class="red-header">Total '+datos[i]['numcategoria']+' '+datos[i]['descripcion']+' </td>';
										informacion+= '<td class="red-header"></td>';
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
								
										
							$('#proyectoreal1').html('');
							$('#proyectoreal1').append(informacion);	
                        	}






						}//fin funtion success                        	
                
                });       

		 }

	}); 
}



