var x;
x = $(document);
x.ready(divoccidentalresumen);

function divoccidentalresumen(){

$("#anhodivoccidental").change(function() {

		var anho = $("#anhodivoccidental option:selected");
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
				 															 

																							
																							alert('todo bien llegamos aqui');


																							var informacion = titulo('Tabla-Elemento-Encabezado','TOTAL DIRECCION EJECUTIVA COSTA AFUERA');
																							informacion += inversiones(planp,realp,mvp,antp,v3);
																							//informacion += separador();
																							informacion += titulo('Tabla-Elemento-Encabezado','TOTAL DIRECCION EJECUTIVA COSTA AFUERA');
																							informacion += operaciones(habp,pmix,hreal,rmix,hmv,mvmix,hant,antmix,v3);

																						$('#occidentaltabla').html('');
																						$('#occidentaltabla').append(informacion);

																						 
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


function operaciones(habp,pmix,hreal,rmix,hmv,mvmix,hant,antmix,anho){

		 
																				
		/// DIVISION OCCIDENTAL PLAN OPERACIONES
		var divoccbsf =	divisionocc(habp,'_p',1);
		var divoccdol =	divisionocc(habp,'_p',2);
		var divoccdeqv= divisionocc(habp,'_p',3);

	 

		/// EM CARDON IV PLAN OPERACIONES
		var carbsf = mixtas(pmix,4,'_p',1);
		var cardol = mixtas(pmix,4,'_p',2);
		var careqv = mixtas(pmix,4,'_p',3);

		/// EM PETROCUMAREBO PLAN OPERACIONES
		var pcbsf = mixtas(pmix,5,'_p',1);
		var pcdol = mixtas(pmix,5,'_p',2);
		var pceqv = mixtas(pmix,5,'_p',3);
																				
		/// DIVISION OCCIDENTAL REAL OPERACIONES
		var divoccbsfr =	divisionocc(hreal,'_r',1);
		var divoccdolr =	divisionocc(hreal,'_r',2);
		var divoccdeqvr= divisionocc(hreal,'_r',3);

		/// EM CARDON IV REAL OPERACIONES
		var carbsfr = mixtas(rmix,4,'_r',1);
		var cardolr = mixtas(rmix,4,'_r',2);
		var careqvr = mixtas(rmix,4,'_r',3);

		/// EM PETROCUMAREBO REAL OPERACIONES
		var pcbsfr = mixtas(rmix,5,'_r',1);
		var pcdolr = mixtas(rmix,5,'_r',2);
		var pceqvr = mixtas(rmix,5,'_r',3);

 				
		/// DIVISION OCCIDENTAL MEMJOR VISION OPERACIONES
		var divoccbsfmv =	divisionocc(hmv,'_mv',1);
		var divoccdolmv =	divisionocc(hmv,'_mv',2);
		var divoccdeqvmv= divisionocc(hmv,'_mv',3);

		 
		/// EM CARDON IV MEJOR VISION OPERACIONES
		var carbsfmv = mixtas(mvmix,4,'_mv',1);
		var cardolmv = mixtas(mvmix,4,'_mv',2);
		var careqvmv = mixtas(mvmix,4,'_mv',3);

		/// EM PETROCUMAREBO MEJOR VISION OPERACIONES
		var pcbsfmv = mixtas(mvmix,5,'_mv',1);
		var pcdolmv = mixtas(mvmix,5,'_mv',2);
		var pceqvmv = mixtas(mvmix,5,'_mv',3);

	 				
		/// DIVISION OCCIDENTAL ANTEPROYECTO OPERACIONES
		var divoccbsfant =	divisionocc(hant,'_ant',1);
		var divoccdolant =	divisionocc(hant,'_ant',2);
		var divoccdeqvant= divisionocc(hant,'_ant',3);

		/// EM CARDON IV MEJOR VISION OPERACIONES
		var carbsfant = mixtas(antmix,4,'_ant',1);
		var cardolant = mixtas(antmix,4,'_ant',2);
		var careqvant = mixtas(antmix,4,'_ant',3);

		/// EM PETROCUMAREBO MEJOR VISION OPERACIONES
		var pcbsfant = mixtas(antmix,5,'_ant',1);
		var pcdolant = mixtas(antmix,5,'_ant',2);
		var pceqvant = mixtas(antmix,5,'_ant',3);

		/// EMPRESAS MIXTAS BSF
		var embs = filtrardivo(carbsf,pcbsf);
		var embsr = filtrardivo(carbsfr,pcbsfr);
		var embsmv = filtrardivo(carbsfmv,pcbsfmv);
		var embsant = filtrardivo(carbsfant,pcbsfant);

		/// EMPRESAS MIXTAS DOLARES
		var emd = filtrardivo(cardol,pcdol);
		var emdr = filtrardivo(cardolr,pcdolr);
		var emdmv = filtrardivo(cardolmv,pcdolmv);
		var emdant = filtrardivo(cardolant,pcdolant);

		/// EMPRESAS MIXTAS DOLARES QUIVALENTES
		var emeqv = filtroequivalente(embs,emd);
		var emeqvr = filtroequivalente(embsr,emdr);
		var emeqvmv = filtroequivalente(embsmv,emdmv);
		var emeqvant = filtroequivalente(embsant,emdant);

		/// TOTAL BS 
		var totalbs = filtrardivo(divoccbsf,embs);
		var totalbsr = filtrardivo(divoccbsfr,embsr);
		var totalbsmv = filtrardivo(divoccbsfmv,embsmv);
		var totalbsant = filtrardivo(divoccbsfant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(divoccdol,emd);
		var totaldr = filtrardivo(divoccdolr,emdr);
		var totaldmv = filtrardivo(divoccdolmv,emdmv);
		var totaldant = filtrardivo(divoccdolant,emdant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

	  var aux = 0;
		 for (var i=0; i < 12; i++) {
		 		
 			if( divoccdeqvr[i] != 0  || careqvr[i]!=0 || pceqvr[i]!=0 ){
 			//alert(aux);
 			 		aux++;	
 		 	}

 		}
 		alert('mes que toca '+aux);

 		var	informacion = pptocab('Tabla-Elemento-Encabezado',anho,meses[aux],'OPERACIONES');
 		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(BS) Puros',aux,'',totalbs,totalbsr,totalbsmv,totalbsant);
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',aux,'Division Costa Afuera Occidental',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',aux,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);
		 			 
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',divoccbsf,divoccbsfr,divoccbsfmv,divoccbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Division Occidental EP',divoccdol,divoccdolr,divoccdolmv,divoccdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',divoccdeqv,divoccdeqvr,divoccdeqvmv,divoccdeqvant);

		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',aux,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',aux,'EMPRESAS MIXTAS ',emd,emdr,emdmv,emdant);
 		informacion += eplinea('Tabla-Elemento','MM(BS) Equiv',aux,' ',emeqv,emeqvr,emeqvmv,emeqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',carbsf,carbsfr,carbsfmv,carbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Cardon IV',cardol,cardolr,cardolmv,cardolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',careqv,careqvr,careqvmv,careqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',pcbsf,pcbsfr,pcbsfmv,pcbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Petrocumarebo',pcdol,pcdolr,pcdolmv,pcdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pceqv,pceqvr,pceqvmv,pceqvant);

		
	 		//informacion += contenidoyo('Tabla-Elemento','Tabla-Elemento-Encabezado','MM(BS)',' ',aux,epoperacionesbs,epoperacionesbsr,epoperacionesbsmv,epoperacionesbsant);

 		return informacion;

}


function inversiones(planp,realp,mvp,antp,anho){


		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoccbs = proinversionep(planp,'_p',1,1,2);
		 	
		 	
		 //// PROYECTOS MIXTAS PLAN BS
		 var procarbs =proinversionem(planp,'_p',2,1,4);
		 var propcbs =proinversionem(planp,'_p',2,1,5);
		
		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoccbsr = proinversionep(realp,'_r',1,1,2);
		 
		 //// PROYECTOS MIXTAS REAL BS
		 var procarbsr =proinversionem(realp,'_r',2,1,4);
		 var propcbsr =proinversionem(realp,'_r',2,1,5);
		
		 
		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoccbsmv = proinversionep(mvp,'_mv',1,1,2);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION BSmv
		 var procarbsmv =proinversionem(mvp,'_mv',2,1,4);
		 var propcbsmv =proinversionem(mvp,'_mv',2,1,5);

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoccbsant = proinversionep(antp,'_ant',1,1,2);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO BSant
		 var procarbsant =proinversionem(antp,'_ant',2,1,4);
		 var propcbsant =proinversionem(antp,'_ant',2,1,5);
		 ////////////////// DOLARES///////////////

		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoccdol = proinversionep(planp,'_p',1,2,2);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var procardol =proinversionem(planp,'_p',2,2,4);
		 var propcdol =proinversionem(planp,'_p',2,2,5);

		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoccdolr = proinversionep(realp,'_r',1,2,2);
				 
		 //// PROYECTOS MIXTAS REAL dol
		 var procardolr =proinversionem(realp,'_r',2,2,4);
		 var propcdolr =proinversionem(realp,'_r',2,2,5);

		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoccdolmv = proinversionep(mvp,'_mv',1,2,2);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var procardolmv =proinversionem(mvp,'_mv',2,2,4);
		 var propcdolmv =proinversionem(mvp,'_mv',2,2,5);

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoccdolant = proinversionep(antp,'_ant',1,2,2);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var procardolant =proinversionem(antp,'_ant',2,2,4);
		 var propcdolant =proinversionem(antp,'_ant',2,2,5);
		
		/////////////////// EQUIVALENTE

		  ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivocceqv = filtroequivalente(prodivoccbs,prodivoccdol);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var procareqv =filtroequivalente(procarbs,procardol);
		 var propceqv =filtroequivalente(propcbs,propcdol);

		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivocceqvr = filtroequivalente(prodivoccbsr,prodivoccdolr);
		 
		 //// PROYECTOS MIXTAS REAL dol
		 var procareqvr =filtroequivalente(procarbsr,procardolr);
		 var propceqvr =filtroequivalente(propcbsr,propcdolr);

		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivocceqvmv = filtroequivalente(prodivoccbsmv,prodivoccdolmv);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var procareqvmv =filtroequivalente(procarbsmv,procardolmv);
		 var propceqvmv =filtroequivalente(propcbsmv,propcdolmv);

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivocceqvant = filtroequivalente(prodivoccbsant,prodivoccdolant);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var procareqvant =filtroequivalente(procarbsant,procardolant);
		 var propceqvant =filtroequivalente(propcbsant,propcdolant);

		 //// EMPRESAS MIXTAS EN BS
		var embs = filtrardivo(procarbs,propcbs);
		var embsr = filtrardivo(procarbsr,propcbsr);
		var embsmv = filtrardivo(procarbsmv,propcbsmv);
		var embsant = filtrardivo(procarbsant,propcbsant);


		/// EMPRESAS MIXTAS EN DOLARES 
		var emdol = filtrardivo(procardol,propcdol);
		var emdolr = filtrardivo(procardolr,propcdolr);
		var emdolmv = filtrardivo(procardolmv,propcdolmv);
		var emdolant = filtrardivo(procardolant,propcdolant);



		/// EMPRESAS MIXTAS EN DOLARES EQUIVALENTES
		 var emeqv = filtroequivalente(embs,emdol);
		 var emeqvr = filtroequivalente(embsr,emdolr);
		 var emeqvmv = filtroequivalente(embsmv,emdolmv);
		 var emeqvant = filtroequivalente(embsant,emdolant);



			/// TOTAL BS 
		var totalbs = filtrardivo(prodivoccbs,embs);
		var totalbsr = filtrardivo(prodivoccbsr,embsr);
		var totalbsmv = filtrardivo(prodivoccbsmv,embsmv);
		var totalbsant = filtrardivo(prodivoccbsant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(prodivoccdol,emdol);
		var totaldr = filtrardivo(prodivoccdolr,emdolr);
		var totaldmv = filtrardivo(prodivoccdolmv,emdolmv);
		var totaldant = filtrardivo(prodivoccdolant,emdolant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

		  var aux = 0;
		 for (var i=0; i < 12; i++) {
		
 			if(  prodivocceqvr[i] != 0  || procareqvr[i]!=0 || propceqvr[i]!=0 ){
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
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',val,'Division Costa Afuera Occidental',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',val,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);
 
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',prodivoccbs,prodivoccbsr,prodivoccbsmv,prodivoccbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Division Occidental EP',prodivoccdol,prodivoccdolr,prodivoccdolmv,prodivoccdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',prodivocceqv,prodivocceqvr,prodivocceqvmv,prodivocceqvant);

		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',val,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',val,'EMPRESAS MIXTAS',emdol,emdolr,emdolmv,emdolant);
 		informacion += eplinea('Tabla-Elemento','MM(USD) Equiv',val,' ',emeqv,emeqvr,emeqvmv,emeqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',procarbs,procarbsr,procarbsmv,procarbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Cardon IV',procardol,procardolr,procardolmv,procardolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',procareqv,procareqvr,procareqvmv,procareqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',propcbs,propcbsr,propcbsmv,propcbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Petrocumarebo',propcdol,propcdolr,propcdolmv,propcdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',propceqv,propceqvr,propceqvmv,propceqvant);

		
 		return informacion;

}