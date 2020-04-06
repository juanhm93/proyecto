var x;
x = $(document);
x.ready(epdivoriental);

function epdivoriental(){

$( "input" ).on( "click", function() {

		var anho = $("#anhoepdivoriental option:selected");

		var opciones = $("input:checked").val();

		var v3 = anho.val();
		
		alert('la opcion '+opciones);

		if(anho.val() != ''){
			var v1= 2;
			var v2 = 1;
			if(opciones == 'resumen1'){
				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

							
						$.post("cepdivoriental/habilitadorarealequiv",postForm,function(habreal){

								var hreal = $.parseJSON(habreal);

								
								$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habmv){

									var hmv = $.parseJSON(habmv);
						
 						

 						$.post("cepdivoriental/habilitadorantequiv",postForm,function(habant){

 							alert('habilitadora anteproyecto'+habant);
 							var anthab = $.parseJSON(habant);


 							$.post("cepdivoriental/pplanequiv",postForm,function(pplan){

 							alert('plan proyecto'+pplan);
 							var planp = $.parseJSON(pplan);


 						$.post("cepdivoriental/prealequiv",postForm,function(preal){


 							alert('proyecto real'+preal);
 								var realp = $.parseJSON(preal);

 								$.post("cepdivoriental/pmvequiv",postForm,function(pmv){

 										alert('proyecto mv'+pmv);
 										var mvp = $.parseJSON(pmv);


 														$.post("cepdivoriental/pantequiv",postForm,function(pant){

 															alert('proyecto anteproyecto'+pant);
 															var antp = $.parseJSON(pant);

 															var informacion = englobarymostrardivoep(hab,hreal,hmv,anthab,planp,realp,mvp,antp,v3);

										 						 	$('#resumentotal').html('');
										 						 	$('#resumentotal').append(informacion); 
										 						 /// FIN BLOQUE VISUAL DE LA TABLA	



 														});


 												});


 											});

 						


 											});



 									});
	

								}); // fin post real
						}); // fin post real
 						 
				});// fin post plan 

			}// fin si es la opcion de resumen 

			if(opciones == 'pepdivori1'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pplanequiv",postForm,function(pplan){

 											 
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_p',1);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_p',1);
										 						 	$('#r2 tbody').html('');
										 						 	$('#r2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post plan 



			}// fin opcion pepdivori1


			if(opciones == 'pepdivori2'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pplanequiv",postForm,function(pplan){

 										 
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_p',2);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_p',2);
										 						 	$('#r2 tbody').html('');
										 						 	$('#r2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post plan 



			}// fin opcion pepdivori2

				if(opciones == 'pepdivori3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pplanequiv",postForm,function(pplan){

 										 
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementocequiv(hab,'_p');
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacatequiv(planp,'_p');
										 						 	$('#r2 tbody').html('');
										 						 	$('#r2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post plan 



			}// fin opcion pepdivori3

			if(opciones == 'repdivori1'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/prealequiv",postForm,function(pplan){

 											alert('plan proyecto'+pplan);
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_r',1);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_r',1);
										 						 	$('#r3 tbody').html('');
										 						 	$('#r3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post real 



			}// fin opcion repdivori1

			if(opciones == 'repdivori2'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/prealequiv",postForm,function(pplan){

 											alert('plan proyecto'+pplan);
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_r',2);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_r',2);
										 						 	$('#r3 tbody').html('');
										 						 	$('#r3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post real 



			}// fin opcion repdivori2

			if(opciones == 'repdivori3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/prealequiv",postForm,function(pplan){

 											 
 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementocequiv(hab,'_r');
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacatequiv(planp,'_r');
										 						 	$('#r3 tbody').html('');
										 						 	$('#r3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post real 



			}// fin opcion repdivori3


				if(opciones == 'mvepdivori1'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pmvequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_mv',1);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_mv',1);
										 						 	$('#r3 tbody').html('');
										 						 	$('#r3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post plan 



			}// fin opcion mvepdivori1


			if(opciones == 'mvepdivori1'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pmvequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_mv',1);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_mv',1);
										 						 	$('#mejorv2 tbody').html('');
										 						 	$('#mejorv2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post mejor vision 



			}// fin opcion mvepdivori1

			if(opciones == 'mvepdivori2'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pmvequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_mv',2);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_mv',2);
										 						 	$('#mejorv2 tbody').html('');
										 						 	$('#mejorv2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post mejor vision 



			}// fin opcion mvepdivori2
			if(opciones == 'mvepdivori3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pmvequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementocequiv(hab,'_mv');
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacatequiv(planp,'_mv');
										 						 	$('#mejorv2 tbody').html('');
										 						 	$('#mejorv2 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post mejor vision 



			}// fin opcion mvepdivori3

				if(opciones == 'antepdivori1'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pantequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_ant',1);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_ant',1);
										 						 	$('#mejorv3 tbody').html('');
										 						 	$('#mejorv3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post anteproyecto



			}// fin opcion antepdivori1

			if(opciones == 'antepdivori2'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pantequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementoc(hab,'_ant',2);
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacat(planp,'_ant',2);
										 						 	$('#mejorv3 tbody').html('');
										 						 	$('#mejorv3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post anteproyecto



			}// fin opcion antepdivori2
			if(opciones == 'antepdivori3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoriental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoriental/pantequiv",postForm,function(pplan){

 											var planp = $.parseJSON(pplan);


 															var informacion = mostrarprmaelementocequiv(hab,'_ant');
 																informacion += '<tr>';
										 						for (var i=0; i < 18 ; i++){
										 						informacion += '<td>	</td>';
										 						}
										 						informacion += '</tr>';
 																informacion += mostrarprmacatequiv(planp,'_ant');
										 						 	$('#mejorv3 tbody').html('');
										 						 	$('#mejorv3 tbody').append(informacion); 

										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

 											});

 						 
				});// fin post anteproyecto



			}// fin opcion antepdivori3

		 }else{

		 	alert('debe seleccionar un año ');

		 }


	});

}



 
function mostrarprmaelementoc(habp,com,moneda){

		//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var laborep = filtrarcostohab(habp,filtrolabor,5,com,moneda);
						var bbep = filtrarcostohab(habp,filtrobb,5,com,moneda);
						var mep = filtrarcostohab(habp,filtrom,5,com,moneda);
						var scep = filtrarcostohab(habp,filtrosc,5,com,moneda);
						var oep = filtrarcostohab(habp,filtroo,5,com,moneda);
						var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 	
 						 // DTTO ORIENTAL PLAN EN DOLARES
 						 var labordtto = filtrarcostohab(habp,filtrolabor,4,com,moneda);
 						 var bbdtto = filtrarcostohab(habp,filtrobb,4,com,moneda);
 						 var mdtto = filtrarcostohab(habp,filtrom,4,com,moneda);
 						 var scdtto = filtrarcostohab(habp,filtrosc,4,com,moneda);
 						 var odtto = filtrarcostohab(habp,filtroo,4,com,moneda);
 						 var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  /// DIVISION ORIENTAL PLAN EN BOLIVARES
 						 var labordivo = filtrardivo(labordtto,laborep);
 						 var bbdivo = filtrardivo(bbdtto,bbep);
 						 var mdivo = filtrardivo(mdtto,mep);
 						 var scdivo = filtrardivo(scdtto,scep);
 						 var odivo = filtrardivo(odtto,oep);
 						 var totaldivo = filtrartotal(labordivo,bbdivo,mdivo,scdivo,odivo);
 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////

 						var laborybbdivobsfr  = filtrardivo(labordivo,bbdivo); 
 						
 						var	informacion = cabeceracategoriaprmva('red-header','ELEMENTO DE COSTO');
 							informacion += mostrarcategoriaprmva('','Labor y Beneficios',laborybbdivobsfr); 
 							informacion += mostrarcategoriaprmva('','Materiales',mdivo);
 							informacion += mostrarcategoriaprmva('','Servicios y Contratos',scdivo);
 							informacion += mostrarcategoriaprmva('','Otros Costos y Gastos',odivo);
 							informacion += mostrarcategoriaprmva('red-header','Total',totaldivo); 
 					return informacion;
 						 
}

