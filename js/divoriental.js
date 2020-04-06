var x;
x = $(document);
x.ready(divisionorientalresumen);

function divisionorientalresumen(){

$("#anhodivoriental").change(function() {

		var anho = $("#anhodivoriental option:selected");
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

																						$('#orientaltabla').html('');
																						$('#orientaltabla').append(informacion);

																						 
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

		//// DIVISION ORIENTAL PLAN	OPERACIONES
		var diviorbsf =	divisionoriental(habp,'_p',1);
		var diviordol =	divisionoriental(habp,'_p',2);
		var diviordeqv=	divisionoriental(habp,'_p',3);
																		
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
 
		//// DIVISION ORIENTAL REAL	OPERACIONES
		var diviorbsfr =	divisionoriental(hreal,'_r',1);
		var diviordolr =	divisionoriental(hreal,'_r',2);
		var diviordeqvr=	divisionoriental(hreal,'_r',3);
	 
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

		//// DIVISION ORIENTAL MEMJOR VISION	OPERACIONES
		var diviorbsfmv =	divisionoriental(hmv,'_mv',1);
		var diviordolmv =	divisionoriental(hmv,'_mv',2);
		var diviordeqvmv=	divisionoriental(hmv,'_mv',3);
																			
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

		//// DIVISION ORIENTAL ANTEPROYECTO	OPERACIONES
		var diviorbsfant =	divisionoriental(hant,'_ant',1);
		var diviordolant =	divisionoriental(hant,'_ant',2);
		var diviordeqvant=	divisionoriental(hant,'_ant',3);
 
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

		/// EMPRESAS MIXTAS BSF
		var embs = direccionejecutiva(psbsf,pwbsf,ppbsf);
		var embsr = direccionejecutiva(psbsfr,pwbsfr,ppbsfr);
		var embsmv = direccionejecutiva(psbsfmv,pwbsfmv,ppbsfmv);
		var embsant = direccionejecutiva(psbsfant,pwbsfant,ppbsfant);

		/// EMPRESAS MIXTAS DOLARES
		var emd = direccionejecutiva(psdol,pwdol,ppdol);
		var emdr = direccionejecutiva(psdolr,pwdolr,ppdolr);
		var emdmv = direccionejecutiva(psdolmv,pwdolmv,ppdolmv);
		var emdant = direccionejecutiva(psdolant,pwdolant,ppdolant);

		/// EMPRESAS MIXTAS DOLARES QUIVALENTES
		var emeqv = filtroequivalente(embs,emd);
		var emeqvr = filtroequivalente(embsr,emdr);
		var emeqvmv = filtroequivalente(embsmv,emdmv);
		var emeqvant = filtroequivalente(embsant,emdant);

		/// TOTAL BS 
		var totalbs = filtrardivo(diviorbsf,embs);
		var totalbsr = filtrardivo(diviorbsfr,embsr);
		var totalbsmv = filtrardivo(diviorbsfmv,embsmv);
		var totalbsant = filtrardivo(diviorbsfant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(diviordol,emd);
		var totaldr = filtrardivo(diviordolr,emdr);
		var totaldmv = filtrardivo(diviordolmv,emdmv);
		var totaldant = filtrardivo(diviordolant,emdant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

	  var aux = 0;
		 for (var i=0; i < 12; i++) {
		 		
 			if( diviordeqvr[i] != 0  || pseqvr[i]!= 0 ||  pweqvr[i]!=0 || ppeqvr[i]!=0 ){
 			//alert(aux);
 			 		aux++;	
 		 	}

 		}
 		alert('mes que toca '+aux);

 		var	informacion = pptocab('Tabla-Elemento-Encabezado',anho,meses[aux],'OPERACIONES');
 		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(BS) Puros',aux,'',totalbs,totalbsr,totalbsmv,totalbsant);
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',aux,' Division Costa Afuera Oriental',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',aux,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);
		

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',diviorbsf,diviorbsfr,diviorbsfmv,diviorbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Division Oriental EP ',diviordol,diviordolr,diviordolmv,diviordolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',diviordeqv,diviordeqvr,diviordeqvmv,diviordeqvant);
		 
		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',aux,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',aux,'EMPRESAS MIXTAS ',emd,emdr,emdmv,emdant);
 		informacion += eplinea('Tabla-Elemento','MM(BS) Equiv',aux,' ',emeqv,emeqvr,emeqvmv,emeqvant);

 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',psbsf,psbsfr,psbsfmv,psbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'PetroSucre ',psdol,psdolr,psdolmv,psdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pseqv,pseqvr,pseqvmv,pseqvant);

		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',pwbsf,pwbsfr,pwbsfmv,pwbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'PetroWarao ',pwdol,pwdolr,pwdolmv,pwdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',pweqv,pweqvr,pweqvmv,pweqvant);
		
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',aux,'',ppbsf,ppbsfr,ppbsfmv,ppbsfant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',aux,'Petrolera Paria ',ppdol,ppdolr,ppdolmv,ppdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',aux,' ',ppeqv,ppeqvr,ppeqvmv,ppeqvant);

		 			
	 		//informacion += contenidoyo('Tabla-Elemento','Tabla-Elemento-Encabezado','MM(BS)',' ',aux,epoperacionesbs,epoperacionesbsr,epoperacionesbsmv,epoperacionesbsant);

 		return informacion;

}


function inversiones(planp,realp,mvp,antp,anho){


		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoribs = proinversionep(planp,'_p',1,1,1);
		 
		 	
		 //// PROYECTOS MIXTAS PLAN BS
		 var propsbs =proinversionem(planp,'_p',2,1,1);
		 var propwbs =proinversionem(planp,'_p',2,1,2);
		 var proppbs =proinversionem(planp,'_p',2,1,3);
		 
		
		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoribsr = proinversionep(realp,'_r',1,1,1);
		 
		 //// PROYECTOS MIXTAS REAL BS
		 var propsbsr =proinversionem(realp,'_r',2,1,1);
		 var propwbsr =proinversionem(realp,'_r',2,1,2);
		 var proppbsr =proinversionem(realp,'_r',2,1,3);
		 
		 
		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoribsmv = proinversionep(mvp,'_mv',1,1,1);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION BSmv
		 var propsbsmv =proinversionem(mvp,'_mv',2,1,1);
		 var propwbsmv =proinversionem(mvp,'_mv',2,1,2);
		 var proppbsmv =proinversionem(mvp,'_mv',2,1,3);

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoribsant = proinversionep(antp,'_ant',1,1,1);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO BSant
		 var propsbsant =proinversionem(antp,'_ant',2,1,1);
		 var propwbsant =proinversionem(antp,'_ant',2,1,2);
		 var proppbsant =proinversionem(antp,'_ant',2,1,3);
		 
		 ////////////////// DOLARES///////////////

		 ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivoridol = proinversionep(planp,'_p',1,2,1);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var propsdol =proinversionem(planp,'_p',2,2,1);
		 var propwdol =proinversionem(planp,'_p',2,2,2);
		 var proppdol =proinversionem(planp,'_p',2,2,3);

		alert('estoy en dolares plan ');
		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivoridolr = proinversionep(realp,'_r',1,2,1);
		 		 
		 //// PROYECTOS MIXTAS REAL dol
		 var propsdolr =proinversionem(realp,'_r',2,2,1);
		 var propwdolr =proinversionem(realp,'_r',2,2,2);
		 var proppdolr =proinversionem(realp,'_r',2,2,3);
		 
		alert('estoy en dolares real ');
		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivoridolmv = proinversionep(mvp,'_mv',1,2,1);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var propsdolmv =proinversionem(mvp,'_mv',2,2,1);
		 var propwdolmv =proinversionem(mvp,'_mv',2,2,2);
		 var proppdolmv =proinversionem(mvp,'_mv',2,2,3);
		 
		alert('estoy en dolares mejor vision ');

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivoridolant = proinversionep(antp,'_ant',1,2,1);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var propsdolant =proinversionem(antp,'_ant',2,2,1);
		 var propwdolant =proinversionem(antp,'_ant',2,2,2);
		 var proppdolant =proinversionem(antp,'_ant',2,2,3);
		 
		alert('estoy en dolares anteproyecto ');
		 /////////////////// EQUIVALENTE

		  ////// PROYECTOS PLAN ESFUERZOS PROPIOS
		 var prodivorieqv = filtroequivalente(prodivoribs,prodivoridol);
		 
		 //// PROYECTOS MIXTAS PLAN dol
		 var propseqv =filtroequivalente(propsbs,propsdol);
		 var propweqv =filtroequivalente(propwbs,propwdol);
		 var proppeqv =filtroequivalente(proppbs,proppdol);
		 
		alert('estoy en equivalente plan ');

		  ////// PROYECTOS REAL ESFUERZOS PROPIOS
		 var prodivorieqvr = filtroequivalente(prodivoribsr,prodivoridolr);
		 
		 //// PROYECTOS MIXTAS REAL dol
		 var propseqvr =filtroequivalente(propsbsr,propsdolr);
		 var propweqvr =filtroequivalente(propwbsr,propwdolr);
		 var proppeqvr =filtroequivalente(proppbsr,proppdolr);
		 
		alert('estoy en equivalente real ');

		 ////// PROYECTOS 	MEJOR VISION ESFUERZOS PROPIOS
		 var prodivorieqvmv = filtroequivalente(prodivoribsmv,prodivoridolmv);
		 
		 //// PROYECTOS MIXTAS 	MEJOR VISION dol
		 var propseqvmv =filtroequivalente(propsbsmv,propsdolmv);
		 var propweqvmv =filtroequivalente(propwbsmv,propwdolmv);
		 var proppeqvmv =filtroequivalente(proppbsmv,proppdolmv);
		 
		alert('estoy en equivalente mejor vision ');

		 ////// PROYECTOS ANTEPROYECTO ESFUERZOS PROPIOS
		 var prodivorieqvant = filtroequivalente(prodivoribsant,prodivoridolant);
		 
		 //// PROYECTOS MIXTAS ANTEPROYECTO dol
		 var propseqvant =filtroequivalente(propsbsant,propsdolant);
		 var propweqvant =filtroequivalente(propwbsant,propwdolant);
		 var proppeqvant =filtroequivalente(proppbsant,proppdolant);
		 
		alert('estoy en equivalente anteproyecto');

	 
		 //// EMPRESAS MIXTAS EN BS
		var embs = direccionejecutiva(propsbs,propwbs,proppbs);
		var embsr = direccionejecutiva(propsbsr,propwbsr,proppbsr);
		var embsmv = direccionejecutiva(propsbsmv,propwbsmv,proppbsmv);
		var embsant = direccionejecutiva(propsbsant,propwbsant,proppbsant);


		/// EMPRESAS MIXTAS EN DOLARES 
		 var emdol = direccionejecutiva(propsdol,propwdol,proppdol);
		var emdolr = direccionejecutiva(propsdolr,propwdolr,proppdolr);
		var emdolmv = direccionejecutiva(propsdolmv,propwdolmv,proppdolmv);
		var emdolant = direccionejecutiva(propsdolant,propwdolant,proppdolant);


		/// EMPRESAS MIXTAS EN DOLARES EQUIVALENTES
		 var emeqv = filtroequivalente(embs,emdol);
		 var emeqvr = filtroequivalente(embsr,emdolr);
		 var emeqvmv = filtroequivalente(embsmv,emdolmv);
		 var emeqvant = filtroequivalente(embsant,emdolant);

			/// TOTAL BS 
		var totalbs = filtrardivo(prodivoribs,embs);
		var totalbsr = filtrardivo(prodivoribsr,embsr);
		var totalbsmv = filtrardivo(prodivoribsmv,embsmv);
		var totalbsant = filtrardivo(prodivoribsant,embsant);

		/// TOTAL DOLARES 
		var totald = filtrardivo(prodivoridol,emdol);
		var totaldr = filtrardivo(prodivoridolr,emdolr);
		var totaldmv = filtrardivo(prodivoridolmv,emdolmv);
		var totaldant = filtrardivo(prodivoridolant,emdolant);

		/// TOTAL DOLARES EQUIVALENTES 
		var totaleqv = filtroequivalente(totalbs,totald);
		var totaleqvr = filtroequivalente(totalbsr,totaldr);
		var totaleqvmv = filtroequivalente(totalbsmv,totaldmv);
		var totaleqvant = filtroequivalente(totalbsant,totaldant);

		  var aux = 0;
		 for (var i=0; i < 12; i++) {
		
 			if(prodivorieqvr[i] != 0   || propseqvr[i] != 0 || propweqvr[i]!= 0 ||  proppeqvr[i]!=0   ){
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

		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(BS) Puros',val,' ',totalbs,totalbsr,totalbsmv,totalbsant);
		informacion	+=	esfuerzopropiototal('Tabla-Elemento','MM(USD) Puros',val,'Division Costa Afuera Oriental',totald,totaldr,totaldmv,totaldant);
 		informacion	+=	eplineatotal('Tabla-Elemento','MM(USD) Equiv',val,' ',totaleqv,totaleqvr,totaleqvmv,totaleqvant);

 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',prodivoribs,prodivoribsr,prodivoribsmv,prodivoribsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Division Oriental EP',prodivoridol,prodivoridolr,prodivoridolmv,prodivoridolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',prodivorieqv,prodivorieqvr,prodivorieqvmv,prodivorieqvant);
	
		informacion += esfuerzopropio('Tabla-Elemento','MM(BS) Puros',val,'',embs,embsr,embsmv,embsant);
 		informacion += esfuerzopropio('Tabla-Elemento','MM(USD) Puros',val,' EMPRESAS MIXTAS',emdol,emdolr,emdolmv,emdolant);
 		informacion += eplinea('Tabla-Elemento','MM(USD) Equiv',val,' ',emeqv,emeqvr,emeqvmv,emeqvant);

 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',propsbs,propsbsr,propsbsmv,propsbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'PetroSucre ',propsdol,propsdolr,propsdolmv,propsdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',propseqv,propseqvr,propseqvmv,propseqvant);
		
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',propwbs,propwbsr,propwbsmv,propwbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,' PetroWarao',propwdol,propwdolr,propwdolmv,propwdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',propweqv,propweqvr,propweqvmv,propweqvant);
			

 		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(BS) Puros',val,'',proppbs,proppbsr,proppbsmv,proppbsant);
		informacion	+=	esfuerzopropiodiv('Tabla-Elemento','MM(USD) Puros',val,'Petrolera Paria ',proppdol,proppdolr,proppdolmv,proppdolant);
		informacion	+=	eplineadiv('Tabla-Elemento','MM(USD) Equiv',val,' ',proppeqv,proppeqvr,proppeqvmv,proppeqvant);

 		return informacion;

}