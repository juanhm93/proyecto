var x;
x = $(document);
x.ready(epdivoriental);

function epdivoriental(){

$( "input" ).on( "click", function() {

		var anho = $("#anhoepdivoriental option:selected");

		var opciones = $("input:checked").val();

		var v3 = anho.val();
		
		var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
		alert(opciones);

		if(anho.val() != ''){

			if(opciones == 'resumen'){
				var v1 = 1;
				var postForm ={'v3' : v3,'v1': v1};


				$.post("cepdivoriental/habilitadorasplanequiv",postForm,function(habi){

							var hab = $.parseJSON(habi);

							 
						//////////////////////////////////PLAN ////////////////////////////////////////////////			
						// ESFUERZO PROPIO PLAN EN BOLIVARES 					
						var laborepbsf = filtrarcosto(hab,filtrolabor,5,'_p',1);
						var bbepbsf = filtrarcosto(hab,filtrobb,5,'_p',1);
						var mepbsf = filtrarcosto(hab,filtrom,5,'_p',1);
						var scepbsf = filtrarcosto(hab,filtrosc,5,'_p',1);
						var oepbsf = filtrarcosto(hab,filtroo,5,'_p',1);
						var totalepbsf = filtrartotal(laborepbsf,bbepbsf,mepbsf,scepbsf,oepbsf);
 
 						 		 // ESFUERZOS PROPIOS PLAN EN DOLARES
 						 var laborepdol = filtrarcosto(hab,filtrolabor,5,'_p',2);
 						 var bbepdol = filtrarcosto(hab,filtrobb,5,'_p',2);
 						 var mepdol = filtrarcosto(hab,filtrom,5,'_p',2);
 						 var scepdol = filtrarcosto(hab,filtrosc,5,'_p',2);
 						 var oepdol = filtrarcosto(hab,filtroo,5,'_p',2);
 						 var totalepdol = filtrartotal(laborepdol,bbepdol,mepdol,scepdol,oepdol);

 						 // DTTO ORIENTAL PLAN EN BOLIVARES
					 	 var labordttobsf = filtrarcosto(hab,filtrolabor,4,'_p',1);
 						 var bbdttobsf = filtrarcosto(hab,filtrobb,4,'_p',1);
 						 var mdttobsf = filtrarcosto(hab,filtrom,4,'_p',1);
 						 var scdttobsf = filtrarcosto(hab,filtrosc,4,'_p',1);
 						 var odttobsf = filtrarcosto(hab,filtroo,4,'_p',1);
 						 var totaldttobsf = filtrartotal(labordttobsf,bbdttobsf,mdttobsf,scdttobsf,odttobsf);

 						 // DTTO ORIENTAL PLAN EN DOLARES
 						 var labordttodol = filtrarcosto(hab,filtrolabor,4,'_p',2);
 						 var bbdttodol = filtrarcosto(hab,filtrobb,4,'_p',2);
 						 var mdttodol = filtrarcosto(hab,filtrom,4,'_p',2);
 						 var scdttodol = filtrarcosto(hab,filtrosc,4,'_p',2);
 						 var odttodol = filtrarcosto(hab,filtroo,4,'_p',2);
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
 						 var labordivoDeqv = filtroequivalente(labordttobsf,laborepdol);
 						 var bbdivoDeqv = filtroequivalente(bbdttobsf,bbepdol);
 						 var mdivoDeqv = filtroequivalente(mdttobsf,mepdol);
 						 var scdivoDeqv = filtroequivalente(scdttobsf,scepdol);
 						 var odivoDeqv = filtroequivalente(odttobsf,oepdol);
 						 var totaldivoDeqv = filtrartotal(labordivoDeqv,bbdivoDeqv,mdivoDeqv,scdivoDeqv,odivoDeqv);

 						 ////////////////////// FIN PLAN ////////////////////////////////////////////////


						$.post("cepdivoriental/habilitadorarealequiv",postForm,function(habreal){

								var hreal = $.parseJSON(habreal);

								// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfr = filtrarcosto(hreal,filtrolabor,5,'_r',1);
 						 var bbepbsfr = filtrarcosto(hreal,filtrobb,5,'_r',1);
 						 var mepbsfr = filtrarcosto(hreal,filtrom,5,'_r',1);
 						 var scepbsfr = filtrarcosto(hreal,filtrosc,5,'_r',1);
 						 var oepbsfr = filtrarcosto(hreal,filtroo,5,'_r',1);
 						 var totalepbsfr = filtrartotal(laborepbsfr,bbepbsfr,mepbsfr,scepbsfr,oepbsfr);

 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolr = filtrarcosto(hreal,filtrolabor,5,'_r',2);
 						 var bbepdolr = filtrarcosto(hreal,filtrobb,5,'_r',2);
 						 var mepdolr = filtrarcosto(hreal,filtrom,5,'_r',2);
 						 var scepdolr = filtrarcosto(hreal,filtrosc,5,'_r',2);
 						 var oepdolr = filtrarcosto(hreal,filtroo,5,'_r',2);
 						 var totalepdolr = filtrartotal(laborepdolr,bbepdolr,mepdolr,scepdolr,oepdolr);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfr = filtrarcosto(hreal,filtrolabor,4,'_r',1);
 						 var bbdttobsfr = filtrarcosto(hreal,filtrobb,4,'_r',1);
 						 var mdttobsfr = filtrarcosto(hreal,filtrom,4,'_r',1);
 						 var scdttobsfr = filtrarcosto(hreal,filtrosc,4,'_r',1);
 						 var odttobsfr = filtrarcosto(hreal,filtroo,4,'_r',1);
 						 var totaldttobsfr = filtrartotal(labordttobsfr,bbdttobsfr,mdttobsfr,scdttobsfr,odttobsfr);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolr = filtrarcosto(hreal,filtrolabor,4,'_r',2);
 						 var bbdttodolr = filtrarcosto(hreal,filtrobb,4,'_r',2);
 						 var mdttodolr = filtrarcosto(hreal,filtrom,4,'_r',2);
 						 var scdttodolr = filtrarcosto(hreal,filtrosc,4,'_r',2);
 						 var odttodolr = filtrarcosto(hreal,filtroo,4,'_r',2);
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
 						 var labordivoDeqvr = filtroequivalente(labordttobsfr,laborepdolr);
 						 var bbdivoDeqvr = filtroequivalente(bbdttobsfr,bbepdolr);
 						 var mdivoDeqvr = filtroequivalente(mdttobsfr,mepdolr);
 						 var scdivoDeqvr = filtroequivalente(scdttobsfr,scepdolr);
 						 var odivoDeqvr = filtroequivalente(odttobsfr,oepdolr);
 						 var totaldivoDeqvr = filtrartotal(labordivoDeqvr,bbdivoDeqvr,mdivoDeqvr,scdivoDeqvr,odivoDeqvr);

 						 /////////////FIN REAL ////////////////////////////////////////////////

								
								$.post("cepdivoriental/habilitadoramvequiv",postForm,function(habmv){

									var hmv = $.parseJSON(habmv);
						// ESFUERZO PROPIO REAL EN BOLIVARES 
					 	 var laborepbsfmv = filtrarcosto(hmv,filtrolabor,5,'_mv',1);
 						 var bbepbsfmv = filtrarcosto(hmv,filtrobb,5,'_mv',1);
 						 var mepbsfmv = filtrarcosto(hmv,filtrom,5,'_mv',1);
 						 var scepbsfmv = filtrarcosto(hmv,filtrosc,5,'_mv',1);
 						 var oepbsfmv = filtrarcosto(hmv,filtroo,5,'_mv',1);
 						 var totalepbsfmv = filtrartotal(laborepbsfmv,bbepbsfmv,mepbsfmv,scepbsfmv,oepbsfmv);
 						 
 						 // ESFUERZOS PROPIOS REAL EN DOLARES
 						 var laborepdolmv = filtrarcosto(hmv,filtrolabor,5,'_mv',2);
 						 var bbepdolmv = filtrarcosto(hmv,filtrobb,5,'_mv',2);
 						 var mepdolmv = filtrarcosto(hmv,filtrom,5,'_mv',2);
 						 var scepdolmv = filtrarcosto(hmv,filtrosc,5,'_mv',2);
 						 var oepdolmv = filtrarcosto(hmv,filtroo,5,'_mv',2);
 						 var totalepdolmv = filtrartotal(laborepdolmv,bbepdolmv,mepdolmv,scepdolmv,oepdolmv);

 						 // DTTO ORIENTAL REAL EN BOLIVARES
					 	 var labordttobsfmv = filtrarcosto(hmv,filtrolabor,4,'_mv',1);
 						 var bbdttobsfmv = filtrarcosto(hmv,filtrobb,4,'_mv',1);
 						 var mdttobsfmv = filtrarcosto(hmv,filtrom,4,'_mv',1);
 						 var scdttobsfmv = filtrarcosto(hmv,filtrosc,4,'_mv',1);
 						 var odttobsfmv = filtrarcosto(hmv,filtroo,4,'_mv',1);
 						 var totaldttobsfmv = filtrartotal(labordttobsfmv,bbdttobsfmv,mdttobsfmv,scdttobsfmv,odttobsfmv);

 						 // DTTO ORIENTAL REAL EN DOLARES
 						 var labordttodolmv = filtrarcosto(hmv,filtrolabor,4,'_mv',2);
 						 var bbdttodolmv = filtrarcosto(hmv,filtrobb,4,'_mv',2);
 						 var mdttodolmv = filtrarcosto(hmv,filtrom,4,'_mv',2);
 						 var scdttodolmv = filtrarcosto(hmv,filtrosc,4,'_mv',2);
 						 var odttodolmv = filtrarcosto(hmv,filtroo,4,'_mv',2);
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
 						 var labordivoDeqvmv = filtroequivalente(labordttobsfr,laborepdolmv);
 						 var bbdivoDeqvmv = filtroequivalente(bbdttobsfr,bbepdolmv);
 						 var mdivoDeqvmv = filtroequivalente(mdttobsfr,mepdolmv);
 						 var scdivoDeqvmv = filtroequivalente(scdttobsfr,scepdolmv);
 						 var odivoDeqvmv = filtroequivalente(odttobsfr,oepdolmv);
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


 						alert(habreal);
 						 for (var i=0; i < 12; i++) {
 						 	/*alert('labor'+labordivoDeqvr[i]);
 						 	alert(bbdivoDeqvr[i]);
 						 	alert('labor y beneficio'+laborybbdivoDeqvr[i]);
 						 	alert(mdivoDeqvr[i]);
 						 	alert(scdivoDeqvr[i]);
 						 	alert('otro'+odivoDeqvr[i]);*/
 						 	if(labordivoDeqvr[i] != 0 || bbdivoDeqvr[i] != 0 || mdivoDeqvr[i] != 0 || scdivoDeqvr[i] != 0 || odivoDeqvr[i]!= 0 || labordivoDeqvr[i] != '' || bbdivoDeqvr[i] != '' || mdivoDeqvr[i] != '' || scdivoDeqvr[i] != '' || odivoDeqvr[i]!= ''){
 						 		aux = i;	
 						 	}

 						 }// fin del for comprobar cual es la ejecución del real de los meses



 						 	alert(aux);

	 						 	var ante = new Array();

 						 	var informacion = motrarcabecera('red-header','leter',v3,meses[aux],'ELEMENTO DE COSTO');
 						 	informacion += descripciones('','Labor y Beneficios',aux,laborybbdivoDeqv,laborybbdivobsf,laborybbdivodol,laborybbdivoDeqv,laborybbdivobsfr,laborybbdivodolr,laborybbdivoDeqvr,laborybbdivobsfmv,laborybbdivodolmv,laborybbdivoDeqvmv,ante,ante,ante );
 						 	informacion += descripciones('','Materiales',aux,mdivoDeqv,mdivobsf,mdivodol,mdivoDeqv,mdivobsfr,mdivodolr,mdivoDeqvr,mdivobsfmv,mdivodolmv,mdivoDeqvmv,ante,ante,ante );

 						 	$('#resumentotal').html('');
 						 	$('#resumentotal').append(informacion);	


								}); // fin post real
						}); // fin post real
 						 
				});// fin post plan 

			}// fin si es la opcion de resumen 


		 }else{

		 	alert('debe seleccionar un año ');

		 }


	});

}


