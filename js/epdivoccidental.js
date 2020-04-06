var x;
x = $(document);
x.ready(epoccidentaldiv);

function epoccidentaldiv(){

$( "input" ).on( "click", function() {

		var anho = $("#anhooccidental option:selected");

		var opciones = $("input:checked").val();

		var v3 = anho.val();
		
		alert('la opcion '+opciones);

		if(anho.val() != ''){
			var v1= 2;
			var v2 = 2;

		if(opciones ==	'resumen1'){


				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


								$.post("cepdivoccidental/habilitadorasplanequiv",postForm,function(habi){

									var hab = $.parseJSON(habi);

									$.post("cepdivoccidental/habilitadorarealequiv",postForm,function(habreal){

											var hreal = $.parseJSON(habreal);

								
										$.post("cepdivoccidental/habilitadoramvequiv",postForm,function(habmv){

												var hmv = $.parseJSON(habmv);
 						
				 							$.post("cepdivoccidental/habilitadorantequiv",postForm,function(habant){
 
				 								var anthab = $.parseJSON(habant);

				 								$.post("cepdivoccidental/pplanequiv",postForm,function(pplan){
	 
				 									var planp = $.parseJSON(pplan);


						 							$.post("cepdivoccidental/prealequiv",postForm,function(preal){


						 								var realp = $.parseJSON(preal);

						 								$.post("cepdivoccidental/pmvequiv",postForm,function(pmv){

						 										alert('proyecto mv'+pmv);
						 										var mvp = $.parseJSON(pmv);


	 														$.post("cepdivoccidental/pantequiv",postForm,function(pant){

	 															alert('proyecto anteproyecto'+pant);
	 															var antp = $.parseJSON(pant);

 															var informacion = englobarymostrardivoccep(hab,hreal,hmv,anthab,planp,realp,mvp,antp,v3);

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

		}// fin de la opcion resumen 1 para ep division occidental

/////////////////// OPCIONES PARA PLAN ///////////////////////////////////////////////////////////
		if(opciones == 'pepdivocc1'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pplanequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_p',1);
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


		} // fin opcion pepdivocc1

		if(opciones == 'pepdivocc2'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pplanequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_p',2);
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


		} // fin opcion pepdivocc2

		if(opciones == 'pepdivocc3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pplanequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementocequiv(hab,'_p');
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

//////////////// FIN DE LAS OPCIONES PARA PLAN////////////////////////////////////

////////////////////// OPCIONES PARA REAL ////////////////////////////////////////

if(opciones == 'repdivocc1'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/prealequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_r',1);
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

 						 
				});// fin post plan 


		} // fin opcion repdivocc1

		if(opciones == 'repdivocc2'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/prealequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_r',2);
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

 						 
				});// fin post plan 


		} // fin opcion repdivocc2

		if(opciones == 'repdivocc3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorarealequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/prealequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementocequiv(hab,'_r');
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

 						 
				});// fin post plan 



			}// fin opcion repdivocc3

////////////////////// FIN DE LAS OPCIONES PARA REAL///////////////////////////////////////



///////////////// OPCIONES PARA LA MEJOR VISION //////////////////////////
	if(opciones == 'mvepdivocc1'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pmvequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_mv',1);
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

 						 
				});// fin post plan 


		} // fin opcion mvepdivocc1

		if(opciones == 'mvepdivocc2'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pmvequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_mv',2);
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

 						 
				});// fin post plan 


		} // fin opcion mvepdivocc2

		if(opciones == 'mvepdivocc3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadoramvequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pmvequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementocequiv(hab,'_mv');
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

 						 
				});// fin post plan 



			}// fin opcion mvepdivocc3

////////// FIN OPCIONES PARA MEJOR VISION ///////////////////////

////////////////// OPCIONES PARA ANTEPROYECTO ////////////////////////////////
	
	if(opciones == 'antepdivocc1'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pantequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_ant',1);
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

 						 
				});// fin post plan 


		} // fin opcion antepdivocc1

		if(opciones == 'antepdivocc2'){

			var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pantequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementoc(hab,'_ant',2);
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

 						 
				});// fin post plan 


		} // fin opcion antepdivocc2

		if(opciones == 'antepdivocc3'){

				
				var postForm ={'v3' : v3,'v2': v2,'v1': v1};


				$.post("cepdivoccidental/habilitadorantequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

 											$.post("cepdivoccidental/pantequiv",postForm,function(pplan){
 
 											var planp = $.parseJSON(pplan);


 															var informacion = divocprmaelementocequiv(hab,'_ant');
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

 						 
				});// fin post plan 



			}// fin opcion antepdivocc3

/////////////// FIN OPCIONES PARA ANTEPROYECTO //////////////////////////////////////
		}else{

			alert('Debe seleccionar un año');

		}

	});

}

function divocprmaelementoc(habp,com,moneda){

		//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var labordivoc = filtrarcostohab(habp,filtrolabor,3,com,moneda);
						var bbdivoc = filtrarcostohab(habp,filtrobb,3,com,moneda);
						var mdivoc = filtrarcostohab(habp,filtrom,3,com,moneda);
						var scdivoc = filtrarcostohab(habp,filtrosc,3,com,moneda);
						var odivoc = filtrarcostohab(habp,filtroo,3,com,moneda);
						var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////

 						var laborybbdivobsfr  = filtrardivo(labordivoc,bbdivoc); 
 						
 						var	informacion = cabeceracategoriaprmva('red-header','ELEMENTO DE COSTO');
 							informacion += mostrarcategoriaprmva('','Labor y Beneficios',laborybbdivobsfr); 
 							informacion += mostrarcategoriaprmva('','Materiales',mdivoc);
 							informacion += mostrarcategoriaprmva('','Servicios y Contratos',scdivoc);
 							informacion += mostrarcategoriaprmva('','Otros Costos y Gastos',odivoc);
 							informacion += mostrarcategoriaprmva('red-header','Total',totaldivoc); 
 					return informacion;
 						 
}

// EQUIVALENTE DEL PLAN REAL MEJOR VISION Y ANTEPROYECTO POR ELEMENTO DE COSTO
function divocprmaelementocequiv(habp,com){

			//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var labordivoc = filtrarcostohab(habp,filtrolabor,3,com,1);
						var bbdivoc = filtrarcostohab(habp,filtrobb,3,com,1);
						var mdivoc = filtrarcostohab(habp,filtrom,3,com,1);
						var scdivoc = filtrarcostohab(habp,filtrosc,3,com,1);
						var odivoc = filtrarcostohab(habp,filtroo,3,com,1);
						var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 
 						 		 // ESFUERZOS PROPIOS PLAN EN DOLARES
 						 var labordivocdol = filtrarcostohab(habp,filtrolabor,3,com,2);
 						 var bbdivocdol = filtrarcostohab(habp,filtrobb,3,com,2);
 						 var mdivocdol = filtrarcostohab(habp,filtrom,3,com,2);
 						 var scdivocdol = filtrarcostohab(habp,filtrosc,3,com,2);
 						 var odivocdol = filtrarcostohab(habp,filtroo,3,com,2);
 						 var totaldivocdol = filtrartotal(labordivocdol,bbdivocdol,mdivocdol,scdivocdol,odivocdol);

 						 
 						  /// DIVISION ORIENTAL PLAN EN DOLARES EQUIVALENTES
 						 var labordivocDeqv = filtroequivalente(labordivoc,labordivocdol);
 						 var bbdivocDeqv = filtroequivalente(bbdivoc,bbdivocdol);
 						 var mdivocDeqv = filtroequivalente(mdivoc,mdivocdol);
 						 var scdivocDeqv = filtroequivalente(scdivoc,scdivocdol);
 						 var odivocDeqv = filtroequivalente(odivoc,odivocdol);
 						 var totaldivocDeqv = filtrartotal(labordivocDeqv,bbdivocDeqv,mdivocDeqv,scdivocDeqv,odivocDeqv);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////
 						 var laborybbdivoDeqv = filtrardivo(labordivocDeqv,bbdivocDeqv);
 						
 						var	informacion = cabeceracategoriaprmva('red-header','ELEMENTO DE COSTO');
 							informacion += mostrarcategoriaprmva('','Labor y Beneficios',laborybbdivoDeqv); 
 							informacion += mostrarcategoriaprmva('','Materiales',mdivocDeqv);
 							informacion += mostrarcategoriaprmva('','Servicios y Contratos',scdivocDeqv);
 							informacion += mostrarcategoriaprmva('','Otros Costos y Gastos',odivocDeqv);
 							informacion += mostrarcategoriaprmva('red-header','Total',totaldivocDeqv); 
 					return informacion;

}




function englobarymostrardivoccep(habp,habr,habmv,habant,pplan,preal,pmv,pant,v3){


 						var aux=0;	

 	//////////////////////////////////PLAN HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var labordivocbsf = filtrarcostohab(habp,filtrolabor,3,'_p',1);
						var bbdivocbsf = filtrarcostohab(habp,filtrobb,3,'_p',1);
						var mdivocbsf = filtrarcostohab(habp,filtrom,3,'_p',1);
						var scdivocbsf = filtrarcostohab(habp,filtrosc,3,'_p',1);
						var odivocbsf = filtrarcostohab(habp,filtroo,3,'_p',1);
						var totaldivocbsf = filtrartotal(labordivocbsf,bbdivocbsf,mdivocbsf,scdivocbsf,odivocbsf);
 
 						 		 // ESFUERZOS PROPIOS PLAN EN DOLARES
 						 var labordivocdol = filtrarcostohab(habp,filtrolabor,3,'_p',2);
 						 var bbdivocdol = filtrarcostohab(habp,filtrobb,3,'_p',2);
 						 var mdivocdol = filtrarcostohab(habp,filtrom,3,'_p',2);
 						 var scdivocdol = filtrarcostohab(habp,filtrosc,3,'_p',2);
 						 var odivocdol = filtrarcostohab(habp,filtroo,3,'_p',2);
 						 var totaldivocdol = filtrartotal(labordivocdol,bbdivocdol,mdivocdol,scdivocdol,odivocdol);

 						  /// DIVISION occidental PLAN EN DOLARES EQUIVALENTES
 						 var labordivocDeqv = filtroequivalente(labordivocbsf,labordivocdol);
 						 var bbdivocDeqv = filtroequivalente(bbdivocbsf,bbdivocdol);
 						 var mdivocDeqv = filtroequivalente(mdivocbsf,mdivocdol);
 						 var scdivocDeqv = filtroequivalente(scdivocbsf,scdivocdol);
 						 var odivocDeqv = filtroequivalente(odivocbsf,odivocdol);
 						 var totaldivocDeqv = filtrartotal(labordivocDeqv,bbdivocDeqv,mdivocDeqv,scdivocDeqv,odivocDeqv);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////

 						 ////////////////REAL HABILITADORAS /////////////////////////
								// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var labordivocbsfr = filtrarcostohab(habr,filtrolabor,3,'_r',1);
 						 var bbdivocbsfr = filtrarcostohab(habr,filtrobb,3,'_r',1);
 						 var mdivocbsfr = filtrarcostohab(habr,filtrom,3,'_r',1);
 						 var scdivocbsfr = filtrarcostohab(habr,filtrosc,3,'_r',1);
 						 var odivocbsfr = filtrarcostohab(habr,filtroo,3,'_r',1);
 						 var totaldivocbsfr = filtrartotal(labordivocbsfr,bbdivocbsfr,mdivocbsfr,scdivocbsfr,odivocbsfr);

 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var labordivocdolr = filtrarcostohab(habr,filtrolabor,3,'_r',2);
 						 var bbdivocdolr = filtrarcostohab(habr,filtrobb,3,'_r',2);
 						 var mdivocdolr = filtrarcostohab(habr,filtrom,3,'_r',2);
 						 var scdivocdolr = filtrarcostohab(habr,filtrosc,3,'_r',2);
 						 var odivocdolr = filtrarcostohab(habr,filtroo,3,'_r',2);
 						 var totaldivocdolr = filtrartotal(labordivocdolr,bbdivocdolr,mdivocdolr,scdivocdolr,odivocdolr);

 						  /// DIVISION OCCIDENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivocDeqvr = filtroequivalente(labordivocbsfr,labordivocdolr);
 						 var bbdivocDeqvr = filtroequivalente(bbdivocbsfr,bbdivocdolr);
 						 var mdivocDeqvr = filtroequivalente(mdivocbsfr,mdivocdolr);
 						 var scdivocDeqvr = filtroequivalente(scdivocbsfr,scdivocdolr);
 						 var odivocDeqvr = filtroequivalente(odivocbsfr,odivocdolr);
 						 var totaldivocDeqvr = filtrartotal(labordivocDeqvr,bbdivocDeqvr,mdivocDeqvr,scdivocDeqvr,odivocDeqvr);

 						 /////////////FIN REAL ////////////////////////////////////////////////

 						 //////////////// MEJOR VISION ///////////////////////////////////////////////
 						 // ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var labordivocbsfmv = filtrarcostohab(habmv,filtrolabor,3,'_mv',1);
 						 var bbdivocbsfmv = filtrarcostohab(habmv,filtrobb,3,'_mv',1);
 						 var mdivocbsfmv = filtrarcostohab(habmv,filtrom,3,'_mv',1);
 						 var scdivocbsfmv = filtrarcostohab(habmv,filtrosc,3,'_mv',1);
 						 var odivocbsfmv = filtrarcostohab(habmv,filtroo,3,'_mv',1);
 						 var totaldivocbsfmv = filtrartotal(labordivocbsfmv,bbdivocbsfmv,mdivocbsfmv,scdivocbsfmv,odivocbsfmv);
 						 
 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var labordivocdolmv = filtrarcostohab(habmv,filtrolabor,3,'_mv',2);
 						 var bbdivocdolmv = filtrarcostohab(habmv,filtrobb,3,'_mv',2);
 						 var mdivocdolmv = filtrarcostohab(habmv,filtrom,3,'_mv',2);
 						 var scdivocdolmv = filtrarcostohab(habmv,filtrosc,3,'_mv',2);
 						 var odivocdolmv = filtrarcostohab(habmv,filtroo,3,'_mv',2);
 						 var totaldivocdolmv = filtrartotal(labordivocdolmv,bbdivocdolmv,mdivocdolmv,scdivocdolmv,odivocdolmv);

 						  /// DIVISION ORIENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivocDeqvmv = filtroequivalente(labordivocbsfmv,labordivocdolmv);
 						 var bbdivocDeqvmv = filtroequivalente(bbdivocbsfmv,bbdivocdolmv);
 						 var mdivocDeqvmv = filtroequivalente(mdivocbsfmv,mdivocdolmv);
 						 var scdivocDeqvmv = filtroequivalente(scdivocbsfmv,scdivocdolmv);
 						 var odivocDeqvmv = filtroequivalente(odivocbsfmv,odivocdolmv);
 						 var totaldivocDeqvmv = filtrartotal(labordivocDeqvmv,bbdivocDeqvmv,mdivocDeqvmv,scdivocDeqvmv,odivocDeqvmv);


 						////////////// HABILITADORAS ANTEPROYECTOS //////////////////////////////
 						// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var labordivocbsfant = filtrarcostohab(habant,filtrolabor,3,'_ant',1);
 						 var bbdivocbsfant = filtrarcostohab(habant,filtrobb,3,'_ant',1);
 						 var mdivocbsfant = filtrarcostohab(habant,filtrom,3,'_ant',1);
 						 var scdivocbsfant = filtrarcostohab(habant,filtrosc,3,'_ant',1);
 						 var odivocbsfant = filtrarcostohab(habant,filtroo,3,'_ant',1);
 						 var totaldivocbsfant = filtrartotal(labordivocbsfant,bbdivocbsfant,mdivocbsfant,scdivocbsfant,odivocbsfant);
 						 
 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var labordivocdolant = filtrarcostohab(habant,filtrolabor,3,'_ant',2);
 						 var bbdivocdolant = filtrarcostohab(habant,filtrobb,3,'_ant',2);
 						 var mdivocdolant = filtrarcostohab(habant,filtrom,3,'_ant',2);
 						 var scdivocdolant = filtrarcostohab(habant,filtrosc,3,'_ant',2);
 						 var odivocdolant = filtrarcostohab(habant,filtroo,3,'_ant',2);
 						 var totaldivocdolant = filtrartotal(labordivocdolant,bbdivocdolant,mdivocdolant,scdivocdolant,odivocdolant);

 						  
 						  /// DIVISION ORIENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivocDeqvant = filtroequivalente(labordivocbsfant,labordivocdolant);
 						 var bbdivocDeqvant = filtroequivalente(bbdivocbsfant,bbdivocdolant);
 						 var mdivocDeqvant = filtroequivalente(mdivocbsfant,mdivocdolant);
 						 var scdivocDeqvant = filtroequivalente(scdivocbsfant,scdivocdolant);
 						 var odivocDeqvant = filtroequivalente(odivocbsfant,odivocdolant);
 						 var totaldivocDeqvant = filtrartotal(labordivocDeqvant,bbdivocDeqvant,mdivocDeqvant,scdivocDeqvant,odivocDeqvant);

 						 //////////// FIN ANTEPROYECTO ////////////////////////////////////

 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbdivocbsfr  = filtrardivo(labordivocbsfr,bbdivocbsfr); 
 						var laborybbdivocdolr = filtrardivo(labordivocdolr,bbdivocdolr); 
 						var laborybbdivocDeqvr= filtrardivo(labordivocDeqvr,bbdivocDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbdivocbsf  = filtrardivo(labordivocbsf,bbdivocbsf); 
 						var laborybbdivocdol  = filtrardivo(labordivocdol,bbdivocdol); 
 						var laborybbdivocDeqv = filtrardivo(labordivocDeqv,bbdivocDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdivocbsfmv  = filtrardivo(labordivocbsfmv,bbdivocbsfmv); 
 						var laborybbdivocdolmv  = filtrardivo(labordivocdolmv,bbdivocdolmv); 
 						var laborybbdivocDeqvmv = filtrardivo(labordivocDeqvmv,bbdivocDeqvmv);
 						// Labor y beneficio de anteproyecto MMBSF, MM$, MMEQUIV
 						var laborybbdivocbsfant  = filtrardivo(labordivocbsfant,bbdivocbsfant); 
 						var laborybbdivocdolant  = filtrardivo(labordivocdolant,bbdivocdolant); 
 						var laborybbdivocDeqvant = filtrardivo(labordivocDeqvant,bbdivocDeqvant);

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
 						var rgeobsf = categoriaproyectos(preal,geofisica,'_r',1);
 						var rgeodol = categoriaproyectos(preal,geofisica,'_r',2);
 						var rgeoDeqv = filtroequivalente(rgeobsf,rgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var rperfavanzbsf = categoriaproyectos(preal,perfavanz,'_r',1);
 						var rperfavanzdol = categoriaproyectos(preal,perfavanz,'_r',2);
 						var rperfavanzDeqv = filtroequivalente(rperfavanzbsf,rperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var rperfdesarrobsf = categoriaproyectos(preal,perfdesarro,'_r',1);
 						var rperfdesarrodol = categoriaproyectos(preal,perfdesarro,'_r',2);
 						var rperfdesarroDeqv = filtroequivalente(rperfdesarrobsf,rperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var rperfexplorabsf = categoriaproyectos(preal,perfexplora,'_r',1);
 						var rperfexploradol = categoriaproyectos(preal,perfexplora,'_r',2);
 						var rperfexploraDeqv = filtroequivalente(rperfexplorabsf,rperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var rrecupadicbsf = categoriaproyectos(preal,recupadic,'_r',1);
 						var rrecupadicdol = categoriaproyectos(preal,recupadic,'_r',2);
 						var rrecupadicDeqv = filtroequivalente(rrecupadicbsf,rrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var rrecompozosbsf = categoriaproyectos(preal,recompozos,'_r',1);
 						var rrecompozosdol = categoriaproyectos(preal,recompozos,'_r',2);
 						var rrecompozosDeqv = filtroequivalente(rrecompozosbsf,rrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var rrecupesuplebsf = categoriaproyectos(preal,recupesuple,'_r',1);
 						var rrecupesupledol = categoriaproyectos(preal,recupesuple,'_r',2);
 						var rrecupesupleDeqv = filtroequivalente(rrecupesuplebsf,rrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var rinyectalternavaporbsf = categoriaproyectos(preal,inyectalternavapor,'_r',1);
 						var rinyectalternavapordol = categoriaproyectos(preal,inyectalternavapor,'_r',2);
 						var rinyectalternavaporDeqv = filtroequivalente(rinyectalternavaporbsf,rinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var rlevantamientoartifbsf = categoriaproyectos(preal,levantamientoartif,'_r',1);
 						var rlevantamientoartifdol = categoriaproyectos(preal,levantamientoartif,'_r',2);
 						var rlevantamientoartifDeqv = filtroequivalente(rlevantamientoartifbsf,rlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var rconutigasbsf = categoriaproyectos(preal,conutigas,'_r',1);
 						var rconutigasdol = categoriaproyectos(preal,conutigas,'_r',2);
 						var rconutigasDeqv = filtroequivalente(rconutigasbsf,rconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var rplantliqgasbsf = categoriaproyectos(preal,plantliqgas,'_r',1);
 						var rplantliqgasdol = categoriaproyectos(preal,plantliqgas,'_r',2);
 						var rplantliqgasDeqv = filtroequivalente(rplantliqgasbsf,rplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var rinstproducbsf = categoriaproyectos(preal,instproduc,'_r',1);
 						var rinstproducdol = categoriaproyectos(preal,instproduc,'_r',2);
 						var rinstproducDeqv = filtroequivalente(rinstproducbsf,rinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var roleoterminaembbsf = categoriaproyectos(preal,oleoterminaemb,'_r',1);
 						var roleoterminaembdol = categoriaproyectos(preal,oleoterminaemb,'_r',2);
 						var roleoterminaembDeqv = filtroequivalente(roleoterminaembbsf,roleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var ralmacenamientobsf = categoriaproyectos(preal,almacenamiento,'_r',1);
 						var ralmacenamientodol = categoriaproyectos(preal,almacenamiento,'_r',2);
 						var ralmacenamientoDeqv = filtroequivalente(ralmacenamientobsf,ralmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var rdesarrollourbabsf = categoriaproyectos(preal,desarrollourba,'_r',1);
 						var rdesarrollourbadol = categoriaproyectos(preal,desarrollourba,'_r',2);
 						var rdesarrollourbaDeqv = filtroequivalente(rdesarrollourbabsf,rdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var rproteccionintegbsf = categoriaproyectos(preal,proteccioninteg,'_r',1);
 						var rproteccionintegdol = categoriaproyectos(preal,proteccioninteg,'_r',2);
 						var rproteccionintegDeqv = filtroequivalente(rproteccionintegbsf,rproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var rpcpbsf = categoriaproyectos(preal,pcp,'_r',1);
 						var rpcpdol = categoriaproyectos(preal,pcp,'_r',2);
 						var rpcpDeqv = filtroequivalente(rpcpbsf,rpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var rtelecomunicacionesbsf = categoriaproyectos(preal,telecomunicaciones,'_r',1);
 						var rtelecomunicacionesdol = categoriaproyectos(preal,telecomunicaciones,'_r',2);
 						var rtelecomunicacionesDeqv = filtroequivalente(rtelecomunicacionesbsf,rtelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var rautomatizacionindbsf = categoriaproyectos(preal,automatizacionind,'_r',1);
 						var rautomatizacioninddol = categoriaproyectos(preal,automatizacionind,'_r',2);
 						var rautomatizacionindDeqv = filtroequivalente(rautomatizacionindbsf,rautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var rcomputaysistebsf = categoriaproyectos(preal,computaysiste,'_r',1);
 						var rcomputaysistedol = categoriaproyectos(preal,computaysiste,'_r',2);
 						var rcomputaysisteDeqv = filtroequivalente(rcomputaysistebsf,rcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var redifinstindustbsf = categoriaproyectos(preal,edifinstindust,'_r',1);
 						var redifinstindustdol = categoriaproyectos(preal,edifinstindust,'_r',2);
 						var redifinstindustDeqv = filtroequivalente(redifinstindustbsf,redifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var requiposbsf = categoriaproyectos(preal,equipos,'_r',1);
 						var requiposdol = categoriaproyectos(preal,equipos,'_r',2);
 						var requiposDeqv = filtroequivalente(requiposbsf,requiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var rotrasinvbsf = categoriaproyectos(preal,otrasinv,'_r',1);
 						var rotrasinvdol = categoriaproyectos(preal,otrasinv,'_r',2);
 						var rotrasinvDeqv = filtroequivalente(rotrasinvbsf,rotrasinvdol);
 						///////////////////////////
 						  
 						///////MEJOR VISION PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var mvgeobsf = categoriaproyectos(pmv,geofisica,'_mv',1);
 						var mvgeodol = categoriaproyectos(pmv,geofisica,'_mv',2);
 						var mvgeoDeqv = filtroequivalente(mvgeobsf,mvgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var mvperfavanzbsf = categoriaproyectos(pmv,perfavanz,'_mv',1);
 						var mvperfavanzdol = categoriaproyectos(pmv,perfavanz,'_mv',2);
 						var mvperfavanzDeqv = filtroequivalente(mvperfavanzbsf,mvperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var mvperfdesarrobsf = categoriaproyectos(pmv,perfdesarro,'_mv',1);
 						var mvperfdesarrodol = categoriaproyectos(pmv,perfdesarro,'_mv',2);
 						var mvperfdesarroDeqv = filtroequivalente(mvperfdesarrobsf,mvperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var mvperfexplorabsf = categoriaproyectos(pmv,perfexplora,'_mv',1);
 						var mvperfexploradol = categoriaproyectos(pmv,perfexplora,'_mv',2);
 						var mvperfexploraDeqv = filtroequivalente(mvperfexplorabsf,mvperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var mvrecupadicbsf = categoriaproyectos(pmv,recupadic,'_mv',1);
 						var mvrecupadicdol = categoriaproyectos(pmv,recupadic,'_mv',2);
 						var mvrecupadicDeqv = filtroequivalente(mvrecupadicbsf,mvrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var mvrecompozosbsf = categoriaproyectos(pmv,recompozos,'_mv',1);
 						var mvrecompozosdol = categoriaproyectos(pmv,recompozos,'_mv',2);
 						var mvrecompozosDeqv = filtroequivalente(mvrecompozosbsf,mvrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var mvrecupesuplebsf = categoriaproyectos(pmv,recupesuple,'_mv',1);
 						var mvrecupesupledol = categoriaproyectos(pmv,recupesuple,'_mv',2);
 						var mvrecupesupleDeqv = filtroequivalente(mvrecupesuplebsf,mvrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var mvinyectalternavaporbsf = categoriaproyectos(pmv,inyectalternavapor,'_mv',1);
 						var mvinyectalternavapordol = categoriaproyectos(pmv,inyectalternavapor,'_mv',2);
 						var mvinyectalternavaporDeqv = filtroequivalente(mvinyectalternavaporbsf,mvinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var mvlevantamientoartifbsf = categoriaproyectos(pmv,levantamientoartif,'_mv',1);
 						var mvlevantamientoartifdol = categoriaproyectos(pmv,levantamientoartif,'_mv',2);
 						var mvlevantamientoartifDeqv = filtroequivalente(mvlevantamientoartifbsf,mvlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var mvconutigasbsf = categoriaproyectos(pmv,conutigas,'_mv',1);
 						var mvconutigasdol = categoriaproyectos(pmv,conutigas,'_mv',2);
 						var mvconutigasDeqv = filtroequivalente(mvconutigasbsf,mvconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var mvplantliqgasbsf = categoriaproyectos(pmv,plantliqgas,'_mv',1);
 						var mvplantliqgasdol = categoriaproyectos(pmv,plantliqgas,'_mv',2);
 						var mvplantliqgasDeqv = filtroequivalente(mvplantliqgasbsf,mvplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var mvinstproducbsf = categoriaproyectos(pmv,instproduc,'_mv',1);
 						var mvinstproducdol = categoriaproyectos(pmv,instproduc,'_mv',2);
 						var mvinstproducDeqv = filtroequivalente(mvinstproducbsf,mvinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var mvoleoterminaembbsf = categoriaproyectos(pmv,oleoterminaemb,'_mv',1);
 						var mvoleoterminaembdol = categoriaproyectos(pmv,oleoterminaemb,'_mv',2);
 						var mvoleoterminaembDeqv = filtroequivalente(mvoleoterminaembbsf,mvoleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var mvalmacenamientobsf = categoriaproyectos(pmv,almacenamiento,'_mv',1);
 						var mvalmacenamientodol = categoriaproyectos(pmv,almacenamiento,'_mv',2);
 						var mvalmacenamientoDeqv = filtroequivalente(mvalmacenamientobsf,mvalmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var mvdesarrollourbabsf = categoriaproyectos(pmv,desarrollourba,'_mv',1);
 						var mvdesarrollourbadol = categoriaproyectos(pmv,desarrollourba,'_mv',2);
 						var mvdesarrollourbaDeqv = filtroequivalente(mvdesarrollourbabsf,mvdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var mvproteccionintegbsf = categoriaproyectos(pmv,proteccioninteg,'_mv',1);
 						var mvproteccionintegdol = categoriaproyectos(pmv,proteccioninteg,'_mv',2);
 						var mvproteccionintegDeqv = filtroequivalente(mvproteccionintegbsf,mvproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var mvpcpbsf = categoriaproyectos(pmv,pcp,'_mv',1);
 						var mvpcpdol = categoriaproyectos(pmv,pcp,'_mv',2);
 						var mvpcpDeqv = filtroequivalente(mvpcpbsf,mvpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var mvtelecomunicacionesbsf = categoriaproyectos(pmv,telecomunicaciones,'_mv',1);
 						var mvtelecomunicacionesdol = categoriaproyectos(pmv,telecomunicaciones,'_mv',2);
 						var mvtelecomunicacionesDeqv = filtroequivalente(mvtelecomunicacionesbsf,mvtelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var mvautomatizacionindbsf = categoriaproyectos(pmv,automatizacionind,'_mv',1);
 						var mvautomatizacioninddol = categoriaproyectos(pmv,automatizacionind,'_mv',2);
 						var mvautomatizacionindDeqv = filtroequivalente(mvautomatizacionindbsf,mvautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var mvcomputaysistebsf = categoriaproyectos(pmv,computaysiste,'_mv',1);
 						var mvcomputaysistedol = categoriaproyectos(pmv,computaysiste,'_mv',2);
 						var mvcomputaysisteDeqv = filtroequivalente(mvcomputaysistebsf,mvcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var mvedifinstindustbsf = categoriaproyectos(pmv,edifinstindust,'_mv',1);
 						var mvedifinstindustdol = categoriaproyectos(pmv,edifinstindust,'_mv',2);
 						var mvedifinstindustDeqv = filtroequivalente(mvedifinstindustbsf,mvedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var mvequiposbsf = categoriaproyectos(pmv,equipos,'_mv',1);
 						var mvequiposdol = categoriaproyectos(pmv,equipos,'_mv',2);
 						var mvequiposDeqv = filtroequivalente(mvequiposbsf,mvequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var mvotrasinvbsf = categoriaproyectos(pmv,otrasinv,'_mv',1);
 						var mvotrasinvdol = categoriaproyectos(pmv,otrasinv,'_mv',2);
 						var mvotrasinvDeqv = filtroequivalente(mvotrasinvbsf,mvotrasinvdol);
 						///////////////////////////   	

 						///////ANTEPROYECTO VISION PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var antgeobsf = categoriaproyectos(pant,geofisica,'_ant',1);
 						var antgeodol = categoriaproyectos(pant,geofisica,'_ant',2);
 						var antgeoDeqv = filtroequivalente(antgeobsf,antgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var antperfavanzbsf = categoriaproyectos(pant,perfavanz,'_ant',1);
 						var antperfavanzdol = categoriaproyectos(pant,perfavanz,'_ant',2);
 						var antperfavanzDeqv = filtroequivalente(antperfavanzbsf,antperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var antperfdesarrobsf = categoriaproyectos(pant,perfdesarro,'_ant',1);
 						var antperfdesarrodol = categoriaproyectos(pant,perfdesarro,'_ant',2);
 						var antperfdesarroDeqv = filtroequivalente(antperfdesarrobsf,antperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var antperfexplorabsf = categoriaproyectos(pant,perfexplora,'_ant',1);
 						var antperfexploradol = categoriaproyectos(pant,perfexplora,'_ant',2);
 						var antperfexploraDeqv = filtroequivalente(antperfexplorabsf,antperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var antrecupadicbsf = categoriaproyectos(pant,recupadic,'_ant',1);
 						var antrecupadicdol = categoriaproyectos(pant,recupadic,'_ant',2);
 						var antrecupadicDeqv = filtroequivalente(antrecupadicbsf,antrecupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var antrecompozosbsf = categoriaproyectos(pant,recompozos,'_ant',1);
 						var antrecompozosdol = categoriaproyectos(pant,recompozos,'_ant',2);
 						var antrecompozosDeqv = filtroequivalente(antrecompozosbsf,antrecompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var antrecupesuplebsf = categoriaproyectos(pant,recupesuple,'_ant',1);
 						var antrecupesupledol = categoriaproyectos(pant,recupesuple,'_ant',2);
 						var antrecupesupleDeqv = filtroequivalente(antrecupesuplebsf,antrecupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var antinyectalternavaporbsf = categoriaproyectos(pant,inyectalternavapor,'_ant',1);
 						var antinyectalternavapordol = categoriaproyectos(pant,inyectalternavapor,'_ant',2);
 						var antinyectalternavaporDeqv = filtroequivalente(antinyectalternavaporbsf,antinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var antlevantamientoartifbsf = categoriaproyectos(pant,levantamientoartif,'_ant',1);
 						var antlevantamientoartifdol = categoriaproyectos(pant,levantamientoartif,'_ant',2);
 						var antlevantamientoartifDeqv = filtroequivalente(antlevantamientoartifbsf,antlevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var antconutigasbsf = categoriaproyectos(pant,conutigas,'_ant',1);
 						var antconutigasdol = categoriaproyectos(pant,conutigas,'_ant',2);
 						var antconutigasDeqv = filtroequivalente(antconutigasbsf,antconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var antplantliqgasbsf = categoriaproyectos(pant,plantliqgas,'_ant',1);
 						var antplantliqgasdol = categoriaproyectos(pant,plantliqgas,'_ant',2);
 						var antplantliqgasDeqv = filtroequivalente(antplantliqgasbsf,antplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var antinstproducbsf = categoriaproyectos(pant,instproduc,'_ant',1);
 						var antinstproducdol = categoriaproyectos(pant,instproduc,'_ant',2);
 						var antinstproducDeqv = filtroequivalente(antinstproducbsf,antinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var antoleoterminaembbsf = categoriaproyectos(pant,oleoterminaemb,'_ant',1);
 						var antoleoterminaembdol = categoriaproyectos(pant,oleoterminaemb,'_ant',2);
 						var antoleoterminaembDeqv = filtroequivalente(antoleoterminaembbsf,antoleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var antalmacenamientobsf = categoriaproyectos(pant,almacenamiento,'_ant',1);
 						var antalmacenamientodol = categoriaproyectos(pant,almacenamiento,'_ant',2);
 						var antalmacenamientoDeqv = filtroequivalente(antalmacenamientobsf,antalmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var antdesarrollourbabsf = categoriaproyectos(pant,desarrollourba,'_ant',1);
 						var antdesarrollourbadol = categoriaproyectos(pant,desarrollourba,'_ant',2);
 						var antdesarrollourbaDeqv = filtroequivalente(antdesarrollourbabsf,antdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var antproteccionintegbsf = categoriaproyectos(pant,proteccioninteg,'_ant',1);
 						var antproteccionintegdol = categoriaproyectos(pant,proteccioninteg,'_ant',2);
 						var antproteccionintegDeqv = filtroequivalente(antproteccionintegbsf,antproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var antpcpbsf = categoriaproyectos(pant,pcp,'_ant',1);
 						var antpcpdol = categoriaproyectos(pant,pcp,'_ant',2);
 						var antpcpDeqv = filtroequivalente(antpcpbsf,antpcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var anttelecomunicacionesbsf = categoriaproyectos(pant,telecomunicaciones,'_ant',1);
 						var anttelecomunicacionesdol = categoriaproyectos(pant,telecomunicaciones,'_ant',2);
 						var anttelecomunicacionesDeqv = filtroequivalente(anttelecomunicacionesbsf,anttelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var antautomatizacionindbsf = categoriaproyectos(pant,automatizacionind,'_ant',1);
 						var antautomatizacioninddol = categoriaproyectos(pant,automatizacionind,'_ant',2);
 						var antautomatizacionindDeqv = filtroequivalente(antautomatizacionindbsf,antautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var antcomputaysistebsf = categoriaproyectos(pant,computaysiste,'_ant',1);
 						var antcomputaysistedol = categoriaproyectos(pant,computaysiste,'_ant',2);
 						var antcomputaysisteDeqv = filtroequivalente(antcomputaysistebsf,antcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var antedifinstindustbsf = categoriaproyectos(pant,edifinstindust,'_ant',1);
 						var antedifinstindustdol = categoriaproyectos(pant,edifinstindust,'_ant',2);
 						var antedifinstindustDeqv = filtroequivalente(antedifinstindustbsf,antedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var antequiposbsf = categoriaproyectos(pant,equipos,'_ant',1);
 						var antequiposdol = categoriaproyectos(pant,equipos,'_ant',2);
 						var antequiposDeqv = filtroequivalente(antequiposbsf,antequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var antotrasinvbsf = categoriaproyectos(pant,otrasinv,'_ant',1);
 						var antotrasinvdol = categoriaproyectos(pant,otrasinv,'_ant',2);
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
 						 		
 						 	if( laborybbdivocDeqvr[i] != 0 || mdivocDeqvr[i] != 0 || scdivocDeqvr[i] != 0 || odivocDeqvr[i]!= 0  ){
 						 		//alert(aux);
 						 		aux++;	
 						 	}

 						 }// fin del for comprobar cual es la ejecución del real de los meses


 						 /// BLOQUE VISUAL DE LA TABLA
 						 	var informacion = motrarcabecera('red-header','leter',v3,meses[aux],'Parámetros Operacionales y Financieros');
 						 	informacion += descripciones('','Presupuesto de Inversiones',aux,ptotalcateDeqv,ptotalcatebsf,ptotalcatedol,ptotalcateDeqv,rtotalcatebsf,rtotalcatedol,rtotalcateDeqv,mvtotalcatebsf,mvtotalcatedol,mvtotalcateDeqv,anttotalcatebsf,anttotalcatedol,anttotalcateDeqv );
 						 	informacion += descripciones('','Presupuesto de Operaciones',aux,totaldivocDeqv,totaldivocbsf,totaldivocdol,totaldivocDeqv,totaldivocbsfr,totaldivocdolr,totaldivocDeqvr,totaldivocbsfmv,totaldivocdolmv,totaldivocDeqvmv,totaldivocbsfant,totaldivocdolant,totaldivocbsfant);
	 						
 						 	informacion += '<tr>';
	 						for (var i=0; i < 18 ; i++){
	 						informacion += '<td>	</td>';
	 						}
	 						informacion += '</tr>';
 						 	informacion += motrarcabecera('red-header','leter',v3,meses[aux],'ELEMENTO DE COSTO');
 						 	informacion += descripciones('','Labor y Beneficios',aux,laborybbdivocDeqv,laborybbdivocbsf,laborybbdivocdol,laborybbdivocDeqv,laborybbdivocbsfr,laborybbdivocdolr,laborybbdivocDeqvr,laborybbdivocbsfmv,laborybbdivocdolmv,laborybbdivocDeqvmv,laborybbdivocbsfant,laborybbdivocdolant,laborybbdivocDeqvant );
	 						informacion += descripciones('','Materiales',aux,mdivocDeqv,mdivocbsf,mdivocdol,mdivocDeqv,mdivocbsfr,mdivocdolr,mdivocDeqvr,mdivocbsfmv,mdivocdolmv,mdivocDeqvmv,mdivocbsfant,mdivocdolant,mdivocDeqvant );
	 						informacion += descripciones('','Servicios y Contratos',aux,scdivocDeqv,scdivocbsf,scdivocdol,scdivocDeqv,scdivocbsfr,scdivocdolr,scdivocDeqvr,scdivocbsfmv,scdivocdolmv,scdivocDeqvmv,scdivocbsfmv,scdivocdolant,scdivocDeqvant );
	 						informacion += descripciones('','Otros Costos y Gastos',aux,odivocDeqv,odivocbsf,odivocdol,odivocDeqv,odivocbsfr,odivocdolr,odivocDeqvr,odivocbsfmv,odivocdolmv,odivocDeqvmv,odivocbsfant,odivocdolant,odivocDeqvant );
	 						informacion += descripciones('red-header','Total',aux,totaldivocDeqv,totaldivocbsf,totaldivocdol,totaldivocDeqv,totaldivocbsfr,totaldivocdolr,totaldivocDeqvr,totaldivocbsfmv,totaldivocdolmv,totaldivocDeqvmv,totaldivocbsfant,totaldivocdolant,totaldivocbsfant);
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