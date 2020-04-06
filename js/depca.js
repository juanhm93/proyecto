var x;
x = $(document);
x.ready(depcaresumen);

function depcaresumen(){

$("#anhops").change(function() {

		var anho = $("#anhops option:selected");
		var v3 = anho.val();
		var v1 = 2;

		if(anho.val() != ''){
			
			var postForm ={'v3' : v3,'v1': v1};

						
							$.post("cdepca/habplan",postForm,function(habi){
									var habp = $.parseJSON(habi);
								$.post("cdepca/habreal",postForm,function(hareal){
										var hreal = $.parseJSON(hareal);
									$.post("cdepca/habmv",postForm,function(habmv){
											var hmv = $.parseJSON(habmv);
 										$.post("cdepca/habant",postForm,function(habant){	 
 												var hant = $.parseJSON(habant);
 											$.post("cdepca/proplan",postForm,function(pplan){
 													alert(pplan);
 													var planp = $.parseJSON(pplan);
 												$.post("cdepca/proreal",postForm,function(preal){
 													alert(preal);
 														var realp = $.parseJSON(preal);
 													$.post("cdepca/promv",postForm,function(pmv){
			 												var mvp = $.parseJSON(pmv);
 														$.post("cdepca/proant",postForm,function(pant){
 																var antp = $.parseJSON(pant);
 															$.post("cdepca/mixplan",postForm,function(mixp){
				 													var pmix = $.parseJSON(mixp);
				 												$.post("cdepca/mixreal",postForm,function(mixr){
				 														var rmix = $.parseJSON(mixr);
				 													$.post("cdepca/mixmv",postForm,function(mixmv){
							 												var mvmix = $.parseJSON(mixmv);
				 														$.post("cdepca/mixant",postForm,function(mixant){
				 																var antmix = $.parseJSON(mixant);
				 															$.post("cdepca/dirplan",postForm,function(dplan){
																						var drplan = $.parseJSON(dplan);
																				$.post("cdepca/direal",postForm,function(dreal){
																						var drreal = $.parseJSON(dreal);
																					$.post("cdepca/dirmv",postForm,function(dmv){
																							var drmv = $.parseJSON(dmv);
																						$.post("cdepca/dirante",postForm,function(dant){
																								var drant = $.parseJSON(dant);

																							
																							alert('todo bien llegamos aqui');


																							var informacion = titulo('Tabla-Elemento-Encabezado','TOTAL DIRECCION EJECUTIVA COSTA AFUERA');
																							informacion += inversiones(planp,realp,mvp,antp,v3);
																							//informacion += separador();
																							informacion += titulo('Tabla-Elemento-Encabezado','TOTAL DIRECCION EJECUTIVA COSTA AFUERA');
																							informacion += operaciones(habp,drplan,pmix,hreal,drreal,rmix,hmv,drmv,mvmix,hant,drant,antmix,v3);

																							
																						 			
																							$('#catelemet').attr('disabled',false);
																							$('#decatabla').html('');
																							$('#decatabla').append(informacion);

																						});
																					});
																				});
																			});
				 														});
				 													});
				 												});
				 											});
 														});
 													});
 												});
 											});
 										});	
									}); // fin post real
								}); // fin post real				 
							});// fin post plan
 		
								$('#catelemet').change(function() {

 				var catelemet = $("#catelemet option:selected");
 				alert(catelemet.val());
 				var anho = $("#anhops option:selected");
				var v3 = anho.val();
				var v1 = 2;
 				if(catelemet.val() == '1'){
 					var postForm ={'v3' : v3,'v1': v1};

 							$.post("cdepca/habplan",postForm,function(habi){
									var habp = $.parseJSON(habi);
								$.post("cdepca/habreal",postForm,function(hareal){
										var hreal = $.parseJSON(hareal);
									$.post("cdepca/habmv",postForm,function(habmv){
											var hmv = $.parseJSON(habmv);
 										$.post("cdepca/habant",postForm,function(habant){	 
 												var hant = $.parseJSON(habant);
 												$.post("cdepca/mixplan",postForm,function(mixp){
	 													var pmix = $.parseJSON(mixp);
	 												$.post("cdepca/mixreal",postForm,function(mixr){
	 														var rmix = $.parseJSON(mixr);
	 													$.post("cdepca/mixmv",postForm,function(mixmv){
				 												var mvmix = $.parseJSON(mixmv);
	 														$.post("cdepca/mixant",postForm,function(mixant){
	 																var antmix = $.parseJSON(mixant);
	 															$.post("cdepca/dirplan",postForm,function(dplan){
																			var drplan = $.parseJSON(dplan);
																	$.post("cdepca/direal",postForm,function(dreal){
																			var drreal = $.parseJSON(dreal);
																		$.post("cdepca/dirmv",postForm,function(dmv){
																				var drmv = $.parseJSON(dmv);
																			$.post("cdepca/dirante",postForm,function(dant){
																					var drant = $.parseJSON(dant);

																							var informacion = titulo('Tabla-Elemento-Encabezado','TOTAL DIRECCION EJECUTIVA COSTA AFUERA');
																							informacion += operacioneselementocosto(habp,drplan,pmix,hreal,drreal,rmix,hmv,drmv,mvmix,hant,drant,antmix,v3);

																							$('#decatabla').html('');
																							$('#decatabla').append(informacion);	



								 										});
								 									});	
																});
															});							
				 										});
				 									});	
												});
											});										
 										});
 									});	
								});
							});	
 				}
 				if(catelemet.val() == '2'){


 				}


 		});

		}else{

			alert('Debe seleccionar un año ');
		}


	});


}



