var x;
x = $(document);
x.ready(explicacionesproyecto);

function explicacionesproyecto(){



		$('#anexplicaciones').change(function(){


			var anho = $("#anexplicaciones option:selected");
				var proyect = $("#proyecto option:selected"); 
				var meses = $("#meses option:selected"); 
				var explicaciones = $("#expli option:selected");
				

				if(proyect.val() != ''){

					if(meses.val() != ''){

						if(explicaciones.val() != ''){

							if (anho.val()!= ''){

							var v3 = anho.val();
							var v1 = proyect.val();	
							alert(v1);
							alert(v3);
							var postForm ={'v3' : v3,'v1': v1};

						$.post("cexplicaciones/proyectoplan",postForm,function(plan){

							var pplan = $.parseJSON(plan);

							$.post("cexplicaciones/proyectoreal",postForm,function(reales){

									var preal  = $.parseJSON(reales);
								$.post("cexplicaciones/proyectomejorvision",postForm,function(mejorvision){

										var pmv  = $.parseJSON(mejorvision);

									$.post("cexplicaciones/proyectoexplicaciones",postForm,function(exp){

											var pexp  = $.parseJSON(exp);

											var informacion;
												 switch(meses.val()) {
												    case'1':
												      
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'enero_p',1);
												      		var pdol =  valorproyectex(pplan,'enero_p',2);
												      		var rbsf =  valorproyectex(preal,'enero_r',1);
												      		var rdol =  valorproyectex(preal,'enero_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'enero_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'enero_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'enero_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'enero_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      	
												        break;
												    case '2':
												    			if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'febrero_p',1);
												      		var pdol =  valorproyectex(pplan,'febrero_p',2);
												      		var rbsf =  valorproyectex(preal,'febrero_r',1);
												      		var rdol =  valorproyectex(preal,'febrero_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'febrero_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'febrero_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'febrero_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'febrero_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												        
												        break;
												     case '3':
												        	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'marzo_p',1);
												      		var pdol =  valorproyectex(pplan,'marzo_p',2);
												      		var rbsf =  valorproyectex(preal,'marzo_r',1);
												      		var rdol =  valorproyectex(preal,'marzo_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'marzo_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'marzo_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'marzo_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'marzo_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      	
												        break;
												      case '4':if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'abril_p',1);
												      		var pdol =  valorproyectex(pplan,'abril_p',2);
												      		var rbsf =  valorproyectex(preal,'abril_r',1);
												      		var rdol =  valorproyectex(preal,'abril_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'abril_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'abril_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'abril_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'abril_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      	
												        
												        break;
												      case '5':
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'mayo_p',1);
												      		var pdol =  valorproyectex(pplan,'mayo_p',2);
												      		var rbsf =  valorproyectex(preal,'mayo_r',1);
												      		var rdol =  valorproyectex(preal,'mayo_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'mayo_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'mayo_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'mayo_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'mayo_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      
												        break;
												      case '6':
												      if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'junio_p',1);
												      		var pdol =  valorproyectex(pplan,'junio_p',2);
												      		var rbsf =  valorproyectex(preal,'junio_r',1);
												      		var rdol =  valorproyectex(preal,'junio_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'junio_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'junio_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'junio_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'junio_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      	
												    
												        break;
												      case '7':
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'julio_p',1);
												      		var pdol =  valorproyectex(pplan,'julio_p',2);
												      		var rbsf =  valorproyectex(preal,'julio_r',1);
												      		var rdol =  valorproyectex(preal,'julio_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'julio_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'julio_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'julio_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'julio_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      
												        break;
												      case '8':
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'agosto_p',1);
												      		var pdol =  valorproyectex(pplan,'agosto_p',2);
												      		var rbsf =  valorproyectex(preal,'agosto_r',1);
												      		var rdol =  valorproyectex(preal,'agosto_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'agosto_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'agosto_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'agosto_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'agosto_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												        break;
												      case '9':

												      if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'septiembre_p',1);
												      		var pdol =  valorproyectex(pplan,'septiembre_p',2);
												      		var rbsf =  valorproyectex(preal,'septiembre_r',1);
												      		var rdol =  valorproyectex(preal,'septiembre_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'septiembre_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'septiembre_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'septiembre_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'septiembre_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												     
												        break;
												      case '10':
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'octubre_p',1);
												      		var pdol =  valorproyectex(pplan,'octubre_p',2);
												      		var rbsf =  valorproyectex(preal,'octubre_r',1);
												      		var rdol =  valorproyectex(preal,'octubre_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'octubre_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'octubre_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'octubre_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'octubre_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												     
												        break;
												      case '11':
												      	if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'noviembre_p',1);
												      		var pdol =  valorproyectex(pplan,'noviembre_p',2);
												      		var rbsf =  valorproyectex(preal,'noviembre_r',1);
												      		var rdol =  valorproyectex(preal,'noviembre_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'noviembre_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'noviembre_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'noviembre_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'noviembre_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												      
												        break;
												      case '12':
												      if(explicaciones.val() == '1'){
												      		var pbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var pdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var rbsf =  valorproyectex(preal,'diciembre_r',1);
												      		var rdol =  valorproyectex(preal,'diciembre_r',2);
												      		var exbsfpr =  soloexplicaciones(pexp,'diciembre_ex',1,1);
												      		var exdolpr =  soloexplicaciones(pexp,'diciembre_ex',2,1);
												      	
												      	informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',pbsf,rbsf,exbsfpr,'planrealbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',pdol,rdol,exdolpr,'planrealdol');
												      	}
												      	if(explicaciones.val() == '2'){


												      		var aprbsf =  valorproyectex(pplan,'diciembre_p',1);
												      		var aprpdol =  valorproyectex(pplan,'diciembre_p',2);
												      		var mvbsf =  valorproyectex(pmv,'diciembre_mv',1);
												      		var mvdol =  valorproyectex(pmv,'diciembre_mv',2);
												      		var exbsfrmv =  soloexplicaciones(pexp,'diciembre_ex',1,2);
												      		var exdolrmv =  soloexplicaciones(pexp,'diciembre_ex',2,2);
														
														informacion = cabexplicaciones('Tabla-Elemento-Encabezado',v3,'Plan','Real');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','BSF',aprbsf,mvbsf,exbsfrmv,'mvaprbsf');
												      	informacion += mostrarexplicaciones('Tabla-Elemento1','USD',aprpdol,mvdol,exdolrmv,'mvaprdol');
												      		
												      	}
												    
												      	$('#explicaonestabla').html('');
												      	$('#explicaonestabla').append(informacion);
												    
												        break;
												    default:
												       
												} 


									});
										
								});
								
							});

						});

							}else{

								alert('debe seleccionar un año para cargar');
							}


						}else{

							alert('debe seleccionar una opcion para las explicaciones');
						}

							
					}else{

						alert('debe seleccionar un mes del año ');

					}

				}else{

					alert('debe seleccionar un proyecto');
				}


		});




}