function filtrolabor(hab,i){

		return hab[i]['idelecfk']==1;
}

function filtrobb(hab,i){

		return hab[i]['idelecfk']==2;
}
function filtrom(hab,i){

		return hab[i]['idelecfk']==3;
}
function filtrosc(hab,i){

		return hab[i]['idelecfk']==4;
}
function filtroo(hab,i){

		return hab[i]['idelecfk']==5;
}
// filtros para direccion 
function filtrolabord(dir,i){

		return dir[i]['idelefk']==1;
}

function filtrobbd(dir,i){

		return dir[i]['idelefk']==2;
}
function filtromd(dir,i){

		return dir[i]['idelefk']==3;
}
function filtroscd(dir,i){

		return dir[i]['idelefk']==4;
}
function filtrood(dir,i){

		return dir[i]['idelefk']==5;
}


/// SACAR LAS HABILITADORAS PLAN REAL MEJOR VISION POR MONEDA 
function filtrarcosto(hab,filtrado,val,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

		 	if(filtrado(hab,i) && hab[i]['tipodivfk']==val && hab[i]['idmoneda']== moneda){
			 enerotl += parseFloat(hab[i]['enero'+com+'']);
		 febrerotl += parseFloat(hab[i]['febrero'+com+'']);  
		 marzotl += parseFloat(hab[i]['marzo'+com+'']);  
		 abriltl += parseFloat(hab[i]['abril'+com+'']);  
		 mayotl += parseFloat(hab[i]['mayo'+com+'']);  
		 juniotl += parseFloat(hab[i]['junio'+com+'']);  
		 juliotl  += parseFloat(hab[i]['julio'+com+'']); 
		 agostotl += parseFloat(hab[i]['agosto'+com+'']);  
		 septiembretl += parseFloat(hab[i]['septiembre'+com+'']);  
		 octubretl  += parseFloat(hab[i]['octubre'+com+'']);  
		 noviembretl += parseFloat(hab[i]['noviembre'+com+'']);  
		 diciembretl  += parseFloat(hab[i]['diciembre'+com+'']);  		
		}//fin if 
	
	}//fin for 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 