function divisionoriental(habp,com,opc){
	//////////////////////////////////PLAN,REAL,MEJOR VISION, ANTEPROYECTO HABILITADORAS ////////////////////////////////////////////////			
						

						// ESFUERZO PROPIO PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES 					
						var laborepbsf = filtrarcostohab(habp,filtrolabor,5,com,1);
						var bbepbsf = filtrarcostohab(habp,filtrobb,5,com,1);
						var mepbsf = filtrarcostohab(habp,filtrom,5,com,1);
						var scepbsf = filtrarcostohab(habp,filtrosc,5,com,1);
						var oepbsf = filtrarcostohab(habp,filtroo,5,com,1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 
 				     	// ESFUERZOS PROPIOS PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var laborepdol = filtrarcostohab(habp,filtrolabor,5,com,2);
 						 var bbepdol = filtrarcostohab(habp,filtrobb,5,com,2);
 						 var mepdol = filtrarcostohab(habp,filtrom,5,com,2);
 						 var scepdol = filtrarcostohab(habp,filtrosc,5,com,2);
 						 var oepdol = filtrarcostohab(habp,filtroo,5,com,2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);

 						 // DTTO ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES
					 	 var labordttobsf = filtrarcostohab(habp,filtrolabor,4,com,1);
 						 var bbdttobsf = filtrarcostohab(habp,filtrobb,4,com,1);
 						 var mdttobsf = filtrarcostohab(habp,filtrom,4,com,1);
 						 var scdttobsf = filtrarcostohab(habp,filtrosc,4,com,1);
 						 var odttobsf = filtrarcostohab(habp,filtroo,4,com,1);
 						 var totaldttobsf = filtrartotal(labordttobsf,bbdttobsf,mdttobsf,scdttobsf,odttobsf);

 						 // DTTO ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var labordttodol = filtrarcostohab(habp,filtrolabor,4,com,2);
 						 var bbdttodol = filtrarcostohab(habp,filtrobb,4,com,2);
 						 var mdttodol = filtrarcostohab(habp,filtrom,4,com,2);
 						 var scdttodol = filtrarcostohab(habp,filtrosc,4,com,2);
 						 var odttodol = filtrarcostohab(habp,filtroo,4,com,2);
 						 var totaldttodol = filtrartotal(labordttodol,bbdttodol,mdttodol,scdttodol,odttodol);


 						  /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES
 						 var labordivobsf = filtrardivo(labordttobsf,laborepbsf);
 						 var bbdivobsf = filtrardivo(bbdttobsf,bbepbsf);
 						 var mdivobsf = filtrardivo(mdttobsf,mepbsf);
 						 var scdivobsf = filtrardivo(scdttobsf,scepbsf);
 						 var odivobsf = filtrardivo(odttobsf,oepbsf);
 						 var totaldivobsf = filtrartotal(labordivobsf,bbdivobsf,mdivobsf,scdivobsf,odivobsf);

 						 /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var labordivodol = filtrardivo(labordttodol,laborepdol);
 						 var bbdivodol = filtrardivo(bbdttodol,bbepdol);
 						 var mdivodol = filtrardivo(mdttodol,mepdol);
 						 var scdivodol = filtrardivo(scdttodol,scepdol);
 						 var odivodol = filtrardivo(odttodol,oepdol);
 						 var totaldivodol = filtrartotal(labordivodol,bbdivodol,mdivodol,scdivodol,odivodol);

 						  /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(labordivobsf,labordivodol);
 						 var bbdivoDeqv = filtroequivalente(bbdivobsf,bbdivodol);
 						 var mdivoDeqv = filtroequivalente(mdivobsf,mdivodol);
 						 var scdivoDeqv = filtroequivalente(scdivobsf,scdivodol);
 						 var odivoDeqv = filtroequivalente(odivobsf,odivodol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

 					 
					 	if(opc == 1 ){

					 		return totaldivobsf; 
					 	}
					 	if(opc == 2){

					 		return totaldivodol; 
					 	}
					 	if(opc == 3){

					 		return totaldivoDeqv;

					 	}

}

function divisionocc(habp,com,opc){

	//////////////////////////////////PLAN,REAL,MEJOR VISION, ANTEPROYECTO HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES 					
						var laborepbsf = filtrarcostohab(habp,filtrolabor,3,com,1);
						var bbepbsf = filtrarcostohab(habp,filtrobb,3,com,1);
						var mepbsf = filtrarcostohab(habp,filtrom,3,com,1);
						var scepbsf = filtrarcostohab(habp,filtrosc,3,com,1);
						var oepbsf = filtrarcostohab(habp,filtroo,3,com,1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 						
 					
 				     	// ESFUERZOS PROPIOS PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var laborepdol = filtrarcostohab(habp,filtrolabor,3,com,2);
 						 var bbepdol = filtrarcostohab(habp,filtrobb,3,com,2);
 						 var mepdol = filtrarcostohab(habp,filtrom,3,com,2);
 						 var scepdol = filtrarcostohab(habp,filtrosc,3,com,2);
 						 var oepdol = filtrarcostohab(habp,filtroo,3,com,2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);
 						 
 						  /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(laborepbsf,laborepdol);
 						 var bbdivoDeqv = filtroequivalente(bbepbsf,bbepdol);
 						 var mdivoDeqv = filtroequivalente(mepbsf,mepdol);
 						 var scdivoDeqv = filtroequivalente(scepbsf,scepdol);
 						 var odivoDeqv = filtroequivalente(oepbsf,oepdol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

					 	if(opc == 1 ){

					 		return totalepbsf; 
					 	}
					 	if(opc == 2){

					 		return totalepdol; 
					 	}
					 	if(opc == 3){

					 		return totaldivoDeqv;

					 	}

}


function direccionejep(habp,com,opc){

		

		//////////////////////////////////PLAN,REAL,MEJOR VISION, ANTEPROYECTO HABILITADORAS ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES 					
						var laborepbsf = filtrarcostodirep(habp,filtrolabor,com,1);
						var bbepbsf = filtrarcostodirep(habp,filtrobb,com,1);
						var mepbsf = filtrarcostodirep(habp,filtrom,com,1);
						var scepbsf = filtrarcostodirep(habp,filtrosc,com,1);
						var oepbsf = filtrarcostodirep(habp,filtroo,com,1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 						
 				     	// ESFUERZOS PROPIOS PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var laborepdol = filtrarcostodirep(habp,filtrolabor,com,2);
 						 var bbepdol = filtrarcostodirep(habp,filtrobb,com,2);
 						 var mepdol = filtrarcostodirep(habp,filtrom,com,2);
 						 var scepdol = filtrarcostodirep(habp,filtrosc,com,2);
 						 var oepdol = filtrarcostodirep(habp,filtroo,com,2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);
 						 
 						  /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(laborepbsf,laborepdol);
 						 var bbdivoDeqv = filtroequivalente(bbepbsf,bbepdol);
 						 var mdivoDeqv = filtroequivalente(mepbsf,mepdol);
 						 var scdivoDeqv = filtroequivalente(scepbsf,scepdol);
 						 var odivoDeqv = filtroequivalente(oepbsf,oepdol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

					 	if(opc == 1 ){

					 		return totalepbsf; 
					 	}
					 	if(opc == 2){

					 		return totalepdol; 
					 	}
					 	if(opc == 3){

					 		return totaldivoDeqv;

					 	}

}

function mixtas(habp,valor,com,opc){

					// ESFUERZO PROPIO PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN BOLIVARES 					
						var laborepbsf = filtrarcostomixta(habp,filtrolabor,valor,com,1);
						var bbepbsf = filtrarcostomixta(habp,filtrobb,valor,com,1);
						var mepbsf = filtrarcostomixta(habp,filtrom,valor,com,1);
						var scepbsf = filtrarcostomixta(habp,filtrosc,valor,com,1);
						var oepbsf = filtrarcostomixta(habp,filtroo,valor,com,1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 						
 					
 				     	// ESFUERZOS PROPIOS PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES
 						 var laborepdol = filtrarcostomixta(habp,filtrolabor,valor,com,2);
 						 var bbepdol = filtrarcostomixta(habp,filtrobb,valor,com,2);
 						 var mepdol = filtrarcostomixta(habp,filtrom,valor,com,2);
 						 var scepdol = filtrarcostomixta(habp,filtrosc,valor,com,2);
 						 var oepdol = filtrarcostomixta(habp,filtroo,valor,com,2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);
 						 
 						  /// DIVISION ORIENTAL PLAN,REAL,MEJOR VISION, ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivoDeqv = filtroequivalente(laborepbsf,laborepdol);
 						 var bbdivoDeqv = filtroequivalente(bbepbsf,bbepdol);
 						 var mdivoDeqv = filtroequivalente(mepbsf,mepdol);
 						 var scdivoDeqv = filtroequivalente(scepbsf,scepdol);
 						 var odivoDeqv = filtroequivalente(oepbsf,oepdol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

					 	if(opc == 1 ){

					 		return totalepbsf; 
					 	}
					 	if(opc == 2){

					 		return totalepdol; 
					 	}
					 	if(opc == 3){

					 		return totaldivoDeqv;

					 	}


}

///// lo que retorna de aca se muestra es ESFUERZO PROPIO
function direccionejecutiva(totaldireccion,totaldivisionori,totaldivisionocc){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	
				enerotl =  totaldireccion[0] + totaldivisionori[0] + totaldivisionocc[0];
				febrerotl =  totaldireccion[1] + totaldivisionori[1] + totaldivisionocc[1];
				marzotl =  totaldireccion[2] + totaldivisionori[2] + totaldivisionocc[2];
				abriltl =  totaldireccion[3] + totaldivisionori[3] + totaldivisionocc[3];
				mayotl =  totaldireccion[4] + totaldivisionori[4] + totaldivisionocc[4];
				juniotl =  totaldireccion[5] + totaldivisionori[5] + totaldivisionocc[5];
				juliotl  =  totaldireccion[6] + totaldivisionori[6] + totaldivisionocc[6];
				agostotl =  totaldireccion[7] + totaldivisionori[7] + totaldivisionocc[7];
				septiembretl =  totaldireccion[8] + totaldivisionori[8] + totaldivisionocc[8];
				octubretl  =   totaldireccion[9] + totaldivisionori[9] + totaldivisionocc[9];
				noviembretl =  totaldireccion[10] + totaldivisionori[10] + totaldivisionocc[10];
				diciembretl  =   totaldireccion[11] + totaldivisionori[11] + totaldivisionocc[11];

		var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;

}


//////// inversiones proyectos de inversion
function proinversionep(proy,com,dom,moneda,div){


	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 	console.log(proy.length);

	for (var i=0;  i < proy.length ; i++) {


		if(proy[i]['iddom']== dom && proy[i]['iddivision']== div && proy[i]['idmoneda']==moneda){

			 enerotl += parseFloat(proy[i]['enero'+com+'']);
		 febrerotl += parseFloat(proy[i]['febrero'+com+'']);  
		 marzotl += parseFloat(proy[i]['marzo'+com+'']);  
		 abriltl += parseFloat(proy[i]['abril'+com+'']);  
		 mayotl += parseFloat(proy[i]['mayo'+com+'']);  
		 juniotl += parseFloat(proy[i]['junio'+com+'']);  
		 juliotl  += parseFloat(proy[i]['julio'+com+'']); 
		 agostotl += parseFloat(proy[i]['agosto'+com+'']);  
		 septiembretl += parseFloat(proy[i]['septiembre'+com+'']);  
		 octubretl  += parseFloat(proy[i]['octubre'+com+'']);  
		 noviembretl += parseFloat(proy[i]['noviembre'+com+'']);  
		 diciembretl  += parseFloat(proy[i]['diciembre'+com+'']);  		
		}//fin if 
	
	}//fin for 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;


}

function proinversionem(proy,com,dom,moneda,div){


	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 	console.log(proy.length);

	for (var i=0;  i < proy.length ; i++) {


		if(proy[i]['iddom']== dom && proy[i]['idemfk']== div && proy[i]['idmoneda']==moneda){

			 enerotl += parseFloat(proy[i]['enero'+com+'']);
		 febrerotl += parseFloat(proy[i]['febrero'+com+'']);  
		 marzotl += parseFloat(proy[i]['marzo'+com+'']);  
		 abriltl += parseFloat(proy[i]['abril'+com+'']);  
		 mayotl += parseFloat(proy[i]['mayo'+com+'']);  
		 juniotl += parseFloat(proy[i]['junio'+com+'']);  
		 juliotl  += parseFloat(proy[i]['julio'+com+'']); 
		 agostotl += parseFloat(proy[i]['agosto'+com+'']);  
		 septiembretl += parseFloat(proy[i]['septiembre'+com+'']);  
		 octubretl  += parseFloat(proy[i]['octubre'+com+'']);  
		 noviembretl += parseFloat(proy[i]['noviembre'+com+'']);  
		 diciembretl  += parseFloat(proy[i]['diciembre'+com+'']);  		
		}//fin if 
	
	}//fin for 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;


}


function operaciones(habp,drplan,pmix,hreal,drreal,rmix,hmv,drmv,mvmix,hant,drant,antmix,anho){

		//// DIVISION ORIENTAL PLAN	OPERACIONES
		var diviorbsf =	divisionoriental(habp,'_p',1);
		var diviordol =	divisionoriental(habp,'_p',2);
		var diviordeqv=	divisionoriental(habp,'_p',3);
																				
		/// DIVISION OCCIDENTAL PLAN OPERACIONES
		var divoccbsf =	divisionocc(habp,'_p',1);
		var divoccdol =	divisionocc(habp,'_p',2);
		var divoccdeqv= divisionocc(habp,'_p',3);

		/// DIRECCION EJECUTIVA PLAN OPERACIONES			
		var dirbsf = direccionejep(drplan,'_p',1);
		var dirdol = direccionejep(drplan,'_p',2);
		var direqv = direccionejep(drplan,'_p',3);

		/// EM PETROSUCRE PLAN OPERACIONES
		var psbsf = mixtas(pmix,1,'_p',1);
		var psdol = mixtas(pmix,1,'_p',2);
		var pseqv = mixtas(pmix,1,'_p',3);

		alert('petrosucre'+psbsf);		
		/// EM PETROWARAO  PLAN OPERACIONES 
		var pwbsf = mixtas(pmix,2,'_p',1);
		var pwdol = mixtas(pmix,2,'_p',2);
		var pweqv = mixtas(pmix,2,'_p',3);
		alert('petrowarao'+pwbsf);	
		/// EM PETROLERA PARIA PLAN OPERACIONES
		var ppbsf = mixtas(pmix,3,'_p',1);
		var ppdol = mixtas(pmix,3,'_p',2);
		var ppeqv = mixtas(pmix,3,'_p',3);

		/// EM CARDON IV PLAN OPERACIONES
		var carbsf = mixtas(pmix,4,'_p',1);
		var cardol = mixtas(pmix,4,'_p',2);
		var careqv = mixtas(pmix,4,'_p',3);

		/// EM PETROCUMAREBO PLAN OPERACIONES
		var pcbsf = mixtas(pmix,5,'_p',1);
		var pcdol = mixtas(pmix,5,'_p',2);
		var pceqv = mixtas(pmix,5,'_p',3);



		//// DIVISION ORIENTAL REAL	OPERACIONES
		var diviorbsfr =	divisionoriental(hreal,'_r',1);
		var diviordolr =	divisionoriental(hreal,'_r',2);
		var diviordeqvr=	divisionoriental(hreal,'_r',3);
																				
		/// DIVISION OCCIDENTAL REAL OPERACIONES
		var divoccbsfr =	divisionocc(hreal,'_r',1);
		var divoccdolr =	divisionocc(hreal,'_r',2);
		var divoccdeqvr= divisionocc(hreal,'_r',3);

		/// DIRECCION EJECUTIVA REAL OPERACIONES			
		var dirbsfr = direccionejep(drreal,'_r',1);
		var dirdolr = direccionejep(drreal,'_r',2);
		var direqvr = direccionejep(drreal,'_r',3);

		/// EM PETROSUCRE REAL OPERACIONES
		var psbsfr = mixtas(rmix,1,'_r',1);
		var psdolr = mixtas(rmix,1,'_r',2);
		var pseqvr = mixtas(rmix,1,'_r',3);
						
		/// EM PETROWARAO  REAL OPERACIONES 
		var pwbsfr = mixtas(rmix,2,'_r',1);
		var pwdolr = mixtas(rmix,2,'_r',2);
		var pweqvr = mixtas(rmix,2,'_r',3);

		/// EM PETROLERA PARIA REAL OPERACIONES
		var ppbsfr = mixtas(rmix,3,'_r',1);
		var ppdolr = mixtas(rmix,3,'_r',2);
		var ppeqvr = mixtas(rmix,3,'_r',3);

		/// EM CARDON IV REAL OPERACIONES
		var carbsfr = mixtas(rmix,4,'_r',1);
		var cardolr = mixtas(rmix,4,'_r',2);
		var careqvr = mixtas(rmix,4,'_r',3);

		/// EM PETROCUMAREBO REAL OPERACIONES
		var pcbsfr = mixtas(rmix,5,'_r',1);
		var pcdolr = mixtas(rmix,5,'_r',2);
		var pceqvr = mixtas(rmix,5,'_r',3);


		//// DIVISION ORIENTAL MEMJOR VISION	OPERACIONES
		var diviorbsfmv =	divisionoriental(hmv,'_mv',1);
		var diviordolmv =	divisionoriental(hmv,'_mv',2);
		var diviordeqvmv=	divisionoriental(hmv,'_mv',3);
																				
		/// DIVISION OCCIDENTAL MEMJOR VISION OPERACIONES
		var divoccbsfmv =	divisionocc(hmv,'_mv',1);
		var divoccdolmv =	divisionocc(hmv,'_mv',2);
		var divoccdeqvmv= divisionocc(hmv,'_mv',3);

		/// DIRECCION EJECUTIVA MEMJOR VISION OPERACIONES			
		var dirbsfmv = direccionejep(drmv,'_mv',1);
		var dirdolmv = direccionejep(drmv,'_mv',2);
		var direqvmv = direccionejep(drmv,'_mv',3);

			/// EM PETROSUCRE MEJOR VISION OPERACIONES
		var psbsfmv = mixtas(mvmix,1,'_mv',1);
		var psdolmv = mixtas(mvmix,1,'_mv',2);
		var pseqvmv = mixtas(mvmix,1,'_mv',3);
						
		/// EM PETROWARAO  MEJOR VISION OPERACIONES 
		var pwbsfmv = mixtas(mvmix,2,'_mv',1);
		var pwdolmv = mixtas(mvmix,2,'_mv',2);
		var pweqvmv = mixtas(mvmix,2,'_mv',3);

		/// EM PETROLERA PARIA MEJOR VISION OPERACIONES
		var ppbsfmv = mixtas(mvmix,3,'_mv',1);
		var ppdolmv = mixtas(mvmix,3,'_mv',2);
		var ppeqvmv = mixtas(mvmix,3,'_mv',3);

		/// EM CARDON IV MEJOR VISION OPERACIONES
		var carbsfmv = mixtas(mvmix,4,'_mv',1);
		var cardolmv = mixtas(mvmix,4,'_mv',2);
		var careqvmv = mixtas(mvmix,4,'_mv',3);

		/// EM PETROCUMAREBO MEJOR VISION OPERACIONES
		var pcbsfmv = mixtas(mvmix,5,'_mv',1);
		var pcdolmv = mixtas(mvmix,5,'_mv',2);
		var pceqvmv = mixtas(mvmix,5,'_mv',3);

		//// DIVISION ORIENTAL ANTEPROYECTO	OPERACIONES
		var diviorbsfant =	divisionoriental(hant,'_ant',1);
		var diviordolant =	divisionoriental(hant,'_ant',2);
		var diviordeqvant=	divisionoriental(hant,'_ant',3);
																				
		/// DIVISION OCCIDENTAL ANTEPROYECTO OPERACIONES
		var divoccbsfant =	divisionocc(hant,'_ant',1);
		var divoccdolant =	divisionocc(hant,'_ant',2);
		var divoccdeqvant= divisionocc(hant,'_ant',3);

		/// DIRECCION EJECUTIVA ANTEPROYECTO OPERACIONES			
		var dirbsfant = direccionejep(drant,'_ant',1);
		var dirdolant = direccionejep(drant,'_ant',2);
		var direqvant = direccionejep(drant,'_ant',3);

			/// EM PETROSUCRE MEJOR VISION OPERACIONES
		var psbsfant = mixtas(antmix,1,'_ant',1);
		var psdolant = mixtas(antmix,1,'_ant',2);
		var pseqvant = mixtas(antmix,1,'_ant',3);
						
		/// EM PETROWARAO  MEJOR VISION OPERACIONES 
		var pwbsfant = mixtas(antmix,2,'_ant',1);
		var pwdolant = mixtas(antmix,2,'_ant',2);
		var pweqvant = mixtas(antmix,2,'_ant',3);

		/// EM PETROLERA PARIA MEJOR VISION OPERACIONES
		var ppbsfant = mixtas(antmix,3,'_ant',1);
		var ppdolant = mixtas(antmix,3,'_ant',2);
		var ppeqvant = mixtas(antmix,3,'_ant',3);

		/// EM CARDON IV MEJOR VISION OPERACIONES
		var carbsfant = mixtas(antmix,4,'_ant',1);
		var cardolant = mixtas(antmix,4,'_ant',2);
		var careqvant = mixtas(antmix,4,'_ant',3);

		/// EM PETROCUMAREBO MEJOR VISION OPERACIONES
		var pcbsfant = mixtas(antmix,5,'_ant',1);
		var pcdolant = mixtas(antmix,5,'_ant',2);
		var pceqvant = mixtas(antmix,5,'_ant',3);

		///// ESFUERZO PROPIO EN BSF
		var epoperacionesbs = direccionejecutiva(diviorbsf,divoccbsf,dirbsf);
		var epoperacionesbsr = direccionejecutiva(diviorbsfr,divoccbsfr,dirbsfr);
		var epoperacionesbsmv = direccionejecutiva(diviorbsfmv,divoccbsfmv,dirbsfmv);
		var epoperacionesbsant = direccionejecutiva(diviorbsfant,divoccbsfant,dirbsfant);
		
		/// ESFUERZO PROPIO EN DOLARES

		var epoperacionesd = direccionejecutiva(diviordol,divoccdol,dirdol);
		var epoperacionesdr = direccionejecutiva(diviordolr,divoccdolr,dirdolr);
		var epoperacionesdmv = direccionejecutiva(diviordolmv,divoccdolmv,dirdolmv);
		var epoperacionesdant = direccionejecutiva(diviordolant,divoccdolant,dirdolant);

		/// ESFUERZO PROPIO EN EQUIVALENTE

		var epoperacioneseqv = direccionejecutiva(diviordeqv,divoccdeqv,direqv);
		var epoperacioneseqvr = direccionejecutiva(diviordeqvr,divoccdeqvr,direqvr);
		var epoperacioneseqvmv = direccionejecutiva(diviordeqvmv,divoccdeqvmv,direqvmv);
		var epoperacioneseqvant = direccionejecutiva(diviordeqvant,divoccdeqvant,direqvant);

		/// EMPRESAS MIXTAS BSF
		var embs = filtrartotal(psbsf,pwbsf,ppbsf,carbsf,pcbsf);
		var embsr = filtrartotal(psbsfr,pwbsfr,ppbsfr,carbsfr,pcbsfr);
		var embsmv = filtrartotal(psbsfmv,pwbsfmv,ppbsfmv,carbsfmv,pcbsfmv);
		var embsant = filtrartotal(psbsfant,pwbsfant,ppbsfant,carbsfant,pcbsfant);

		/// EMPRESAS MIXTAS DOLARES
		var emd = filtrartotal(psdol,pwdol,ppdol,cardol,pcdol);
		var emdr = filtrartotal(psdolr,pwdolr,ppdolr,cardolr,pcdolr);
		var emdmv = filtrartotal(psdolmv,pwdolmv,ppdolmv,cardolmv,pcdolmv);
		var emdant = filtrartotal(psdolant,pwdolant,ppdolant,cardolant,pcdolant);

		/// EMPRESAS MIXTAS DOLARES QUIVALENTES
		var emeqv = filtroequivalente(embs,emd);
		var emeqvr = filtroequivalente(embsr,emdr);
		var emeqvmv = filtroequivalente(embsmv,emdmv);
		var emeqvant = filtroequivalente(embsant,emdant);


		///////////// DIVISION ORIENTAL EMPRESAS MIXTAS 

		/// EMPRESAS MIXTAS BSF
		var embsdivo = direccionejecutiva(psbsf,pwbsf,ppbsf);
		var embsrdivo = direccionejecutiva(psbsfr,pwbsfr,ppbsfr);
		var embsmvdivo = direccionejecutiva(psbsfmv,pwbsfmv,ppbsfmv);
		var embsantdivo = direccionejecutiva(psbsfant,pwbsfant,ppbsfant);

		/// EMPRESAS MIXTAS DOLARES
		var emddivo = direccionejecutiva(psdol,pwdol,ppdol);
		var emdrdivo = direccionejecutiva(psdolr,pwdolr,ppdolr);
		var emdmvdivo = direccionejecutiva(psdolmv,pwdolmv,ppdolmv);
		var emdantdivo = direccionejecutiva(psdolant,pwdolant,ppdolant);

		/// EMPRESAS MIXTAS DOLARES QUIVALENTES
		var emeqvdivo = filtroequivalente(embsdivo,emddivo);
		var emeqvrdivo = filtroequivalente(embsrdivo,emdrdivo);
		var emeqvmvdivo = filtroequivalente(embsmvdivo,emdmvdivo);
		var emeqvantdivo = filtroequivalente(embsantdivo,emdantdivo);

		//////////// DIVISION OCCIDENTAL EMPRESAS MIXTAS

		/// EMPRESAS MIXTAS BSF
		var embsdivoc = filtrardivo(carbsf,pcbsf);
		var embsrdivoc = filtrardivo(carbsfr,pcbsfr);
		var embsmvdivoc = filtrardivo(carbsfmv,pcbsfmv);
		var embsantdivoc = filtrardivo(carbsfant,pcbsfant);

		/// EMPRESAS MIXTAS DOLARES
		var emddivoc = filtrardivo(cardol,pcdol);
		var emdrdivoc = filtrardivo(cardolr,pcdolr);
		var emdmvdivoc = filtrardivo(cardolmv,pcdolmv);
		var emdantdivoc = filtrardivo(cardolant,pcdolant);

		/// EMPRESAS MIXTAS DOLARES QUIVALENTES
		var emeqvdivoc = filtroequivalente(embsdivoc,emddivoc);
		var emeqvrdivoc = filtroequivalente(embsrdivoc,emdrdivoc);
		var emeqvmvdivoc = filtroequivalente(embsmvdivoc,emdmvdivoc);
		var emeqvantdivoc = filtroequivalente(embsantdivoc,emdantdivoc);

		/// TOTAL BS 
		var totalbs = filtrardivo(epoperacionesbs,embs);
		var totalbsr = filtrardivo(epoperacionesbsr,embsr);
		var totalbsmv = filtrardivo(epoperacionesbsmv,embsmv);
		var totalbsant = filtrardivo(epoperacionesbsant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(epoperacionesd,emd);
		var totaldr = filtrardivo(epoperacionesdr,emdr);
		var totaldmv = filtrardivo(epoperacionesdmv,emdmv);
		var totaldant = filtrardivo(epoperacionesdant,emdant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

	  var aux = 0;
		 for (var i=0; i < 12; i++) {
		 		
 			if( diviordeqvr[i] != 0 || divoccdeqvr[i] != 0 || direqvr[i] != 0 || pseqvr[i]!= 0 ||  pweqvr[i]!=0 || ppeqvr[i]!=0 || careqvr[i]!=0 || pceqvr[i]!=0 ){
 			//alert(aux);
 			 		aux++;	
 		 	}

 		}
 		alert('mes que toca '+aux);

 		var	informacion = pptocab('Tabla-Elemento-Encabezado',anho,meses[aux],'OPERACIONES');

		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(BS) Puros',aux,'',totalbs,totalbsr,totalbsmv,totalbsant);
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',aux,'DEPCA',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',aux,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);
		 			
 		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',aux,'',epoperacionesbs,epoperacionesbsr,epoperacionesbsmv,epoperacionesbsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',aux,'ESFUERZO PROPIO ',epoperacionesd,epoperacionesdr,epoperacionesdmv,epoperacionesdant);
 		informacion += eplinea('Tabla-Elemento','MM(USD) Equiv',aux,' ',epoperacioneseqv,epoperacioneseqvr,epoperacioneseqvmv,epoperacioneseqvant);
 
 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',dirbsf,dirbsfr,dirbsfmv,dirbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Dirección Ejecutiva ',dirdol,dirdolr,dirdolmv,dirdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',direqv,direqvr,direqvmv,direqvant);
		
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',diviorbsf,diviorbsfr,diviorbsfmv,diviorbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,' Division Costa Afuera Oriental',diviordol,diviordolr,diviordolmv,diviordolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',diviordeqv,diviordeqvr,diviordeqvmv,diviordeqvant);
		
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',divoccbsf,divoccbsfr,divoccbsfmv,divoccbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Division Costa Afuera Occidental',divoccdol,divoccdolr,divoccdolmv,divoccdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',divoccdeqv,divoccdeqvr,divoccdeqvmv,divoccdeqvant);

		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',aux,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',aux,'EMPRESAS MIXTAS ',emd,emdr,emdmv,emdant);
 		informacion += eplinea('Tabla-Elemento','MM(BS) Equiv',aux,' ',emeqv,emeqvr,emeqvmv,emeqvant);

 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',embsdivo,embsrdivo,embsmvdivo,embsantdivo);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Empresas mixtas Oriente ',emddivo,emdrdivo,emdmvdivo,emdantdivo);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',emeqvdivo,emeqvrdivo,emeqvmvdivo,emeqvantdivo);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',embsdivoc,embsrdivoc,embsmvdivoc,embsantdivoc);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Empresas mixtas Occidente ',emddivoc,emdrdivoc,emdmvdivoc,emdantdivoc);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',emeqvdivoc,emeqvrdivoc,emeqvmvdivoc,emeqvantdivoc);
		

/*
 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',psbsf,psbsfr,psbsfmv,psbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'PetroSucre ',psdol,psdolr,psdolmv,psdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pseqv,pseqvr,pseqvmv,pseqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',pwbsf,pwbsfr,pwbsfmv,pwbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'PetroWarao ',pwdol,pwdolr,pwdolmv,pwdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pweqv,pweqvr,pweqvmv,pweqvant);
		

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',ppbsf,ppbsfr,ppbsfmv,ppbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Petrolera Paria',ppdol,ppdolr,ppdolmv,ppdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',ppeqv,ppeqvr,ppeqvmv,ppeqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',carbsf,carbsfr,carbsfmv,carbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Cardon IV',cardol,cardolr,cardolmv,cardolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',careqv,careqvr,careqvmv,careqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',pcbsf,pcbsfr,pcbsfmv,pcbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Petrocumarebo',pcdol,pcdolr,pcdolmv,pcdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pceqv,pceqvr,pceqvmv,pceqvant);
*/
	 		//informacion += contenidoyo('Tabla-Elemento','Tabla-Elemento-Encabezado','MM(BS)',' ',aux,epoperacionesbs,epoperacionesbsr,epoperacionesbsmv,epoperacionesbsant);

 		return informacion;

}


function inversiones(planp,realp,mvp,antp,anho){


		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoribs = proinversionep(planp,'_p',1,1,1);
		 var prodivoccbs = proinversionep(planp,'_p',1,1,2);
		 	
		 	
		 //// PROYECTOS MIXTAS PLAN BS
		 var propsbs =proinversionem(planp,'_p',2,1,1);
		 var propwbs =proinversionem(planp,'_p',2,1,2);
		 var proppbs =proinversionem(planp,'_p',2,1,3);
		 var procarbs =proinversionem(planp,'_p',2,1,4);
		 var propcbs =proinversionem(planp,'_p',2,1,5);
		
		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoribsr = proinversionep(realp,'_r',1,1,1);
		 var prodivoccbsr = proinversionep(realp,'_r',1,1,2);
		 
		 //// PROYECTOS MIXTAS REAL BS
		 var propsbsr =proinversionem(realp,'_r',2,1,1);
		 var propwbsr =proinversionem(realp,'_r',2,1,2);
		 var proppbsr =proinversionem(realp,'_r',2,1,3);
		 var procarbsr =proinversionem(realp,'_r',2,1,4);
		 var propcbsr =proinversionem(realp,'_r',2,1,5);
		
		 
		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoribsmv = proinversionep(mvp,'_mv',1,1,1);
		 var prodivoccbsmv = proinversionep(mvp,'_mv',1,1,2);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION BSmv
		 var propsbsmv =proinversionem(mvp,'_mv',2,1,1);
		 var propwbsmv =proinversionem(mvp,'_mv',2,1,2);
		 var proppbsmv =proinversionem(mvp,'_mv',2,1,3);
		 var procarbsmv =proinversionem(mvp,'_mv',2,1,4);
		 var propcbsmv =proinversionem(mvp,'_mv',2,1,5);

		

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoribsant = proinversionep(antp,'_ant',1,1,1);
		 var prodivoccbsant = proinversionep(antp,'_ant',1,1,2);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO BSant
		 var propsbsant =proinversionem(antp,'_ant',2,1,1);
		 var propwbsant =proinversionem(antp,'_ant',2,1,2);
		 var proppbsant =proinversionem(antp,'_ant',2,1,3);
		 var procarbsant =proinversionem(antp,'_ant',2,1,4);
		 var propcbsant =proinversionem(antp,'_ant',2,1,5);

		alert('estoy en el ANTEPROYECTO');

		 ////////////////// DOLARES///////////////

		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoridol = proinversionep(planp,'_p',1,2,1);
		 var prodivoccdol = proinversionep(planp,'_p',1,2,2);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var propsdol =proinversionem(planp,'_p',2,2,1);
		 var propwdol =proinversionem(planp,'_p',2,2,2);
		 var proppdol =proinversionem(planp,'_p',2,2,3);
		 var procardol =proinversionem(planp,'_p',2,2,4);
		 var propcdol =proinversionem(planp,'_p',2,2,5);




		

		alert('estoy en dolares plan ');
		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoridolr = proinversionep(realp,'_r',1,2,1);
		 var prodivoccdolr = proinversionep(realp,'_r',1,2,2);
				 
		 //// PROYECTOS MIXTAS REAL dol
		 var propsdolr =proinversionem(realp,'_r',2,2,1);
		 var propwdolr =proinversionem(realp,'_r',2,2,2);
		 var proppdolr =proinversionem(realp,'_r',2,2,3);
		 var procardolr =proinversionem(realp,'_r',2,2,4);
		 var propcdolr =proinversionem(realp,'_r',2,2,5);

		

		alert('estoy en dolares real ');
		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoridolmv = proinversionep(mvp,'_mv',1,2,1);
		 var prodivoccdolmv = proinversionep(mvp,'_mv',1,2,2);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var propsdolmv =proinversionem(mvp,'_mv',2,2,1);
		 var propwdolmv =proinversionem(mvp,'_mv',2,2,2);
		 var proppdolmv =proinversionem(mvp,'_mv',2,2,3);
		 var procardolmv =proinversionem(mvp,'_mv',2,2,4);
		 var propcdolmv =proinversionem(mvp,'_mv',2,2,5);

		
		alert('estoy en dolares mejor vision ');

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoridolant = proinversionep(antp,'_ant',1,2,1);
		 var prodivoccdolant = proinversionep(antp,'_ant',1,2,2);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var propsdolant =proinversionem(antp,'_ant',2,2,1);
		 var propwdolant =proinversionem(antp,'_ant',2,2,2);
		 var proppdolant =proinversionem(antp,'_ant',2,2,3);
		 var procardolant =proinversionem(antp,'_ant',2,2,4);
		 var propcdolant =proinversionem(antp,'_ant',2,2,5);
		
		alert('estoy en dolares anteproyecto ');
		 /////////////////// EQUIVALENTE

		  ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivorieqv = filtroequivalente(prodivoribs,prodivoridol);
		 var prodivocceqv = filtroequivalente(prodivoccbs,prodivoccdol);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var propseqv =filtroequivalente(propsbs,propsdol);
		 var propweqv =filtroequivalente(propwbs,propwdol);
		 var proppeqv =filtroequivalente(proppbs,proppdol);
		 var procareqv =filtroequivalente(procarbs,procardol);
		 var propceqv =filtroequivalente(propcbs,propcdol);

		 

		alert('estoy en equivalente plan ');

		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivorieqvr = filtroequivalente(prodivoribsr,prodivoridolr);
		 var prodivocceqvr = filtroequivalente(prodivoccbsr,prodivoccdolr);
		 
		 //// PROYECTOS MIXTAS REAL dol
		 var propseqvr =filtroequivalente(propsbsr,propsdolr);
		 var propweqvr =filtroequivalente(propwbsr,propwdolr);
		 var proppeqvr =filtroequivalente(proppbsr,proppdolr);
		 var procareqvr =filtroequivalente(procarbsr,procardolr);
		 var propceqvr =filtroequivalente(propcbsr,propcdolr);

		 

		alert('estoy en equivalente real ');

		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivorieqvmv = filtroequivalente(prodivoribsmv,prodivoridolmv);
		 var prodivocceqvmv = filtroequivalente(prodivoccbsmv,prodivoccdolmv);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var propseqvmv =filtroequivalente(propsbsmv,propsdolmv);
		 var propweqvmv =filtroequivalente(propwbsmv,propwdolmv);
		 var proppeqvmv =filtroequivalente(proppbsmv,proppdolmv);
		 var procareqvmv =filtroequivalente(procarbsmv,procardolmv);
		 var propceqvmv =filtroequivalente(propcbsmv,propcdolmv);


		alert('estoy en equivalente mejor vision ');

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivorieqvant = filtroequivalente(prodivoribsant,prodivoridolant);
		 var prodivocceqvant = filtroequivalente(prodivoccbsant,prodivoccdolant);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var propseqvant =filtroequivalente(propsbsant,propsdolant);
		 var propweqvant =filtroequivalente(propwbsant,propwdolant);
		 var proppeqvant =filtroequivalente(proppbsant,proppdolant);
		 var procareqvant =filtroequivalente(procarbsant,procardolant);
		 var propceqvant =filtroequivalente(propcbsant,propcdolant);


		alert('estoy en equivalente anteproyecto');

		 //// ESFUERZO PROPIO EN BS
		 var epbs = filtrardivo(prodivoribs,prodivoccbs);
		var epbsr = filtrardivo(prodivoribsr,prodivoccbsr);
		var epbsmv = filtrardivo(prodivoribsmv,prodivoccbsmv);
		var epbsant = filtrardivo(prodivoribsant,prodivoccbsant);

		/// ESFUERZO ROPIO EN DOLARES 
		 var epdol = filtrardivo(prodivoridol,prodivoccdol);
		var epdolr = filtrardivo(prodivoridolr,prodivoccdolr);
		var epdolmv = filtrardivo(prodivoridolmv,prodivoccdolmv);
		var epdolant = filtrardivo(prodivoridolant,prodivoccdolant);

		/// ESFUERZO ROPIO EN DOLARES EQUIVALENTES
		 var epeqv = filtrardivo(prodivorieqv,prodivocceqv);
		var epeqvr = filtrardivo(prodivorieqvr,prodivocceqvr);
		var epeqvmv = filtrardivo(prodivorieqvmv,prodivocceqvmv);
		var epeqvant = filtrardivo(prodivorieqvant,prodivocceqvant);


		 //// EMPRESAS MIXTAS EN BS
		var embs = filtrartotal(propsbs,propwbs,proppbs,procarbs,propcbs);
		var embsr = filtrartotal(propsbsr,propwbsr,proppbsr,procarbsr,propcbsr);
		var embsmv = filtrartotal(propsbsmv,propwbsmv,proppbsmv,procarbsmv,propcbsmv);
		var embsant = filtrartotal(propsbsant,propwbsant,proppbsant,procarbsant,propcbsant);


		/// EMPRESAS MIXTAS EN DOLARES 
		 var emdol = filtrartotal(propsdol,propwdol,proppdol,procardol,propcdol);
		var emdolr = filtrartotal(propsdolr,propwdolr,proppdolr,procardolr,propcdolr);
		var emdolmv = filtrartotal(propsdolmv,propwdolmv,proppdolmv,procardolmv,propcdolmv);
		var emdolant = filtrartotal(propsdolant,propwdolant,proppdolant,procardolant,propcdolant);



		/// EMPRESAS MIXTAS EN DOLARES EQUIVALENTES
		 var emeqv = filtroequivalente(embs,emdol);
		 var emeqvr = filtroequivalente(embsr,emdolr);
		 var emeqvmv = filtroequivalente(embsmv,emdolmv);
		 var emeqvant = filtroequivalente(embsant,emdolant);

////////////////// DIVISION ORIENTAL DE EMPRESAS MIXTAS
		 //// EMPRESAS MIXTAS EN BS
		var embsdivo = direccionejecutiva(propsbs,propwbs,proppbs);
		var embsrdivo = direccionejecutiva(propsbsr,propwbsr,proppbsr);
		var embsmvdivo = direccionejecutiva(propsbsmv,propwbsmv,proppbsmv);
		var embsantdivo = direccionejecutiva(propsbsant,propwbsant,proppbsant);


		/// EMPRESAS MIXTAS EN DOLARES 
		 var emdoldivo = direccionejecutiva(propsdol,propwdol,proppdol);
		var emdolrdivo = direccionejecutiva(propsdolr,propwdolr,proppdolr);
		var emdolmvdivo = direccionejecutiva(propsdolmv,propwdolmv,proppdolmv);
		var emdolantdivo = direccionejecutiva(propsdolant,propwdolant,proppdolant);


		/// EMPRESAS MIXTAS EN DOLARES EQUIVALENTES
		 var emeqvdivo = filtroequivalente(embsdivo,emdoldivo);
		 var emeqvrdivo = filtroequivalente(embsrdivo,emdolrdivo);
		 var emeqvmvdivo = filtroequivalente(embsmvdivo,emdolmvdivo);
		 var emeqvantdivo = filtroequivalente(embsantdivo,emdolantdivo);


////////////////// DIVISION OCCIDENTAL DE EMPRESAS MIXTAS

		 //// EMPRESAS MIXTAS EN BS
		var embsdivoc = filtrardivo(procarbs,propcbs);
		var embsrdivoc = filtrardivo(procarbsr,propcbsr);
		var embsmvdivoc = filtrardivo(procarbsmv,propcbsmv);
		var embsantdivoc = filtrardivo(procarbsant,propcbsant);


		/// EMPRESAS MIXTAS EN DOLARES 
		var emdoldivoc = filtrardivo(procardol,propcdol);
		var emdolrdivoc = filtrardivo(procardolr,propcdolr);
		var emdolmvdivoc = filtrardivo(procardolmv,propcdolmv);
		var emdolantdivoc = filtrardivo(procardolant,propcdolant);



		/// EMPRESAS MIXTAS EN DOLARES EQUIVALENTES
		 var emeqvdivoc = filtroequivalente(embsdivoc,emdoldivoc);
		 var emeqvrdivoc = filtroequivalente(embsrdivoc,emdolrdivoc);
		 var emeqvmvdivoc = filtroequivalente(embsmvdivoc,emdolmvdivoc);
		 var emeqvantdivoc = filtroequivalente(embsantdivoc,emdolantdivoc);




			/// TOTAL BS 
		var totalbs = filtrardivo(epbs,embs);
		var totalbsr = filtrardivo(epbsr,embsr);
		var totalbsmv = filtrardivo(epbsmv,embsmv);
		var totalbsant = filtrardivo(epbsant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(epdol,emdol);
		var totaldr = filtrardivo(epdolr,emdolr);
		var totaldmv = filtrardivo(epdolmv,emdolmv);
		var totaldant = filtrardivo(epdolant,emdolant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

		  var aux = 0;
		 for (var i=0; i < 12; i++) {
		
 			if(prodivorieqvr[i] != 0 || prodivocceqvr[i] != 0 || propseqvr[i] != 0 || propweqvr[i]!= 0 ||  proppeqvr[i]!=0 || procareqvr[i]!=0 || propceqvr[i]!=0 ){
 			//alert(aux);
 			 		aux++;	
 		 	}

 		}

 		alert('mes que toca '+aux);
 		if(aux!=0){
 			val = aux-1;	
 		}else{
 			val = aux;
 		}
 		
 		var	informacion = pptocab('Tabla-Elemento-Encabezado',anho,meses[val],'INVERSIONES');
 		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(BS) Puros',val,'',totalbs,totalbsr,totalbsmv,totalbsant);
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',val,'DEPCA',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',val,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);

 		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',val,'',epbs,epbsr,epbsmv,epbsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',val,'ESFUERZO PROPIO ',epdol,epdolr,epdolmv,epdolant);
 		informacion += eplinea('Tabla-Elemento','MM(USD) Equiv',val,' ',epeqv,epeqvr,epeqvmv,epeqvant); 		


 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',prodivoribs,prodivoribsr,prodivoribsmv,prodivoribsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Division Costa Afuera Oriental ',prodivoridol,prodivoridolr,prodivoridolmv,prodivoridolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',prodivorieqv,prodivorieqvr,prodivorieqvmv,prodivorieqvant);
			
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',prodivoccbs,prodivoccbsr,prodivoccbsmv,prodivoccbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Division Costa Afuera Occidental ',prodivoccdol,prodivoccdolr,prodivoccdolmv,prodivoccdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',prodivocceqv,prodivocceqvr,prodivocceqvmv,prodivocceqvant);
	

		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',val,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',val,'EMPRESAS MIXTAS ',emdol,emdolr,emdolmv,emdolant);
 		informacion += eplinea('Tabla-Elemento','MM(USD) Equiv',val,' ',emeqv,emeqvr,emeqvmv,emeqvant);


 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',embsdivo,embsrdivo,embsmvdivo,embsantdivo);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Empresas mixtas Oriente  ',emdoldivo,emdolrdivo,emdolmvdivo,emdolantdivo);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',emeqvdivo,emeqvrdivo,emeqvmvdivo,emeqvantdivo);
		
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',embsdivoc,embsrdivoc,embsmvdivoc,embsantdivoc);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,' Empresas mixtas Occidente',emdoldivoc,emdolrdivoc,emdolmvdivoc,emdolantdivoc);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',emeqvdivoc,emeqvrdivoc,emeqvmvdivoc,emeqvantdivoc);
	/*
 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',proppbs,proppbsr,proppbsmv,proppbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Petrolera Paria ',proppdol,proppdolr,proppdolmv,proppdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',proppeqv,proppeqvr,proppeqvmv,proppeqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',procarbs,procarbsr,procarbsmv,procarbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Cardon IV',procardol,procardolr,procardolmv,procardolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',procareqv,procareqvr,procareqvmv,procareqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',propcbs,propcbsr,propcbsmv,propcbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Petrocumarebo',propcdol,propcdolr,propcdolmv,propcdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',propceqv,propceqvr,propceqvmv,propceqvant);
*/
		
 		return informacion;

}

