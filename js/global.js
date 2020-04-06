var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

var plan = ['enero_p','febrero_p','marzo_p','abril_p','mayo_p','junio_p','julio_p','agosto_p','septiembre_p','octubre_p','noviembre_p','diciembre_p'];

var reales = ['enero_r','febrero_r','marzo_r','abril_r','mayo_r','junio_r','julio_r','agosto_r','septiembre_r','octubre_r','noviembre_r','diciembre_r'];

var mejorvision = ['enero_mv','febrero_mv','marzo_mv','abril_mv','mayo_mv','junio_mv','julio_mv','agosto_mv','septiembre_mv','octubre_mv','noviembre_mv','diciembre_mv'];

var anteproyecto = ['enero_ant','febrero_ant','marzo_ant','abril_ant','mayo_ant','junio_ant','julio_ant','agosto_ant','septiembre_ant','octubre_ant','noviembre_ant','diciembre_ant'];
 
function cargar(){

	var barra = document.ElementByID('barra');
	barra.value += 5;
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

/////// filtro para empresas mixtas mejorar funcion y poner que estos filtros sean uno solo, no tengo tiempo

function filtrolabore(hab,i){

		return hab[i]['idlele']==1;
}

function filtrobbe(hab,i){

		return hab[i]['idlele']==2;
}
function filtrome(hab,i){

		return hab[i]['idlele']==3;
}
function filtrosce(hab,i){

		return hab[i]['idlele']==4;
}
function filtrooe(hab,i){

		return hab[i]['idlele']==5;
}

// filtros para elementos de costo con moneda definida 
function filtrarcosto(hab,filtrado,val,com){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	 
	

	for (var i=0;  i < hab.length ; i++) {

		 if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }
			 

		 	if(filtrado(hab,i) && hab[i]['tipodivfk']==val){
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

function filtrarcostodir(dir,filtrado,com){
		 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
		
		for (var i=0;  i < dir.length ; i++) {

		 if (isNaN(dir[i]['enero'+com+''])){ dir[i]['enero'+com+'']=0; }
			if (isNaN(dir[i]['febrero'+com+''])){ dir[i]['febrero'+com+'']=0; }
			if (isNaN(dir[i]['marzo'+com+''])){ dir[i]['marzo'+com+'']=0; }
			if (isNaN(dir[i]['abril'+com+''])){ dir[i]['abril'+com+'']=0; }
			if (isNaN(dir[i]['mayo'+com+''])){ dir[i]['mayo'+com+'']=0; }
			if (isNaN(dir[i]['junio'+com+''])){ dir[i]['junio'+com+'']=0; }
			if (isNaN(dir[i]['julio'+com+''])){ dir[i]['julio'+com+'']=0; }
			if (isNaN(dir[i]['agosto'+com+''])){ dir[i]['agosto'+com+'']=0; }
			if (isNaN(dir[i]['septiembre'+com+''])){ dir[i]['septiembre'+com+'']=0; }
			if (isNaN(dir[i]['octubre'+com+''])){ dir[i]['octubre'+com+'']=0; }
			if (isNaN(dir[i]['noviembre'+com+''])){ dir[i]['noviembre'+com+'']=0; }
			if (isNaN(dir[i]['diciembre'+com+''])){ dir[i]['diciembre'+com+'']=0; }
			 

		

		 	if(filtrado(dir,i)){
			 enerotl += parseFloat(dir[i]['enero'+com+'']);
		 febrerotl += parseFloat(dir[i]['febrero'+com+'']);  
		 marzotl += parseFloat(dir[i]['marzo'+com+'']);  
		 abriltl += parseFloat(dir[i]['abril'+com+'']);  
		 mayotl += parseFloat(dir[i]['mayo'+com+'']);  
		 juniotl += parseFloat(dir[i]['junio'+com+'']);  
		 juliotl  += parseFloat(dir[i]['julio'+com+'']); 
		 agostotl += parseFloat(dir[i]['agosto'+com+'']);  
		 septiembretl += parseFloat(dir[i]['septiembre'+com+'']);  
		 octubretl  += parseFloat(dir[i]['octubre'+com+'']);  
		 noviembretl += parseFloat(dir[i]['noviembre'+com+'']);  
		 diciembretl  += parseFloat(dir[i]['diciembre'+com+'']);  		
		}//fin if 
	
	}//fin for 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 

// FILTRO PARA SUMAR TODOS LOS ELEMENTOS DE COSTO
function filtrartotal(lab,bb,m,sc,o){
		var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 enerotl = parseFloat(lab[0]) +parseFloat(bb[0]) +parseFloat(m[0])  + parseFloat(sc[0]) + parseFloat(o[0]);
		 febrerotl = parseFloat(lab[1]) +parseFloat(bb[1]) +parseFloat(m[1])  + parseFloat(sc[1]) + parseFloat(o[1]);  
		 marzotl =  parseFloat(lab[2]) +parseFloat(bb[2]) +parseFloat(m[2])  + parseFloat(sc[2]) + parseFloat(o[2]);
		 abriltl =  parseFloat(lab[3]) +parseFloat(bb[3]) +parseFloat(m[3])  + parseFloat(sc[3]) + parseFloat(o[3]); 
		 mayotl = parseFloat(lab[4]) +parseFloat(bb[4]) +parseFloat(m[4])  + parseFloat(sc[4]) + parseFloat(o[4]);
		 juniotl =  parseFloat(lab[5]) +parseFloat(bb[5]) +parseFloat(m[5])  + parseFloat(sc[5]) + parseFloat(o[5]); 
		 juliotl  = parseFloat(lab[6]) +parseFloat(bb[6]) +parseFloat(m[6])  + parseFloat(sc[6]) + parseFloat(o[6]); 
		 agostotl = parseFloat(lab[7]) +parseFloat(bb[7]) +parseFloat(m[7])  + parseFloat(sc[7]) + parseFloat(o[7]); 
		 septiembretl = parseFloat(lab[8]) +parseFloat(bb[8]) +parseFloat(m[8])  + parseFloat(sc[8]) + parseFloat(o[8]);  
		 octubretl  = parseFloat(lab[9]) +parseFloat(bb[9]) +parseFloat(m[9])  + parseFloat(sc[9]) + parseFloat(o[9]);  
		 noviembretl = parseFloat(lab[10]) +parseFloat(bb[10]) + parseFloat(m[10]) + parseFloat(sc[10]) +parseFloat( o[10]); 
		 diciembretl  = parseFloat(lab[11]) +parseFloat(bb[11]) +parseFloat(m[11]) + parseFloat(sc[11]) +parseFloat( o[11]);	

 
	
 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 

// FILTRO PARA SUMAR TODOS LOS ELEMENTOS DE COSTO
function filtrartotal4(lab,bb,m,sc){
		var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 enerotl = parseFloat(lab[0]) +parseFloat(bb[0]) +parseFloat(m[0])  + parseFloat(sc[0]);
		 febrerotl = parseFloat(lab[1]) +parseFloat(bb[1]) +parseFloat(m[1])  + parseFloat(sc[1]);  
		 marzotl =  parseFloat(lab[2]) +parseFloat(bb[2]) +parseFloat(m[2])  + parseFloat(sc[2]);
		 abriltl =  parseFloat(lab[3]) +parseFloat(bb[3]) +parseFloat(m[3])  + parseFloat(sc[3]); 
		 mayotl = parseFloat(lab[4]) +parseFloat(bb[4]) +parseFloat(m[4])  + parseFloat(sc[4]);
		 juniotl =  parseFloat(lab[5]) +parseFloat(bb[5]) +parseFloat(m[5])  + parseFloat(sc[5]); 
		 juliotl  = parseFloat(lab[6]) +parseFloat(bb[6]) +parseFloat(m[6])  + parseFloat(sc[6]); 
		 agostotl = parseFloat(lab[7]) +parseFloat(bb[7]) +parseFloat(m[7])  + parseFloat(sc[7]); 
		 septiembretl = parseFloat(lab[8]) +parseFloat(bb[8]) +parseFloat(m[8])  + parseFloat(sc[8]);  
		 octubretl  = parseFloat(lab[9]) +parseFloat(bb[9]) +parseFloat(m[9])  + parseFloat(sc[9]);  
		 noviembretl = parseFloat(lab[10]) +parseFloat(bb[10]) + parseFloat(m[10]) + parseFloat(sc[10]); 
		 diciembretl  = parseFloat(lab[11]) +parseFloat(bb[11]) +parseFloat(m[11]) + parseFloat(sc[11]);	

 
	
 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 


/// SUMAR 2 TIPOS DE DIVISIONES 

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

function filtrardireccion(divor,divoc,direj){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		enerotl =  parseFloat(divor[0]) + parseFloat(divoc[0]) + parseFloat(direj[0]);
		 febrerotl = parseFloat(divor[1]) + parseFloat(divoc[1]) + parseFloat(direj[1]);  
		 marzotl =  parseFloat(divor[2]) + parseFloat(divoc[2]) + parseFloat(direj[2]); 
		 abriltl =  parseFloat(divor[3]) + parseFloat(divoc[3]) + parseFloat(direj[3]); 
		 mayotl = parseFloat(divor[4]) + parseFloat(divoc[4]) + parseFloat(direj[4]); 
		 juniotl =  parseFloat(divor[5]) + parseFloat(divoc[5]) +parseFloat(direj[5]); 
		 juliotl  = parseFloat(divor[6]) + parseFloat(divoc[6]) + parseFloat(direj[6]); 
		 agostotl = parseFloat(divor[7]) + parseFloat(divoc[7]) + parseFloat(direj[7]);  
		 septiembretl = parseFloat(divor[8]) +  parseFloat(divoc[8]) + parseFloat(direj[8]);  
		 octubretl  = parseFloat(divor[9])+  parseFloat(divoc[9]) + parseFloat(direj[9]);  
		 noviembretl = parseFloat(divor[10]) + parseFloat(divoc[10]) + parseFloat(direj[10]);
		 diciembretl  = parseFloat(divor[11]) + parseFloat(divoc[11]) + parseFloat(direj[11]);
	 
 
	var labor =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   labor;
}// fin funcion 

function mostrartabla(nombre,clase,labor,beneficio,materiales,servicios,otros,total){

	var informacion ='<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento-Encabezado"></div>';
					informacion += '<div class="'+clase+'">'+nombre+'</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div><div class="Tabla-Elemento-Encabezado"></div>';
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';	
					informacion += '<div class="Tabla-Elemento-Encabezado"></div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">DESCRIPCION</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">ENE</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">FEB</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">MAR</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">ABR</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">MAY</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">JUN</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">JUL</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">AGO</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">SEP</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">OCT</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">NOV</div>';
					informacion += '<div class="Tabla-Elemento-Encabezado">DIC</div>';
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Labor</div>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(labor[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Beneficio y Bienestar</div>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(beneficio[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Materiales</div>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(materiales[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Servicios y Condivatos</div>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(servicios[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Odivos</div>';
						for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(odivos[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';
					informacion += '<div class="Tabla-Fondo">';
					informacion += '<div class="Tabla-Elemento"></div>';
					informacion += '<div class="Tabla-Elemento">Total</div>';
						for (var i = 0; i < 12 ; i++) {
					informacion += '<div class="Tabla-Elemento">'+parseFloat(total[i]).toFixed(2)+'</div>';
					}
					informacion += '</div>';


					return informacion;
}


//filtro para el equivalente


function filcostomon(hab,filtrado,val,com){

	 var enerob=0;var febrerob=0;  var marzob=0;  var abrilb=0;  var mayob=0;  var juniob=0;  var juliob =0; var agostob=0;  var septiembreb=0;  var octubreb =0;  var noviembreb=0;  var diciembreb =0;  
	
	var enerot=0;var febrerot=0;  var marzot=0;  var abrilt=0;  var mayot=0;  var juniot=0;  var juliot =0; var agostot=0;  var septiembret=0;  var octubret =0;  var noviembret=0;  var diciembret =0;  
	
	var enerod=0;var febrerod=0;  var marzod=0;  var abrild=0;  var mayod=0;  var juniod=0;  var juliod =0; var agostod=0;  var septiembred=0;  var octubred =0;  var noviembred=0;  var diciembred =0;  
		
	

	for (var i=0;  i < hab.length ; i++) {
		if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }
			 

		 	if(filtrado(hab,i) && hab[i]['tipodivfk']==val && hab[i]['idmoneda']== 1){
			 enerob += parseFloat(hab[i]['enero'+com+'']);
		 febrerob += parseFloat(hab[i]['febrero'+com+'']);  
		 marzob += parseFloat(hab[i]['marzo'+com+'']);  
		 abrilb += parseFloat(hab[i]['abril'+com+'']);  
		 mayob += parseFloat(hab[i]['mayo'+com+'']);  
		 juniob += parseFloat(hab[i]['junio'+com+'']);  
		 juliob  += parseFloat(hab[i]['julio'+com+'']); 
		 agostob += parseFloat(hab[i]['agosto'+com+'']);  
		 septiembreb += parseFloat(hab[i]['septiembre'+com+'']);  
		 octubreb  += parseFloat(hab[i]['octubre'+com+'']);  
		 noviembreb += parseFloat(hab[i]['noviembre'+com+'']);  
		 diciembreb  += parseFloat(hab[i]['diciembre'+com+'']);  		
		}//fin if 

		if(filtrado(hab,i) && hab[i]['tipodivfk']==val && hab[i]['idmoneda']== 2){
			 enerod += parseFloat(hab[i]['enero'+com+'']);
		 febrerod += parseFloat(hab[i]['febrero'+com+'']);  
		 marzod += parseFloat(hab[i]['marzo'+com+'']);  
		 abrild += parseFloat(hab[i]['abril'+com+'']);  
		 mayod += parseFloat(hab[i]['mayo'+com+'']);  
		 juniod += parseFloat(hab[i]['junio'+com+'']);  
		 juliod  += parseFloat(hab[i]['julio'+com+'']); 
		 agostod += parseFloat(hab[i]['agosto'+com+'']);  
		 septiembred += parseFloat(hab[i]['septiembre'+com+'']);  
		 octubred  += parseFloat(hab[i]['octubre'+com+'']);  
		 noviembred += parseFloat(hab[i]['noviembre'+com+'']);  
		 diciembred  += parseFloat(hab[i]['diciembre'+com+'']);  		
		}//fin if 

		enerot = (parseFloat(enerob)/10)+ parseFloat(enerod);
		febrerot = (parseFloat(febrerob)/10)+parseFloat(febrerod);
		marzot = (parseFloat(marzob)/10)+parseFloat(marzod);
		abrilt = (parseFloat(abrilb)/10)+parseFloat(abrild);
		mayot = (parseFloat(mayob)/10) + parseFloat(mayod);
		juniot = (parseFloat(juniob)/10) + parseFloat(juniod);
		juliot = (parseFloat(juliob)/10) + parseFloat(juliod);
		agostot = (parseFloat(agostob)/10) + parseFloat(agostod);
		septiembret = (parseFloat(septiembreb)/10) + parseFloat(septiembred);
		octubret = (parseFloat(octubreb)/10) + parseFloat(octubred);
		noviembret = (parseFloat(noviembreb)/10) + parseFloat(noviembred);
		diciembret = (parseFloat(diciembreb)/10) + parseFloat(diciembred);

	
	}//fin for 
	var labor =  new Array(enerot,febrerot,marzot,abrilt,mayot,juniot,juliot,agostot,septiembret,octubret,noviembret,diciembret);
	return   labor;
}// fin funcion 


function fildirequiv(dir,filtrado,com){
		 var enerob=0;var febrerob=0;  var marzob=0;  var abrilb=0;  var mayob=0;  var juniob=0;  var juliob =0; var agostob=0;  var septiembreb=0;  var octubreb =0;  var noviembreb=0;  var diciembreb =0;  
	
	var enerot=0;var febrerot=0;  var marzot=0;  var abrilt=0;  var mayot=0;  var juniot=0;  var juliot =0; var agostot=0;  var septiembret=0;  var octubret =0;  var noviembret=0;  var diciembret =0;  
	
	var enerod=0;var febrerod=0;  var marzod=0;  var abrild=0;  var mayod=0;  var juniod=0;  var juliod =0; var agostod=0;  var septiembred=0;  var octubred =0;  var noviembred=0;  var diciembred =0;  
		
	

		for (var i=0;  i < dir.length ; i++) {
				if (isNaN(dir[i]['enero'+com+''])){ dir[i]['enero'+com+'']=0; }
			if (isNaN(dir[i]['febrero'+com+''])){ dir[i]['febrero'+com+'']=0; }
			if (isNaN(dir[i]['marzo'+com+''])){ dir[i]['marzo'+com+'']=0; }
			if (isNaN(dir[i]['abril'+com+''])){ dir[i]['abril'+com+'']=0; }
			if (isNaN(dir[i]['mayo'+com+''])){ dir[i]['mayo'+com+'']=0; }
			if (isNaN(dir[i]['junio'+com+''])){ dir[i]['junio'+com+'']=0; }
			if (isNaN(dir[i]['julio'+com+''])){ dir[i]['julio'+com+'']=0; }
			if (isNaN(dir[i]['agosto'+com+''])){ dir[i]['agosto'+com+'']=0; }
			if (isNaN(dir[i]['septiembre'+com+''])){ dir[i]['septiembre'+com+'']=0; }
			if (isNaN(dir[i]['octubre'+com+''])){ dir[i]['octubre'+com+'']=0; }
			if (isNaN(dir[i]['noviembre'+com+''])){ dir[i]['noviembre'+com+'']=0; }
			if (isNaN(dir[i]['diciembre'+com+''])){ dir[i]['diciembre'+com+'']=0; }
			 

		 	if(filtrado(dir,i) && dir[i]['idmoneda']==1 ){
			 enerob += parseFloat(dir[i]['enero'+com+'']);
		 febrerob += parseFloat(dir[i]['febrero'+com+'']);  
		 marzob += parseFloat(dir[i]['marzo'+com+'']);  
		 abrilb += parseFloat(dir[i]['abril'+com+'']);  
		 mayob += parseFloat(dir[i]['mayo'+com+'']);  
		 juniob += parseFloat(dir[i]['junio'+com+'']);  
		 juliob  += parseFloat(dir[i]['julio'+com+'']); 
		 agostob += parseFloat(dir[i]['agosto'+com+'']);  
		 septiembreb += parseFloat(dir[i]['septiembre'+com+'']);  
		 octubreb  += parseFloat(dir[i]['octubre'+com+'']);  
		 noviembreb += parseFloat(dir[i]['noviembre'+com+'']);  
		 diciembreb  += parseFloat(dir[i]['diciembre'+com+'']);  		
		}//fin if 

			if(filtrado(dir,i) && dir[i]['idmoneda']==2 ){
			 enerod += parseFloat(dir[i]['enero'+com+'']);
		 febrerod += parseFloat(dir[i]['febrero'+com+'']);  
		 marzod += parseFloat(dir[i]['marzo'+com+'']);  
		 abrild += parseFloat(dir[i]['abril'+com+'']);  
		 mayod += parseFloat(dir[i]['mayo'+com+'']);  
		 juniod += parseFloat(dir[i]['junio'+com+'']);  
		 juliod  += parseFloat(dir[i]['julio'+com+'']); 
		 agostod += parseFloat(dir[i]['agosto'+com+'']);  
		 septiembred += parseFloat(dir[i]['septiembre'+com+'']);  
		 octubred  += parseFloat(dir[i]['octubre'+com+'']);  
		 noviembred += parseFloat(dir[i]['noviembre'+com+'']);  
		 diciembred  += parseFloat(dir[i]['diciembre'+com+'']);  		
		}//fin if 

		enerot = (parseFloat(enerob)/10)+ parseFloat(enerod);
		febrerot = (parseFloat(febrerob)/10)+parseFloat(febrerod);
		marzot = (parseFloat(marzob)/10)+parseFloat(marzod);
		abrilt = (parseFloat(abrilb)/10)+parseFloat(abrild);
		mayot = (parseFloat(mayob)/10) + parseFloat(mayod);
		juniot = (parseFloat(juniob)/10) + parseFloat(juniod);
		juliot = (parseFloat(juliob)/10) + parseFloat(juliod);
		agostot = (parseFloat(agostob)/10) + parseFloat(agostod);
		septiembret = (parseFloat(septiembreb)/10) + parseFloat(septiembred);
		octubret = (parseFloat(octubreb)/10) + parseFloat(octubred);
		noviembret = (parseFloat(noviembreb)/10) + parseFloat(noviembred);
		diciembret = (parseFloat(diciembreb)/10) + parseFloat(diciembred);
	
	}//fin for 
	var labor =  new Array(enerot,febrerot,marzot,abrilt,mayot,juniot,juliot,agostot,septiembret,octubret,noviembret,diciembret);
	return   labor;
}// fin funcion 

/// SACAR LAS HABILITADORAS PLAN REAL MEJOR VISION POR MONEDA 
function filtrarcostohab(hab,filtrado,val,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

			if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }


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


/// SACAR LAS HABILITADORAS PLAN REAL MEJOR VISION POR MONEDA 
function filtrarcostomixta(hab,filtrado,val,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

			if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }


		 	if(filtrado(hab,i) && hab[i]['idem']==val && hab[i]['idmoneda']== moneda){
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

/// SACAR LAS HABILITADORAS PLAN REAL MEJOR VISION POR MONEDA 
function filtrarcostodirep(hab,filtrado,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

			if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }


		 	if(filtrado(hab,i) && hab[i]['idmoneda']== moneda){
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

/// SACAR EL EQUIVALENTE DE LA DIVISION ORIENTAL 
function filtroequivalente(bolivares,dolares){

	var enerot=0;var febrerot=0;  var marzot=0;  var abrilt=0;  var mayot=0;  var juniot=0;  var juliot =0; var agostot=0;  var septiembret=0;  var octubret =0;  var noviembret=0;  var diciembret =0;  



		enerot = parseFloat(bolivares[0])/10+ parseFloat(dolares[0]);
		febrerot = parseFloat(bolivares[1])/10+parseFloat(dolares[1]);
		marzot = parseFloat(bolivares[2])/10+parseFloat(dolares[2]);
		abrilt = parseFloat(bolivares[3])/10+parseFloat(dolares[3]);
		mayot = parseFloat(bolivares[4])/10 + parseFloat(dolares[4]);
		juniot = parseFloat(bolivares[5])/10 + parseFloat(dolares[5]);
		juliot = parseFloat(bolivares[6])/10 + parseFloat(dolares[6]);
		agostot = parseFloat(bolivares[7])/10 + parseFloat(dolares[7]);
		septiembret = parseFloat(bolivares[8])/10 + parseFloat(dolares[8]);
		octubret = parseFloat(bolivares[9])/10 + parseFloat(dolares[9]);
		noviembret = parseFloat(bolivares[10])/10 + parseFloat(dolares[10]);
		diciembret = parseFloat(bolivares[11])/10 + parseFloat(dolares[11]);


	

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
		var variacionANTEAPR = parseFloat(anteproyectoequiv[11])-parseFloat(aprobado[11]);
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


// FUNCION MOSTRAR POR CATEGORIAS POR MESES EN PLAN REAL MEJOR VISION Y ANTEPROYECTO
function mostrarcategoriaprmva(clase,descrp,plan){

	var informacion ='<tr>';
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'">'+descrp+'</td>';
		for (var i = 0; i< 12; i++) {

			informacion += '<td class="'+clase+'">'+parseFloat(plan[i]).toFixed(2)+'</td>';
		}
		
		informacion += '</tr>';

	return informacion;
}

function cabeceracategoriaprmva(clase,descrp){

	var informacion = '<tr>';	
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'"></td>';
		informacion += '<td class="'+clase+'">'+descrp+'</td>';
		informacion += '<td class="'+clase+'">ENE</td>';
		informacion += '<td class="'+clase+'">FEB</td>';
		informacion += '<td class="'+clase+'">MAR</td>';
		informacion += '<td class="'+clase+'">ABR</td>';
		informacion += '<td class="'+clase+'">MAY</td>';
		informacion += '<td class="'+clase+'">JUN</td>';
		informacion += '<td class="'+clase+'">JUL</td>';
		informacion += '<td class="'+clase+'">AGO</td>';
		informacion += '<td class="'+clase+'">SEP</td>';
		informacion += '<td class="'+clase+'">OCT</td>';
		informacion += '<td class="'+clase+'">NOV</td>';
		informacion += '<td class="'+clase+'">DIC</td>';
		informacion += '</tr>';

	return informacion;
}
 

function valorproyectex(proyecto,com,moneda){

	var Presupuesto;  

	for (var i = 0; i < proyecto.length;  i++) {
	 
	 if (proyecto[i]['idmoneda'] == moneda) {

	 Presupuesto =	proyecto[i][''+com+''];

	 }
	}

	 return Presupuesto;

}

function soloexplicaciones(proyecto,com,moneda,expl){

	var Presupuesto;  

	for (var i = 0; i < proyecto.length;  i++) {
	 
	 if (proyecto[i]['idmoneda'] == moneda && proyecto[i]['idtipoexp']== expl) {

	 Presupuesto = proyecto[i][''+com+''];

	 }
	}

	 return Presupuesto;

}
function cabexplicaciones(clase,anho,plan,reales){

			var informacion ="<div class='Tabla-Fondo1' >";
			informacion += "<div class="+clase+" style='background: red none repeat scroll 0% 0%; margin-top: 26px;' >Moneda</div>";
			informacion += "<div class="+clase+" style='background: red none repeat scroll 0% 0%; margin-top: 26px;'>"+plan+" "+anho+"</div>";
			informacion += "<div class="+clase+" style='background: red none repeat scroll 0% 0%; margin-top: 26px;'>"+reales+" "+anho+"</div>";
			informacion += "<div class="+clase+" style='background: red none repeat scroll 0% 0%; margin-top: 26px;'>"+reales+" vs "+plan+"  "+anho+"</div>";
			informacion += "<div class="+clase+" style='background: red none repeat scroll 0% 0%; margin-top: 26px;'>Var. "+reales+" vs "+plan+" "+anho+"</div>";
			informacion += "<div class="+clase+" style='width:250px; background: red none repeat scroll 0% 0%; margin-top: 26px;'>Explicaciones </div>";
			informacion+= "</div>";
			return informacion;
}

function mostrarexplicaciones(clase,moneda,plan,reales,explicaciones,name){

	var realvsplan,variacion;
	var realmv;
	if(isNaN(plan)){ plan = 0;}
	if(isNaN(reales)){ reales = 0;}

	realvsplan = parseFloat(reales) - parseFloat(plan);
	variacion = (parseFloat(reales)/parseFloat(plan))*100;
	if(isNaN(variacion)){ variacion = 0;}
		var informacion ="<div class='Tabla-Fondo1' >"; 
			informacion+= "<div class="+clase+" >"+moneda+"</div>";
			informacion+= "<div class="+clase+" >"+parseFloat(plan).toFixed(2)+"</div>";
			informacion+= "<div class="+clase+" >"+parseFloat(reales).toFixed(2)+"</div>";
			informacion+= "<div class="+clase+" >"+parseFloat(realvsplan).toFixed(2)+"</div>";
			informacion+= "<div class="+clase+" >"+parseFloat(variacion).toFixed(2)+"%</div>";
			if(explicaciones === undefined){
				informacion+= "<div class="+clase+"  style='width:250px;' ><textarea class='estilotextarea' name="+name+"></textarea></div>";
				}else{
				informacion+= "<div class="+clase+"  style='width:250px;' ><textarea class='estilotextarea' name="+name+">"+explicaciones+"</textarea></div>";	
				}
		 
			informacion+= "</div>";
		return informacion;
}
//////////////////////FILTROS PARA PROYECTOS POR CATEGORIA //////////////////////

function geofisica(pro,i){

		return pro[i]['numcategoria']==9;
}

function perfavanz(pro,i){

		return pro[i]['numcategoria']==11;
}
function perfdesarro(pro,i){

		return pro[i]['numcategoria']==12;
}

function perfexplora(pro,i){

		return pro[i]['numcategoria']==10;
}
function recupadic(pro,i){

		return pro[i]['numcategoria']==10;
}

function recompozos(pro,i){

		return pro[i]['numcategoria']==22;
}

function recupesuple(pro,i){

		return pro[i]['numcategoria']==23;
}
//
function inyectalternavapor(pro,i){

		return pro[i]['numcategoria']==24;
}
function levantamientoartif(pro,i){

		return pro[i]['numcategoria']==25;
}
function conutigas(pro,i){

		return pro[i]['numcategoria']==26;
}
function plantliqgas(pro,i){

		return pro[i]['numcategoria']==27;
}
function instproduc(pro,i){

		return pro[i]['numcategoria']==28;
}

function oleoterminaemb(pro,i){

		return pro[i]['numcategoria']==29;
}

function almacenamiento(pro,i){

		return pro[i]['numcategoria']==30;
}

function desarrollourba(pro,i){

		return pro[i]['numcategoria']==74;
}

function proteccioninteg(pro,i){

		return pro[i]['numcategoria']==75;
}

function pcp(pro,i){

		return pro[i]['numcategoria']==76;
}

function telecomunicaciones(pro,i){

		return pro[i]['numcategoria']==84;
}

function automatizacionind(pro,i){

		return pro[i]['numcategoria']==85;
}
function computaysiste(pro,i){

		return pro[i]['numcategoria']==86;
}
function edifinstindust(pro,i){

		return pro[i]['numcategoria']==91;
}
function equipos(pro,i){

		return pro[i]['numcategoria']==93;
}
function otrasinv(pro,i){

		return pro[i]['numcategoria']==98;
}
function habilitadorayapo(pro,i){

		return pro[i]['numcategoria']=='HA';
}




/// SACAR LAS PROYECTOS POR CATEGORIA PLAN REAL MEJOR VISION POR MONEDA 
function categoriaproyectos(hab,filtrado,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	
	for (var i=0;  i < hab.length ; i++) {


		if(filtrado(hab,i) && hab[i]['idmoneda']==moneda){

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


// FILTRO PARA SUMAR TODOS LAS CATEGORIAS
function sumarcateogoria(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23){
		var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

		 enerotl = parseFloat(a1[0]) +parseFloat(a2[0]) +parseFloat(a3[0])  + parseFloat(a4[0]) + parseFloat(a5[0]) +parseFloat(a6[0]) +parseFloat(a7[0])  + parseFloat(a8[0]) + parseFloat(a9[0]) +parseFloat(a10[0]) +parseFloat(a11[0])  + parseFloat(a12[0]) + parseFloat(a13[0]) +parseFloat(a14[0]) +parseFloat(a15[0])  + parseFloat(a16[0]) + parseFloat(a17[0]) +parseFloat(a18[0]) +parseFloat(a19[0])  + parseFloat(a20[0]) + parseFloat(a21[0]) +parseFloat(a22[0]) +parseFloat(a23[0]);
		 febrerotl = parseFloat(a1[1]) +parseFloat(a2[1]) +parseFloat(a3[1])  + parseFloat(a4[1]) + parseFloat(a5[1]) +parseFloat(a6[1]) +parseFloat(a7[1])  + parseFloat(a8[1]) + parseFloat(a9[1]) +parseFloat(a10[1]) +parseFloat(a11[1])  + parseFloat(a12[1]) + parseFloat(a13[1]) +parseFloat(a14[1]) +parseFloat(a15[1])  + parseFloat(a16[1]) + parseFloat(a17[1]) +parseFloat(a18[1]) +parseFloat(a19[1])  + parseFloat(a20[1]) + parseFloat(a21[1]) +parseFloat(a22[1]) +parseFloat(a23[1]);  
		 marzotl =  parseFloat(a1[2]) +parseFloat(a2[2]) +parseFloat(a3[2])  + parseFloat(a4[2]) + parseFloat(a5[2]) +parseFloat(a6[2]) +parseFloat(a7[2])  + parseFloat(a8[2]) + parseFloat(a9[2]) +parseFloat(a10[2]) +parseFloat(a11[2])  + parseFloat(a12[2]) + parseFloat(a13[2]) +parseFloat(a14[2]) +parseFloat(a15[2])  + parseFloat(a16[2]) + parseFloat(a17[2]) +parseFloat(a18[2]) +parseFloat(a19[2])  + parseFloat(a20[2]) + parseFloat(a21[2]) +parseFloat(a22[2]) +parseFloat(a23[2]); 
		 abriltl =  parseFloat(a1[3]) +parseFloat(a2[3]) +parseFloat(a3[3])  + parseFloat(a4[3]) + parseFloat(a5[3]) +parseFloat(a6[3]) +parseFloat(a7[3])  + parseFloat(a8[3]) + parseFloat(a9[3]) +parseFloat(a10[3]) +parseFloat(a11[3])  + parseFloat(a12[3]) + parseFloat(a13[3]) +parseFloat(a14[3]) +parseFloat(a15[3])  + parseFloat(a16[3]) + parseFloat(a17[3]) +parseFloat(a18[3]) +parseFloat(a19[3])  + parseFloat(a20[3]) + parseFloat(a21[3]) +parseFloat(a22[3]) +parseFloat(a23[3]); 
		 mayotl = parseFloat(a1[4]) +parseFloat(a2[4]) +parseFloat(a3[4])  + parseFloat(a4[4]) + parseFloat(a5[4]) +parseFloat(a6[4]) +parseFloat(a7[4])  + parseFloat(a8[4]) + parseFloat(a9[4]) +parseFloat(a10[4]) +parseFloat(a11[4])  + parseFloat(a12[4]) + parseFloat(a13[4]) +parseFloat(a14[4]) +parseFloat(a15[4])  + parseFloat(a16[4]) + parseFloat(a17[4]) +parseFloat(a18[4]) +parseFloat(a19[4])  + parseFloat(a20[4]) + parseFloat(a21[4]) +parseFloat(a22[4]) +parseFloat(a23[4]);
		 juniotl =  parseFloat(a1[5]) +parseFloat(a2[5]) +parseFloat(a3[5])  + parseFloat(a4[5]) + parseFloat(a5[5]) +parseFloat(a6[5]) +parseFloat(a7[5])  + parseFloat(a8[5]) + parseFloat(a9[5]) +parseFloat(a10[5]) +parseFloat(a11[5])  + parseFloat(a12[5]) + parseFloat(a13[5]) +parseFloat(a14[5]) +parseFloat(a15[5])  + parseFloat(a16[5]) + parseFloat(a17[5]) +parseFloat(a18[5]) +parseFloat(a19[5])  + parseFloat(a20[5]) + parseFloat(a21[5]) +parseFloat(a22[5]) +parseFloat(a23[5]);
		 juliotl  = parseFloat(a1[6]) +parseFloat(a2[6]) +parseFloat(a3[6])  + parseFloat(a4[6]) + parseFloat(a5[6]) +parseFloat(a6[6]) +parseFloat(a7[6])  + parseFloat(a8[6]) + parseFloat(a9[6]) +parseFloat(a10[6]) +parseFloat(a11[6])  + parseFloat(a12[6]) + parseFloat(a13[6]) +parseFloat(a14[6]) +parseFloat(a15[6])  + parseFloat(a16[6]) + parseFloat(a17[6]) +parseFloat(a18[6]) +parseFloat(a19[6])  + parseFloat(a20[6]) + parseFloat(a21[6]) +parseFloat(a22[6]) +parseFloat(a23[6]);
		 agostotl = parseFloat(a1[7]) +parseFloat(a2[7]) +parseFloat(a3[7])  + parseFloat(a4[7]) + parseFloat(a5[7]) +parseFloat(a6[7]) +parseFloat(a7[7])  + parseFloat(a8[7]) + parseFloat(a9[7]) +parseFloat(a10[7]) +parseFloat(a11[7])  + parseFloat(a12[7]) + parseFloat(a13[7]) +parseFloat(a14[7]) +parseFloat(a15[7])  + parseFloat(a16[7]) + parseFloat(a17[7]) +parseFloat(a18[7]) +parseFloat(a19[7])  + parseFloat(a20[7]) + parseFloat(a21[7]) +parseFloat(a22[7]) +parseFloat(a23[7]); 
		 septiembretl = parseFloat(a1[8]) +parseFloat(a2[8]) +parseFloat(a3[8])  + parseFloat(a4[8]) + parseFloat(a5[8]) +parseFloat(a6[8]) +parseFloat(a7[8])  + parseFloat(a8[8]) + parseFloat(a9[8]) +parseFloat(a10[8]) +parseFloat(a11[8])  + parseFloat(a12[8]) + parseFloat(a13[8]) +parseFloat(a14[8]) +parseFloat(a15[8])  + parseFloat(a16[8]) + parseFloat(a17[8]) +parseFloat(a18[8]) +parseFloat(a19[8])  + parseFloat(a20[8]) + parseFloat(a21[8]) +parseFloat(a22[8]) +parseFloat(a23[8]); 
		 octubretl  = parseFloat(a1[9]) +parseFloat(a2[9]) +parseFloat(a3[9])  + parseFloat(a4[9]) + parseFloat(a5[9]) +parseFloat(a6[9]) +parseFloat(a7[9])  + parseFloat(a8[9]) + parseFloat(a9[9]) +parseFloat(a10[9]) +parseFloat(a11[9])  + parseFloat(a12[9]) + parseFloat(a13[9]) +parseFloat(a14[9]) +parseFloat(a15[9])  + parseFloat(a16[9]) + parseFloat(a17[9]) +parseFloat(a18[9]) +parseFloat(a19[9])  + parseFloat(a20[9]) + parseFloat(a21[9]) +parseFloat(a22[9]) +parseFloat(a23[9]); 
		 noviembretl = parseFloat(a1[10]) +parseFloat(a2[10]) +parseFloat(a3[10])  + parseFloat(a4[10]) + parseFloat(a5[10]) +parseFloat(a6[10]) +parseFloat(a7[10])  + parseFloat(a8[10]) + parseFloat(a9[10]) +parseFloat(a10[10]) +parseFloat(a11[10])  + parseFloat(a12[10]) + parseFloat(a13[10]) +parseFloat(a14[10]) +parseFloat(a15[10])  + parseFloat(a16[10]) + parseFloat(a17[10]) +parseFloat(a18[10]) +parseFloat(a19[10])  + parseFloat(a20[10]) + parseFloat(a21[10]) +parseFloat(a22[10]) +parseFloat(a23[10]);
		 diciembretl  = parseFloat(a1[11]) +parseFloat(a2[11]) +parseFloat(a3[11])  + parseFloat(a4[11]) + parseFloat(a5[11]) +parseFloat(a6[11]) +parseFloat(a7[11])  + parseFloat(a8[11]) + parseFloat(a9[11]) +parseFloat(a10[11]) +parseFloat(a11[11])  + parseFloat(a12[11]) + parseFloat(a13[11]) +parseFloat(a14[11]) +parseFloat(a15[11])  + parseFloat(a16[11]) + parseFloat(a17[11]) +parseFloat(a18[11]) +parseFloat(a19[11])  + parseFloat(a20[11]) + parseFloat(a21[11]) +parseFloat(a22[11]) +parseFloat(a23[11]);
	
 
	var categoria =  new Array(enerotl,febrerotl,marzotl,abriltl,mayotl,juniotl,juliotl,agostotl,septiembretl,octubretl,noviembretl,diciembretl);
	return   categoria;
}// fin funcion 

function mostrarprmacat(pplan,com,moneda){

						 ///////PLAN PROYECTOS////////////////////////////////////////////////////////////
 						// CATEGORIA GEOFISICA
 						var pgeobsf = categoriaproyectos(pplan,geofisica,com,moneda);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var pperfavanzbsf = categoriaproyectos(pplan,perfavanz,com,moneda);
 							///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var pperfdesarrobsf = categoriaproyectos(pplan,perfdesarro,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var pperfexplorabsf = categoriaproyectos(pplan,perfexplora,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var precupadicbsf = categoriaproyectos(pplan,recupadic,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var precompozosbsf = categoriaproyectos(pplan,recompozos,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var precupesuplebsf = categoriaproyectos(pplan,recupesuple,com,moneda);
 						 ///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var pinyectalternavaporbsf = categoriaproyectos(pplan,inyectalternavapor,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var plevantamientoartifbsf = categoriaproyectos(pplan,levantamientoartif,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var pconutigasbsf = categoriaproyectos(pplan,conutigas,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var pplantliqgasbsf = categoriaproyectos(pplan,plantliqgas,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var pinstproducbsf = categoriaproyectos(pplan,instproduc,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var poleoterminaembbsf = categoriaproyectos(pplan,oleoterminaemb,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var palmacenamientobsf = categoriaproyectos(pplan,almacenamiento,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var pdesarrollourbabsf = categoriaproyectos(pplan,desarrollourba,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var pproteccionintegbsf = categoriaproyectos(pplan,proteccioninteg,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var ppcpbsf = categoriaproyectos(pplan,pcp,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var ptelecomunicacionesbsf = categoriaproyectos(pplan,telecomunicaciones,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var pautomatizacionindbsf = categoriaproyectos(pplan,automatizacionind,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var pcomputaysistebsf = categoriaproyectos(pplan,computaysiste,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var pedifinstindustbsf = categoriaproyectos(pplan,edifinstindust,com,moneda);
 						 ///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var pequiposbsf = categoriaproyectos(pplan,equipos,com,moneda);
 					 
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var potrasinvbsf = categoriaproyectos(pplan,otrasinv,com,moneda);
 						///////////////////////////

 						var ptotalcatebsf = sumarcateogoria(pgeobsf,pperfavanzbsf,pperfdesarrobsf,pperfexplorabsf,precupadicbsf,precompozosbsf,precupesuplebsf,pinyectalternavaporbsf,plevantamientoartifbsf,pconutigasbsf,pplantliqgasbsf,pinstproducbsf,poleoterminaembbsf,palmacenamientobsf,pdesarrollourbabsf,pproteccionintegbsf,ppcpbsf,ptelecomunicacionesbsf,pautomatizacionindbsf,pcomputaysistebsf,pedifinstindustbsf,pequiposbsf,potrasinvbsf);
 						
 						var informacion =	cabeceracategoriaprmva('red-header','CATEGORIA');
 						informacion += mostrarcategoriaprmva('','Geofisica',pgeobsf);
 						informacion += mostrarcategoriaprmva('','Perforación de Avanzada',pperfavanzbsf);
 						informacion += mostrarcategoriaprmva('','Perforación de Desarrollo',pperfdesarrobsf);
 						informacion += mostrarcategoriaprmva('','Perforación Exploratoria',pperfexplorabsf);
 						informacion += mostrarcategoriaprmva('','Recuperación Adicional',precupadicbsf);
 						informacion += mostrarcategoriaprmva('','Recompletación De Pozos',precompozosbsf);
 						informacion += mostrarcategoriaprmva('','Recuperación Suplementaria',precupesuplebsf);
 						informacion += mostrarcategoriaprmva('','Inyección Alterna De Vapor',pinyectalternavaporbsf);
 						informacion += mostrarcategoriaprmva('','Levantamiento Artificial',plevantamientoartifbsf);
 						informacion += mostrarcategoriaprmva('','Conservación y Utilización del Gas',pconutigasbsf);
 						informacion += mostrarcategoriaprmva('','Planta de Líquidos y Gas',pplantliqgasbsf);
 						informacion += mostrarcategoriaprmva('','Instalaciones de Producción',pinstproducbsf);
 						informacion += mostrarcategoriaprmva('','Oleoductos y Terminales de Embarque',poleoterminaembbsf);
 						informacion += mostrarcategoriaprmva('','Almacenamiento',palmacenamientobsf);
 						informacion += mostrarcategoriaprmva('','Desarrollo Urbano',pdesarrollourbabsf);
 						informacion += mostrarcategoriaprmva('','Protección Integral',pproteccionintegbsf);
 						informacion += mostrarcategoriaprmva('','Prevención y Control de Pérdidas',ppcpbsf);
 						informacion += mostrarcategoriaprmva('','Telecomunicaciones',ptelecomunicacionesbsf);
 						informacion += mostrarcategoriaprmva('','Automatización Industrial',pautomatizacionindbsf);
 						informacion += mostrarcategoriaprmva('','Computación y Sistemas',pcomputaysistebsf);
 						informacion += mostrarcategoriaprmva('','Edificaciones e Instalaciones Industriales',pedifinstindustbsf);
 						informacion += mostrarcategoriaprmva('','Equipos',pequiposbsf);
 						informacion += mostrarcategoriaprmva('','Otras Inversiones',potrasinvbsf);
 						informacion += mostrarcategoriaprmva('red-header','Total',ptotalcatebsf);
 						return informacion;
}


/// MOSTRAR EL EQUIVALENTE POR MES DEL PLAN REAL MEJOR VISION Y ANTEPROYECTO
function mostrarprmacatequiv(pplan,com){

	///////PLAN PROYECTOS////////////////////////////////////////////////////////////

 						// CATEGORIA GEOFISICA
 						var pgeobsf = categoriaproyectos(pplan,geofisica,com,1);
 						var pgeodol = categoriaproyectos(pplan,geofisica,com,2);
 						var pgeoDeqv = filtroequivalente(pgeobsf,pgeodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE AVANZADA
 						var pperfavanzbsf = categoriaproyectos(pplan,perfavanz,com,1);
 						var pperfavanzdol = categoriaproyectos(pplan,perfavanz,com,2);
 						var pperfavanzDeqv = filtroequivalente(pperfavanzbsf,pperfavanzdol);
 						///////////////////////////
 						// CATEGORIA PERFORACION DE DESARROLLO 
 						var pperfdesarrobsf = categoriaproyectos(pplan,perfdesarro,com,1);
 						var pperfdesarrodol = categoriaproyectos(pplan,perfdesarro,com,2);
 						var pperfdesarroDeqv = filtroequivalente(pperfdesarrobsf,pperfdesarrodol);
 						///////////////////////////
 						// CATEGORIA PERFORACION EXPLORATORIA
 						var pperfexplorabsf = categoriaproyectos(pplan,perfexplora,com,1);
 						var pperfexploradol = categoriaproyectos(pplan,perfexplora,com,2);
 						var pperfexploraDeqv = filtroequivalente(pperfexplorabsf,pperfexploradol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION ADICIONAL
 						var precupadicbsf = categoriaproyectos(pplan,recupadic,com,1);
 						var precupadicdol = categoriaproyectos(pplan,recupadic,com,2);
 						var precupadicDeqv = filtroequivalente(precupadicbsf,precupadicdol);
 						///////////////////////////
 						// CATEGORIA RECOMPLETACION DE POZOS
 						var precompozosbsf = categoriaproyectos(pplan,recompozos,com,1);
 						var precompozosdol = categoriaproyectos(pplan,recompozos,com,2);
 						var precompozosDeqv = filtroequivalente(precompozosbsf,precompozosdol);
 						///////////////////////////
 						// CATEGORIA RECUPERACION SUPLEMENTARIA
 						var precupesuplebsf = categoriaproyectos(pplan,recupesuple,com,1);
 						var precupesupledol = categoriaproyectos(pplan,recupesuple,com,2);
 						var precupesupleDeqv = filtroequivalente(precupesuplebsf,precupesupledol);
 						///////////////////////////	
 						// CATEGORIA INYECCCION ALTERNA DE VAPOR
 						var pinyectalternavaporbsf = categoriaproyectos(pplan,inyectalternavapor,com,1);
 						var pinyectalternavapordol = categoriaproyectos(pplan,inyectalternavapor,com,2);
 						var pinyectalternavaporDeqv = filtroequivalente(pinyectalternavaporbsf,pinyectalternavapordol);
 						///////////////////////////
 						// CATEGORIA LEVANTAMIENTO ARTIFICIAL
 						var plevantamientoartifbsf = categoriaproyectos(pplan,levantamientoartif,com,1);
 						var plevantamientoartifdol = categoriaproyectos(pplan,levantamientoartif,com,2);
 						var plevantamientoartifDeqv = filtroequivalente(plevantamientoartifbsf,plevantamientoartifdol);
 						///////////////////////////
 						// CATEGORIA CONSERVACION Y UTILIZACION DEL GAS
 						var pconutigasbsf = categoriaproyectos(pplan,conutigas,com,1);
 						var pconutigasdol = categoriaproyectos(pplan,conutigas,com,2);
 						var pconutigasDeqv = filtroequivalente(pconutigasbsf,pconutigasdol);
 						///////////////////////////
 						// CATEGORIA PLANTA DE LIQUIDOS GAS 
 						var pplantliqgasbsf = categoriaproyectos(pplan,plantliqgas,com,1);
 						var pplantliqgasdol = categoriaproyectos(pplan,plantliqgas,com,2);
 						var pplantliqgasDeqv = filtroequivalente(pplantliqgasbsf,pplantliqgasdol);
 						///////////////////////////
 						// CATEGORIA INTALACIONES DE PRODUCCION
 						var pinstproducbsf = categoriaproyectos(pplan,instproduc,com,1);
 						var pinstproducdol = categoriaproyectos(pplan,instproduc,com,2);
 						var pinstproducDeqv = filtroequivalente(pinstproducbsf,pinstproducdol);
 						///////////////////////////
 						// CATEGORIA OLEODUCTO Y TERMINALES DE EMBARQUE
 						var poleoterminaembbsf = categoriaproyectos(pplan,oleoterminaemb,com,1);
 						var poleoterminaembdol = categoriaproyectos(pplan,oleoterminaemb,com,2);
 						var poleoterminaembDeqv = filtroequivalente(poleoterminaembbsf,poleoterminaembdol);
 						///////////////////////////
 						// CATEGORIA ALMACENAMIENTO
 						var palmacenamientobsf = categoriaproyectos(pplan,almacenamiento,com,1);
 						var palmacenamientodol = categoriaproyectos(pplan,almacenamiento,com,2);
 						var palmacenamientoDeqv = filtroequivalente(palmacenamientobsf,palmacenamientodol);
 						///////////////////////////
 						// CATEGORIA DESARROLLO URBANO
 						var pdesarrollourbabsf = categoriaproyectos(pplan,desarrollourba,com,1);
 						var pdesarrollourbadol = categoriaproyectos(pplan,desarrollourba,com,2);
 						var pdesarrollourbaDeqv = filtroequivalente(pdesarrollourbabsf,pdesarrollourbadol);
 						///////////////////////////
 						// CATEGORIA PROTECCION INTEGRAL
 						var pproteccionintegbsf = categoriaproyectos(pplan,proteccioninteg,com,1);
 						var pproteccionintegdol = categoriaproyectos(pplan,proteccioninteg,com,2);
 						var pproteccionintegDeqv = filtroequivalente(pproteccionintegbsf,pproteccionintegdol);
 						///////////////////////////
 						// CATEGORIA PREVENCION Y CONTROL DE PERDIDAS
 						var ppcpbsf = categoriaproyectos(pplan,pcp,com,1);
 						var ppcpdol = categoriaproyectos(pplan,pcp,com,2);
 						var ppcpDeqv = filtroequivalente(ppcpbsf,ppcpdol);
 						///////////////////////////
 						// CATEGORIA TELECOMUNICACIONES
 						var ptelecomunicacionesbsf = categoriaproyectos(pplan,telecomunicaciones,com,1);
 						var ptelecomunicacionesdol = categoriaproyectos(pplan,telecomunicaciones,com,2);
 						var ptelecomunicacionesDeqv = filtroequivalente(ptelecomunicacionesbsf,ptelecomunicacionesdol);
 						///////////////////////////
 						// CATEGORIA AUTOMATIZACION INDUSTRIAL
 						var pautomatizacionindbsf = categoriaproyectos(pplan,automatizacionind,com,1);
 						var pautomatizacioninddol = categoriaproyectos(pplan,automatizacionind,com,2);
 						var pautomatizacionindDeqv = filtroequivalente(pautomatizacionindbsf,pautomatizacioninddol);
 						///////////////////////////
 						// CATEGORIA  COMPUTACION Y SISTEMA
 						var pcomputaysistebsf = categoriaproyectos(pplan,computaysiste,com,1);
 						var pcomputaysistedol = categoriaproyectos(pplan,computaysiste,com,2);
 						var pcomputaysisteDeqv = filtroequivalente(pcomputaysistebsf,pcomputaysistedol);
 						///////////////////////////
 						// CATEGORIA  EDIFICACIONES E INSTALACIONES INDUSTRIALES
 						var pedifinstindustbsf = categoriaproyectos(pplan,edifinstindust,com,1);
 						var pedifinstindustdol = categoriaproyectos(pplan,edifinstindust,com,2);
 						var pedifinstindustDeqv = filtroequivalente(pedifinstindustbsf,pedifinstindustdol);
 						///////////////////////////
 						// CATEGORIA  EQUIPOS
 						var pequiposbsf = categoriaproyectos(pplan,equipos,com,1);
 						var pequiposdol = categoriaproyectos(pplan,equipos,com,2);
 						var pequiposDeqv = filtroequivalente(pequiposbsf,pequiposdol);
 						///////////////////////////
 						// CATEGORIA  OTRAS INVERSIONES
 						var potrasinvbsf = categoriaproyectos(pplan,otrasinv,com,1);
 						var potrasinvdol = categoriaproyectos(pplan,otrasinv,com,2);
 						var potrasinvDeqv = filtroequivalente(potrasinvbsf,potrasinvdol);
 						///////////////////////////
 						  
 						var ptotalcateDeqv = sumarcateogoria(pgeoDeqv,pperfavanzDeqv,pperfdesarroDeqv,pperfexploraDeqv,precupadicDeqv,precompozosDeqv,precupesupleDeqv,pinyectalternavaporDeqv,plevantamientoartifDeqv,pconutigasDeqv,pplantliqgasDeqv,pinstproducDeqv,poleoterminaembDeqv,palmacenamientoDeqv,pdesarrollourbaDeqv,pproteccionintegDeqv,ppcpDeqv,ptelecomunicacionesDeqv,pautomatizacionindDeqv,pcomputaysisteDeqv,pedifinstindustDeqv,pequiposDeqv,potrasinvDeqv);
 						
 						var informacion =	cabeceracategoriaprmva('red-header','CATEGORIA');
 						informacion += mostrarcategoriaprmva('','Geofisica',pgeoDeqv);
 						informacion += mostrarcategoriaprmva('','Perforación de Avanzada',pperfavanzDeqv);
 						informacion += mostrarcategoriaprmva('','Perforación de Desarrollo',pperfdesarroDeqv);
 						informacion += mostrarcategoriaprmva('','Perforación Exploratoria',pperfexploraDeqv);
 						informacion += mostrarcategoriaprmva('','Recuperación Adicional',precupadicDeqv);
 						informacion += mostrarcategoriaprmva('','Recompletación De Pozos',precompozosDeqv);
 						informacion += mostrarcategoriaprmva('','Recuperación Suplementaria',precupesupleDeqv);
 						informacion += mostrarcategoriaprmva('','Inyección Alterna De Vapor',pinyectalternavaporDeqv);
 						informacion += mostrarcategoriaprmva('','Levantamiento Artificial',plevantamientoartifDeqv);
 						informacion += mostrarcategoriaprmva('','Conservación y Utilización del Gas',pconutigasDeqv);
 						informacion += mostrarcategoriaprmva('','Planta de Líquidos y Gas',pplantliqgasDeqv);
 						informacion += mostrarcategoriaprmva('','Instalaciones de Producción',pinstproducDeqv);
 						informacion += mostrarcategoriaprmva('','Oleoductos y Terminales de Embarque',poleoterminaembDeqv);
 						informacion += mostrarcategoriaprmva('','Almacenamiento',palmacenamientoDeqv);
 						informacion += mostrarcategoriaprmva('','Desarrollo Urbano',pdesarrollourbaDeqv);
 						informacion += mostrarcategoriaprmva('','Protección Integral',pproteccionintegDeqv);
 						informacion += mostrarcategoriaprmva('','Prevención y Control de Pérdidas',ppcpDeqv);
 						informacion += mostrarcategoriaprmva('','Telecomunicaciones',ptelecomunicacionesDeqv);
 						informacion += mostrarcategoriaprmva('','Automatización Industrial',pautomatizacionindDeqv);
 						informacion += mostrarcategoriaprmva('','Computación y Sistemas',pcomputaysisteDeqv);
 						informacion += mostrarcategoriaprmva('','Edificaciones e Instalaciones Industriales',pedifinstindustDeqv);
 						informacion += mostrarcategoriaprmva('','Equipos',pequiposDeqv);
 						informacion += mostrarcategoriaprmva('','Otras Inversiones',potrasinvDeqv);
 						informacion += mostrarcategoriaprmva('red-header','Total',ptotalcateDeqv);
 						return informacion;



}


/// SACAR LAS HABILITADORAS PLAN REAL MEJOR VISION POR MONEDA 
function filtromixta(hab,filtrado,com,moneda){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

			if (isNaN(hab[i]['enero'+com+''])){ hab[i]['enero'+com+'']=0; }
			if (isNaN(hab[i]['febrero'+com+''])){ hab[i]['febrero'+com+'']=0; }
			if (isNaN(hab[i]['marzo'+com+''])){ hab[i]['marzo'+com+'']=0; }
			if (isNaN(hab[i]['abril'+com+''])){ hab[i]['abril'+com+'']=0; }
			if (isNaN(hab[i]['mayo'+com+''])){ hab[i]['mayo'+com+'']=0; }
			if (isNaN(hab[i]['junio'+com+''])){ hab[i]['junio'+com+'']=0; }
			if (isNaN(hab[i]['julio'+com+''])){ hab[i]['julio'+com+'']=0; }
			if (isNaN(hab[i]['agosto'+com+''])){ hab[i]['agosto'+com+'']=0; }
			if (isNaN(hab[i]['septiembre'+com+''])){ hab[i]['septiembre'+com+'']=0; }
			if (isNaN(hab[i]['octubre'+com+''])){ hab[i]['octubre'+com+'']=0; }
			if (isNaN(hab[i]['noviembre'+com+''])){ hab[i]['noviembre'+com+'']=0; }
			if (isNaN(hab[i]['diciembre'+com+''])){ hab[i]['diciembre'+com+'']=0; }


		 	if(filtrado(hab,i)  && hab[i]['idmoneda']== moneda){
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


// FUNCION MOSTRAR POR ELEMENTO O CATEGORIA TABLA HECHA A MANO
function descripcionestabladiv(color,tama,color1,descrp,i,aprobado,planbsf,plandol,planequiv,realbsf,realdol,realequiv,mvbsf,mvdol,mvequiv,anteproyectobsf,anteproyectodol,anteproyectoequiv){

		/// bolivares
		var variacionRPbs = parseFloat(realbsf[i])-parseFloat(planbsf[i]);	
		var variacionMVAbs = parseFloat(mvbsf[i])-parseFloat(planbsf[11]);			
		var variacionANTEAPRbs = parseFloat(anteproyectobsf[11])-parseFloat(planbsf[11]);

		/// dolares
		var variacionRPdol = parseFloat(realdol[i])-parseFloat(plandol[i]);	
		var variacionMVAdol = parseFloat(mvdol[i])-parseFloat(plandol[11]);			
		var variacionANTEAPRdol = parseFloat(anteproyectodol[11])-parseFloat(plandol[11]);

		/// equivalente
		var variacionRP = parseFloat(realequiv[i])-parseFloat(planequiv[i]);
		var variacionMVA = parseFloat(mvequiv[11])-parseFloat(aprobado[11]);
		var variacionANTEAPR = parseFloat(anteproyectoequiv[11])-parseFloat(aprobado[11]);

		

	var informacion ='<div class="Tabla-Fondo">';
		informacion += '<div class="'+tama+'style="width:200px;height:40px;background:white;color:blue;" >'+descrp+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(planbsf[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(planbsf[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(realbsf[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionRPbs).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvbsf[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionMVAbs).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(anteproyectobsf[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionANTEAPR).toFixed(2)+'</div>';
		////dolares 
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(plandol[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(plandol[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(realdol[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionRPdol).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvdol[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionMVAdol).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(anteproyectodol[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionANTEAPRdol).toFixed(2)+'</div>';
		/// equivalente
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(planequiv[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(planequiv[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(realequiv[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionRP).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvequiv[i]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionMVA).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(anteproyectoequiv[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(variacionANTEAPR).toFixed(2)+'</div>';
		//// mejor vision 
			informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvbsf[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvdol[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style=" background:white; >'+parseFloat(mvequiv[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style="background:white; >'+parseFloat(variacionMVA).toFixed(2)+'</div>';

		//// anteproyecto 

		informacion += '<div class="'+tama+'" style="background:white; >'+parseFloat(anteproyectobsf[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style="background:white; >'+parseFloat(anteproyectodol[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style="background:white; >'+parseFloat(anteproyectoequiv[11]).toFixed(2)+'</div>';
		informacion += '<div class="'+tama+'" style="background:white; >'+parseFloat(variacionANTEAPR).toFixed(2)+'</div>';	
		informacion += '</div>';

	return informacion;
}




function pptocab(clase,anho,mes,cabecera){

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;background:white;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:red;"> Moneda </div>';
				informacion += '<div class="'+clase+'" style="background:red;" >Aprobado '+anho+' </div>';
				informacion += '<div class="'+clase+'" style="background:red;" >Plan Ene - '+mes+' '+anho+'  </div>'; 
				informacion += '<div class="'+clase+'" style="background:red;" >Real Ene - '+mes+' '+anho+'  </div>';
				informacion += '<div class="'+clase+'" style="background:red;" > Real vs Plan %</div>';
				informacion += '<div class="'+clase+'" style="background:red;" >Var. Real vs Plan '+anho+' %</div>';
				informacion += '<div class="'+clase+'" style="background:red;" > Mejor Visión '+anho+'</div> ';
				informacion += '<div class="'+clase+'" style="background:red;" > MV vs Aprob. '+anho+'</div>';
				informacion += '<div class="'+clase+'" style="background:red;" > Var. MV vs Aprob. '+anho+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:red;" >Presupuesto '+(parseFloat(anho)+1)+' </div>';
				informacion += '<div class="'+clase+'" style="background:red;" >Ppto '+(parseFloat(anho)+1)+' vs Aprob '+anho+'</div>';
				informacion += '<div class="'+clase+'" style="background:red;" >Var Ppto '+(parseFloat(anho)+1)+' vs Aprob '+anho+' %</div>';
				informacion += '</div>';

		return informacion;
}
function separador(){

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;"> </div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>'; 
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div> ';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>'; 
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '<div class="'+clase+'" ></div>';
				informacion += '</div>';

		return informacion;
}

function titulo(clase,titulo1){
			var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;background:red;"> '+titulo1+' </div>';
				informacion += '<div class="'+clase+'" style="width:1211px;background:red;"></div>';
				informacion += '</div>';
				return informacion;
}
		 
function esfuerzopropio(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="Tabla-Elemento-Encabezado" style="width:200px;background:#FDF774;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}

function esfuerzopropiodiv(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="Tabla-Elemento-Encabezado" style="width:200px;background:white;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}

function esfuerzopropiototal(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="Tabla-Elemento-Encabezado" style="width:200px;background:yellow;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}


////////////////////////////// para sacar la linea

function eplinea(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;background:#FDF774;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:#FDF774;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}

function eplineadiv(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;background:white;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:white;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}

function eplineatotal(clase,moneda,mes,cabecera,plan,reales,mv,ant){


				var rvsp = parseFloat(reales[mes])-parseFloat(plan[mes]);
				var	varrp = (parseFloat(reales[mes])/parseFloat(plan[mes]))*100;
				var mvvsa = parseFloat(mv[11])-parseFloat(plan[11]);
				var varmva = (parseFloat(mv[11])/parseFloat(plan[11]))*100;
				var antvsapb = parseFloat(ant[11])-parseFloat(plan[11]);
				var varantapb = (parseFloat(ant[11])/parseFloat(plan[11]))*100;

				var informacion ='<div class="Tabla-Fondo">';
				informacion += '<div class="'+clase+'" style="width:200px;background:yellow;color:blue;"> '+cabecera+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;"> '+moneda+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(plan[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(plan[mes]).toFixed(2)+' </div>'; 
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(reales[mes]).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(rvsp).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varrp).toFixed(2)+' %</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(mv[11]).toFixed(2)+'</div> ';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(mvvsa).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varmva).toFixed(2)+' %</div>'; 
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(ant[11]).toFixed(2)+' </div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(antvsapb).toFixed(2)+'</div>';
				informacion += '<div class="'+clase+'" style="background:yellow;font-weight:bold;" >'+parseFloat(varantapb).toFixed(2)+' %</div>';
				informacion += '</div>';

		return informacion;
}