// FUNCION DE SUMA LABOR BENEFICIO MATERIALES Y OTROS POR MESES 
function filtrartotal(lab,bb,m,sc,o){
		var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 enerotl = parseFloat(lab[0]) +parseFloat(bb[0]) +parseFloat(m[0])  + parseFloat(sc[0]) + parseFloat(o[0])
		 febrerotl = parseFloat(lab[1]) +parseFloat(bb[1]) +parseFloat(m[1])  + parseFloat(sc[1]) + parseFloat(o[1])  
		 marzotl =  parseFloat(lab[2]) +parseFloat(bb[2]) +parseFloat(m[2])  + parseFloat(sc[2]) + parseFloat(o[2]) 
		 abriltl =  parseFloat(lab[3]) +parseFloat(bb[3]) +parseFloat(m[3])  + parseFloat(sc[3]) + parseFloat(o[3]) 
		 mayotl = parseFloat(lab[4]) +parseFloat(bb[4]) +parseFloat(m[4])  + parseFloat(sc[4]) + parseFloat(o[4]) 
		 juniotl =  parseFloat(lab[5]) +parseFloat(bb[5]) +parseFloat(m[5])  + parseFloat(sc[5]) + parseFloat(o[5]) 
		 juliotl  = parseFloat(lab[6]) +parseFloat(bb[6]) +parseFloat(m[6])  + parseFloat(sc[6]) + parseFloat(o[6]) 
		 agostotl = parseFloat(lab[7]) +parseFloat(bb[7]) +parseFloat(m[7])  + parseFloat(sc[7]) + parseFloat(o[7])  
		 septiembretl = parseFloat(lab[8]) +parseFloat(bb[8]) +parseFloat(m[8])  + parseFloat(sc[8]) + parseFloat(o[8])  
		 octubretl  = parseFloat(lab[9]) +parseFloat(bb[9]) +parseFloat(m[9])  + parseFloat(sc[9]) + parseFloat(o[9])  
		 noviembretl = parseFloat(lab[10]) +parseFloat(bb[10]) + parseFloat(m[10]) + parseFloat(sc[10]) +parseFloat( o[10]); 
		 diciembretl  = parseFloat(lab[11]) +parseFloat(bb[11]) +parseFloat(m[11]) + parseFloat(sc[11]) +parseFloat( o[11]);	

 
	
 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 


// SUMAR DTTO ORIENTAL CON ESFUERZOS PROPIO Y OBTENER DIVISION ORIENTAL
function filtrardivo(dtto,ep){
	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	
			 enerotl =  parseFloat(dtto[0]) +parseFloat(ep[0]);
		 febrerotl = parseFloat(dtto[1]) +parseFloat(ep[1]);  
		 marzotl =  parseFloat(dtto[2]) +parseFloat(ep[2]); 
		 abriltl =  parseFloat(dtto[3]) +parseFloat(ep[3]); 
		 mayotl = parseFloat(dtto[4]) +parseFloat(ep[4]); 
		 juniotl =  parseFloat(dtto[5]) +parseFloat(ep[5]); 
		 juliotl  = parseFloat(dtto[6]) +parseFloat(ep[6]); 
		 agostotl = parseFloat(dtto[7]) +parseFloat(ep[7]);  
		 septiembretl = parseFloat(dtto[8]) +parseFloat(ep[8]);  
		 octubretl  = parseFloat(dtto[9]) +parseFloat(ep[9]);  
		 noviembretl = parseFloat(dtto[10]) +parseFloat(ep[10]);
		 diciembretl  = parseFloat(dtto[11]) +parseFloat(ep[11]);	
 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 

/// SACAR EL EQUIVALENTE DE LA DIVISION ORIENTAL 
function filtroequivalente(bolivares,dolares){

	var enerot=0;var febrerot=0;  var marzot=0;  var abrilt=0;  var mayot=0;  var juniot=0;  var juliot =0; var agostot=0;  var septiembret=0;  var octubret =0;  var noviembret=0;  var diciembret =0;  



		enerot = (parseFloat(bolivares[0])/10)+ parseFloat(dolares[0]);
		febrerot = (parseFloat(bolivares[1])/10)+parseFloat(dolares[1]);
		marzot = (parseFloat(bolivares[2])/10)+parseFloat(dolares[2]);
		abrilt = (parseFloat(bolivares[3])/10)+parseFloat(dolares[3]);
		mayot = (parseFloat(bolivares[4])/10) + parseFloat(dolares[4]);
		juniot = (parseFloat(bolivares[5])/10) + parseFloat(dolares[5]);
		juliot = (parseFloat(bolivares[6])/10) + parseFloat(dolares[6]);
		agostot = (parseFloat(bolivares[7])/10) + parseFloat(dolares[7]);
		septiembret = (parseFloat(bolivares[8])/10) + parseFloat(dolares[8]);
		octubret = (parseFloat(bolivares[9])/10) + parseFloat(dolares[9]);
		noviembret = (parseFloat(bolivares[10])/10) + parseFloat(dolares[10]);
		diciembret = (parseFloat(bolivares[11])/10) + parseFloat(dolares[11]);


	

	var labor =  new Array(enerot,febrerot,marzot,abrilt,mayot,juniot,juliot,agostot,septiembret,octubret,noviembret,diciembret);
	return   labor;
}// fin funcion 

// FUNCION PARA MOSTRAR EL INICIO DE LA TABLA  'CABECERA'
function motrarcabecera(clase,clasecabecera,anho,mes,cabecera){

				var informacion ='<tr>';
				informacion += '<td class="'+clase+'"></td>';
				informacion += '<td class="'+clase+'">Real '+(parseFloat(anho)-1)+' $ EQUIV</td>';
				informacion += '<td class="'+clasecabecera+'"> '+cabecera+' </td>';
				informacion += '<td class="'+clase+'">Aprobado '+anho+' MM$ Equiv</td>';
				informacion += '<td class="'+clase+'">Plan Ene - '+mes+' MMBs Puros</td>';
				informacion += '<td class="'+clase+'">Plan Ene - '+mes+' MM$ Puros </td>';
				informacion += '<td class="'+clase+'">Plan Ene - '+mes+' MM$ Equiv </td>';
				informacion += '<td class="'+clase+'">Real Ene - '+mes+' MMBs Puros</td>';
				informacion += '<td class="'+clase+'">Real Ene - '+mes+' MM$ Puros </td>';
				informacion += '<td class="'+clase+'">Real Ene - '+mes+' MM$ Equiv </td>';
				informacion += '<td class="'+clase+'">Var. Real vs Plan</td>';
				informacion += '<td class="'+clase+'"> Mejor Visión '+anho+'  MMBs Puros</td> ';
				informacion += '<td class="'+clase+'"> Mejor Visión '+anho+' MM Divisas</td> ';
				informacion += '<td class="'+clase+'"> Mejor Visión '+anho+' MM$ Equiv</td>';
				informacion += '<td class="'+clase+'"> Var. MV vs Aprob. '+anho+' $ Equiv ';
				informacion += '<td class="'+clase+'">Presupuesto '+(parseFloat(anho)+1)+' MMBs Puros</td>';
				informacion += '<td class="'+clase+'">Presupuesto '+(parseFloat(anho)+1)+' MM Divisas </td>';
				informacion += '<td class="'+clase+'">Presupuesto '+(parseFloat(anho)+1)+' MM$  Equiv  </td>';
				informacion += '<td class="'+clase+'">Var Ppto '+(parseFloat(anho)+1)+' vs Aprob '+anho+' $ $Equiv</td>';
				informacion += '</tr>';

		return informacion;
}


// FUNCION MOSTRAR POR ELEMENTO O CATEGORIA 

function descripciones(clase,descrp,i,aprobado,planbsf,plandol,planequiv,realbsf,realdol,realequiv,mvbsf,mvdol,mvequiv,anteproyectobsf,anteproyectodol,anteproyectoequiv ){

		var variacionRP = parseFloat(realequiv[i])-parseFloat(planequiv[i]);
		var variacionMVA = parseFloat(mvequiv[11])-parseFloat(aprobado[11]);
		var variacionANTEAPR = parseFloat(anteproyectoequiv[11])-parseFloat(aprobado[11])
	var informacion ='<tr>';
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'">'+descrp+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(aprobado[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(planbsf[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(plandol[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(planequiv[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(realbsf[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(realdol[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(realequiv[i]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(variacionRP).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(mvbsf[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(mvdol[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(mvequiv[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(variacionMVA).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(anteproyectobsf[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(anteproyectodol[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(anteproyectoequiv[11]).toFixed(2)+'</td>';
		informacion += '<td class="'+clase+'">'+parseFloat(variacionANTEAPR).toFixed(2)+'</td>';
		informacion += '</tr>';

	return informacion;
}
 