function operacioneselementocosto(habp,drplan,pmix,hreal,drreal,rmix,hmv,drmv,mvmix,hant,drant,antmix,anho){

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


 						 // DIVISION OCCIDENTAL  PLAN EN BOLIVARES
					 	 var labordivocbsf = filtrarcostohab(habp,filtrolabor,3,'_p',1);
 						 var bbdivocbsf = filtrarcostohab(habp,filtrobb,3,'_p',1);
 						 var mdivocbsf = filtrarcostohab(habp,filtrom,3,'_p',1);
 						 var scdivocbsf = filtrarcostohab(habp,filtrosc,3,'_p',1);
 						 var odivocbsf = filtrarcostohab(habp,filtroo,3,'_p',1);
 						 var totaldivocbsf = filtrartotal(labordivocbsf,bbdivocbsf,mdivocbsf,scdivocbsf,odivocbsf);

 						 // DIVISION OCCIDENTAL PLAN EN DOLARES
 						 var labordivocdol = filtrarcostohab(habp,filtrolabor,3,'_p',2);
 						 var bbdivocdol = filtrarcostohab(habp,filtrobb,3,'_p',2);
 						 var mdivocdol = filtrarcostohab(habp,filtrom,3,'_p',2);
 						 var scdivocdol = filtrarcostohab(habp,filtrosc,3,'_p',2);
 						 var odivocdol = filtrarcostohab(habp,filtroo,3,'_p',2);
 						 var totaldivocdol = filtrartotal(labordivocdol,bbdivocdol,mdivocdol,scdivocdol,odivocdol);

 						   /// DIVISION OCCIDENTAL PLAN EN DOLARES EQUIVALENTES
 						 var labordivocDeqv = filtroequivalente(labordivocbsf,labordivocdol);
 						 var bbdivocDeqv = filtroequivalente(bbdivocbsf,bbdivocdol);
 						 var mdivocDeqv = filtroequivalente(mdivocbsf,mdivocdol);
 						 var scdivocDeqv = filtroequivalente(scdivocbsf,scdivocdol);
 						 var odivocDeqv = filtroequivalente(odivocbsf,odivocdol);
 						 var totaldivocDeqv = filtrartotal(labordivocDeqv,bbdivocDeqv,mdivocDeqv,scdivocDeqv,odivocDeqv);

						////////DIRECCION EJECUTIVA PLAN BOLIVARES
 						var labordirbsf = filtrarcostodirep(habp,filtrolabor,'_p',1);
						var bbdirbsf = filtrarcostodirep(habp,filtrobb,'_p',1);
						var mdirbsf = filtrarcostodirep(habp,filtrom,'_p',1);
						var scdirbsf = filtrarcostodirep(habp,filtrosc,'_p',1);
						var odirbsf = filtrarcostodirep(habp,filtroo,'_p',1);
						var totaldirbsf = filtrartotal(labordirbsf,bbdirbsf,mdirbsf,scdirbsf,odirbsf);
 						
 				     	// DIRECCION EJECUTIVA PLAN DOLARES 
 						 var labordirdol = filtrarcostodirep(habp,filtrolabor,'_p',2);
 						 var bbdirdol = filtrarcostodirep(habp,filtrobb,'_p',2);
 						 var mdirdol = filtrarcostodirep(habp,filtrom,'_p',2);
 						 var scdirdol = filtrarcostodirep(habp,filtrosc,'_p',2);
 						 var odirdol = filtrarcostodirep(habp,filtroo,'_p',2);
 						 var totaldirdol = filtrartotal(labordirdol,bbdirdol,mdirdol,scdirdol,odirdol);
 						 
 						  /// DIRECCION EJECUTIVA PLAN EQUIVALENTE
 						 var labordirDeqv = filtroequivalente(labordirbsf,labordirdol);
 						 var bbdirDeqv = filtroequivalente(bbdirbsf,bbdirdol);
 						 var mdirDeqv = filtroequivalente(mdirbsf,mdirdol);
 						 var scdirDeqv = filtroequivalente(scdirbsf,scdirdol);
 						 var odirDeqv = filtroequivalente(odirbsf,odirdol);
 						 var totaldirDeqv = filtrartotal(labordirDeqv,bbdirDeqv,mdirDeqv,scdirDeqv,odirDeqv);

 						
 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////



 						 ////////////////REAL HABILITADORAS /////////////////////////
								// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfr = filtrarcostohab(hreal,filtrolabor,5,'_r',1);
 						 var bbepbsfr = filtrarcostohab(hreal,filtrobb,5,'_r',1);
 						 var mepbsfr = filtrarcostohab(hreal,filtrom,5,'_r',1);
 						 var scepbsfr = filtrarcostohab(hreal,filtrosc,5,'_r',1);
 						 var oepbsfr = filtrarcostohab(hreal,filtroo,5,'_r',1);
 						 var totalepbsfr = filtrartotal(laborepbsfr,bbepbsfr,mepbsfr,scepbsfr,oepbsfr);

 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolr = filtrarcostohab(hreal,filtrolabor,5,'_r',2);
 						 var bbepdolr = filtrarcostohab(hreal,filtrobb,5,'_r',2);
 						 var mepdolr = filtrarcostohab(hreal,filtrom,5,'_r',2);
 						 var scepdolr = filtrarcostohab(hreal,filtrosc,5,'_r',2);
 						 var oepdolr = filtrarcostohab(hreal,filtroo,5,'_r',2);
 						 var totalepdolr = filtrartotal(laborepdolr,bbepdolr,mepdolr,scepdolr,oepdolr);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfr = filtrarcostohab(hreal,filtrolabor,4,'_r',1);
 						 var bbdttobsfr = filtrarcostohab(hreal,filtrobb,4,'_r',1);
 						 var mdttobsfr = filtrarcostohab(hreal,filtrom,4,'_r',1);
 						 var scdttobsfr = filtrarcostohab(hreal,filtrosc,4,'_r',1);
 						 var odttobsfr = filtrarcostohab(hreal,filtroo,4,'_r',1);
 						 var totaldttobsfr = filtrartotal(labordttobsfr,bbdttobsfr,mdttobsfr,scdttobsfr,odttobsfr);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolr = filtrarcostohab(hreal,filtrolabor,4,'_r',2);
 						 var bbdttodolr = filtrarcostohab(hreal,filtrobb,4,'_r',2);
 						 var mdttodolr = filtrarcostohab(hreal,filtrom,4,'_r',2);
 						 var scdttodolr = filtrarcostohab(hreal,filtrosc,4,'_r',2);
 						 var odttodolr = filtrarcostohab(hreal,filtroo,4,'_r',2);
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


 						 // DIVISION OCCIDENTAL  REAL EN BOLIVARES
					 	 var labordivocbsfr = filtrarcostohab(hreal,filtrolabor,3,'_r',1);
 						 var bbdivocbsfr = filtrarcostohab(hreal,filtrobb,3,'_r',1);
 						 var mdivocbsfr = filtrarcostohab(hreal,filtrom,3,'_r',1);
 						 var scdivocbsfr = filtrarcostohab(hreal,filtrosc,3,'_r',1);
 						 var odivocbsfr = filtrarcostohab(hreal,filtroo,3,'_r',1);
 						 var totaldivocbsfr = filtrartotal(labordivocbsfr,bbdivocbsfr,mdivocbsfr,scdivocbsfr,odivocbsfr);

 						 // DIVISION OCCIDENTAL REAL EN DOLARES
 						 var labordivocdolr = filtrarcostohab(hreal,filtrolabor,3,'_r',2);
 						 var bbdivocdolr = filtrarcostohab(hreal,filtrobb,3,'_r',2);
 						 var mdivocdolr = filtrarcostohab(hreal,filtrom,3,'_r',2);
 						 var scdivocdolr = filtrarcostohab(hreal,filtrosc,3,'_r',2);
 						 var odivocdolr = filtrarcostohab(hreal,filtroo,3,'_r',2);
 						 var totaldivocdolr = filtrartotal(labordivocdolr,bbdivocdolr,mdivocdolr,scdivocdolr,odivocdolr);

 						   /// DIVISION OCCIDENTAL REAL EN DOLARES EQUIVALENTES
 						 var labordivocDeqvr = filtroequivalente(labordivocbsfr,labordivocdolr);
 						 var bbdivocDeqvr = filtroequivalente(bbdivocbsfr,bbdivocdolr);
 						 var mdivocDeqvr = filtroequivalente(mdivocbsfr,mdivocdolr);
 						 var scdivocDeqvr = filtroequivalente(scdivocbsfr,scdivocdolr);
 						 var odivocDeqvr = filtroequivalente(odivocbsfr,odivocdolr);
 						 var totaldivocDeqvr = filtrartotal(labordivocDeqvr,bbdivocDeqvr,mdivocDeqvr,scdivocDeqvr,odivocDeqvr);

						////////DIRECCION EJECUTIVA REAL BOLIVARES
 						var labordirbsfr = filtrarcostodirep(hreal,filtrolabor,'_r',1);
						var bbdirbsfr = filtrarcostodirep(hreal,filtrobb,'_r',1);
						var mdirbsfr = filtrarcostodirep(hreal,filtrom,'_r',1);
						var scdirbsfr = filtrarcostodirep(hreal,filtrosc,'_r',1);
						var odirbsfr = filtrarcostodirep(hreal,filtroo,'_r',1);
						var totaldirbsfr = filtrartotal(labordirbsfr,bbdirbsfr,mdirbsfr,scdirbsfr,odirbsfr);
 						
 				     	// DIRECCION EJECUTIVA REAL DOLARES 
 						 var labordirdolr = filtrarcostodirep(hreal,filtrolabor,'_r',2);
 						 var bbdirdolr = filtrarcostodirep(hreal,filtrobb,'_r',2);
 						 var mdirdolr = filtrarcostodirep(hreal,filtrom,'_r',2);
 						 var scdirdolr = filtrarcostodirep(hreal,filtrosc,'_r',2);
 						 var odirdolr = filtrarcostodirep(hreal,filtroo,'_r',2);
 						 var totaldirdolr = filtrartotal(labordirdolr,bbdirdolr,mdirdolr,scdirdolr,odirdolr);
 						 
 						  /// DIRECCION EJECUTIVA REAL EQUIVALENTE
 						 var labordirDeqvr = filtroequivalente(labordirbsfr,labordirdolr);
 						 var bbdirDeqvr = filtroequivalente(bbdirbsfr,bbdirdolr);
 						 var mdirDeqvr = filtroequivalente(mdirbsfr,mdirdolr);
 						 var scdirDeqvr = filtroequivalente(scdirbsfr,scdirdolr);
 						 var odirDeqvr = filtroequivalente(odirbsfr,odirdolr);
 						 var totaldirDeqvr = filtrartotal(labordirDeqvr,bbdirDeqvr,mdirDeqvr,scdirDeqvr,odirDeqvr);

 						 /////////////FIN REAL ////////////////////////////////////////////////

 						 //////////////// MEJOR VISION ///////////////////////////////////////////////
 						 // ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfmv = filtrarcostohab(hmv,filtrolabor,5,'_mv',1);
 						 var bbepbsfmv = filtrarcostohab(hmv,filtrobb,5,'_mv',1);
 						 var mepbsfmv = filtrarcostohab(hmv,filtrom,5,'_mv',1);
 						 var scepbsfmv = filtrarcostohab(hmv,filtrosc,5,'_mv',1);
 						 var oepbsfmv = filtrarcostohab(hmv,filtroo,5,'_mv',1);
 						 var totalepbsfmv = filtrartotal(laborepbsfmv,bbepbsfmv,mepbsfmv,scepbsfmv,oepbsfmv);
 						 
 						 // ESFUERZOS PROPIOS MEJOR VISION EN DOLARES
 						 var laborepdolmv = filtrarcostohab(hmv,filtrolabor,5,'_mv',2);
 						 var bbepdolmv = filtrarcostohab(hmv,filtrobb,5,'_mv',2);
 						 var mepdolmv = filtrarcostohab(hmv,filtrom,5,'_mv',2);
 						 var scepdolmv = filtrarcostohab(hmv,filtrosc,5,'_mv',2);
 						 var oepdolmv = filtrarcostohab(hmv,filtroo,5,'_mv',2);
 						 var totalepdolmv = filtrartotal(laborepdolmv,bbepdolmv,mepdolmv,scepdolmv,oepdolmv);

 						 // DTTO ORIENTAL MEJOR VISION EN BOLIVARES
					 	 var labordttobsfmv = filtrarcostohab(hmv,filtrolabor,4,'_mv',1);
 						 var bbdttobsfmv = filtrarcostohab(hmv,filtrobb,4,'_mv',1);
 						 var mdttobsfmv = filtrarcostohab(hmv,filtrom,4,'_mv',1);
 						 var scdttobsfmv = filtrarcostohab(hmv,filtrosc,4,'_mv',1);
 						 var odttobsfmv = filtrarcostohab(hmv,filtroo,4,'_mv',1);
 						 var totaldttobsfmv = filtrartotal(labordttobsfmv,bbdttobsfmv,mdttobsfmv,scdttobsfmv,odttobsfmv);

 						 // DTTO ORIENTAL MEJOR VISION EN DOLARES
 						 var labordttodolmv = filtrarcostohab(hmv,filtrolabor,4,'_mv',2);
 						 var bbdttodolmv = filtrarcostohab(hmv,filtrobb,4,'_mv',2);
 						 var mdttodolmv = filtrarcostohab(hmv,filtrom,4,'_mv',2);
 						 var scdttodolmv = filtrarcostohab(hmv,filtrosc,4,'_mv',2);
 						 var odttodolmv = filtrarcostohab(hmv,filtroo,4,'_mv',2);
 						 var totaldttodolmv = filtrartotal(labordttodolmv,bbdttodolmv,mdttodolmv,scdttodolmv,odttodolmv);


 						  /// DIVISION ORIENTAL MEJOR VISION EN BOLIVARES
 						 var labordivobsfmv = filtrardivo(labordttobsfmv,laborepbsfmv);
 						 var bbdivobsfmv = filtrardivo(bbdttobsfmv,bbepbsfmv);
 						 var mdivobsfmv = filtrardivo(mdttobsfmv,mepbsfmv);
 						 var scdivobsfmv = filtrardivo(scdttobsfmv,scepbsfmv);
 						 var odivobsfmv = filtrardivo(odttobsfmv,oepbsfmv);
 						 var totaldivobsfmv = filtrartotal(labordivobsfmv,bbdivobsfmv,mdivobsfmv,scdivobsfmv,odivobsfmv);

 						 /// DIVISION ORIENTAL MEJOR VISION EN DOLARES
 						 var labordivodolmv = filtrardivo(labordttodolmv,laborepdolmv);
 						 var bbdivodolmv = filtrardivo(bbdttodolmv,bbepdolmv);
 						 var mdivodolmv = filtrardivo(mdttodolmv,mepdolmv);
 						 var scdivodolmv = filtrardivo(scdttodolmv,scepdolmv);
 						 var odivodolmv = filtrardivo(odttodolmv,oepdolmv);
 						 var totaldivodolmv = filtrartotal(labordivodolmv,bbdivodolmv,mdivodolmv,scdivodolmv,odivodolmv);

 						  /// DIVISION ORIENTAL MEJOR VISION EN DOLARES EQUIVALENTES
 						 var labordivoDeqvmv = filtroequivalente(labordivobsfmv,labordivodolmv);
 						 var bbdivoDeqvmv = filtroequivalente(bbdivobsfmv,bbdivodolmv);
 						 var mdivoDeqvmv = filtroequivalente(mdivobsfmv,mdivodolmv);
 						 var scdivoDeqvmv = filtroequivalente(scdivobsfmv,scdivodolmv);
 						 var odivoDeqvmv = filtroequivalente(odivobsfmv,odivodolmv);
 						 var totaldivoDeqvmv = filtrartotal(labordivoDeqvmv,bbdivoDeqvmv,mdivoDeqvmv,scdivoDeqvmv,odivoDeqvmv);

 						  // DIVISION OCCIDENTAL  MEJOR VISION EN BOLIVARES
					 	 var labordivocbsfmv = filtrarcostohab(hmv,filtrolabor,3,'_mv',1);
 						 var bbdivocbsfmv = filtrarcostohab(hmv,filtrobb,3,'_mv',1);
 						 var mdivocbsfmv = filtrarcostohab(hmv,filtrom,3,'_mv',1);
 						 var scdivocbsfmv = filtrarcostohab(hmv,filtrosc,3,'_mv',1);
 						 var odivocbsfmv = filtrarcostohab(hmv,filtroo,3,'_mv',1);
 						 var totaldivocbsfmv = filtrartotal(labordivocbsfmv,bbdivocbsfmv,mdivocbsfmv,scdivocbsfmv,odivocbsfmv);

 						 // DIVISION OCCIDENTAL MEJOR VISION EN DOLARES
 						 var labordivocdolmv = filtrarcostohab(hmv,filtrolabor,3,'_mv',2);
 						 var bbdivocdolmv = filtrarcostohab(hmv,filtrobb,3,'_mv',2);
 						 var mdivocdolmv = filtrarcostohab(hmv,filtrom,3,'_mv',2);
 						 var scdivocdolmv = filtrarcostohab(hmv,filtrosc,3,'_mv',2);
 						 var odivocdolmv = filtrarcostohab(hmv,filtroo,3,'_mv',2);
 						 var totaldivocdolmv = filtrartotal(labordivocdolmv,bbdivocdolmv,mdivocdolmv,scdivocdolmv,odivocdolmv);

 						   /// DIVISION OCCIDENTAL MEJOR VISION EN DOLARES EQUIVALENTES
 						 var labordivocDeqvmv = filtroequivalente(labordivocbsfmv,labordivocdolmv);
 						 var bbdivocDeqvmv = filtroequivalente(bbdivocbsfmv,bbdivocdolmv);
 						 var mdivocDeqvmv = filtroequivalente(mdivocbsfmv,mdivocdolmv);
 						 var scdivocDeqvmv = filtroequivalente(scdivocbsfmv,scdivocdolmv);
 						 var odivocDeqvmv = filtroequivalente(odivocbsfmv,odivocdolmv);
 						 var totaldivocDeqvmv = filtrartotal(labordivocDeqvmv,bbdivocDeqvmv,mdivocDeqvmv,scdivocDeqvmv,odivocDeqvmv);

						////////DIRECCION EJECUTIVA MEJOR VISION BOLIVARES
 						var labordirbsfmv = filtrarcostodirep(hmv,filtrolabor,'_mv',1);
						var bbdirbsfmv = filtrarcostodirep(hmv,filtrobb,'_mv',1);
						var mdirbsfmv = filtrarcostodirep(hmv,filtrom,'_mv',1);
						var scdirbsfmv = filtrarcostodirep(hmv,filtrosc,'_mv',1);
						var odirbsfmv = filtrarcostodirep(hmv,filtroo,'_mv',1);
						var totaldirbsfmv = filtrartotal(labordirbsfmv,bbdirbsfmv,mdirbsfmv,scdirbsfmv,odirbsfmv);
 						
 				     	// DIRECCION EJECUTIVA MEJOR VISION DOLARES 
 						 var labordirdolmv = filtrarcostodirep(hmv,filtrolabor,'_mv',2);
 						 var bbdirdolmv = filtrarcostodirep(hmv,filtrobb,'_mv',2);
 						 var mdirdolmv = filtrarcostodirep(hmv,filtrom,'_mv',2);
 						 var scdirdolmv = filtrarcostodirep(hmv,filtrosc,'_mv',2);
 						 var odirdolmv = filtrarcostodirep(hmv,filtroo,'_mv',2);
 						 var totaldirdolmv = filtrartotal(labordirdolmv,bbdirdolmv,mdirdolmv,scdirdolmv,odirdolmv);
 						 
 						  /// DIRECCION EJECUTIVA MEJOR VISION EQUIVALENTE
 						 var labordirDeqvmv = filtroequivalente(labordirbsfmv,labordirdolmv);
 						 var bbdirDeqvmv = filtroequivalente(bbdirbsfmv,bbdirdolmv);
 						 var mdirDeqvmv = filtroequivalente(mdirbsfmv,mdirdolmv);
 						 var scdirDeqvmv = filtroequivalente(scdirbsfmv,scdirdolmv);
 						 var odirDeqvmv = filtroequivalente(odirbsfmv,odirdolmv);
 						 var totaldirDeqvmv = filtrartotal(labordirDeqvmv,bbdirDeqvmv,mdirDeqvmv,scdirDeqvmv,odirDeqvmv);


 						////////////// HABILITADORAS ANTEPROYECTOS //////////////////////////////
 						// ESFUERZO PROPIO ANTEPROYECTO EN BOLIVARES 
					 	 var laborepbsfant = filtrarcostohab(hant,filtrolabor,5,'_ant',1);
 						 var bbepbsfant = filtrarcostohab(hant,filtrobb,5,'_ant',1);
 						 var mepbsfant = filtrarcostohab(hant,filtrom,5,'_ant',1);
 						 var scepbsfant = filtrarcostohab(hant,filtrosc,5,'_ant',1);
 						 var oepbsfant = filtrarcostohab(hant,filtroo,5,'_ant',1);
 						 var totalepbsfant = filtrartotal(laborepbsfant,bbepbsfant,mepbsfant,scepbsfant,oepbsfant);
 						 
 						 // ESFUERZOS PROPIOS ANTEPROYECTO EN DOLARES
 						 var laborepdolant = filtrarcostohab(hant,filtrolabor,5,'_ant',2);
 						 var bbepdolant = filtrarcostohab(hant,filtrobb,5,'_ant',2);
 						 var mepdolant = filtrarcostohab(hant,filtrom,5,'_ant',2);
 						 var scepdolant = filtrarcostohab(hant,filtrosc,5,'_ant',2);
 						 var oepdolant = filtrarcostohab(hant,filtroo,5,'_ant',2);
 						 var totalepdolant = filtrartotal(laborepdolant,bbepdolant,mepdolant,scepdolant,oepdolant);

 						 // DTTO ORIENTAL ANTEPROYECTO EN BOLIVARES
					 	 var labordttobsfant = filtrarcostohab(hant,filtrolabor,4,'_ant',1);
 						 var bbdttobsfant = filtrarcostohab(hant,filtrobb,4,'_ant',1);
 						 var mdttobsfant = filtrarcostohab(hant,filtrom,4,'_ant',1);
 						 var scdttobsfant = filtrarcostohab(hant,filtrosc,4,'_ant',1);
 						 var odttobsfant = filtrarcostohab(hant,filtroo,4,'_ant',1);
 						 var totaldttobsfant = filtrartotal(labordttobsfant,bbdttobsfant,mdttobsfant,scdttobsfant,odttobsfant);

 						 // DTTO ORIENTAL ANTEPROYECTO EN DOLARES
 						 var labordttodolant = filtrarcostohab(hant,filtrolabor,4,'_ant',2);
 						 var bbdttodolant = filtrarcostohab(hant,filtrobb,4,'_ant',2);
 						 var mdttodolant = filtrarcostohab(hant,filtrom,4,'_ant',2);
 						 var scdttodolant = filtrarcostohab(hant,filtrosc,4,'_ant',2);
 						 var odttodolant = filtrarcostohab(hant,filtroo,4,'_ant',2);
 						 var totaldttodolant = filtrartotal(labordttodolant,bbdttodolant,mdttodolant,scdttodolant,odttodolant);


 						  /// DIVISION ORIENTAL ANTEPROYECTO EN BOLIVARES
 						 var labordivobsfant = filtrardivo(labordttobsfant,laborepbsfant);
 						 var bbdivobsfant = filtrardivo(bbdttobsfant,bbepbsfant);
 						 var mdivobsfant = filtrardivo(mdttobsfant,mepbsfant);
 						 var scdivobsfant = filtrardivo(scdttobsfant,scepbsfant);
 						 var odivobsfant = filtrardivo(odttobsfant,oepbsfant);
 						 var totaldivobsfant = filtrartotal(labordivobsfant,bbdivobsfant,mdivobsfant,scdivobsfant,odivobsfant);

 						 /// DIVISION ORIENTAL ANTEPROYECTO EN DOLARES
 						 var labordivodolant = filtrardivo(labordttodolant,laborepdolant);
 						 var bbdivodolant = filtrardivo(bbdttodolant,bbepdolant);
 						 var mdivodolant = filtrardivo(mdttodolant,mepdolant);
 						 var scdivodolant = filtrardivo(scdttodolant,scepdolant);
 						 var odivodolant = filtrardivo(odttodolant,oepdolant);
 						 var totaldivodolant = filtrartotal(labordivodolant,bbdivodolant,mdivodolant,scdivodolant,odivodolant);

 						  /// DIVISION ORIENTAL ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivoDeqvant = filtroequivalente(labordivobsfant,labordivodolant);
 						 var bbdivoDeqvant = filtroequivalente(bbdivobsfant,bbdivodolant);
 						 var mdivoDeqvant = filtroequivalente(mdivobsfant,mdivodolant);
 						 var scdivoDeqvant = filtroequivalente(scdivobsfant,scdivodolant);
 						 var odivoDeqvant = filtroequivalente(odivobsfant,odivodolant);
 						 var totaldivoDeqvant = filtrartotal(labordivoDeqvant,bbdivoDeqvant,mdivoDeqvant,scdivoDeqvant,odivoDeqvant);

 						 // DIVISION OCCIDENTAL  ANTEPROYECTO EN BOLIVARES
					 	 var labordivocbsfant = filtrarcostohab(hant,filtrolabor,3,'_ant',1);
 						 var bbdivocbsfant = filtrarcostohab(hant,filtrobb,3,'_ant',1);
 						 var mdivocbsfant = filtrarcostohab(hant,filtrom,3,'_ant',1);
 						 var scdivocbsfant = filtrarcostohab(hant,filtrosc,3,'_ant',1);
 						 var odivocbsfant = filtrarcostohab(hant,filtroo,3,'_ant',1);
 						 var totaldivocbsfant = filtrartotal(labordivocbsfant,bbdivocbsfant,mdivocbsfant,scdivocbsfant,odivocbsfant);

 						 // DIVISION OCCIDENTAL ANTEPROYECTO EN DOLARES
 						 var labordivocdolant = filtrarcostohab(hant,filtrolabor,3,'_ant',2);
 						 var bbdivocdolant = filtrarcostohab(hant,filtrobb,3,'_ant',2);
 						 var mdivocdolant = filtrarcostohab(hant,filtrom,3,'_ant',2);
 						 var scdivocdolant = filtrarcostohab(hant,filtrosc,3,'_ant',2);
 						 var odivocdolant = filtrarcostohab(hant,filtroo,3,'_ant',2);
 						 var totaldivocdolant = filtrartotal(labordivocdolant,bbdivocdolant,mdivocdolant,scdivocdolant,odivocdolant);

 						   /// DIVISION OCCIDENTAL ANTEPROYECTO EN DOLARES EQUIVALENTES
 						 var labordivocDeqvant = filtroequivalente(labordivocbsfant,labordivocdolant);
 						 var bbdivocDeqvant = filtroequivalente(bbdivocbsfant,bbdivocdolant);
 						 var mdivocDeqvant = filtroequivalente(mdivocbsfant,mdivocdolant);
 						 var scdivocDeqvant = filtroequivalente(scdivocbsfant,scdivocdolant);
 						 var odivocDeqvant = filtroequivalente(odivocbsfant,odivocdolant);
 						 var totaldivocDeqvant = filtrartotal(labordivocDeqvant,bbdivocDeqvant,mdivocDeqvant,scdivocDeqvant,odivocDeqvant);

						////////DIRECCION EJECUTIVA ANTEPROYECTO BOLIVARES
 						var labordirbsfant = filtrarcostodirep(hant,filtrolabor,'_ant',1);
						var bbdirbsfant = filtrarcostodirep(hant,filtrobb,'_ant',1);
						var mdirbsfant = filtrarcostodirep(hant,filtrom,'_ant',1);
						var scdirbsfant = filtrarcostodirep(hant,filtrosc,'_ant',1);
						var odirbsfant = filtrarcostodirep(hant,filtroo,'_ant',1);
						var totaldirbsfant = filtrartotal(labordirbsfant,bbdirbsfant,mdirbsfant,scdirbsfant,odirbsfant);
 						
 				     	// DIRECCION EJECUTIVA ANTEPROYECTO DOLARES 
 						 var labordirdolant = filtrarcostodirep(hant,filtrolabor,'_ant',2);
 						 var bbdirdolant = filtrarcostodirep(hant,filtrobb,'_ant',2);
 						 var mdirdolant = filtrarcostodirep(hant,filtrom,'_ant',2);
 						 var scdirdolant = filtrarcostodirep(hant,filtrosc,'_ant',2);
 						 var odirdolant = filtrarcostodirep(hant,filtroo,'_ant',2);
 						 var totaldirdolant = filtrartotal(labordirdolant,bbdirdolant,mdirdolant,scdirdolant,odirdolant);
 						 
 						  /// DIRECCION EJECUTIVA ANTEPROYECTO EQUIVALENTE
 						 var labordirDeqvant = filtroequivalente(labordirbsfant,labordirdolant);
 						 var bbdirDeqvant = filtroequivalente(bbdirbsfant,bbdirdolant);
 						 var mdirDeqvant = filtroequivalente(mdirbsfant,mdirdolant);
 						 var scdirDeqvant = filtroequivalente(scdirbsfant,scdirdolant);
 						 var odirDeqvant = filtroequivalente(odirbsfant,odirdolant);
 						 var totaldirDeqvant = filtrartotal(labordirDeqvant,bbdirDeqvant,mdirDeqvant,scdirDeqvant,odirDeqvant);
 						 
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
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdivobsfant  = filtrardivo(labordivobsfant,bbdivobsfant); 
 						var laborybbdivodolant  = filtrardivo(labordivodolant,bbdivodolant); 
 						var laborybbdivoDeqvant = filtrardivo(labordivoDeqvant,bbdivoDeqvant);

 						///////////// DIVISION OCCIDENTAL

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
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdivocbsfant  = filtrardivo(labordivocbsfant,bbdivocbsfant); 
 						var laborybbdivocdolant  = filtrardivo(labordivocdolant,bbdivocdolant); 
 						var laborybbdivocDeqvant = filtrardivo(labordivocDeqvant,bbdivocDeqvant);

 						/////////////// DIRECCION EJECUTIVA

 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbdirbsfr  = filtrardivo(labordirbsfr,bbdirbsfr); 
 						var laborybbdirdolr = filtrardivo(labordirdolr,bbdirdolr); 
 						var laborybbdirDeqvr= filtrardivo(labordirDeqvr,bbdirDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbdirbsf  = filtrardivo(labordirbsf,bbdirbsf); 
 						var laborybbdirdol  = filtrardivo(labordirdol,bbdirdol); 
 						var laborybbdirDeqv = filtrardivo(labordirDeqv,bbdirDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdirbsfmv  = filtrardivo(labordirbsfmv,bbdirbsfmv); 
 						var laborybbdirdolmv  = filtrardivo(labordirdolmv,bbdirdolmv); 
 						var laborybbdirDeqvmv = filtrardivo(labordirDeqvmv,bbdirDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbdirbsfant  = filtrardivo(labordirbsfant,bbdirbsfant); 
 						var laborybbdirdolant  = filtrardivo(labordirdolant,bbdirdolant); 
 						var laborybbdirDeqvant = filtrardivo(labordirDeqvant,bbdirDeqvant);


 						////////////// ESFUERZO PROPIO 

 							////////// LABOR Y BIENESTAR Y BENEFICIOS
 							laborybbesfuerzopropiobsfr = direccionejecutiva(laborybbdivobsfr,laborybbdivocbsfr,laborybbdirbsfr);
 							laborybbesfuerzopropiobsf = direccionejecutiva(laborybbdivobsf,laborybbdivocbsf,laborybbdirbsf);
 							laborybbesfuerzopropiobsfmv = direccionejecutiva(laborybbdivobsfmv,laborybbdivocbsfmv,laborybbdirbsfmv);
 							laborybbesfuerzopropiobsfant = direccionejecutiva(laborybbdivobsfant,laborybbdivocbsfant,laborybbdirbsfant)

 							laborybbesfuerzopropiodolr = direccionejecutiva(laborybbdivodolr,laborybbdivocdolr,laborybbdirdolr);
 							laborybbesfuerzopropiodol = direccionejecutiva(laborybbdivodol,laborybbdivocdol,laborybbdirdol);
 							laborybbesfuerzopropiodolmv = direccionejecutiva(laborybbdivodolmv,laborybbdivocdolmv,laborybbdirdolmv);
 							laborybbesfuerzopropiodolant = direccionejecutiva(laborybbdivodolant,laborybbdivocdolant,laborybbdirdolant)

 							laborybbesfuerzopropioDeqvr = direccionejecutiva(laborybbdivoDeqvr,laborybbdivocDeqvr,laborybbdirDeqvr);
 							laborybbesfuerzopropioDeqv = direccionejecutiva(laborybbdivoDeqv,laborybbdivocDeqv,laborybbdirDeqv);
 							laborybbesfuerzopropioDeqvmv = direccionejecutiva(laborybbdivoDeqvmv,laborybbdivocDeqvmv,laborybbdirDeqvmv);
 							laborybbesfuerzopropioDeqvant = direccionejecutiva(laborybbdivoDeqvant,laborybbdivocDeqvant,laborybbdirDeqvant)

 							////////// MATERIALES
 							mesfuerzopropiobsfr = direccionejecutiva(mdivobsfr,mdivocbsfr,mdirbsfr);
 							mesfuerzopropiobsf = direccionejecutiva(mdivobsf,mdivocbsf,mdirbsf);
 							mesfuerzopropiobsfmv = direccionejecutiva(mdivobsfmv,mdivocbsfmv,mdirbsfmv);
 							mesfuerzopropiobsfant = direccionejecutiva(mdivobsfant,mdivocbsfant,mdirbsfant)

 							mesfuerzopropiodolr = direccionejecutiva(mdivodolr,mdivocdolr,mdirdolr);
 							mesfuerzopropiodol = direccionejecutiva(mdivodol,mdivocdol,mdirdol);
 							mesfuerzopropiodolmv = direccionejecutiva(mdivodolmv,mdivocdolmv,mdirdolmv);
 							mesfuerzopropiodolant = direccionejecutiva(mdivodolant,mdivocdolant,mdirdolant)

 							mesfuerzopropioDeqvr = direccionejecutiva(mdivoDeqvr,mdivocDeqvr,mdirDeqvr);
 							mesfuerzopropioDeqv = direccionejecutiva(mdivoDeqv,mdivocDeqv,mdirDeqv);
 							mesfuerzopropioDeqvmv = direccionejecutiva(mdivoDeqvmv,mdivocDeqvmv,mdirDeqvmv);
 							mesfuerzopropioDeqvant = direccionejecutiva(mdivoDeqvant,mdivocDeqvant,mdirDeqvant)

 							///////// SERVICIOS Y CONTRATOS


 							scesfuerzopropiobsfr = direccionejecutiva(scdivobsfr,scdivocbsfr,scdirbsfr);
 							scesfuerzopropiobsf = direccionejecutiva(scdivobsf,scdivocbsf,scdirbsf);
 							scesfuerzopropiobsfmv = direccionejecutiva(scdivobsfmv,scdivocbsfmv,scdirbsfmv);
 							scesfuerzopropiobsfant = direccionejecutiva(scdivobsfant,scdivocbsfant,scdirbsfant)

 							scesfuerzopropiodolr = direccionejecutiva(scdivodolr,scdivocdolr,scdirdolr);
 							scesfuerzopropiodol = direccionejecutiva(scdivodol,scdivocdol,scdirdol);
 							scesfuerzopropiodolmv = direccionejecutiva(scdivodolmv,scdivocdolmv,scdirdolmv);
 							scesfuerzopropiodolant = direccionejecutiva(scdivodolant,scdivocdolant,scdirdolant)

 							scesfuerzopropioDeqvr = direccionejecutiva(scdivoDeqvr,scdivocDeqvr,scdirDeqvr);
 							scesfuerzopropioDeqv = direccionejecutiva(scdivoDeqv,scdivocDeqv,scdirDeqv);
 							scesfuerzopropioDeqvmv = direccionejecutiva(scdivoDeqvmv,scdivocDeqvmv,scdirDeqvmv);
 							scesfuerzopropioDeqvant = direccionejecutiva(scdivoDeqvant,scdivocDeqvant,scdirDeqvant)

 							////////OTROS

 							oesfuerzopropiobsfr = direccionejecutiva(odivobsfr,odivocbsfr,odirbsfr);
 							oesfuerzopropiobsf = direccionejecutiva(odivobsf,odivocbsf,odirbsf);
 							oesfuerzopropiobsfmv = direccionejecutiva(odivobsfmv,odivocbsfmv,odirbsfmv);
 							oesfuerzopropiobsfant = direccionejecutiva(odivobsfant,odivocbsfant,odirbsfant)

 							oesfuerzopropiodolr = direccionejecutiva(odivodolr,odivocdolr,odirdolr);
 							oesfuerzopropiodol = direccionejecutiva(odivodol,odivocdol,odirdol);
 							oesfuerzopropiodolmv = direccionejecutiva(odivodolmv,odivocdolmv,odirdolmv);
 							oesfuerzopropiodolant = direccionejecutiva(odivodolant,odivocdolant,odirdolant)

 							oesfuerzopropioDeqvr = direccionejecutiva(odivoDeqvr,odivocDeqvr,odirDeqvr);
 							oesfuerzopropioDeqv = direccionejecutiva(odivoDeqv,odivocDeqv,odirDeqv);
 							oesfuerzopropioDeqvmv = direccionejecutiva(odivoDeqvmv,odivocDeqvmv,odirDeqvmv);
 							oesfuerzopropioDeqvant = direccionejecutiva(odivoDeqvant,odivocDeqvant,odirDeqvant)

 						//////////////// EMPRESAS MIXTAS 
 						
 						////////PLAN
 						// PETROSUCRE EN BOLIVARES 					
						var laborpsbsf = filtrarcostomixta(pmix,filtrolabor,1,'_p',1);
						var bbpsbsf = filtrarcostomixta(pmix,filtrobb,1,'_p',1);
						var mpsbsf = filtrarcostomixta(pmix,filtrom,1,'_p',1);
						var scpsbsf = filtrarcostomixta(pmix,filtrosc,1,'_p',1);
						var opsbsf = filtrarcostomixta(pmix,filtroo,1,'_p',1);
						var totalpsbsf = filtrartotal(laborpsbsf,bbpsbsf,mpsbsf,scpsbsf,opsbsf);
 						
 					
 				     	// PETROSUCRE EN DOLARES
 						 var laborpsdol = filtrarcostomixta(pmix,filtrolabor,1,'_p',2);
 						 var bbpsdol = filtrarcostomixta(pmix,filtrobb,1,'_p',2);
 						 var mpsdol = filtrarcostomixta(pmix,filtrom,1,'_p',2);
 						 var scpsdol = filtrarcostomixta(pmix,filtrosc,1,'_p',2);
 						 var opsdol = filtrarcostomixta(pmix,filtroo,1,'_p',2);
 						 var totalpsdol = filtrartotal(laborpsdol,bbpsdol,mpsdol,scpsdol,opsdol);
 						 
 						  /// PETROSUCRE EN DOLARES EQUIVALENTES
 						 var laborpsDeqv = filtroequivalente(laborpsbsf,laborpsdol);
 						 var bbpsDeqv = filtroequivalente(bbpsbsf,bbpsdol);
 						 var mpsDeqv = filtroequivalente(mpsbsf,mpsdol);
 						 var scpsDeqv = filtroequivalente(scpsbsf,scpsdol);
 						 var opsDeqv = filtroequivalente(opsbsf,opsdol);
 						 var totalpsDeqv = filtrartotal(laborpsDeqv,bbpsDeqv,mpsDeqv,scpsDeqv,opsDeqv);


 						 // PETROWARAO EN BOLIVARES 					
						var laborpwbsf = filtrarcostomixta(pmix,filtrolabor,2,'_p',1);
						var bbpwbsf = filtrarcostomixta(pmix,filtrobb,2,'_p',1);
						var mpwbsf = filtrarcostomixta(pmix,filtrom,2,'_p',1);
						var scpwbsf = filtrarcostomixta(pmix,filtrosc,2,'_p',1);
						var opwbsf = filtrarcostomixta(pmix,filtroo,2,'_p',1);
						var totalpwbsf = filtrartotal(laborpwbsf,bbpwbsf,mpwbsf,scpwbsf,opwbsf);
 						
 					
 				     	// PETROWARAO EN DOLARES
 						 var laborpwdol = filtrarcostomixta(pmix,filtrolabor,2,'_p',2);
 						 var bbpwdol = filtrarcostomixta(pmix,filtrobb,2,'_p',2);
 						 var mpwdol = filtrarcostomixta(pmix,filtrom,2,'_p',2);
 						 var scpwdol = filtrarcostomixta(pmix,filtrosc,2,'_p',2);
 						 var opwdol = filtrarcostomixta(pmix,filtroo,2,'_p',2);
 						 var totalpwdol = filtrartotal(laborpwdol,bbpwdol,mpwdol,scpwdol,opwdol);
 						 
 						  /// PETROWARAO EN DOLARES EQUIVALENTES
 						 var laborpwDeqv = filtroequivalente(laborpwbsf,laborpwdol);
 						 var bbpwDeqv = filtroequivalente(bbpwbsf,bbpwdol);
 						 var mpwDeqv = filtroequivalente(mpwbsf,mpwdol);
 						 var scpwDeqv = filtroequivalente(scpwbsf,scpwdol);
 						 var opwDeqv = filtroequivalente(opwbsf,opwdol);
 						 var totalpwDeqv = filtrartotal(laborpwDeqv,bbpwDeqv,mpwDeqv,scpwDeqv,opwDeqv);


 						 //////// PETREOLERA PARIA 
 						 var laborppbsf = filtrarcostomixta(pmix,filtrolabor,3,'_p',1);
						var bbppbsf = filtrarcostomixta(pmix,filtrobb,3,'_p',1);
						var mppbsf = filtrarcostomixta(pmix,filtrom,3,'_p',1);
						var scppbsf = filtrarcostomixta(pmix,filtrosc,3,'_p',1);
						var oppbsf = filtrarcostomixta(pmix,filtroo,3,'_p',1);
						var totalppbsf = filtrartotal(laborppbsf,bbppbsf,mppbsf,scppbsf,oppbsf);
 						
 					
 				     	// PETREOLERA PARIA EN DOLARES
 						 var laborppdol = filtrarcostomixta(pmix,filtrolabor,3,'_p',2);
 						 var bbppdol = filtrarcostomixta(pmix,filtrobb,3,'_p',2);
 						 var mppdol = filtrarcostomixta(pmix,filtrom,3,'_p',2);
 						 var scppdol = filtrarcostomixta(pmix,filtrosc,3,'_p',2);
 						 var oppdol = filtrarcostomixta(pmix,filtroo,3,'_p',2);
 						 var totalppdol = filtrartotal(laborppdol,bbppdol,mppdol,scppdol,oppdol);
 						 
 						  /// PETREOLERA PARIA EN DOLARES EQUIVALENTES
 						 var laborppDeqv = filtroequivalente(laborppbsf,laborppdol);
 						 var bbppDeqv = filtroequivalente(bbppbsf,bbppdol);
 						 var mppDeqv = filtroequivalente(mppbsf,mppdol);
 						 var scppDeqv = filtroequivalente(scppbsf,scppdol);
 						 var oppDeqv = filtroequivalente(oppbsf,oppdol);
 						 var totalppDeqv = filtrartotal(laborppDeqv,bbppDeqv,mppDeqv,scppDeqv,oppDeqv);



 						 //////// CARDON IV
 						 var laborcarbsf = filtrarcostomixta(pmix,filtrolabor,4,'_p',1);
						var bbcarbsf = filtrarcostomixta(pmix,filtrobb,4,'_p',1);
						var mcarbsf = filtrarcostomixta(pmix,filtrom,4,'_p',1);
						var sccarbsf = filtrarcostomixta(pmix,filtrosc,4,'_p',1);
						var ocarbsf = filtrarcostomixta(pmix,filtroo,4,'_p',1);
						var totalcarbsf = filtrartotal(laborcarbsf,bbcarbsf,mcarbsf,sccarbsf,ocarbsf);
 						
 					
 				     	// CARDON IV EN DOLARES
 						 var laborcardol = filtrarcostomixta(pmix,filtrolabor,4,'_p',2);
 						 var bbcardol = filtrarcostomixta(pmix,filtrobb,4,'_p',2);
 						 var mcardol = filtrarcostomixta(pmix,filtrom,4,'_p',2);
 						 var sccardol = filtrarcostomixta(pmix,filtrosc,4,'_p',2);
 						 var ocardol = filtrarcostomixta(pmix,filtroo,4,'_p',2);
 						 var totalcardol = filtrartotal(laborcardol,bbcardol,mcardol,sccardol,ocardol);
 						 
 						  /// CARDON IV EN DOLARES EQUIVALENTES
 						 var laborcarDeqv = filtroequivalente(laborcarbsf,laborcardol);
 						 var bbcarDeqv = filtroequivalente(bbcarbsf,bbcardol);
 						 var mcarDeqv = filtroequivalente(mcarbsf,mcardol);
 						 var sccarDeqv = filtroequivalente(sccarbsf,sccardol);
 						 var ocarDeqv = filtroequivalente(ocarbsf,ocardol);
 						 var totalcarDeqv = filtrartotal(laborcarDeqv,bbcarDeqv,mcarDeqv,sccarDeqv,ocarDeqv);



 						 //////// PETROCUMAREBO
 						 var laborpcbsf = filtrarcostomixta(pmix,filtrolabor,5,'_p',1);
						var bbpcbsf = filtrarcostomixta(pmix,filtrobb,5,'_p',1);
						var mpcbsf = filtrarcostomixta(pmix,filtrom,5,'_p',1);
						var scpcbsf = filtrarcostomixta(pmix,filtrosc,5,'_p',1);
						var opcbsf = filtrarcostomixta(pmix,filtroo,5,'_p',1);
						var totalpcbsf = filtrartotal(laborpcbsf,bbpcbsf,mpcbsf,scpcbsf,opcbsf);
 						
 					
 				     	// PETROCUMAREBO EN DOLARES
 						 var laborpcdol = filtrarcostomixta(pmix,filtrolabor,5,'_p',2);
 						 var bbpcdol = filtrarcostomixta(pmix,filtrobb,5,'_p',2);
 						 var mpcdol = filtrarcostomixta(pmix,filtrom,5,'_p',2);
 						 var scpcdol = filtrarcostomixta(pmix,filtrosc,5,'_p',2);
 						 var opcdol = filtrarcostomixta(pmix,filtroo,5,'_p',2);
 						 var totalpcdol = filtrartotal(laborpcdol,bbpcdol,mpcdol,scpcdol,opcdol);
 						 
 						  /// PETROCUMAREBO EN DOLARES EQUIVALENTES
 						 var laborpcDeqv = filtroequivalente(laborpcbsf,laborpcdol);
 						 var bbpcDeqv = filtroequivalente(bbpcbsf,bbpcdol);
 						 var mpcDeqv = filtroequivalente(mpcbsf,mpcdol);
 						 var scpcDeqv = filtroequivalente(scpcbsf,scpcdol);
 						 var opcDeqv = filtroequivalente(opcbsf,opcdol);
 						 var totalpcDeqv = filtrartotal(laborpcDeqv,bbpcDeqv,mpcDeqv,scpcDeqv,opcDeqv);

 						 //////FIN PLAN 

 						 ////////REAL
 						// PETROSUCRE EN BOLIVARES 					
						var laborpsbsfr = filtrarcostomixta(rmix,filtrolabor,1,'_r',1);
						var bbpsbsfr = filtrarcostomixta(rmix,filtrobb,1,'_r',1);
						var mpsbsfr = filtrarcostomixta(rmix,filtrom,1,'_r',1);
						var scpsbsfr = filtrarcostomixta(rmix,filtrosc,1,'_r',1);
						var opsbsfr = filtrarcostomixta(rmix,filtroo,1,'_r',1);
						var totalpsbsfr = filtrartotal(laborpsbsfr,bbpsbsfr,mpsbsfr,scpsbsfr,opsbsfr);
 						
 					
 				     	// PETROSUCRE EN DOLARES
 						 var laborpsdolr = filtrarcostomixta(rmix,filtrolabor,1,'_r',2);
 						 var bbpsdolr = filtrarcostomixta(rmix,filtrobb,1,'_r',2);
 						 var mpsdolr = filtrarcostomixta(rmix,filtrom,1,'_r',2);
 						 var scpsdolr = filtrarcostomixta(rmix,filtrosc,1,'_r',2);
 						 var opsdolr = filtrarcostomixta(rmix,filtroo,1,'_r',2);
 						 var totalpsdolr = filtrartotal(laborpsdolr,bbpsdolr,mpsdolr,scpsdolr,opsdolr);
 						 
 						  /// PETROSUCRE EN DOLrARES EQUIVALENTES
 						 var laborpsDeqvr = filtroequivalente(laborpsbsfr,laborpsdolr);
 						 var bbpsDeqvr = filtroequivalente(bbpsbsfr,bbpsdolr);
 						 var mpsDeqvr = filtroequivalente(mpsbsfr,mpsdolr);
 						 var scpsDeqvr = filtroequivalente(scpsbsfr,scpsdolr);
 						 var opsDeqvr = filtroequivalente(opsbsfr,opsdolr);
 						 var totalpsDeqvr = filtrartotal(laborpsDeqvr,bbpsDeqvr,mpsDeqvr,scpsDeqvr,opsDeqvr);


 						 // PETROWARAO EN BOLIVARES 					
						var laborpwbsfr = filtrarcostomixta(rmix,filtrolabor,2,'_r',1);
						var bbpwbsfr = filtrarcostomixta(rmix,filtrobb,2,'_r',1);
						var mpwbsfr = filtrarcostomixta(rmix,filtrom,2,'_r',1);
						var scpwbsfr = filtrarcostomixta(rmix,filtrosc,2,'_r',1);
						var opwbsfr = filtrarcostomixta(rmix,filtroo,2,'_r',1);
						var totalpwbsfr = filtrartotal(laborpwbsfr,bbpwbsfr,mpwbsfr,scpwbsfr,opwbsfr);
 						
 					
 				     	// PETROWARAO EN DOLrARES
 						 var laborpwdolr = filtrarcostomixta(rmix,filtrolabor,2,'_r',2);
 						 var bbpwdolr = filtrarcostomixta(rmix,filtrobb,2,'_r',2);
 						 var mpwdolr = filtrarcostomixta(rmix,filtrom,2,'_r',2);
 						 var scpwdolr = filtrarcostomixta(rmix,filtrosc,2,'_r',2);
 						 var opwdolr = filtrarcostomixta(rmix,filtroo,2,'_r',2);
 						 var totalpwdolr = filtrartotal(laborpwdolr,bbpwdolr,mpwdolr,scpwdolr,opwdolr);
 						 
 						  /// PETROWARAO EN DOLrARES EQUIVALENTES
 						 var laborpwDeqvr = filtroequivalente(laborpwbsfr,laborpwdolr);
 						 var bbpwDeqvr = filtroequivalente(bbpwbsfr,bbpwdolr);
 						 var mpwDeqvr = filtroequivalente(mpwbsfr,mpwdolr);
 						 var scpwDeqvr = filtroequivalente(scpwbsfr,scpwdolr);
 						 var opwDeqvr = filtroequivalente(opwbsfr,opwdolr);
 						 var totalpwDeqvr = filtrartotal(laborpwDeqvr,bbpwDeqvr,mpwDeqvr,scpwDeqvr,opwDeqvr);


 						 //////// PETREOLERA PARIA 
 						 var laborppbsfr = filtrarcostomixta(rmix,filtrolabor,3,'_r',1);
						var bbppbsfr = filtrarcostomixta(rmix,filtrobb,3,'_r',1);
						var mppbsfr = filtrarcostomixta(rmix,filtrom,3,'_r',1);
						var scppbsfr = filtrarcostomixta(rmix,filtrosc,3,'_r',1);
						var oppbsfr = filtrarcostomixta(rmix,filtroo,3,'_r',1);
						var totalppbsfr = filtrartotal(laborppbsfr,bbppbsfr,mppbsfr,scppbsfr,oppbsfr);
 						
 					
 				     	// PETREOLERA PARIA EN DOLrARES
 						 var laborppdolr = filtrarcostomixta(rmix,filtrolabor,3,'_r',2);
 						 var bbppdolr = filtrarcostomixta(rmix,filtrobb,3,'_r',2);
 						 var mppdolr = filtrarcostomixta(rmix,filtrom,3,'_r',2);
 						 var scppdolr = filtrarcostomixta(rmix,filtrosc,3,'_r',2);
 						 var oppdolr = filtrarcostomixta(rmix,filtroo,3,'_r',2);
 						 var totalppdolr = filtrartotal(laborppdolr,bbppdolr,mppdolr,scppdolr,oppdolr);
 						 
 						  /// PETREOLERA PARIA EN DOLrARES EQUIVALENTES
 						 var laborppDeqvr = filtroequivalente(laborppbsfr,laborppdolr);
 						 var bbppDeqvr = filtroequivalente(bbppbsfr,bbppdolr);
 						 var mppDeqvr = filtroequivalente(mppbsfr,mppdolr);
 						 var scppDeqvr = filtroequivalente(scppbsfr,scppdolr);
 						 var oppDeqvr = filtroequivalente(oppbsfr,oppdolr);
 						 var totalppDeqvr = filtrartotal(laborppDeqvr,bbppDeqvr,mppDeqvr,scppDeqvr,oppDeqvr);



 						 //////// CARDON IV
 						 var laborcarbsfr = filtrarcostomixta(rmix,filtrolabor,4,'_r',1);
						var bbcarbsfr = filtrarcostomixta(rmix,filtrobb,4,'_r',1);
						var mcarbsfr = filtrarcostomixta(rmix,filtrom,4,'_r',1);
						var sccarbsfr = filtrarcostomixta(rmix,filtrosc,4,'_r',1);
						var ocarbsfr = filtrarcostomixta(rmix,filtroo,4,'_r',1);
						var totalcarbsfr = filtrartotal(laborcarbsfr,bbcarbsfr,mcarbsfr,sccarbsfr,ocarbsfr);
 						
 					
 				     	// CARDON IV EN DOLrARES
 						 var laborcardolr = filtrarcostomixta(rmix,filtrolabor,4,'_r',2);
 						 var bbcardolr = filtrarcostomixta(rmix,filtrobb,4,'_r',2);
 						 var mcardolr = filtrarcostomixta(rmix,filtrom,4,'_r',2);
 						 var sccardolr = filtrarcostomixta(rmix,filtrosc,4,'_r',2);
 						 var ocardolr = filtrarcostomixta(rmix,filtroo,4,'_r',2);
 						 var totalcardolr = filtrartotal(laborcardolr,bbcardolr,mcardolr,sccardolr,ocardolr);
 						 
 						  /// CARDON IV EN DOLrARES EQUIVALENTES
 						 var laborcarDeqvr = filtroequivalente(laborcarbsfr,laborcardolr);
 						 var bbcarDeqvr = filtroequivalente(bbcarbsfr,bbcardolr);
 						 var mcarDeqvr = filtroequivalente(mcarbsfr,mcardolr);
 						 var sccarDeqvr = filtroequivalente(sccarbsfr,sccardolr);
 						 var ocarDeqvr = filtroequivalente(ocarbsfr,ocardolr);
 						 var totalcarDeqvr = filtrartotal(laborcarDeqvr,bbcarDeqvr,mcarDeqvr,sccarDeqvr,ocarDeqvr);



 						 //////// PETROCUMAREBO
 						 var laborpcbsfr = filtrarcostomixta(rmix,filtrolabor,5,'_r',1);
						var bbpcbsfr = filtrarcostomixta(rmix,filtrobb,5,'_r',1);
						var mpcbsfr = filtrarcostomixta(rmix,filtrom,5,'_r',1);
						var scpcbsfr = filtrarcostomixta(rmix,filtrosc,5,'_r',1);
						var opcbsfr = filtrarcostomixta(rmix,filtroo,5,'_r',1);
						var totalpcbsfr = filtrartotal(laborpcbsfr,bbpcbsfr,mpcbsfr,scpcbsfr,opcbsfr);
 						
 					
 				     	// PETROCUMAREBO EN DOLrARES
 						 var laborpcdolr = filtrarcostomixta(rmix,filtrolabor,5,'_r',2);
 						 var bbpcdolr = filtrarcostomixta(rmix,filtrobb,5,'_r',2);
 						 var mpcdolr = filtrarcostomixta(rmix,filtrom,5,'_r',2);
 						 var scpcdolr = filtrarcostomixta(rmix,filtrosc,5,'_r',2);
 						 var opcdolr = filtrarcostomixta(rmix,filtroo,5,'_r',2);
 						 var totalpcdolr = filtrartotal(laborpcdolr,bbpcdolr,mpcdolr,scpcdolr,opcdolr);
 						 
 						  /// PETROCUMAREBO EN DOLrARES EQUIVALENTES
 						 var laborpcDeqvr = filtroequivalente(laborpcbsfr,laborpcdolr);
 						 var bbpcDeqvr = filtroequivalente(bbpcbsfr,bbpcdolr);
 						 var mpcDeqvr = filtroequivalente(mpcbsfr,mpcdolr);
 						 var scpcDeqvr = filtroequivalente(scpcbsfr,scpcdolr);
 						 var opcDeqvr = filtroequivalente(opcbsfr,opcdolr);
 						 var totalpcDeqvr = filtrartotal(laborpcDeqvr,bbpcDeqvr,mpcDeqvr,scpcDeqvr,opcDeqvr);

 						 //////FIN REAL 

 						 	 ////////MEJOR VISION
 						// PETROSUCRE EN BOLIVARES 					
						var laborpsbsfmv = filtrarcostomixta(mvmix,filtrolabor,1,'_mv',1);
						var bbpsbsfmv = filtrarcostomixta(mvmix,filtrobb,1,'_mv',1);
						var mpsbsfmv = filtrarcostomixta(mvmix,filtrom,1,'_mv',1);
						var scpsbsfmv = filtrarcostomixta(mvmix,filtrosc,1,'_mv',1);
						var opsbsfmv = filtrarcostomixta(mvmix,filtroo,1,'_mv',1);
						var totalpsbsfmv = filtrartotal(laborpsbsfmv,bbpsbsfmv,mpsbsfmv,scpsbsfmv,opsbsfmv);
 						
 					
 				     	// PETROSUCRE EN DOLARES
 						 var laborpsdolmv = filtrarcostomixta(mvmix,filtrolabor,1,'_mv',2);
 						 var bbpsdolmv = filtrarcostomixta(mvmix,filtrobb,1,'_mv',2);
 						 var mpsdolmv = filtrarcostomixta(mvmix,filtrom,1,'_mv',2);
 						 var scpsdolmv = filtrarcostomixta(mvmix,filtrosc,1,'_mv',2);
 						 var opsdolmv = filtrarcostomixta(mvmix,filtroo,1,'_mv',2);
 						 var totalpsdolmv = filtrartotal(laborpsdolmv,bbpsdolmv,mpsdolmv,scpsdolmv,opsdolmv);
 						 
 						  /// PETROSUCRE EN DOLmvARES EQUIVALENTES
 						 var laborpsDeqvmv = filtroequivalente(laborpsbsfmv,laborpsdolmv);
 						 var bbpsDeqvmv = filtroequivalente(bbpsbsfmv,bbpsdolmv);
 						 var mpsDeqvmv = filtroequivalente(mpsbsfmv,mpsdolmv);
 						 var scpsDeqvmv = filtroequivalente(scpsbsfmv,scpsdolmv);
 						 var opsDeqvmv = filtroequivalente(opsbsfmv,opsdolmv);
 						 var totalpsDeqvmv = filtrartotal(laborpsDeqvmv,bbpsDeqvmv,mpsDeqvmv,scpsDeqvmv,opsDeqvmv);


 						 // PETROWARAO EN BOLIVARES 					
						var laborpwbsfmv = filtrarcostomixta(mvmix,filtrolabor,2,'_mv',1);
						var bbpwbsfmv = filtrarcostomixta(mvmix,filtrobb,2,'_mv',1);
						var mpwbsfmv = filtrarcostomixta(mvmix,filtrom,2,'_mv',1);
						var scpwbsfmv = filtrarcostomixta(mvmix,filtrosc,2,'_mv',1);
						var opwbsfmv = filtrarcostomixta(mvmix,filtroo,2,'_mv',1);
						var totalpwbsfmv = filtrartotal(laborpwbsfmv,bbpwbsfmv,mpwbsfmv,scpwbsfmv,opwbsfmv);
 						
 					
 				     	// PETROWARAO EN DOLmvARES
 						 var laborpwdolmv = filtrarcostomixta(mvmix,filtrolabor,2,'_mv',2);
 						 var bbpwdolmv = filtrarcostomixta(mvmix,filtrobb,2,'_mv',2);
 						 var mpwdolmv = filtrarcostomixta(mvmix,filtrom,2,'_mv',2);
 						 var scpwdolmv = filtrarcostomixta(mvmix,filtrosc,2,'_mv',2);
 						 var opwdolmv = filtrarcostomixta(mvmix,filtroo,2,'_mv',2);
 						 var totalpwdolmv = filtrartotal(laborpwdolmv,bbpwdolmv,mpwdolmv,scpwdolmv,opwdolmv);
 						 
 						  /// PETROWARAO EN DOLmvARES EQUIVALENTES
 						 var laborpwDeqvmv = filtroequivalente(laborpwbsfmv,laborpwdolmv);
 						 var bbpwDeqvmv = filtroequivalente(bbpwbsfmv,bbpwdolmv);
 						 var mpwDeqvmv = filtroequivalente(mpwbsfmv,mpwdolmv);
 						 var scpwDeqvmv = filtroequivalente(scpwbsfmv,scpwdolmv);
 						 var opwDeqvmv = filtroequivalente(opwbsfmv,opwdolmv);
 						 var totalpwDeqvmv = filtrartotal(laborpwDeqvmv,bbpwDeqvmv,mpwDeqvmv,scpwDeqvmv,opwDeqvmv);


 						 //////// PETREOLERA PARIA 
 						 var laborppbsfmv = filtrarcostomixta(mvmix,filtrolabor,3,'_mv',1);
						var bbppbsfmv = filtrarcostomixta(mvmix,filtrobb,3,'_mv',1);
						var mppbsfmv = filtrarcostomixta(mvmix,filtrom,3,'_mv',1);
						var scppbsfmv = filtrarcostomixta(mvmix,filtrosc,3,'_mv',1);
						var oppbsfmv = filtrarcostomixta(mvmix,filtroo,3,'_mv',1);
						var totalppbsfmv = filtrartotal(laborppbsfmv,bbppbsfmv,mppbsfmv,scppbsfmv,oppbsfmv);
 						
 					
 				     	// PETREOLERA PARIA EN DOLmvARES
 						 var laborppdolmv = filtrarcostomixta(mvmix,filtrolabor,3,'_mv',2);
 						 var bbppdolmv = filtrarcostomixta(mvmix,filtrobb,3,'_mv',2);
 						 var mppdolmv = filtrarcostomixta(mvmix,filtrom,3,'_mv',2);
 						 var scppdolmv = filtrarcostomixta(mvmix,filtrosc,3,'_mv',2);
 						 var oppdolmv = filtrarcostomixta(mvmix,filtroo,3,'_mv',2);
 						 var totalppdolmv = filtrartotal(laborppdolmv,bbppdolmv,mppdolmv,scppdolmv,oppdolmv);
 						 
 						  /// PETREOLERA PARIA EN DOLmvARES EQUIVALENTES
 						 var laborppDeqvmv = filtroequivalente(laborppbsfmv,laborppdolmv);
 						 var bbppDeqvmv = filtroequivalente(bbppbsfmv,bbppdolmv);
 						 var mppDeqvmv = filtroequivalente(mppbsfmv,mppdolmv);
 						 var scppDeqvmv = filtroequivalente(scppbsfmv,scppdolmv);
 						 var oppDeqvmv = filtroequivalente(oppbsfmv,oppdolmv);
 						 var totalppDeqvmv = filtrartotal(laborppDeqvmv,bbppDeqvmv,mppDeqvmv,scppDeqvmv,oppDeqvmv);



 						 //////// CARDON IV
 						 var laborcarbsfmv = filtrarcostomixta(mvmix,filtrolabor,4,'_mv',1);
						var bbcarbsfmv = filtrarcostomixta(mvmix,filtrobb,4,'_mv',1);
						var mcarbsfmv = filtrarcostomixta(mvmix,filtrom,4,'_mv',1);
						var sccarbsfmv = filtrarcostomixta(mvmix,filtrosc,4,'_mv',1);
						var ocarbsfmv = filtrarcostomixta(mvmix,filtroo,4,'_mv',1);
						var totalcarbsfmv = filtrartotal(laborcarbsfmv,bbcarbsfmv,mcarbsfmv,sccarbsfmv,ocarbsfmv);
 						
 				     	// CARDON IV EN DOLmvARES
 						 var laborcardolmv = filtrarcostomixta(mvmix,filtrolabor,4,'_mv',2);
 						 var bbcardolmv = filtrarcostomixta(mvmix,filtrobb,4,'_mv',2);
 						 var mcardolmv = filtrarcostomixta(mvmix,filtrom,4,'_mv',2);
 						 var sccardolmv = filtrarcostomixta(mvmix,filtrosc,4,'_mv',2);
 						 var ocardolmv = filtrarcostomixta(mvmix,filtroo,4,'_mv',2);
 						 var totalcardolmv = filtrartotal(laborcardolmv,bbcardolmv,mcardolmv,sccardolmv,ocardolmv);
 						 
 						  /// CARDON IV EN DOLmvARES EQUIVALENTES
 						 var laborcarDeqvmv = filtroequivalente(laborcarbsfmv,laborcardolmv);
 						 var bbcarDeqvmv = filtroequivalente(bbcarbsfmv,bbcardolmv);
 						 var mcarDeqvmv = filtroequivalente(mcarbsfmv,mcardolmv);
 						 var sccarDeqvmv = filtroequivalente(sccarbsfmv,sccardolmv);
 						 var ocarDeqvmv = filtroequivalente(ocarbsfmv,ocardolmv);
 						 var totalcarDeqvmv = filtrartotal(laborcarDeqvmv,bbcarDeqvmv,mcarDeqvmv,sccarDeqvmv,ocarDeqvmv);

 						 //////// PETROCUMAREBO
 						 var laborpcbsfmv = filtrarcostomixta(mvmix,filtrolabor,5,'_mv',1);
						var bbpcbsfmv = filtrarcostomixta(mvmix,filtrobb,5,'_mv',1);
						var mpcbsfmv = filtrarcostomixta(mvmix,filtrom,5,'_mv',1);
						var scpcbsfmv = filtrarcostomixta(mvmix,filtrosc,5,'_mv',1);
						var opcbsfmv = filtrarcostomixta(mvmix,filtroo,5,'_mv',1);
						var totalpcbsfmv = filtrartotal(laborpcbsfmv,bbpcbsfmv,mpcbsfmv,scpcbsfmv,opcbsfmv);
 						
 				     	// PETROCUMAREBO EN DOLmvARES
 						 var laborpcdolmv = filtrarcostomixta(mvmix,filtrolabor,5,'_mv',2);
 						 var bbpcdolmv = filtrarcostomixta(mvmix,filtrobb,5,'_mv',2);
 						 var mpcdolmv = filtrarcostomixta(mvmix,filtrom,5,'_mv',2);
 						 var scpcdolmv = filtrarcostomixta(mvmix,filtrosc,5,'_mv',2);
 						 var opcdolmv = filtrarcostomixta(mvmix,filtroo,5,'_mv',2);
 						 var totalpcdolmv = filtrartotal(laborpcdolmv,bbpcdolmv,mpcdolmv,scpcdolmv,opcdolmv);
 						 
 						  /// PETROCUMAREBO EN DOLmvARES EQUIVALENTES
 						 var laborpcDeqvmv = filtroequivalente(laborpcbsfmv,laborpcdolmv);
 						 var bbpcDeqvmv = filtroequivalente(bbpcbsfmv,bbpcdolmv);
 						 var mpcDeqvmv = filtroequivalente(mpcbsfmv,mpcdolmv);
 						 var scpcDeqvmv = filtroequivalente(scpcbsfmv,scpcdolmv);
 						 var opcDeqvmv = filtroequivalente(opcbsfmv,opcdolmv);
 						 var totalpcDeqvmv = filtrartotal(laborpcDeqvmv,bbpcDeqvmv,mpcDeqvmv,scpcDeqvmv,opcDeqvmv);

 						 //////FIN MEJOR VISION 

 						 	 	 ////////ANTEPROYECTO
 						// PETROSUCRE EN BOLIVARES 					
						var laborpsbsfant = filtrarcostomixta(antmix,filtrolabor,1,'_ant',1);
						var bbpsbsfant = filtrarcostomixta(antmix,filtrobb,1,'_ant',1);
						var mpsbsfant = filtrarcostomixta(antmix,filtrom,1,'_ant',1);
						var scpsbsfant = filtrarcostomixta(antmix,filtrosc,1,'_ant',1);
						var opsbsfant = filtrarcostomixta(antmix,filtroo,1,'_ant',1);
						var totalpsbsfant = filtrartotal(laborpsbsfant,bbpsbsfant,mpsbsfant,scpsbsfant,opsbsfant);
 						
 					
 				     	// PETROSUCRE EN DOLARES
 						 var laborpsdolant = filtrarcostomixta(antmix,filtrolabor,1,'_ant',2);
 						 var bbpsdolant = filtrarcostomixta(antmix,filtrobb,1,'_ant',2);
 						 var mpsdolant = filtrarcostomixta(antmix,filtrom,1,'_ant',2);
 						 var scpsdolant = filtrarcostomixta(antmix,filtrosc,1,'_ant',2);
 						 var opsdolant = filtrarcostomixta(antmix,filtroo,1,'_ant',2);
 						 var totalpsdolant = filtrartotal(laborpsdolant,bbpsdolant,mpsdolant,scpsdolant,opsdolant);
 						 
 						  /// PETROSUCRE EN DOLantARES EQUIVALENTES
 						 var laborpsDeqvant = filtroequivalente(laborpsbsfant,laborpsdolant);
 						 var bbpsDeqvant = filtroequivalente(bbpsbsfant,bbpsdolant);
 						 var mpsDeqvant = filtroequivalente(mpsbsfant,mpsdolant);
 						 var scpsDeqvant = filtroequivalente(scpsbsfant,scpsdolant);
 						 var opsDeqvant = filtroequivalente(opsbsfant,opsdolant);
 						 var totalpsDeqvant = filtrartotal(laborpsDeqvant,bbpsDeqvant,mpsDeqvant,scpsDeqvant,opsDeqvant);


 						 // PETROWARAO EN BOLIVARES 					
						var laborpwbsfant = filtrarcostomixta(antmix,filtrolabor,2,'_ant',1);
						var bbpwbsfant = filtrarcostomixta(antmix,filtrobb,2,'_ant',1);
						var mpwbsfant = filtrarcostomixta(antmix,filtrom,2,'_ant',1);
						var scpwbsfant = filtrarcostomixta(antmix,filtrosc,2,'_ant',1);
						var opwbsfant = filtrarcostomixta(antmix,filtroo,2,'_ant',1);
						var totalpwbsfant = filtrartotal(laborpwbsfant,bbpwbsfant,mpwbsfant,scpwbsfant,opwbsfant);
 						
 					
 				     	// PETROWARAO EN DOLantARES
 						 var laborpwdolant = filtrarcostomixta(antmix,filtrolabor,2,'_ant',2);
 						 var bbpwdolant = filtrarcostomixta(antmix,filtrobb,2,'_ant',2);
 						 var mpwdolant = filtrarcostomixta(antmix,filtrom,2,'_ant',2);
 						 var scpwdolant = filtrarcostomixta(antmix,filtrosc,2,'_ant',2);
 						 var opwdolant = filtrarcostomixta(antmix,filtroo,2,'_ant',2);
 						 var totalpwdolant = filtrartotal(laborpwdolant,bbpwdolant,mpwdolant,scpwdolant,opwdolant);
 						 
 						  /// PETROWARAO EN DOLantARES EQUIVALENTES
 						 var laborpwDeqvant = filtroequivalente(laborpwbsfant,laborpwdolant);
 						 var bbpwDeqvant = filtroequivalente(bbpwbsfant,bbpwdolant);
 						 var mpwDeqvant = filtroequivalente(mpwbsfant,mpwdolant);
 						 var scpwDeqvant = filtroequivalente(scpwbsfant,scpwdolant);
 						 var opwDeqvant = filtroequivalente(opwbsfant,opwdolant);
 						 var totalpwDeqvant = filtrartotal(laborpwDeqvant,bbpwDeqvant,mpwDeqvant,scpwDeqvant,opwDeqvant);


 						 //////// PETREOLERA PARIA 
 						 var laborppbsfant = filtrarcostomixta(antmix,filtrolabor,3,'_ant',1);
						var bbppbsfant = filtrarcostomixta(antmix,filtrobb,3,'_ant',1);
						var mppbsfant = filtrarcostomixta(antmix,filtrom,3,'_ant',1);
						var scppbsfant = filtrarcostomixta(antmix,filtrosc,3,'_ant',1);
						var oppbsfant = filtrarcostomixta(antmix,filtroo,3,'_ant',1);
						var totalppbsfant = filtrartotal(laborppbsfant,bbppbsfant,mppbsfant,scppbsfant,oppbsfant);
 						
 					
 				     	// PETREOLERA PARIA EN DOLantARES
 						 var laborppdolant = filtrarcostomixta(antmix,filtrolabor,3,'_ant',2);
 						 var bbppdolant = filtrarcostomixta(antmix,filtrobb,3,'_ant',2);
 						 var mppdolant = filtrarcostomixta(antmix,filtrom,3,'_ant',2);
 						 var scppdolant = filtrarcostomixta(antmix,filtrosc,3,'_ant',2);
 						 var oppdolant = filtrarcostomixta(antmix,filtroo,3,'_ant',2);
 						 var totalppdolant = filtrartotal(laborppdolant,bbppdolant,mppdolant,scppdolant,oppdolant);
 						 
 						  /// PETREOLERA PARIA EN DOLantARES EQUIVALENTES
 						 var laborppDeqvant = filtroequivalente(laborppbsfant,laborppdolant);
 						 var bbppDeqvant = filtroequivalente(bbppbsfant,bbppdolant);
 						 var mppDeqvant = filtroequivalente(mppbsfant,mppdolant);
 						 var scppDeqvant = filtroequivalente(scppbsfant,scppdolant);
 						 var oppDeqvant = filtroequivalente(oppbsfant,oppdolant);
 						 var totalppDeqvant = filtrartotal(laborppDeqvant,bbppDeqvant,mppDeqvant,scppDeqvant,oppDeqvant);



 						 //////// CARDON IV
 						 var laborcarbsfant = filtrarcostomixta(antmix,filtrolabor,4,'_ant',1);
						var bbcarbsfant = filtrarcostomixta(antmix,filtrobb,4,'_ant',1);
						var mcarbsfant = filtrarcostomixta(antmix,filtrom,4,'_ant',1);
						var sccarbsfant = filtrarcostomixta(antmix,filtrosc,4,'_ant',1);
						var ocarbsfant = filtrarcostomixta(antmix,filtroo,4,'_ant',1);
						var totalcarbsfant = filtrartotal(laborcarbsfant,bbcarbsfant,mcarbsfant,sccarbsfant,ocarbsfant);
 						
 				     	// CARDON IV EN DOLantARES
 						 var laborcardolant = filtrarcostomixta(antmix,filtrolabor,4,'_ant',2);
 						 var bbcardolant = filtrarcostomixta(antmix,filtrobb,4,'_ant',2);
 						 var mcardolant = filtrarcostomixta(antmix,filtrom,4,'_ant',2);
 						 var sccardolant = filtrarcostomixta(antmix,filtrosc,4,'_ant',2);
 						 var ocardolant = filtrarcostomixta(antmix,filtroo,4,'_ant',2);
 						 var totalcardolant = filtrartotal(laborcardolant,bbcardolant,mcardolant,sccardolant,ocardolant);
 						 
 						  /// CARDON IV EN DOLantARES EQUIVALENTES
 						 var laborcarDeqvant = filtroequivalente(laborcarbsfant,laborcardolant);
 						 var bbcarDeqvant = filtroequivalente(bbcarbsfant,bbcardolant);
 						 var mcarDeqvant = filtroequivalente(mcarbsfant,mcardolant);
 						 var sccarDeqvant = filtroequivalente(sccarbsfant,sccardolant);
 						 var ocarDeqvant = filtroequivalente(ocarbsfant,ocardolant);
 						 var totalcarDeqvant = filtrartotal(laborcarDeqvant,bbcarDeqvant,mcarDeqvant,sccarDeqvant,ocarDeqvant);

 						 //////// PETROCUMAREBO
 						 var laborpcbsfant = filtrarcostomixta(antmix,filtrolabor,5,'_ant',1);
						var bbpcbsfant = filtrarcostomixta(antmix,filtrobb,5,'_ant',1);
						var mpcbsfant = filtrarcostomixta(antmix,filtrom,5,'_ant',1);
						var scpcbsfant = filtrarcostomixta(antmix,filtrosc,5,'_ant',1);
						var opcbsfant = filtrarcostomixta(antmix,filtroo,5,'_ant',1);
						var totalpcbsfant = filtrartotal(laborpcbsfant,bbpcbsfant,mpcbsfant,scpcbsfant,opcbsfant);
 						
 				     	// PETROCUMAREBO EN DOLantARES
 						 var laborpcdolant = filtrarcostomixta(antmix,filtrolabor,5,'_ant',2);
 						 var bbpcdolant = filtrarcostomixta(antmix,filtrobb,5,'_ant',2);
 						 var mpcdolant = filtrarcostomixta(antmix,filtrom,5,'_ant',2);
 						 var scpcdolant = filtrarcostomixta(antmix,filtrosc,5,'_ant',2);
 						 var opcdolant = filtrarcostomixta(antmix,filtroo,5,'_ant',2);
 						 var totalpcdolant = filtrartotal(laborpcdolant,bbpcdolant,mpcdolant,scpcdolant,opcdolant);
 						 
 						  /// PETROCUMAREBO EN DOLantARES EQUIVALENTES
 						 var laborpcDeqvant = filtroequivalente(laborpcbsfant,laborpcdolant);
 						 var bbpcDeqvant = filtroequivalente(bbpcbsfant,bbpcdolant);
 						 var mpcDeqvant = filtroequivalente(mpcbsfant,mpcdolant);
 						 var scpcDeqvant = filtroequivalente(scpcbsfant,scpcdolant);
 						 var opcDeqvant = filtroequivalente(opcbsfant,opcdolant);
 						 var totalpcDeqvant = filtrartotal(laborpcDeqvant,bbpcDeqvant,mpcDeqvant,scpcDeqvant,opcDeqvant);

 						 //////FIN ANTEPROYECTO 
 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfr  = filtrardivo(laborpsbsfr,bbpsbsfr); 
 						var laborybbpsdolr = filtrardivo(laborpsdolr,bbpsdolr); 
 						var laborybbpsDeqvr= filtrardivo(laborpsDeqvr,bbpsDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbpsbsf  = filtrardivo(laborpsbsf,bbpsbsf); 
 						var laborybbpsdol  = filtrardivo(laborpsdol,bbpsdol); 
 						var laborybbpsDeqv = filtrardivo(laborpsDeqv,bbpsDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfmv  = filtrardivo(laborpsbsfmv,bbpsbsfmv); 
 						var laborybbpsdolmv  = filtrardivo(laborpsdolmv,bbpsdolmv); 
 						var laborybbpsDeqvmv = filtrardivo(laborpsDeqvmv,bbpsDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfant  = filtrardivo(laborpsbsfant,bbpsbsfant); 
 						var laborybbpsdolant  = filtrardivo(laborpsdolant,bbpsdolant); 
 						var laborybbpsDeqvant = filtrardivo(laborpsDeqvant,bbpsDeqvant);

 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbpwbsfr  = filtrardivo(laborpwbsfr,bbpwbsfr); 
 						var laborybbpwdolr = filtrardivo(laborpwdolr,bbpwdolr); 
 						var laborybbpwDeqvr= filtrardivo(laborpwDeqvr,bbpwDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbpwbsf  = filtrardivo(laborpwbsf,bbpwbsf); 
 						var laborybbpwdol  = filtrardivo(laborpwdol,bbpwdol); 
 						var laborybbpwDeqv = filtrardivo(laborpwDeqv,bbpwDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpwbsfmv  = filtrardivo(laborpwbsfmv,bbpwbsfmv); 
 						var laborybbpwdolmv  = filtrardivo(laborpwdolmv,bbpwdolmv); 
 						var laborybbpwDeqvmv = filtrardivo(laborpwDeqvmv,bbpwDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpwbsfant  = filtrardivo(laborpwbsfant,bbpwbsfant); 
 						var laborybbpwdolant  = filtrardivo(laborpwdolant,bbpwdolant); 
 						var laborybbpwDeqvant = filtrardivo(laborpwDeqvant,bbpwDeqvant);

 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbppbsfr  = filtrardivo(laborppbsfr,bbppbsfr); 
 						var laborybbppdolr = filtrardivo(laborppdolr,bbppdolr); 
 						var laborybbppDeqvr= filtrardivo(laborppDeqvr,bbppDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbppbsf  = filtrardivo(laborppbsf,bbppbsf); 
 						var laborybbppdol  = filtrardivo(laborppdol,bbppdol); 
 						var laborybbppDeqv = filtrardivo(laborppDeqv,bbppDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbppbsfmv  = filtrardivo(laborppbsfmv,bbppbsfmv); 
 						var laborybbppdolmv  = filtrardivo(laborppdolmv,bbppdolmv); 
 						var laborybbppDeqvmv = filtrardivo(laborppDeqvmv,bbppDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbppbsfant  = filtrardivo(laborppbsfant,bbppbsfant); 
 						var laborybbppdolant  = filtrardivo(laborppdolant,bbppdolant); 
 						var laborybbppDeqvant = filtrardivo(laborppDeqvant,bbppDeqvant);

 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbcarbsfr  = filtrardivo(laborcarbsfr,bbcarbsfr); 
 						var laborybbcardolr = filtrardivo(laborcardolr,bbcardolr); 
 						var laborybbcarDeqvr= filtrardivo(laborcarDeqvr,bbcarDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbcarbsf  = filtrardivo(laborcarbsf,bbcarbsf); 
 						var laborybbcardol  = filtrardivo(laborcardol,bbcardol); 
 						var laborybbcarDeqv = filtrardivo(laborcarDeqv,bbcarDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbcarbsfmv  = filtrardivo(laborcarbsfmv,bbcarbsfmv); 
 						var laborybbcardolmv  = filtrardivo(laborcardolmv,bbcardolmv); 
 						var laborybbcarDeqvmv = filtrardivo(laborcarDeqvmv,bbcarDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbcarbsfant  = filtrardivo(laborcarbsfant,bbcarbsfant); 
 						var laborybbcardolant  = filtrardivo(laborcardolant,bbcardolant); 
 						var laborybbcarDeqvant = filtrardivo(laborcarDeqvant,bbcarDeqvant);

 						 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbpcbsfr  = filtrardivo(laborpcbsfr,bbpcbsfr); 
 						var laborybbpcdolr = filtrardivo(laborpcdolr,bbpcdolr); 
 						var laborybbpcDeqvr= filtrardivo(laborpcDeqvr,bbpcDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbpcbsf  = filtrardivo(laborpcbsf,bbpcbsf); 
 						var laborybbpcdol  = filtrardivo(laborpcdol,bbpcdol); 
 						var laborybbpcDeqv = filtrardivo(laborpcDeqv,bbpcDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpcbsfmv  = filtrardivo(laborpcbsfmv,bbpcbsfmv); 
 						var laborybbpcdolmv  = filtrardivo(laborpcdolmv,bbpcdolmv); 
 						var laborybbpcDeqvmv = filtrardivo(laborpcDeqvmv,bbpcDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpcbsfant  = filtrardivo(laborpcbsfant,bbpcbsfant); 
 						var laborybbpcdolant  = filtrardivo(laborpcdolant,bbpcdolant); 
 						var laborybbpcDeqvant = filtrardivo(laborpcDeqvant,bbpcDeqvant);



 						 //// CONSOLIDADO DE EMPRESAS MIXTAS

 						 ////// LABOR 

	 					// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbembsfr  = filtrartotal(laborybbpsbsfr,laborybbpwbsfr,laborybbppbsfr,laborybbcarbsfr,laborybbpcbsfr); 
 						var laborybbemdolr  = filtrartotal(laborybbpsdolr,laborybbpwdolr,laborybbppdolr,laborybbcardolr,laborybbpcdolr); 
 						var laborybbemDeqvr = filtrartotal(laborybbpsDeqvr,laborybbpwDeqvr,laborybbppDeqvr,laborybbcarDeqvr,laborybbpcDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbembsf  = filtrartotal(laborybbpsbsf,laborybbpwbsf,laborybbppbsf,laborybbcarbsf,laborybbpcbsf); 
 						var laborybbemdol  = filtrartotal(laborybbpsdol,laborybbpwdol,laborybbppdol,laborybbcardol,laborybbpcdol); 
 						var laborybbemDeqv = filtrartotal(laborybbpsDeqv,laborybbpwDeqv,laborybbppDeqv,laborybbcarDeqv,laborybbpcDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbembsfmv  = filtrartotal(laborybbpsbsfmv,laborybbpwbsfmv,laborybbppbsfmv,laborybbcarbsfmv,laborybbpcbsfmv); 
 						var laborybbemdolmv  = filtrartotal(laborybbpsdolmv,laborybbpwdolmv,laborybbppdolmv,laborybbcardolmv,laborybbpcdolmv); 
 						var laborybbemDeqvmv = filtrartotal(laborybbpsDeqvmv,laborybbpwDeqvmv,laborybbppDeqvmv,laborybbcarDeqvmv,laborybbpcDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbembsfant  = filtrartotal(laborybbpsbsfant,laborybbpwbsfant,laborybbppbsfant,laborybbcarbsfant,laborybbpcbsfant); 
 						var laborybbemdolant  = filtrartotal(laborybbpsdolant,laborybbpwdolant,laborybbppdolant,laborybbcardolant,laborybbpcdolant); 
 						var laborybbemDeqvant = filtrartotal(laborybbpsDeqvant,laborybbpwDeqvant,laborybbppDeqvant,laborybbcarDeqvant,laborybbpcDeqvant);
	
 						////// MATERIALES

 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var membsfr  = filtrartotal(mpsbsfr,mpwbsfr,mppbsfr,mcarbsfr,mpcbsfr); 
 						var memdolr  = filtrartotal(mpsdolr,mpwdolr,mppdolr,mcardolr,mpcdolr); 
 						var memDeqvr = filtrartotal(mpsDeqvr,mpwDeqvr,mppDeqvr,mcarDeqvr,mpcDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var membsf  = filtrartotal(mpsbsf,mpwbsf,mppbsf,mcarbsf,mpcbsf); 
 						var memdol  = filtrartotal(mpsdol,mpwdol,mppdol,mcardol,mpcdol); 
 						var memDeqv = filtrartotal(mpsDeqv,mpwDeqv,mppDeqv,mcarDeqv,mpcDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var membsfmv  = filtrartotal(mpsbsfmv,mpwbsfmv,mppbsfmv,mcarbsfmv,mpcbsfmv); 
 						var memdolmv  = filtrartotal(mpsdolmv,mpwdolmv,mppdolmv,mcardolmv,mpcdolmv); 
 						var memDeqvmv = filtrartotal(mpsDeqvmv,mpwDeqvmv,mppDeqvmv,mcarDeqvmv,mpcDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var membsfant  = filtrartotal(mpsbsfant,mpwbsfant,mppbsfant,mcarbsfant,mpcbsfant); 
 						var memdolant  = filtrartotal(mpsdolant,mpwdolant,mppdolant,mcardolant,mpcdolant); 
 						var memDeqvant = filtrartotal(mpsDeqvant,mpwDeqvant,mppDeqvant,mcarDeqvant,mpcDeqvant);
	
 						///// SERVICIOS Y CONTRATOS

 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var scembsfr  = filtrartotal(scpsbsfr,scpwbsfr,scppbsfr,sccarbsfr,scpcbsfr); 
 						var scemdolr  = filtrartotal(scpsdolr,scpwdolr,scppdolr,sccardolr,scpcdolr); 
 						var scemDeqvr = filtrartotal(scpsDeqvr,scpwDeqvr,scppDeqvr,sccarDeqvr,scpcDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var scembsf  = filtrartotal(scpsbsf,scpwbsf,scppbsf,sccarbsf,scpcbsf); 
 						var scemdol  = filtrartotal(scpsdol,scpwdol,scppdol,sccardol,scpcdol); 
 						var scemDeqv = filtrartotal(scpsDeqv,scpwDeqv,scppDeqv,sccarDeqv,scpcDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var scembsfmv  = filtrartotal(scpsbsfmv,scpwbsfmv,scppbsfmv,sccarbsfmv,scpcbsfmv); 
 						var scemdolmv  = filtrartotal(scpsdolmv,scpwdolmv,scppdolmv,sccardolmv,scpcdolmv); 
 						var scemDeqvmv = filtrartotal(scpsDeqvmv,scpwDeqvmv,scppDeqvmv,sccarDeqvmv,scpcDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var scembsfant  = filtrartotal(scpsbsfant,scpwbsfant,scppbsfant,sccarbsfant,scpcbsfant); 
 						var scemdolant  = filtrartotal(scpsdolant,scpwdolant,scppdolant,sccardolant,scpcdolant); 
 						var scemDeqvant = filtrartotal(scpsDeqvant,scpwDeqvant,scppDeqvant,sccarDeqvant,scpcDeqvant);
	
 						/////// OTROS 

 							// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var oembsfr  = filtrartotal(opsbsfr,opwbsfr,oppbsfr,ocarbsfr,opcbsfr); 
 						var oemdolr  = filtrartotal(opsdolr,opwdolr,oppdolr,ocardolr,opcdolr); 
 						var oemDeqvr = filtrartotal(opsDeqvr,opwDeqvr,oppDeqvr,ocarDeqvr,opcDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var oembsf  = filtrartotal(opsbsf,opwbsf,oppbsf,ocarbsf,opcbsf); 
 						var oemdol  = filtrartotal(opsdol,opwdol,oppdol,ocardol,opcdol); 
 						var oemDeqv = filtrartotal(opsDeqv,opwDeqv,oppDeqv,ocarDeqv,opcDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var oembsfmv  = filtrartotal(opsbsfmv,opwbsfmv,oppbsfmv,ocarbsfmv,opcbsfmv); 
 						var oemdolmv  = filtrartotal(opsdolmv,opwdolmv,oppdolmv,ocardolmv,opcdolmv); 
 						var oemDeqvmv = filtrartotal(opsDeqvmv,opwDeqvmv,oppDeqvmv,ocarDeqvmv,opcDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var oembsfant  = filtrartotal(opsbsfant,opwbsfant,oppbsfant,ocarbsfant,opcbsfant); 
 						var oemdolant  = filtrartotal(opsdolant,opwdolant,oppdolant,ocardolant,opcdolant); 
 						var oemDeqvant = filtrartotal(opsDeqvant,opwDeqvant,oppDeqvant,ocarDeqvant,opcDeqvant);
	



 						////////////// DEPCA

 						//////////LABOR
	 					// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbdepcabsfr= filtrardivo(laborybbesfuerzopropiobsfr,laborybbembsfr); 
 						var laborybbdepcadolr  = filtrardivo(laborybbesfuerzopropiodolr,laborybbemdolr); 
 						var laborybbdepcaDeqvr = filtrardivo(laborybbesfuerzopropioDeqvr,laborybbemDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbdepcabsf	= filtrardivo(laborybbesfuerzopropiobsf,laborybbembsf); 
 						var laborybbdepcadol  = filtrardivo(laborybbesfuerzopropiodol,laborybbemdol); 
 						var laborybbdepcaDeqv = filtrardivo(laborybbesfuerzopropioDeqv,laborybbemDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var  laborybbdepcabsfmv = filtrardivo(laborybbesfuerzopropiobsfmv,laborybbembsfmv); 
 						var laborybbdepcadolmv  = filtrardivo(laborybbesfuerzopropiodolmv,laborybbemdolmv); 
 						var laborybbdepcaDeqvmv = filtrardivo(laborybbesfuerzopropioDeqvmv,laborybbemDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var  laborybbdepcabsfant = filtrardivo(laborybbesfuerzopropiobsfant,laborybbembsfant); 
 						var laborybbdepcadolant  = filtrardivo(laborybbesfuerzopropiodolant,laborybbemdolant); 
 						var laborybbdepcaDeqvant = filtrardivo(laborybbesfuerzopropioDeqvant,laborybbemDeqvant);
						
						///// MATERIALES

						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var mdepcabsfr  = filtrardivo(mesfuerzopropiobsfr,membsfr); 
 						var mdepcadolr  = filtrardivo(mesfuerzopropiodolr,memdolr); 
 						var mdepcaDeqvr = filtrardivo(mesfuerzopropioDeqvr,memDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var mdepcabsf  = filtrardivo(mesfuerzopropiobsf,membsf); 
 						var mdepcadol  = filtrardivo(mesfuerzopropiodol,memdol); 
 						var mdepcaDeqv = filtrardivo(mesfuerzopropioDeqv,memDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var mdepcabsfmv  = filtrardivo(mesfuerzopropiobsfmv,membsfmv); 
 						var mdepcadolmv  = filtrardivo(mesfuerzopropiodolmv,memdolmv); 
 						var mdepcaDeqvmv = filtrardivo(mesfuerzopropioDeqvmv,memDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var mdepcabsfant  = filtrardivo(mesfuerzopropiobsfant,membsfant); 
 						var mdepcadolant  = filtrardivo(mesfuerzopropiodolant,memdolant); 
 						var mdepcaDeqvant = filtrardivo(mesfuerzopropioDeqvant,memDeqvant);
	
 						//// SERVICIOS Y CONTRATOS

 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var scdepcabsfr  = filtrardivo(scesfuerzopropiobsfr,scembsfr); 
 						var scdepcadolr  = filtrardivo(scesfuerzopropiodolr,scemdolr); 
 						var scdepcaDeqvr = filtrardivo(scesfuerzopropioDeqvr,scemDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var scdepcabsf  = filtrardivo(scesfuerzopropiobsf,scembsf); 
 						var scdepcadol  = filtrardivo(scesfuerzopropiodol,scemdol); 
 						var scdepcaDeqv = filtrardivo(scesfuerzopropioDeqv,scemDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var scdepcabsfmv  = filtrardivo(scesfuerzopropiobsfmv,scembsfmv); 
 						var scdepcadolmv  = filtrardivo(scesfuerzopropiodolmv,scemdolmv); 
 						var scdepcaDeqvmv = filtrardivo(scesfuerzopropioDeqvmv,scemDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var scdepcabsfant  = filtrardivo(scesfuerzopropiobsfant,scembsfant); 
 						var scdepcadolant  = filtrardivo(scesfuerzopropiodolant,scemdolant); 
 						var scdepcaDeqvant = filtrardivo(scesfuerzopropioDeqvant,scemDeqvant);
	
 						////// OTROS

 						// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var odepcabsfr  = filtrardivo(oesfuerzopropiobsfr,oembsfr); 
 						var odepcadolr  = filtrardivo(oesfuerzopropiodolr,oemdolr); 
 						var odepcaDeqvr = filtrardivo(oesfuerzopropioDeqvr,oemDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var odepcabsf  = filtrardivo(oesfuerzopropiobsf,oembsf); 
 						var odepcadol  = filtrardivo(oesfuerzopropiodol,oemdol); 
 						var odepcaDeqv = filtrardivo(oesfuerzopropioDeqv,oemDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var odepcabsfmv  = filtrardivo(oesfuerzopropiobsfmv,oembsfmv); 
 						var odepcadolmv  = filtrardivo(oesfuerzopropiodolmv,oemdolmv); 
 						var odepcaDeqvmv = filtrardivo(oesfuerzopropioDeqvmv,oemDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var odepcabsfant  = filtrardivo(oesfuerzopropiobsfant,oembsfant); 
 						var odepcadolant  = filtrardivo(oesfuerzopropiodolant,oemdolant); 
 						var odepcaDeqvant = filtrardivo(oesfuerzopropioDeqvant,oemDeqvant);
						///// total DEPCA


							// labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var totaldepcabsfr  = filtrartotal4(laborybbdepcabsfr,mdepcabsfr,scdepcabsfr,odepcabsfr); 
 						var totaldepcadolr  = filtrartotal4(laborybbdepcadolr,mdepcadolr,scdepcadolr,odepcadolr); 
 						var totaldepcaDeqvr = filtrartotal4(laborybbdepcaDeqvr,mdepcaDeqvr,scdepcaDeqvr,odepcaDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var totaldepcabsf  = filtrartotal4(laborybbdepcabsf,mdepcabsf,scdepcabsf,odepcabsf); 
 						var totaldepcadol  = filtrartotal4(laborybbdepcadol,mdepcadol,scdepcadol,odepcadol); 
 						var totaldepcaDeqv = filtrartotal4(laborybbdepcaDeqv,mdepcaDeqv,scdepcaDeqv,odepcaDeqv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var totaldepcabsfmv  = filtrartotal4(laborybbdepcabsfmv,mdepcabsfmv,scdepcabsfmv,odepcabsfmv); 
 						var totaldepcadolmv  = filtrartotal4(laborybbdepcadolmv,mdepcadolmv,scdepcadolmv,odepcadolmv); 
 						var totaldepcaDeqvmv = filtrartotal4(laborybbdepcaDeqvmv,mdepcaDeqvmv,scdepcaDeqvmv,odepcaDeqvmv);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var totaldepcabsfant  = filtrartotal4(laborybbdepcabsfant,mdepcabsfant,scdepcabsfant,odepcabsfant); 
 						var totaldepcadolant  = filtrartotal4(laborybbdepcadolant,mdepcadolant,scdepcadolant,odepcadolant); 
 						var totaldepcaDeqvant = filtrartotal4(laborybbdepcaDeqvant,mdepcaDeqvant,scdepcaDeqvant,odepcaDeqvant);
						///// total DEPCA


 				 var aux = 0;
		 for (var i=0; i < 12; i++) {
		
 			if(labordivoDeqvr[i] != 0 || bbdivoDeqvr[i] != 0 || mdivoDeqvr != 0 || scdivoDeqvr[i] !=0 || odivoDeqvr[i] != 0 ||  labordivocDeqvr[i] != 0 || bbdivocDeqvr[i] != 0 || mdivocDeqvr != 0 || scdivocDeqvr[i] !=0 || odivocDeqvr[i] != 0  ){
 			 		aux++;	
 		 	}
 		}

 		alert('mes que toca '+aux);
 		if(aux!=0){
 			val = aux-1;	
 		}else{
 			val = aux;
 		}


 		var	informacion = pptocab('Tabla-Elemento-Encabezado',anho,meses[val],'DEPCA');
		informacion	+=	eplineadiv('Tabla-Elemento','MM(BS) Puros',val,'Labor y Beneficios',laborybbdepcabsf,laborybbdepcabsfr,laborybbdepcabsfmv,laborybbdepcabsfant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(BS) Puros',val,'Materiales ',mdepcabsf,mdepcabsfr,mdepcabsfmv,mdepcabsfant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(BS) Puros',val,'Servicios y contratos',scdepcabsf,scdepcabsfr,scdepcabsfmv,scdepcabsfant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(BS) Puros',val,'Otros Costos y Gastos',odepcabsf,odepcabsfr,odepcabsfmv,odepcabsfant);
		informacion	+=	eplineatotal('Tabla-Elemento','MM(BS) Puros',val,'Total',totaldepcabsf,totaldepcabsfr,totaldepcabsfmv,totaldepcabsfant);
		
		informacion += pptocab('Tabla-Elemento-Encabezado',anho,meses[val],'DEPCA');			
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Puros',val,'Labor y Beneficios',laborybbdepcadol,laborybbdepcadolr,laborybbdepcadolmv,laborybbdepcadolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Puros',val,'Materiales ',mdepcadol,mdepcadolr,mdepcadolmv,mdepcadolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Puros',val,'Servicios y contratos',scdepcadol,scdepcadolr,scdepcadolmv,scdepcadolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Puros',val,'Otros Costos y Gastos',odepcadol,odepcadolr,odepcadolmv,odepcadolant);
		informacion	+=	eplineatotal('Tabla-Elemento','MM(BS) Puros',val,'Total',totaldepcadol,totaldepcadolr,totaldepcadolmv,totaldepcadolant);
		
		informacion += pptocab('Tabla-Elemento-Encabezado',anho,meses[val],'DEPCA');			
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,'Labor y Beneficios',laborybbdepcaDeqv,laborybbdepcaDeqvr,laborybbdepcaDeqvmv,laborybbdepcaDeqvant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,'Materiales ',mdepcaDeqv,mdepcaDeqvr,mdepcaDeqvmv,mdepcaDeqvant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,'Servicios y contratos',scdepcaDeqv,scdepcaDeqvr,scdepcaDeqvmv,scdepcaDeqvant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,'Otros Costos y Gastos',odepcaDeqv,odepcaDeqvr,odepcaDeqvmv,odepcaDeqvant);
		informacion	+=	eplineatotal('Tabla-Elemento','MM(BS) Puros',val,'Total',totaldepcaDeqv,totaldepcaDeqvr,totaldepcaDeqvmv,totaldepcaDeqvant);
		


		return informacion;

}		