// EQUIVALENTE DEL PLAN REAL MEJOR VISION Y ANTEPROYECTO POR ELEMENTO DE COSTO
function mostrarprmaelementocequiv(habp,com){

			//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var laborep = filtrarcostohab(habp,filtrolabor,5,com,1);
						var bbep = filtrarcostohab(habp,filtrobb,5,com,1);
						var mep = filtrarcostohab(habp,filtrom,5,com,1);
						var scep = filtrarcostohab(habp,filtrosc,5,com,1);
						var oep = filtrarcostohab(habp,filtroo,5,com,1);
						var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 
 						 		 // ESFUERZOS PROPIOS PLAN EN DOLARES
 						 var laborepdol = filtrarcostohab(habp,filtrolabor,5,com,2);
 						 var bbepdol = filtrarcostohab(habp,filtrobb,5,com,2);
 						 var mepdol = filtrarcostohab(habp,filtrom,5,com,2);
 						 var scepdol = filtrarcostohab(habp,filtrosc,5,com,2);
 						 var oepdol = filtrarcostohab(habp,filtroo,5,com,2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);

 						 // DTTO ORIENTAL PLAN EN BOLIVARES
					 	 var labordtto = filtrarcostohab(habp,filtrolabor,4,com,1);
 						 var bbdtto = filtrarcostohab(habp,filtrobb,4,com,1);
 						 var mdtto = filtrarcostohab(habp,filtrom,4,com,1);
 						 var scdtto = filtrarcostohab(habp,filtrosc,4,com,1);
 						 var odtto = filtrarcostohab(habp,filtroo,4,com,1);
 						 var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						 // DTTO ORIENTAL PLAN EN DOLARES
 						 var labordttodol = filtrarcostohab(habp,filtrolabor,4,com,2);
 						 var bbdttodol = filtrarcostohab(habp,filtrobb,4,com,2);
 						 var mdttodol = filtrarcostohab(habp,filtrom,4,com,2);
 						 var scdttodol = filtrarcostohab(habp,filtrosc,4,com,2);
 						 var odttodol = filtrarcostohab(habp,filtroo,4,com,2);
 						 var totaldttodol = filtrartotal(labordttodol,bbdttodol,mdttodol,scdttodol,odttodol);


 						  /// DIVISION ORIENTAL PLAN EN BOLIVARES
 						 var labordivo = filtrardivo(labordtto,laborep);
 						 var bbdivo = filtrardivo(bbdtto,bbep);
 						 var mdivo = filtrardivo(mdtto,mep);
 						 var scdivo = filtrardivo(scdtto,scep);
 						 var odivo = filtrardivo(odtto,oep);
 						 var totaldivo = filtrartotal(labordivo,bbdivo,mdivo,scdivo,odivo);

 						 /// DIVISION ORIENTAL PLAN EN DOLARES
 						 var labordivodol = filtrardivo(labordttodol,laborepdol);
 						 var bbdivodol = filtrardivo(bbdttodol,bbepdol);
 						 var mdivodol = filtrardivo(mdttodol,mepdol);
 						 var scdivodol = filtrardivo(scdttodol,scepdol);
 						 var odivodol = filtrardivo(odttodol,oepdol);
 						 var totaldivodol = filtrartotal(labordivodol,bbdivodol,mdivodol,scdivodol,odivodol);

 						  /// DIVISION ORIENTAL PLAN EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(labordivo,labordivodol);
 						 var bbdivoDeqv = filtroequivalente(bbdivo,bbdivodol);
 						 var mdivoDeqv = filtroequivalente(mdivo,mdivodol);
 						 var scdivoDeqv = filtroequivalente(scdivo,scdivodol);
 						 var odivoDeqv = filtroequivalente(odivo,odivodol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////
 						 var laborybbdivoDeqv = filtrardivo(labordivoDeqv,bbdivoDeqv);

 						
 						var	informacion = cabeceracategoriaprmva('red-header','ELEMENTO DE COSTO');
 							informacion += mostrarcategoriaprmva('','Labor y Beneficios',laborybbdivoDeqv); 
 							informacion += mostrarcategoriaprmva('','Materiales',mdivoDeqv);
 							informacion += mostrarcategoriaprmva('','Servicios y Contratos',scdivoDeqv);
 							informacion += mostrarcategoriaprmva('','Otros Costos y Gastos',odivoDeqv);
 							informacion += mostrarcategoriaprmva('red-header','Total',totaldivoDeqv); 
 					return informacion;

}



//HACER CALCULOS Y RETORNAR LO QUE SE VA A MOSTRAR EN LA VARIABLE INFORMACION
 function englobarymostrardivoep(habp,habr,habmv,habant,pplan,preal,pmv,pant,v3){


 	//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var laborepbsf = filtrarcostohab(habp,filtrolabor,5,'_p',1);
						var bbepbsf = filtrarcostohab(habp,filtrobb,5,'_p',1);
						var mepbsf = filtrarcostohab(habp,filtrom,5,'_p',1);
						var scepbsf = filtrarcostohab(habp,filtrosc,5,'_p',1);
						var oepbsf = filtrarcostohab(habp,filtroo,5,'_p',1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 
 						 		 // ESFUERZOS PROPIOS PLAN EN DOLARES
 						 var laborepdol = filtrarcostohab(habp,filtrolabor,5,'_p',2);
 						 var bbepdol = filtrarcostohab(habp,filtrobb,5,'_p',2);
 						 var mepdol = filtrarcostohab(habp,filtrom,5,'_p',2);
 						 var scepdol = filtrarcostohab(habp,filtrosc,5,'_p',2);
 						 var oepdol = filtrarcostohab(habp,filtroo,5,'_p',2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);

 						 // DTTO ORIENTAL PLAN EN BOLIVARES
					 	 var labordttobsf = filtrarcostohab(habp,filtrolabor,4,'_p',1);
 						 var bbdttobsf = filtrarcostohab(habp,filtrobb,4,'_p',1);
 						 var mdttobsf = filtrarcostohab(habp,filtrom,4,'_p',1);
 						 var scdttobsf = filtrarcostohab(habp,filtrosc,4,'_p',1);
 						 var odttobsf = filtrarcostohab(habp,filtroo,4,'_p',1);
 						 var totaldttobsf = filtrartotal(labordttobsf,bbdttobsf,mdttobsf,scdttobsf,odttobsf);

 						 // DTTO ORIENTAL PLAN EN DOLARES
 						 var labordttodol = filtrarcostohab(habp,filtrolabor,4,'_p',2);
 						 var bbdttodol = filtrarcostohab(habp,filtrobb,4,'_p',2);
 						 var mdttodol = filtrarcostohab(habp,filtrom,4,'_p',2);
 						 var scdttodol = filtrarcostohab(habp,filtrosc,4,'_p',2);
 						 var odttodol = filtrarcostohab(habp,filtroo,4,'_p',2);
 						 var totaldttodol = filtrartotal(labordttodol,bbdttodol,mdttodol,scdttodol,odttodol);


 						  /// DIVISION ORIENTAL PLAN EN BOLIVARES
 						 var labordivobsf = filtrardivo(labordttobsf,laborepbsf);
 						 var bbdivobsf = filtrardivo(bbdttobsf,bbepbsf);
 						 var mdivobsf = filtrardivo(mdttobsf,mepbsf);
 						 var scdivobsf = filtrardivo(scdttobsf,scepbsf);
 						 var odivobsf = filtrardivo(odttobsf,oepbsf);
 						 var totaldivobsf = filtrartotal(labordivobsf,bbdivobsf,mdivobsf,scdivobsf,odivobsf);

 						 /// DIVISION ORIENTAL PLAN EN DOLARES
 						 var labordivodol = filtrardivo(labordttodol,laborepdol);
 						 var bbdivodol = filtrardivo(bbdttodol,bbepdol);
 						 var mdivodol = filtrardivo(mdttodol,mepdol);
 						 var scdivodol = filtrardivo(scdttodol,scepdol);
 						 var odivodol = filtrardivo(odttodol,oepdol);
 						 var totaldivodol = filtrartotal(labordivodol,bbdivodol,mdivodol,scdivodol,odivodol);

 						  /// DIVISION ORIENTAL PLAN EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(labordivobsf,labordivodol);
 						 var bbdivoDeqv = filtroequivalente(bbdivobsf,bbdivodol);
 						 var mdivoDeqv = filtroequivalente(mdivobsf,mdivodol);
 						 var scdivoDeqv = filtroequivalente(scdivobsf,scdivodol);
 						 var odivoDeqv = filtroequivalente(odivobsf,odivodol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////



 						 ////////////////REAL HABILITADORAS /////////////////////////
								// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfr = filtrarcostohab(habr,filtrolabor,5,'_r',1);
 						 var bbepbsfr = filtrarcostohab(habr,filtrobb,5,'_r',1);
 						 var mepbsfr = filtrarcostohab(habr,filtrom,5,'_r',1);
 						 var scepbsfr = filtrarcostohab(habr,filtrosc,5,'_r',1);
 						 var oepbsfr = filtrarcostohab(habr,filtroo,5,'_r',1);
 						 var totalepbsfr = filtrartotal(laborepbsfr,bbepbsfr,mepbsfr,scepbsfr,oepbsfr);

 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolr = filtrarcostohab(habr,filtrolabor,5,'_r',2);
 						 var bbepdolr = filtrarcostohab(habr,filtrobb,5,'_r',2);
 						 var mepdolr = filtrarcostohab(habr,filtrom,5,'_r',2);
 						 var scepdolr = filtrarcostohab(habr,filtrosc,5,'_r',2);
 						 var oepdolr = filtrarcostohab(habr,filtroo,5,'_r',2);
 						 var totalepdolr = filtrartotal(laborepdolr,bbepdolr,mepdolr,scepdolr,oepdolr);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfr = filtrarcostohab(habr,filtrolabor,4,'_r',1);
 						 var bbdttobsfr = filtrarcostohab(habr,filtrobb,4,'_r',1);
 						 var mdttobsfr = filtrarcostohab(habr,filtrom,4,'_r',1);
 						 var scdttobsfr = filtrarcostohab(habr,filtrosc,4,'_r',1);
 						 var odttobsfr = filtrarcostohab(habr,filtroo,4,'_r',1);
 						 var totaldttobsfr = filtrartotal(labordttobsfr,bbdttobsfr,mdttobsfr,scdttobsfr,odttobsfr);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolr = filtrarcostohab(habr,filtrolabor,4,'_r',2);
 						 var bbdttodolr = filtrarcostohab(habr,filtrobb,4,'_r',2);
 						 var mdttodolr = filtrarcostohab(habr,filtrom,4,'_r',2);
 						 var scdttodolr = filtrarcostohab(habr,filtrosc,4,'_r',2);
 						 var odttodolr = filtrarcostohab(habr,filtroo,4,'_r',2);
 						 var totaldttodolr = filtrartotal(labordttodolr,bbdttodolr,mdttodolr,scdttodolr,odttodolr);


 						  /// DIVISION ORIENTAL REAL EN BOLIVARES
 						 var labordivobsfr = filtrardivo(labordttobsfr,laborepbsfr);
 						 var bbdivobsfr = filtrardivo(bbdttobsfr,bbepbsfr);
 						 var mdivobsfr = filtrardivo(mdttobsfr,mepbsfr);
 						 var scdivobsfr = filtrardivo(scdttobsfr,scepbsfr);
 						 var odivobsfr = filtrardivo(odttobsfr,oepbsfr);
 						 var totaldivobsfr = filtrartotal(labordivobsfr,bbdivobsfr,mdivobsfr,scdivobsfr,odivobsfr);

 						 /// DIVISION ORIENTAL REAL EN DOLARES
 						 var labordivodolr = filtrardivo(labordttodolr,laborepdolr);
 						 var bbdivodolr = filtrardivo(bbdttodolr,bbepdolr);
 						 var mdivodolr = filtrardivo(mdttodolr,mepdolr);
 						 var scdivodolr = filtrardivo(scdttodolr,scepdolr);
 						 var odivodolr = filtrardivo(odttodolr,oepdolr);
 						 var totaldivodolr = filtrartotal(labordivodolr,bbdivodolr,mdivodolr,scdivodolr,odivodolr);

 						  /// DIVISION ORIENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivoDeqvr = filtroequivalente(labordivobsfr,labordivodolr);
 						 var bbdivoDeqvr = filtroequivalente(bbdivobsfr,bbdivodolr);
 						 var mdivoDeqvr = filtroequivalente(mdivobsfr,mdivodolr);
 						 var scdivoDeqvr = filtroequivalente(scdivobsfr,scdivodolr);
 						 var odivoDeqvr = filtroequivalente(odivobsfr,odivodolr);
 						 var totaldivoDeqvr = filtrartotal(labordivoDeqvr,bbdivoDeqvr,mdivoDeqvr,scdivoDeqvr,odivoDeqvr);

 						 /////////////FIN REAL ////////////////////////////////////////////////

 						 //////////////// MEJOR VISION ///////////////////////////////////////////////
 						 // ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfmv = filtrarcostohab(habmv,filtrolabor,5,'_mv',1);
 						 var bbepbsfmv = filtrarcostohab(habmv,filtrobb,5,'_mv',1);
 						 var mepbsfmv = filtrarcostohab(habmv,filtrom,5,'_mv',1);
 						 var scepbsfmv = filtrarcostohab(habmv,filtrosc,5,'_mv',1);
 						 var oepbsfmv = filtrarcostohab(habmv,filtroo,5,'_mv',1);
 						 var totalepbsfmv = filtrartotal(laborepbsfmv,bbepbsfmv,mepbsfmv,scepbsfmv,oepbsfmv);
 						 
 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolmv = filtrarcostohab(habmv,filtrolabor,5,'_mv',2);
 						 var bbepdolmv = filtrarcostohab(habmv,filtrobb,5,'_mv',2);
 						 var mepdolmv = filtrarcostohab(habmv,filtrom,5,'_mv',2);
 						 var scepdolmv = filtrarcostohab(habmv,filtrosc,5,'_mv',2);
 						 var oepdolmv = filtrarcostohab(habmv,filtroo,5,'_mv',2);
 						 var totalepdolmv = filtrartotal(laborepdolmv,bbepdolmv,mepdolmv,scepdolmv,oepdolmv);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfmv = filtrarcostohab(habmv,filtrolabor,4,'_mv',1);
 						 var bbdttobsfmv = filtrarcostohab(habmv,filtrobb,4,'_mv',1);
 						 var mdttobsfmv = filtrarcostohab(habmv,filtrom,4,'_mv',1);
 						 var scdttobsfmv = filtrarcostohab(habmv,filtrosc,4,'_mv',1);
 						 var odttobsfmv = filtrarcostohab(habmv,filtroo,4,'_mv',1);
 						 var totaldttobsfmv = filtrartotal(labordttobsfmv,bbdttobsfmv,mdttobsfmv,scdttobsfmv,odttobsfmv);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolmv = filtrarcostohab(habmv,filtrolabor,4,'_mv',2);
 						 var bbdttodolmv = filtrarcostohab(habmv,filtrobb,4,'_mv',2);
 						 var mdttodolmv = filtrarcostohab(habmv,filtrom,4,'_mv',2);
 						 var scdttodolmv = filtrarcostohab(habmv,filtrosc,4,'_mv',2);
 						 var odttodolmv = filtrarcostohab(habmv,filtroo,4,'_mv',2);
 						 var totaldttodolmv = filtrartotal(labordttodolmv,bbdttodolmv,mdttodolmv,scdttodolmv,odttodolmv);


 						  /// DIVISION ORIENTAL REAL EN BOLIVARES
 						 var labordivobsfmv = filtrardivo(labordttobsfmv,laborepbsfmv);
 						 var bbdivobsfmv = filtrardivo(bbdttobsfmv,bbepbsfmv);
 						 var mdivobsfmv = filtrardivo(mdttobsfmv,mepbsfmv);
 						 var scdivobsfmv = filtrardivo(scdttobsfmv,scepbsfmv);
 						 var odivobsfmv = filtrardivo(odttobsfmv,oepbsfmv);
 						 var totaldivobsfmv = filtrartotal(labordivobsfmv,bbdivobsfmv,mdivobsfmv,scdivobsfmv,odivobsfmv);

 						 /// DIVISION ORIENTAL REAL EN DOLARES
 						 var labordivodolmv = filtrardivo(labordttodolmv,laborepdolmv);
 						 var bbdivodolmv = filtrardivo(bbdttodolmv,bbepdolmv);
 						 var mdivodolmv = filtrardivo(mdttodolmv,mepdolmv);
 						 var scdivodolmv = filtrardivo(scdttodolmv,scepdolmv);
 						 var odivodolmv = filtrardivo(odttodolmv,oepdolmv);
 						 var totaldivodolmv = filtrartotal(labordivodolmv,bbdivodolmv,mdivodolmv,scdivodolmv,odivodolmv);

 						  /// DIVISION ORIENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivoDeqvmv = filtroequivalente(labordivobsfmv,labordivodolmv);
 						 var bbdivoDeqvmv = filtroequivalente(bbdivobsfmv,bbdivodolmv);
 						 var mdivoDeqvmv = filtroequivalente(mdivobsfmv,mdivodolmv);
 						 var scdivoDeqvmv = filtroequivalente(scdivobsfmv,scdivodolmv);
 						 var odivoDeqvmv = filtroequivalente(odivobsfmv,odivodolmv);
 						 var totaldivoDeqvmv = filtrartotal(labordivoDeqvmv,bbdivoDeqvmv,mdivoDeqvmv,scdivoDeqvmv,odivoDeqvmv);

 						var aux=0;
 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbdivobsfr  = filtrardivo(labordivobsfr,bbdivobsfr); 
 						var laborybbdivodolr = filtrardivo(labordivodolr,bbdivodolr); 
 						var laborybbdivoDeqvr= filtrardivo(labordivoDeqvr,bbdivoDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbdivobsf  = filtrardivo(labordivobsf,bbdivobsf); 
 						var laborybbdivodol  = filtrardivo(labordivodol,bbdivodol); 
 						var laborybbdivoDeqv = filtrardivo(labordivoDeqv,bbdivoDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdivobsfmv  = filtrardivo(labordivobsfmv,bbdivobsfmv); 
 						var laborybbdivodolmv  = filtrardivo(labordivodolmv,bbdivodolmv); 
 						var laborybbdivoDeqvmv = filtrardivo(labordivoDeqvmv,bbdivoDeqvmv);



 						////////////// HABILITADORAS ANTEPROYECTOS //////////////////////////////
 						// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfant = filtrarcostohab(habant,filtrolabor,5,'_ant',1);
 						 var bbepbsfant = filtrarcostohab(habant,filtrobb,5,'_ant',1);
 						 var mepbsfant = filtrarcostohab(habant,filtrom,5,'_ant',1);
 						 var scepbsfant = filtrarcostohab(habant,filtrosc,5,'_ant',1);
 						 var oepbsfant = filtrarcostohab(habant,filtroo,5,'_ant',1);
 						 var totalepbsfant = filtrartotal(laborepbsfant,bbepbsfant,mepbsfant,scepbsfant,oepbsfant);
 						 
 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolant = filtrarcostohab(habant,filtrolabor,5,'_ant',2);
 						 var bbepdolant = filtrarcostohab(habant,filtrobb,5,'_ant',2);
 						 var mepdolant = filtrarcostohab(habant,filtrom,5,'_ant',2);
 						 var scepdolant = filtrarcostohab(habant,filtrosc,5,'_ant',2);
 						 var oepdolant = filtrarcostohab(habant,filtroo,5,'_ant',2);
 						 var totalepdolant = filtrartotal(laborepdolant,bbepdolant,mepdolant,scepdolant,oepdolant);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfant = filtrarcostohab(habant,filtrolabor,4,'_ant',1);
 						 var bbdttobsfant = filtrarcostohab(habant,filtrobb,4,'_ant',1);
 						 var mdttobsfant = filtrarcostohab(habant,filtrom,4,'_ant',1);
 						 var scdttobsfant = filtrarcostohab(habant,filtrosc,4,'_ant',1);
 						 var odttobsfant = filtrarcostohab(habant,filtroo,4,'_ant',1);
 						 var totaldttobsfant = filtrartotal(labordttobsfant,bbdttobsfant,mdttobsfant,scdttobsfant,odttobsfant);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolant = filtrarcostohab(habant,filtrolabor,4,'_ant',2);
 						 var bbdttodolant = filtrarcostohab(habant,filtrobb,4,'_ant',2);
 						 var mdttodolant = filtrarcostohab(habant,filtrom,4,'_ant',2);
 						 var scdttodolant = filtrarcostohab(habant,filtrosc,4,'_ant',2);
 						 var odttodolant = filtrarcostohab(habant,filtroo,4,'_ant',2);
 						 var totaldttodolant = filtrartotal(labordttodolant,bbdttodolant,mdttodolant,scdttodolant,odttodolant);


 						  /// DIVISION ORIENTAL REAL EN BOLIVARES
 						 var labordivobsfant = filtrardivo(labordttobsfant,laborepbsfant);
 						 var bbdivobsfant = filtrardivo(bbdttobsfant,bbepbsfant);
 						 var mdivobsfant = filtrardivo(mdttobsfant,mepbsfant);
 						 var scdivobsfant = filtrardivo(scdttobsfant,scepbsfant);
 						 var odivobsfant = filtrardivo(odttobsfant,oepbsfant);
 						 var totaldivobsfant = filtrartotal(labordivobsfant,bbdivobsfant,mdivobsfant,scdivobsfant,odivobsfant);

 						 /// DIVISION ORIENTAL REAL EN DOLARES
 						 var labordivodolant = filtrardivo(labordttodolant,laborepdolant);
 						 var bbdivodolant = filtrardivo(bbdttodolant,bbepdolant);
 						 var mdivodolant = filtrardivo(mdttodolant,mepdolant);
 						 var scdivodolant = filtrardivo(scdttodolant,scepdolant);
 						 var odivodolant = filtrardivo(odttodolant,oepdolant);
 						 var totaldivodolant = filtrartotal(labordivodolant,bbdivodolant,mdivodolant,scdivodolant,odivodolant);

 						  /// DIVISION ORIENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivoDeqvant = filtroequivalente(labordivobsfant,labordivodolant);
 						 var bbdivoDeqvant = filtroequivalente(bbdivobsfant,bbdivodolant);
 						 var mdivoDeqvant = filtroequivalente(mdivobsfant,mdivodolant);
 						 var scdivoDeqvant = filtroequivalente(scdivobsfant,scdivodolant);
 						 var odivoDeqvant = filtroequivalente(odivobsfant,odivodolant);
 						 var totaldivoDeqvant = filtrartotal(labordivoDeqvant,bbdivoDeqvant,mdivoDeqvant,scdivoDeqvant,odivoDeqvant);

 						 
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdivobsfant  = filtrardivo(labordivobsfant,bbdivobsfant); 
 						var laborybbdivodolant  = filtrardivo(labordivodolant,bbdivodolant); 
 						var laborybbdivoDeqvant = filtrardivo(labordivoDeqvant,bbdivoDeqvant);


 						///////PLAN PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var pgeobsf = categoriaproyectos(pplan,geofisica,'_p',1);
 						var pgeodol = categoriaproyectos(pplan,geofisica,'_p',2);
 						var pgeoDeqv = filtroequivalente(pgeobsf,pgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var pperfavanzbsf = categoriaproyectos(pplan,perfavanz,'_p',1);
 						var pperfavanzdol = categoriaproyectos(pplan,perfavanz,'_p',2);
 						var pperfavanzDeqv = filtroequivalente(pperfavanzbsf,pperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var pperfdesarrobsf = categoriaproyectos(pplan,perfdesarro,'_p',1);
 						var pperfdesarrodol = categoriaproyectos(pplan,perfdesarro,'_p',2);
 						var pperfdesarroDeqv = filtroequivalente(pperfdesarrobsf,pperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var pperfexplorabsf = categoriaproyectos(pplan,perfexplora,'_p',1);
 						var pperfexploradol = categoriaproyectos(pplan,perfexplora,'_p',2);
 						var pperfexploraDeqv = filtroequivalente(pperfexplorabsf,pperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var precupadicbsf = categoriaproyectos(pplan,recupadic,'_p',1);
 						var precupadicdol = categoriaproyectos(pplan,recupadic,'_p',2);
 						var precupadicDeqv = filtroequivalente(precupadicbsf,precupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var precompozosbsf = categoriaproyectos(pplan,recompozos,'_p',1);
 						var precompozosdol = categoriaproyectos(pplan,recompozos,'_p',2);
 						var precompozosDeqv = filtroequivalente(precompozosbsf,precompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var precupesuplebsf = categoriaproyectos(pplan,recupesuple,'_p',1);
 						var precupesupledol = categoriaproyectos(pplan,recupesuple,'_p',2);
 						var precupesupleDeqv = filtroequivalente(precupesuplebsf,precupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var pinyectalternavaporbsf = categoriaproyectos(pplan,inyectalternavapor,'_p',1);
 						var pinyectalternavapordol = categoriaproyectos(pplan,inyectalternavapor,'_p',2);
 						var pinyectalternavaporDeqv = filtroequivalente(pinyectalternavaporbsf,pinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var plevantamientoartifbsf = categoriaproyectos(pplan,levantamientoartif,'_p',1);
 						var plevantamientoartifdol = categoriaproyectos(pplan,levantamientoartif,'_p',2);
 						var plevantamientoartifDeqv = filtroequivalente(plevantamientoartifbsf,plevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var pconutigasbsf = categoriaproyectos(pplan,conutigas,'_p',1);
 						var pconutigasdol = categoriaproyectos(pplan,conutigas,'_p',2);
 						var pconutigasDeqv = filtroequivalente(pconutigasbsf,pconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var pplantliqgasbsf = categoriaproyectos(pplan,plantliqgas,'_p',1);
 						var pplantliqgasdol = categoriaproyectos(pplan,plantliqgas,'_p',2);
 						var pplantliqgasDeqv = filtroequivalente(pplantliqgasbsf,pplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var pinstproducbsf = categoriaproyectos(pplan,instproduc,'_p',1);
 						var pinstproducdol = categoriaproyectos(pplan,instproduc,'_p',2);
 						var pinstproducDeqv = filtroequivalente(pinstproducbsf,pinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var poleoterminaembbsf = categoriaproyectos(pplan,oleoterminaemb,'_p',1);
 						var poleoterminaembdol = categoriaproyectos(pplan,oleoterminaemb,'_p',2);
 						var poleoterminaembDeqv = filtroequivalente(poleoterminaembbsf,poleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var palmacenamientobsf = categoriaproyectos(pplan,almacenamiento,'_p',1);
 						var palmacenamientodol = categoriaproyectos(pplan,almacenamiento,'_p',2);
 						var palmacenamientoDeqv = filtroequivalente(palmacenamientobsf,palmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var pdesarrollourbabsf = categoriaproyectos(pplan,desarrollourba,'_p',1);
 						var pdesarrollourbadol = categoriaproyectos(pplan,desarrollourba,'_p',2);
 						var pdesarrollourbaDeqv = filtroequivalente(pdesarrollourbabsf,pdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var pproteccionintegbsf = categoriaproyectos(pplan,proteccioninteg,'_p',1);
 						var pproteccionintegdol = categoriaproyectos(pplan,proteccioninteg,'_p',2);
 						var pproteccionintegDeqv = filtroequivalente(pproteccionintegbsf,pproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var ppcpbsf = categoriaproyectos(pplan,pcp,'_p',1);
 						var ppcpdol = categoriaproyectos(pplan,pcp,'_p',2);
 						var ppcpDeqv = filtroequivalente(ppcpbsf,ppcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var ptelecomunicacionesbsf = categoriaproyectos(pplan,telecomunicaciones,'_p',1);
 						var ptelecomunicacionesdol = categoriaproyectos(pplan,telecomunicaciones,'_p',2);
 						var ptelecomunicacionesDeqv = filtroequivalente(ptelecomunicacionesbsf,ptelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var pautomatizacionindbsf = categoriaproyectos(pplan,automatizacionind,'_p',1);
 						var pautomatizacioninddol = categoriaproyectos(pplan,automatizacionind,'_p',2);
 						var pautomatizacionindDeqv = filtroequivalente(pautomatizacionindbsf,pautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var pcomputaysistebsf = categoriaproyectos(pplan,computaysiste,'_p',1);
 						var pcomputaysistedol = categoriaproyectos(pplan,computaysiste,'_p',2);
 						var pcomputaysisteDeqv = filtroequivalente(pcomputaysistebsf,pcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var pedifinstindustbsf = categoriaproyectos(pplan,edifinstindust,'_p',1);
 						var pedifinstindustdol = categoriaproyectos(pplan,edifinstindust,'_p',2);
 						var pedifinstindustDeqv = filtroequivalente(pedifinstindustbsf,pedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var pequiposbsf = categoriaproyectos(pplan,equipos,'_p',1);
 						var pequiposdol = categoriaproyectos(pplan,equipos,'_p',2);
 						var pequiposDeqv = filtroequivalente(pequiposbsf,pequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var potrasinvbsf = categoriaproyectos(pplan,otrasinv,'_p',1);
 						var potrasinvdol = categoriaproyectos(pplan,otrasinv,'_p',2);
 						var potrasinvDeqv = filtroequivalente(potrasinvbsf,potrasinvdol);
 						///////////////////////////
 						  
 						
 						///////REAL PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var rgeobsf = categoriaproyectos(preal,geofisica,'_p',1);
 						var rgeodol = categoriaproyectos(preal,geofisica,'_p',2);
 						var rgeoDeqv = filtroequivalente(rgeobsf,rgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var rperfavanzbsf = categoriaproyectos(preal,perfavanz,'_p',1);
 						var rperfavanzdol = categoriaproyectos(preal,perfavanz,'_p',2);
 						var rperfavanzDeqv = filtroequivalente(rperfavanzbsf,rperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var rperfdesarrobsf = categoriaproyectos(preal,perfdesarro,'_p',1);
 						var rperfdesarrodol = categoriaproyectos(preal,perfdesarro,'_p',2);
 						var rperfdesarroDeqv = filtroequivalente(rperfdesarrobsf,rperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var rperfexplorabsf = categoriaproyectos(preal,perfexplora,'_p',1);
 						var rperfexploradol = categoriaproyectos(preal,perfexplora,'_p',2);
 						var rperfexploraDeqv = filtroequivalente(rperfexplorabsf,rperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var rrecupadicbsf = categoriaproyectos(preal,recupadic,'_p',1);
 						var rrecupadicdol = categoriaproyectos(preal,recupadic,'_p',2);
 						var rrecupadicDeqv = filtroequivalente(rrecupadicbsf,rrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var rrecompozosbsf = categoriaproyectos(preal,recompozos,'_p',1);
 						var rrecompozosdol = categoriaproyectos(preal,recompozos,'_p',2);
 						var rrecompozosDeqv = filtroequivalente(rrecompozosbsf,rrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var rrecupesuplebsf = categoriaproyectos(preal,recupesuple,'_p',1);
 						var rrecupesupledol = categoriaproyectos(preal,recupesuple,'_p',2);
 						var rrecupesupleDeqv = filtroequivalente(rrecupesuplebsf,rrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var rinyectalternavaporbsf = categoriaproyectos(preal,inyectalternavapor,'_p',1);
 						var rinyectalternavapordol = categoriaproyectos(preal,inyectalternavapor,'_p',2);
 						var rinyectalternavaporDeqv = filtroequivalente(rinyectalternavaporbsf,rinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var rlevantamientoartifbsf = categoriaproyectos(preal,levantamientoartif,'_p',1);
 						var rlevantamientoartifdol = categoriaproyectos(preal,levantamientoartif,'_p',2);
 						var rlevantamientoartifDeqv = filtroequivalente(rlevantamientoartifbsf,rlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var rconutigasbsf = categoriaproyectos(preal,conutigas,'_p',1);
 						var rconutigasdol = categoriaproyectos(preal,conutigas,'_p',2);
 						var rconutigasDeqv = filtroequivalente(rconutigasbsf,rconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var rplantliqgasbsf = categoriaproyectos(preal,plantliqgas,'_p',1);
 						var rplantliqgasdol = categoriaproyectos(preal,plantliqgas,'_p',2);
 						var rplantliqgasDeqv = filtroequivalente(rplantliqgasbsf,rplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var rinstproducbsf = categoriaproyectos(preal,instproduc,'_p',1);
 						var rinstproducdol = categoriaproyectos(preal,instproduc,'_p',2);
 						var rinstproducDeqv = filtroequivalente(rinstproducbsf,rinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var roleoterminaembbsf = categoriaproyectos(preal,oleoterminaemb,'_p',1);
 						var roleoterminaembdol = categoriaproyectos(preal,oleoterminaemb,'_p',2);
 						var roleoterminaembDeqv = filtroequivalente(roleoterminaembbsf,roleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var ralmacenamientobsf = categoriaproyectos(preal,almacenamiento,'_p',1);
 						var ralmacenamientodol = categoriaproyectos(preal,almacenamiento,'_p',2);
 						var ralmacenamientoDeqv = filtroequivalente(ralmacenamientobsf,ralmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var rdesarrollourbabsf = categoriaproyectos(preal,desarrollourba,'_p',1);
 						var rdesarrollourbadol = categoriaproyectos(preal,desarrollourba,'_p',2);
 						var rdesarrollourbaDeqv = filtroequivalente(rdesarrollourbabsf,rdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var rproteccionintegbsf = categoriaproyectos(preal,proteccioninteg,'_p',1);
 						var rproteccionintegdol = categoriaproyectos(preal,proteccioninteg,'_p',2);
 						var rproteccionintegDeqv = filtroequivalente(rproteccionintegbsf,rproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var rpcpbsf = categoriaproyectos(preal,pcp,'_p',1);
 						var rpcpdol = categoriaproyectos(preal,pcp,'_p',2);
 						var rpcpDeqv = filtroequivalente(rpcpbsf,rpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var rtelecomunicacionesbsf = categoriaproyectos(preal,telecomunicaciones,'_p',1);
 						var rtelecomunicacionesdol = categoriaproyectos(preal,telecomunicaciones,'_p',2);
 						var rtelecomunicacionesDeqv = filtroequivalente(rtelecomunicacionesbsf,rtelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var rautomatizacionindbsf = categoriaproyectos(preal,automatizacionind,'_p',1);
 						var rautomatizacioninddol = categoriaproyectos(preal,automatizacionind,'_p',2);
 						var rautomatizacionindDeqv = filtroequivalente(rautomatizacionindbsf,rautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var rcomputaysistebsf = categoriaproyectos(preal,computaysiste,'_p',1);
 						var rcomputaysistedol = categoriaproyectos(preal,computaysiste,'_p',2);
 						var rcomputaysisteDeqv = filtroequivalente(rcomputaysistebsf,rcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var redifinstindustbsf = categoriaproyectos(preal,edifinstindust,'_p',1);
 						var redifinstindustdol = categoriaproyectos(preal,edifinstindust,'_p',2);
 						var redifinstindustDeqv = filtroequivalente(redifinstindustbsf,redifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var requiposbsf = categoriaproyectos(preal,equipos,'_p',1);
 						var requiposdol = categoriaproyectos(preal,equipos,'_p',2);
 						var requiposDeqv = filtroequivalente(requiposbsf,requiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var rotrasinvbsf = categoriaproyectos(preal,otrasinv,'_p',1);
 						var rotrasinvdol = categoriaproyectos(preal,otrasinv,'_p',2);
 						var rotrasinvDeqv = filtroequivalente(rotrasinvbsf,rotrasinvdol);
 						///////////////////////////
 						  
 						///////MEJOR VISION PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var mvgeobsf = categoriaproyectos(pmv,geofisica,'_p',1);
 						var mvgeodol = categoriaproyectos(pmv,geofisica,'_p',2);
 						var mvgeoDeqv = filtroequivalente(mvgeobsf,mvgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var mvperfavanzbsf = categoriaproyectos(pmv,perfavanz,'_p',1);
 						var mvperfavanzdol = categoriaproyectos(pmv,perfavanz,'_p',2);
 						var mvperfavanzDeqv = filtroequivalente(mvperfavanzbsf,mvperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var mvperfdesarrobsf = categoriaproyectos(pmv,perfdesarro,'_p',1);
 						var mvperfdesarrodol = categoriaproyectos(pmv,perfdesarro,'_p',2);
 						var mvperfdesarroDeqv = filtroequivalente(mvperfdesarrobsf,mvperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var mvperfexplorabsf = categoriaproyectos(pmv,perfexplora,'_p',1);
 						var mvperfexploradol = categoriaproyectos(pmv,perfexplora,'_p',2);
 						var mvperfexploraDeqv = filtroequivalente(mvperfexplorabsf,mvperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var mvrecupadicbsf = categoriaproyectos(pmv,recupadic,'_p',1);
 						var mvrecupadicdol = categoriaproyectos(pmv,recupadic,'_p',2);
 						var mvrecupadicDeqv = filtroequivalente(mvrecupadicbsf,mvrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var mvrecompozosbsf = categoriaproyectos(pmv,recompozos,'_p',1);
 						var mvrecompozosdol = categoriaproyectos(pmv,recompozos,'_p',2);
 						var mvrecompozosDeqv = filtroequivalente(mvrecompozosbsf,mvrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var mvrecupesuplebsf = categoriaproyectos(pmv,recupesuple,'_p',1);
 						var mvrecupesupledol = categoriaproyectos(pmv,recupesuple,'_p',2);
 						var mvrecupesupleDeqv = filtroequivalente(mvrecupesuplebsf,mvrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var mvinyectalternavaporbsf = categoriaproyectos(pmv,inyectalternavapor,'_p',1);
 						var mvinyectalternavapordol = categoriaproyectos(pmv,inyectalternavapor,'_p',2);
 						var mvinyectalternavaporDeqv = filtroequivalente(mvinyectalternavaporbsf,mvinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var mvlevantamientoartifbsf = categoriaproyectos(pmv,levantamientoartif,'_p',1);
 						var mvlevantamientoartifdol = categoriaproyectos(pmv,levantamientoartif,'_p',2);
 						var mvlevantamientoartifDeqv = filtroequivalente(mvlevantamientoartifbsf,mvlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var mvconutigasbsf = categoriaproyectos(pmv,conutigas,'_p',1);
 						var mvconutigasdol = categoriaproyectos(pmv,conutigas,'_p',2);
 						var mvconutigasDeqv = filtroequivalente(mvconutigasbsf,mvconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var mvplantliqgasbsf = categoriaproyectos(pmv,plantliqgas,'_p',1);
 						var mvplantliqgasdol = categoriaproyectos(pmv,plantliqgas,'_p',2);
 						var mvplantliqgasDeqv = filtroequivalente(mvplantliqgasbsf,mvplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var mvinstproducbsf = categoriaproyectos(pmv,instproduc,'_p',1);
 						var mvinstproducdol = categoriaproyectos(pmv,instproduc,'_p',2);
 						var mvinstproducDeqv = filtroequivalente(mvinstproducbsf,mvinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var mvoleoterminaembbsf = categoriaproyectos(pmv,oleoterminaemb,'_p',1);
 						var mvoleoterminaembdol = categoriaproyectos(pmv,oleoterminaemb,'_p',2);
 						var mvoleoterminaembDeqv = filtroequivalente(mvoleoterminaembbsf,mvoleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var mvalmacenamientobsf = categoriaproyectos(pmv,almacenamiento,'_p',1);
 						var mvalmacenamientodol = categoriaproyectos(pmv,almacenamiento,'_p',2);
 						var mvalmacenamientoDeqv = filtroequivalente(mvalmacenamientobsf,mvalmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var mvdesarrollourbabsf = categoriaproyectos(pmv,desarrollourba,'_p',1);
 						var mvdesarrollourbadol = categoriaproyectos(pmv,desarrollourba,'_p',2);
 						var mvdesarrollourbaDeqv = filtroequivalente(mvdesarrollourbabsf,mvdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var mvproteccionintegbsf = categoriaproyectos(pmv,proteccioninteg,'_p',1);
 						var mvproteccionintegdol = categoriaproyectos(pmv,proteccioninteg,'_p',2);
 						var mvproteccionintegDeqv = filtroequivalente(mvproteccionintegbsf,mvproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var mvpcpbsf = categoriaproyectos(pmv,pcp,'_p',1);
 						var mvpcpdol = categoriaproyectos(pmv,pcp,'_p',2);
 						var mvpcpDeqv = filtroequivalente(mvpcpbsf,mvpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var mvtelecomunicacionesbsf = categoriaproyectos(pmv,telecomunicaciones,'_p',1);
 						var mvtelecomunicacionesdol = categoriaproyectos(pmv,telecomunicaciones,'_p',2);
 						var mvtelecomunicacionesDeqv = filtroequivalente(mvtelecomunicacionesbsf,mvtelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var mvautomatizacionindbsf = categoriaproyectos(pmv,automatizacionind,'_p',1);
 						var mvautomatizacioninddol = categoriaproyectos(pmv,automatizacionind,'_p',2);
 						var mvautomatizacionindDeqv = filtroequivalente(mvautomatizacionindbsf,mvautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var mvcomputaysistebsf = categoriaproyectos(pmv,computaysiste,'_p',1);
 						var mvcomputaysistedol = categoriaproyectos(pmv,computaysiste,'_p',2);
 						var mvcomputaysisteDeqv = filtroequivalente(mvcomputaysistebsf,mvcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var mvedifinstindustbsf = categoriaproyectos(pmv,edifinstindust,'_p',1);
 						var mvedifinstindustdol = categoriaproyectos(pmv,edifinstindust,'_p',2);
 						var mvedifinstindustDeqv = filtroequivalente(mvedifinstindustbsf,mvedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var mvequiposbsf = categoriaproyectos(pmv,equipos,'_p',1);
 						var mvequiposdol = categoriaproyectos(pmv,equipos,'_p',2);
 						var mvequiposDeqv = filtroequivalente(mvequiposbsf,mvequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var mvotrasinvbsf = categoriaproyectos(pmv,otrasinv,'_p',1);
 						var mvotrasinvdol = categoriaproyectos(pmv,otrasinv,'_p',2);
 						var mvotrasinvDeqv = filtroequivalente(mvotrasinvbsf,mvotrasinvdol);
 						///////////////////////////   	

 						///////ANTEPROYECTO VISION PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var antgeobsf = categoriaproyectos(pant,geofisica,'_p',1);
 						var antgeodol = categoriaproyectos(pant,geofisica,'_p',2);
 						var antgeoDeqv = filtroequivalente(antgeobsf,antgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var antperfavanzbsf = categoriaproyectos(pant,perfavanz,'_p',1);
 						var antperfavanzdol = categoriaproyectos(pant,perfavanz,'_p',2);
 						var antperfavanzDeqv = filtroequivalente(antperfavanzbsf,antperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var antperfdesarrobsf = categoriaproyectos(pant,perfdesarro,'_p',1);
 						var antperfdesarrodol = categoriaproyectos(pant,perfdesarro,'_p',2);
 						var antperfdesarroDeqv = filtroequivalente(antperfdesarrobsf,antperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var antperfexplorabsf = categoriaproyectos(pant,perfexplora,'_p',1);
 						var antperfexploradol = categoriaproyectos(pant,perfexplora,'_p',2);
 						var antperfexploraDeqv = filtroequivalente(antperfexplorabsf,antperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var antrecupadicbsf = categoriaproyectos(pant,recupadic,'_p',1);
 						var antrecupadicdol = categoriaproyectos(pant,recupadic,'_p',2);
 						var antrecupadicDeqv = filtroequivalente(antrecupadicbsf,antrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var antrecompozosbsf = categoriaproyectos(pant,recompozos,'_p',1);
 						var antrecompozosdol = categoriaproyectos(pant,recompozos,'_p',2);
 						var antrecompozosDeqv = filtroequivalente(antrecompozosbsf,antrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var antrecupesuplebsf = categoriaproyectos(pant,recupesuple,'_p',1);
 						var antrecupesupledol = categoriaproyectos(pant,recupesuple,'_p',2);
 						var antrecupesupleDeqv = filtroequivalente(antrecupesuplebsf,antrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var antinyectalternavaporbsf = categoriaproyectos(pant,inyectalternavapor,'_p',1);
 						var antinyectalternavapordol = categoriaproyectos(pant,inyectalternavapor,'_p',2);
 						var antinyectalternavaporDeqv = filtroequivalente(antinyectalternavaporbsf,antinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var antlevantamientoartifbsf = categoriaproyectos(pant,levantamientoartif,'_p',1);
 						var antlevantamientoartifdol = categoriaproyectos(pant,levantamientoartif,'_p',2);
 						var antlevantamientoartifDeqv = filtroequivalente(antlevantamientoartifbsf,antlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var antconutigasbsf = categoriaproyectos(pant,conutigas,'_p',1);
 						var antconutigasdol = categoriaproyectos(pant,conutigas,'_p',2);
 						var antconutigasDeqv = filtroequivalente(antconutigasbsf,antconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var antplantliqgasbsf = categoriaproyectos(pant,plantliqgas,'_p',1);
 						var antplantliqgasdol = categoriaproyectos(pant,plantliqgas,'_p',2);
 						var antplantliqgasDeqv = filtroequivalente(antplantliqgasbsf,antplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var antinstproducbsf = categoriaproyectos(pant,instproduc,'_p',1);
 						var antinstproducdol = categoriaproyectos(pant,instproduc,'_p',2);
 						var antinstproducDeqv = filtroequivalente(antinstproducbsf,antinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var antoleoterminaembbsf = categoriaproyectos(pant,oleoterminaemb,'_p',1);
 						var antoleoterminaembdol = categoriaproyectos(pant,oleoterminaemb,'_p',2);
 						var antoleoterminaembDeqv = filtroequivalente(antoleoterminaembbsf,antoleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var antalmacenamientobsf = categoriaproyectos(pant,almacenamiento,'_p',1);
 						var antalmacenamientodol = categoriaproyectos(pant,almacenamiento,'_p',2);
 						var antalmacenamientoDeqv = filtroequivalente(antalmacenamientobsf,antalmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var antdesarrollourbabsf = categoriaproyectos(pant,desarrollourba,'_p',1);
 						var antdesarrollourbadol = categoriaproyectos(pant,desarrollourba,'_p',2);
 						var antdesarrollourbaDeqv = filtroequivalente(antdesarrollourbabsf,antdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var antproteccionintegbsf = categoriaproyectos(pant,proteccioninteg,'_p',1);
 						var antproteccionintegdol = categoriaproyectos(pant,proteccioninteg,'_p',2);
 						var antproteccionintegDeqv = filtroequivalente(antproteccionintegbsf,antproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var antpcpbsf = categoriaproyectos(pant,pcp,'_p',1);
 						var antpcpdol = categoriaproyectos(pant,pcp,'_p',2);
 						var antpcpDeqv = filtroequivalente(antpcpbsf,antpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var anttelecomunicacionesbsf = categoriaproyectos(pant,telecomunicaciones,'_p',1);
 						var anttelecomunicacionesdol = categoriaproyectos(pant,telecomunicaciones,'_p',2);
 						var anttelecomunicacionesDeqv = filtroequivalente(anttelecomunicacionesbsf,anttelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var antautomatizacionindbsf = categoriaproyectos(pant,automatizacionind,'_p',1);
 						var antautomatizacioninddol = categoriaproyectos(pant,automatizacionind,'_p',2);
 						var antautomatizacionindDeqv = filtroequivalente(antautomatizacionindbsf,antautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var antcomputaysistebsf = categoriaproyectos(pant,computaysiste,'_p',1);
 						var antcomputaysistedol = categoriaproyectos(pant,computaysiste,'_p',2);
 						var antcomputaysisteDeqv = filtroequivalente(antcomputaysistebsf,antcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var antedifinstindustbsf = categoriaproyectos(pant,edifinstindust,'_p',1);
 						var antedifinstindustdol = categoriaproyectos(pant,edifinstindust,'_p',2);
 						var antedifinstindustDeqv = filtroequivalente(antedifinstindustbsf,antedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var antequiposbsf = categoriaproyectos(pant,equipos,'_p',1);
 						var antequiposdol = categoriaproyectos(pant,equipos,'_p',2);
 						var antequiposDeqv = filtroequivalente(antequiposbsf,antequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var antotrasinvbsf = categoriaproyectos(pant,otrasinv,'_p',1);
 						var antotrasinvdol = categoriaproyectos(pant,otrasinv,'_p',2);
 						var antotrasinvDeqv = filtroequivalente(antotrasinvbsf,antotrasinvdol);
 						///////////////////////////   	

 						var ptotalcatebsf = sumarcateogoria(pgeobsf,pperfavanzbsf,pperfdesarrobsf,pperfexplorabsf,precupadicbsf,precompozosbsf,precupesuplebsf,pinyectalternavaporbsf,plevantamientoartifbsf,pconutigasbsf,pplantliqgasbsf,pinstproducbsf,poleoterminaembbsf,palmacenamientobsf,pdesarrollourbabsf,pproteccionintegbsf,ppcpbsf,ptelecomunicacionesbsf,pautomatizacionindbsf,pcomputaysistebsf,pedifinstindustbsf,pequiposbsf,potrasinvbsf);
 						var ptotalcatedol = sumarcateogoria(pgeodol,pperfavanzdol,pperfdesarrodol,pperfexploradol,precupadicdol,precompozosdol,precupesupledol,pinyectalternavapordol,plevantamientoartifdol,pconutigasdol,pplantliqgasdol,pinstproducdol,poleoterminaembdol,palmacenamientodol,pdesarrollourbadol,pproteccionintegdol,ppcpdol,ptelecomunicacionesdol,pautomatizacioninddol,pcomputaysistedol,pedifinstindustdol,pequiposdol,potrasinvdol);
 						var ptotalcateDeqv = sumarcateogoria(pgeoDeqv,pperfavanzDeqv,pperfdesarroDeqv,pperfexploraDeqv,precupadicDeqv,precompozosDeqv,precupesupleDeqv,pinyectalternavaporDeqv,plevantamientoartifDeqv,pconutigasDeqv,pplantliqgasDeqv,pinstproducDeqv,poleoterminaembDeqv,palmacenamientoDeqv,pdesarrollourbaDeqv,pproteccionintegDeqv,ppcpDeqv,ptelecomunicacionesDeqv,pautomatizacionindDeqv,pcomputaysisteDeqv,pedifinstindustDeqv,pequiposDeqv,potrasinvDeqv);
 						var rtotalcatebsf = sumarcateogoria(rgeobsf,rperfavanzbsf,rperfdesarrobsf,rperfexplorabsf,rrecupadicbsf,rrecompozosbsf,rrecupesuplebsf,rinyectalternavaporbsf,rlevantamientoartifbsf,rconutigasbsf,rplantliqgasbsf,rinstproducbsf,roleoterminaembbsf,ralmacenamientobsf,rdesarrollourbabsf,rproteccionintegbsf,rpcpbsf,rtelecomunicacionesbsf,rautomatizacionindbsf,rcomputaysistebsf,redifinstindustbsf,requiposbsf,rotrasinvbsf);
 						var rtotalcatedol = sumarcateogoria(rgeodol,rperfavanzdol,rperfdesarrodol,rperfexploradol,rrecupadicdol,rrecompozosdol,rrecupesupledol,rinyectalternavapordol,rlevantamientoartifdol,rconutigasdol,rplantliqgasdol,rinstproducdol,roleoterminaembdol,ralmacenamientodol,rdesarrollourbadol,rproteccionintegdol,rpcpdol,rtelecomunicacionesdol,rautomatizacioninddol,rcomputaysistedol,redifinstindustdol,requiposdol,rotrasinvdol);
 						var rtotalcateDeqv = sumarcateogoria(rgeoDeqv,rperfavanzDeqv,rperfdesarroDeqv,rperfexploraDeqv,rrecupadicDeqv,rrecompozosDeqv,rrecupesupleDeqv,rinyectalternavaporDeqv,rlevantamientoartifDeqv,rconutigasDeqv,rplantliqgasDeqv,rinstproducDeqv,roleoterminaembDeqv,ralmacenamientoDeqv,rdesarrollourbaDeqv,rproteccionintegDeqv,rpcpDeqv,rtelecomunicacionesDeqv,rautomatizacionindDeqv,rcomputaysisteDeqv,redifinstindustDeqv,requiposDeqv,rotrasinvDeqv);
 						var mvtotalcatebsf = sumarcateogoria(mvgeobsf,mvperfavanzbsf,mvperfdesarrobsf,mvperfexplorabsf,mvrecupadicbsf,mvrecompozosbsf,mvrecupesuplebsf,mvinyectalternavaporbsf,mvlevantamientoartifbsf,mvconutigasbsf,mvplantliqgasbsf,mvinstproducbsf,mvoleoterminaembbsf,mvalmacenamientobsf,mvdesarrollourbabsf,mvproteccionintegbsf,mvpcpbsf,mvtelecomunicacionesbsf,mvautomatizacionindbsf,mvcomputaysistebsf,mvedifinstindustbsf,mvequiposbsf,mvotrasinvbsf);
 						var mvtotalcatedol = sumarcateogoria(mvgeodol,mvperfavanzdol,mvperfdesarrodol,mvperfexploradol,mvrecupadicdol,mvrecompozosdol,mvrecupesupledol,mvinyectalternavapordol,mvlevantamientoartifdol,mvconutigasdol,mvplantliqgasdol,mvinstproducdol,mvoleoterminaembdol,mvalmacenamientodol,mvdesarrollourbadol,mvproteccionintegdol,mvpcpdol,mvtelecomunicacionesdol,mvautomatizacioninddol,mvcomputaysistedol,mvedifinstindustdol,mvequiposdol,mvotrasinvdol);
 						var mvtotalcateDeqv = sumarcateogoria(mvgeoDeqv,mvperfavanzDeqv,mvperfdesarroDeqv,mvperfexploraDeqv,mvrecupadicDeqv,mvrecompozosDeqv,mvrecupesupleDeqv,mvinyectalternavaporDeqv,mvlevantamientoartifDeqv,mvconutigasDeqv,mvplantliqgasDeqv,mvinstproducDeqv,mvoleoterminaembDeqv,mvalmacenamientoDeqv,mvdesarrollourbaDeqv,mvproteccionintegDeqv,mvpcpDeqv,mvtelecomunicacionesDeqv,mvautomatizacionindDeqv,mvcomputaysisteDeqv,mvedifinstindustDeqv,mvequiposDeqv,mvotrasinvDeqv);
 						var anttotalcatebsf = sumarcateogoria(antgeobsf,antperfavanzbsf,antperfdesarrobsf,antperfexplorabsf,antrecupadicbsf,antrecompozosbsf,antrecupesuplebsf,antinyectalternavaporbsf,antlevantamientoartifbsf,antconutigasbsf,antplantliqgasbsf,antinstproducbsf,antoleoterminaembbsf,antalmacenamientobsf,antdesarrollourbabsf,antproteccionintegbsf,antpcpbsf,anttelecomunicacionesbsf,antautomatizacionindbsf,antcomputaysistebsf,antedifinstindustbsf,antequiposbsf,antotrasinvbsf);
 						var anttotalcatedol = sumarcateogoria(antgeodol,antperfavanzdol,antperfdesarrodol,antperfexploradol,antrecupadicdol,antrecompozosdol,antrecupesupledol,antinyectalternavapordol,antlevantamientoartifdol,antconutigasdol,antplantliqgasdol,antinstproducdol,antoleoterminaembdol,antalmacenamientodol,antdesarrollourbadol,antproteccionintegdol,antpcpdol,anttelecomunicacionesdol,antautomatizacioninddol,antcomputaysistedol,antedifinstindustdol,antequiposdol,antotrasinvdol);
 						var anttotalcateDeqv = sumarcateogoria(antgeoDeqv,antperfavanzDeqv,antperfdesarroDeqv,antperfexploraDeqv,antrecupadicDeqv,antrecompozosDeqv,antrecupesupleDeqv,antinyectalternavaporDeqv,antlevantamientoartifDeqv,antconutigasDeqv,antplantliqgasDeqv,antinstproducDeqv,antoleoterminaembDeqv,antalmacenamientoDeqv,antdesarrollourbaDeqv,antproteccionintegDeqv,antpcpDeqv,anttelecomunicacionesDeqv,antautomatizacionindDeqv,antcomputaysisteDeqv,antedifinstindustDeqv,antequiposDeqv,antotrasinvDeqv);


 						 for (var i=0; i < 12; i++) {
 						 		
 						 	if( laborybbdivoDeqvr[i] != 0 || mdivoDeqvr[i] != 0 || scdivoDeqvr[i] != 0 || odivoDeqvr[i]!= 0  ){
 						 		//alert(aux);
 						 		aux++;	
 						 	}

 						 }// fin del for comprobar cual es la ejecución del real de los meses


 						 /// BLOQUE VISUAL DE LA TABLA
 						 	var informacion = motrarcabecera('red-header','leter',v3,meses[aux],'Parámetros Operacionales y Financieros');
 						 	informacion += descripciones('','Presupuesto de Inversiones',aux,ptotalcateDeqv,ptotalcatebsf,ptotalcatedol,ptotalcateDeqv,rtotalcatebsf,rtotalcatedol,rtotalcateDeqv,mvtotalcatebsf,mvtotalcatedol,mvtotalcateDeqv,anttotalcatebsf,anttotalcatedol,anttotalcateDeqv );
 						 	informacion += descripciones('','Presupuesto de Operaciones',aux,totaldivoDeqv,totaldivobsf,totaldivodol,totaldivoDeqv,totaldivobsfr,totaldivodolr,totaldivoDeqvr,totaldivobsfmv,totaldivodolmv,totaldivoDeqvmv,totaldivobsfant,totaldivodolant,totaldivobsfant);
	 						
 						 	informacion += '<tr>';
	 						for (var i=0; i < 18 ; i++){
	 						informacion += '<td>	</td>';
	 						}
	 						informacion += '</tr>';
 						 	informacion += motrarcabecera('red-header','leter',v3,meses[aux],'ELEMENTO DE COSTO');
 						 	informacion += descripciones('','Labor y Beneficios',aux,laborybbdivoDeqv,laborybbdivobsf,laborybbdivodol,laborybbdivoDeqv,laborybbdivobsfr,laborybbdivodolr,laborybbdivoDeqvr,laborybbdivobsfmv,laborybbdivodolmv,laborybbdivoDeqvmv,laborybbdivobsfant,laborybbdivodolant,laborybbdivoDeqvant );
	 						informacion += descripciones('','Materiales',aux,mdivoDeqv,mdivobsf,mdivodol,mdivoDeqv,mdivobsfr,mdivodolr,mdivoDeqvr,mdivobsfmv,mdivodolmv,mdivoDeqvmv,mdivobsfant,mdivodolant,mdivoDeqvant );
	 						informacion += descripciones('','Servicios y Contratos',aux,scdivoDeqv,scdivobsf,scdivodol,scdivoDeqv,scdivobsfr,scdivodolr,scdivoDeqvr,scdivobsfmv,scdivodolmv,scdivoDeqvmv,scdivobsfmv,scdivodolant,scdivoDeqvant );
	 						informacion += descripciones('','Otros Costos y Gastos',aux,odivoDeqv,odivobsf,odivodol,odivoDeqv,odivobsfr,odivodolr,odivoDeqvr,odivobsfmv,odivodolmv,odivoDeqvmv,odivobsfant,odivodolant,odivoDeqvant );
	 						informacion += descripciones('red-header','Total',aux,totaldivoDeqv,totaldivobsf,totaldivodol,totaldivoDeqv,totaldivobsfr,totaldivodolr,totaldivoDeqvr,totaldivobsfmv,totaldivodolmv,totaldivoDeqvmv,totaldivobsfant,totaldivodolant,totaldivobsfant);
	 						informacion += '<tr>';
	 						for (var i=0; i < 18 ; i++){
	 						informacion += '<td>	</td>';
	 						}
	 						informacion += '</tr>';
	 						informacion += motrarcabecera('red-header','leter',v3,meses[aux],'CATEGORIA ');
	 						informacion += descripciones('','Geofisica',aux,pgeoDeqv,pgeobsf,pgeodol,pgeoDeqv,rgeobsf,rgeodol,rgeoDeqv,mvgeobsf,mvgeodol,mvgeoDeqv,antgeobsf,antgeodol,antgeoDeqv );
							informacion += descripciones('','Perforación de Avanzada',aux,pperfavanzDeqv,pperfavanzbsf,pperfavanzdol,pperfavanzDeqv,rperfavanzbsf,rperfavanzdol,rperfavanzDeqv,mvperfavanzbsf,mvperfavanzdol,mvperfavanzDeqv,antperfavanzbsf,antperfavanzdol,antperfavanzDeqv );
	 						informacion += descripciones('','Perforación de Desarrollo',aux,pperfdesarroDeqv,pperfdesarrobsf,pperfdesarrodol,pperfdesarroDeqv,rperfdesarrobsf,rperfdesarrodol,rperfdesarroDeqv,mvperfdesarrobsf,mvperfdesarrodol,mvperfdesarroDeqv,antperfdesarrobsf,antperfdesarrodol,antperfdesarroDeqv);
							informacion += descripciones('','Perforación Exploratoria',aux,pperfexploraDeqv,pperfexplorabsf,pperfexploradol,pperfexploraDeqv,rperfexplorabsf,rperfexploradol,rperfexploraDeqv,mvperfexplorabsf,mvperfexploradol,mvperfexploraDeqv,antperfexplorabsf,antperfexploradol,antperfexploraDeqv);
							informacion += descripciones('','Recuperación Adicional',aux,precupadicDeqv,precupadicbsf,precupadicdol,precupadicDeqv,rrecupadicbsf,rrecupadicdol,rrecupadicDeqv,mvrecupadicbsf,mvrecupadicdol,mvrecupadicDeqv,antrecupadicbsf,antrecupadicdol,antrecupadicDeqv );
							informacion += descripciones('','Recompletación De Pozos',aux,precompozosDeqv,precompozosbsf,precompozosdol,precompozosDeqv,rrecompozosbsf,rrecompozosdol,rrecompozosDeqv,mvrecompozosbsf,mvrecompozosdol,mvrecompozosDeqv,antrecompozosbsf,antrecompozosdol,antrecompozosDeqv);
							informacion += descripciones('','Recuperación Suplementaria',aux,precupesupleDeqv,precupesuplebsf,precupesupledol,precupesupleDeqv,rrecupesuplebsf,rrecupesupledol,rrecupesupleDeqv,mvrecupesuplebsf,mvrecupesupledol,mvrecupesupleDeqv,antrecupesuplebsf,antrecupesupledol,antrecupesupleDeqv);
							informacion += descripciones('','Inyección Alterna De Vapor',aux,pinyectalternavaporDeqv,pinyectalternavaporbsf,pinyectalternavapordol,pinyectalternavaporDeqv,rinyectalternavaporbsf,rinyectalternavapordol,rinyectalternavaporDeqv,mvinyectalternavaporbsf,mvinyectalternavapordol,mvinyectalternavaporDeqv,antinyectalternavaporbsf,antinyectalternavapordol,antinyectalternavaporDeqv );
							informacion += descripciones('','Levantamiento Artificial',aux,plevantamientoartifDeqv,plevantamientoartifbsf,plevantamientoartifdol,plevantamientoartifDeqv,rlevantamientoartifbsf,rlevantamientoartifdol,rlevantamientoartifDeqv,mvlevantamientoartifbsf,mvlevantamientoartifdol,mvlevantamientoartifDeqv,antlevantamientoartifbsf,antlevantamientoartifdol,antlevantamientoartifDeqv );
							informacion += descripciones('','Conservación y Utilización del Gas',aux,pconutigasDeqv,pconutigasbsf,pconutigasdol,pconutigasDeqv,rconutigasbsf,rconutigasdol,rconutigasDeqv,mvconutigasbsf,mvconutigasdol,mvconutigasDeqv,antconutigasbsf,antconutigasdol,antconutigasDeqv );
							informacion += descripciones('','Planta de Líquidos y Gas',aux,pplantliqgasDeqv,pplantliqgasbsf,pplantliqgasdol,pplantliqgasDeqv,rplantliqgasbsf,rplantliqgasdol,rplantliqgasDeqv,mvplantliqgasbsf,mvplantliqgasdol,mvplantliqgasDeqv,antplantliqgasbsf,antplantliqgasdol,antplantliqgasDeqv);
							informacion += descripciones('','Instalaciones de Producción',aux,pinstproducDeqv,pinstproducbsf,pinstproducdol,pinstproducDeqv,rinstproducbsf,rinstproducdol,rinstproducDeqv,mvinstproducbsf,mvinstproducdol,mvinstproducDeqv,antinstproducbsf,antinstproducdol,antinstproducDeqv);
							informacion += descripciones('','Oleoductos y Terminales de Embarque',aux,poleoterminaembDeqv,poleoterminaembbsf,poleoterminaembdol,poleoterminaembDeqv,roleoterminaembbsf,roleoterminaembdol,roleoterminaembDeqv,mvoleoterminaembbsf,mvoleoterminaembdol,mvoleoterminaembDeqv,antoleoterminaembbsf,antoleoterminaembdol,antoleoterminaembDeqv );
							informacion += descripciones('','Almacenamiento',aux,palmacenamientoDeqv,palmacenamientobsf,palmacenamientodol,palmacenamientoDeqv,ralmacenamientobsf,ralmacenamientodol,ralmacenamientoDeqv,mvalmacenamientobsf,mvalmacenamientodol,mvalmacenamientoDeqv,antalmacenamientobsf,antalmacenamientodol,antalmacenamientoDeqv );
							informacion += descripciones('','Desarrollo Urbano',aux,pdesarrollourbaDeqv,pdesarrollourbabsf,pdesarrollourbadol,pdesarrollourbaDeqv,rdesarrollourbabsf,rdesarrollourbadol,rdesarrollourbaDeqv,mvdesarrollourbabsf,mvdesarrollourbadol,mvdesarrollourbaDeqv,antdesarrollourbabsf,antdesarrollourbadol,antdesarrollourbaDeqv );
							informacion += descripciones('','Protección Integral',aux,pproteccionintegDeqv,pproteccionintegbsf,pproteccionintegdol,pproteccionintegDeqv,rproteccionintegbsf,rproteccionintegdol,rproteccionintegDeqv,mvproteccionintegbsf,mvproteccionintegdol,mvproteccionintegDeqv,antproteccionintegbsf,antproteccionintegdol,antproteccionintegDeqv );
							informacion += descripciones('','Prevención y Control de Pérdidas',aux,ppcpDeqv,ppcpbsf,ppcpdol,ppcpDeqv,rpcpbsf,rpcpdol,rpcpDeqv,mvpcpbsf,mvpcpdol,mvpcpDeqv,antpcpbsf,antpcpdol,antpcpDeqv );
							informacion += descripciones('','Telecomunicaciones',aux,ptelecomunicacionesDeqv,ptelecomunicacionesbsf,ptelecomunicacionesdol,ptelecomunicacionesDeqv,rtelecomunicacionesbsf,rtelecomunicacionesdol,rtelecomunicacionesDeqv,mvtelecomunicacionesbsf,mvtelecomunicacionesdol,mvtelecomunicacionesDeqv,anttelecomunicacionesbsf,anttelecomunicacionesdol,anttelecomunicacionesDeqv );
							informacion += descripciones('','Automatización Industrial',aux,pautomatizacionindDeqv,pautomatizacionindbsf,pautomatizacioninddol,pautomatizacionindDeqv,rautomatizacionindbsf,rautomatizacioninddol,rautomatizacionindDeqv,mvautomatizacionindbsf,mvautomatizacioninddol,mvautomatizacionindDeqv,antautomatizacionindbsf,antautomatizacioninddol,antautomatizacionindDeqv );
							informacion += descripciones('','Computación y Sistemas',aux,pcomputaysisteDeqv,pcomputaysistebsf,pcomputaysistedol,pcomputaysisteDeqv,rcomputaysistebsf,rcomputaysistedol,rcomputaysisteDeqv,mvcomputaysistebsf,mvcomputaysistedol,mvcomputaysisteDeqv,antcomputaysistebsf,antcomputaysistedol,antcomputaysisteDeqv );
							informacion += descripciones('','Edificaciones e Instalaciones Industriales',aux,pedifinstindustDeqv,pedifinstindustbsf,pedifinstindustdol,pedifinstindustDeqv,redifinstindustbsf,redifinstindustdol,redifinstindustDeqv,mvedifinstindustbsf,mvedifinstindustdol,mvedifinstindustDeqv,antedifinstindustbsf,antedifinstindustdol,antedifinstindustDeqv );
							informacion += descripciones('','Equipos',aux,pequiposDeqv,pequiposbsf,pequiposdol,pequiposDeqv,requiposbsf,requiposdol,requiposDeqv,mvequiposbsf,mvequiposdol,mvequiposDeqv,antequiposbsf,antequiposdol,antequiposDeqv );
							informacion += descripciones('','Otras Inversiones',aux,potrasinvDeqv,potrasinvbsf,potrasinvdol,potrasinvDeqv,rotrasinvbsf,rotrasinvdol,rotrasinvDeqv,mvotrasinvbsf,mvotrasinvdol,mvotrasinvDeqv,antotrasinvbsf,antotrasinvdol,antotrasinvDeqv );
							informacion += descripciones('red-header','Total',aux,ptotalcateDeqv,ptotalcatebsf,ptotalcatedol,ptotalcateDeqv,rtotalcatebsf,rtotalcatedol,rtotalcateDeqv,mvtotalcatebsf,mvtotalcatedol,mvtotalcateDeqv,anttotalcatebsf,anttotalcatedol,anttotalcateDeqv );
																		 						

	 						return informacion;

 }

