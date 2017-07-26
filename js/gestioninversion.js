var x;

x = $(document);
x.ready(gestioninversionep);

function gestioninversionep() {


	$( "input" ).on( "click", function() {

		var anho = $("#anhogi option:selected");

		var opciones = $("input:checked").val();

		var v3 = anho.val();
		
		alert(opciones);

		if(anho.val() != ''){

			if(opciones == 'pgi1'){

				var v2 = 1;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
				
				$.post("cgesinv/habilitadorasplan",postForm,function(habi){
  
						$.post("cgesinv/direccionplan",postForm,function(dir){

								
								var hab = $.parseJSON(habi);
 
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 								
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_p');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_p');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_p');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_p');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_p');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_p');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_p');
 						 var mep = filtrarcosto(hab,filtrom,5,'_p');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_p');
 						 var oep = filtrarcosto(hab,filtroo,5,'_p');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_p');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_p');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_p');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_p');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_p');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_p');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_p');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_p');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_p');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_p');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});

			}// fin de pgi1 

			if(opciones == 'pgi2'){

				var v2 = 2;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
			 
				$.post("cgesinv/habilitadorasplan",postForm,function(habi){
  
						$.post("cgesinv/direccionplan",postForm,function(dir){

								alert(habi.length);
								var hab = $.parseJSON(habi);
 								alert(hab.length);
								alert(dir);
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 								
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_p');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_p');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_p');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_p');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_p');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_p');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_p');
 						 var mep = filtrarcosto(hab,filtrom,5,'_p');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_p');
 						 var oep = filtrarcosto(hab,filtroo,5,'_p');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_p');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_p');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_p');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_p');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_p');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_p');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_p');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_p');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_p');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_p');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});




			}// fin de pgi2

			if(opciones == 'pgi3'){

			 
				var v1 = 1;
				var postForm ={'v3' : v3,
							 
								'v1': v1};
			 
				$.post("cgesinv/habilitadorasplanequiv",postForm,function(habi){
  
						$.post("cgesinv/direccionplanequiv",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 								
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = fildirequiv(dire,filtrolabord,'_p');
 						 	var bbdeep = fildirequiv(dire,filtrobbd,'_p');
 						 	var mdeep = fildirequiv(dire,filtromd,'_p');
 						 	var scdeep = fildirequiv(dire,filtroscd,'_p');
 						 	var odeep = fildirequiv(dire,filtrood,'_p');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filcostomon(hab,filtrolabor,5,'_p');
 						 var bbep = filcostomon(hab,filtrobb,5,'_p');
 						 var mep = filcostomon(hab,filtrom,5,'_p');
 						 var scep = filcostomon(hab,filtrosc,5,'_p');
 						 var oep = filcostomon(hab,filtroo,5,'_p');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filcostomon(hab,filtrolabor,4,'_p');
 						  var bbdtto = filcostomon(hab,filtrobb,4,'_p');
 						  var mdtto = filcostomon(hab,filtrom,4,'_p');
 						  var scdtto = filcostomon(hab,filtrosc,4,'_p');
 						  var odtto = filcostomon(hab,filtroo,4,'_p');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filcostomon(hab,filtrolabor,3,'_p');
 						  var bbdivoc = filcostomon(hab,filtrobb,3,'_p');
 						  var mdivoc = filcostomon(hab,filtrom,3,'_p');
 						  var scdivoc = filcostomon(hab,filtrosc,3,'_p');
 						  var odivoc = filcostomon(hab,filtroo,3,'_p');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});




			}// fin de pgi3 EQUIVALENTE DEL PLAN



			if(opciones == 'rgi1'){

				var v2 = 1;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
			 
				$.post("cgesinv/habilitadorareal",postForm,function(habi){
  
						$.post("cgesinv/direccionreal",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 								
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_r');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_r');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_r');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_r');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_r');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_r');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_r');
 						 var mep = filtrarcosto(hab,filtrom,5,'_r');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_r');
 						 var oep = filtrarcosto(hab,filtroo,5,'_r');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_r');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_r');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_r');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_r');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_r');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_r');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_r');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_r');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_r');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_r');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});




			}// fin de rgi1

				if(opciones == 'rgi2'){

				var v2 = 2;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
			 
				$.post("cgesinv/habilitadorareal",postForm,function(habi){
  
						$.post("cgesinv/direccionreal",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_r');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_r');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_r');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_r');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_r');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_r');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_r');
 						 var mep = filtrarcosto(hab,filtrom,5,'_r');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_r');
 						 var oep = filtrarcosto(hab,filtroo,5,'_r');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_r');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_r');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_r');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_r');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_r');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_r');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_r');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_r');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_r');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_r');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);


						});




				});




			}// fin de rgi2

				if(opciones == 'rgi3'){

			 
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v1': v1};
			 
				$.post("cgesinv/habilitadorarealequiv",postForm,function(habi){
  
						$.post("cgesinv/direccionrealequv",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 								
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = fildirequiv(dire,filtrolabor,'_r');
 						 	var bbdeep = fildirequiv(dire,filtrobbd,'_r');
 						 	var mdeep = fildirequiv(dire,filtromd,'_r');
 						 	var scdeep = fildirequiv(dire,filtroscd,'_r');
 						 	var odeep = fildirequiv(dire,filtrood,'_r');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filcostomon(hab,filtrolabor,'_r');
 						 var bbep = filcostomon(hab,filtrobb,5,'_r');
 						 var mep = filcostomon(hab,filtrom,5,'_r');
 						 var scep = filcostomon(hab,filtrosc,5,'_r');
 						 var oep = filcostomon(hab,filtroo,5,'_r');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filcostomon(hab,filtrolabor,'_r');
 						  var bbdtto = filcostomon(hab,filtrobb,4,'_r');
 						  var mdtto = filcostomon(hab,filtrom,4,'_r');
 						  var scdtto = filcostomon(hab,filtrosc,4,'_r');
 						  var odtto = filcostomon(hab,filtroo,4,'_r');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filcostomon(hab,filtrolabor,'_r');
 						  var bbdivoc = filcostomon(hab,filtrobb,3,'_r');
 						  var mdivoc = filcostomon(hab,filtrom,3,'_r');
 						  var scdivoc = filcostomon(hab,filtrosc,3,'_r');
 						  var odivoc = filcostomon(hab,filtroo,3,'_r');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});




			}// fin de rgi3 EQUIVALENTE DEL REAL

			if(opciones == 'mvgi1'){

				var v2 = 1;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
			 
				$.post("cgesinv/habilitadoramv",postForm,function(habi){
  
						$.post("cgesinv/direccionmv",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_mv');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_mv');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_mv');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_mv');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_mv');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_mv');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_mv');
 						 var mep = filtrarcosto(hab,filtrom,5,'_mv');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_mv');
 						 var oep = filtrarcosto(hab,filtroo,5,'_mv');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_mv');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_mv');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_mv');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_mv');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_mv');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_mv');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_mv');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_mv');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_mv');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_mv');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);


						});




				});




			}// fin de mvgi1 BOLIVARES

			if(opciones == 'mvgi2'){

				var v2 = 2;
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v2': v2,
								'v1': v1};
			 
				$.post("cgesinv/habilitadoramv",postForm,function(habi){
  
						$.post("cgesinv/direccionmv",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = filtrarcostodir(dire,filtrolabord,'_mv');
 						 	var bbdeep = filtrarcostodir(dire,filtrobbd,'_mv');
 						 	var mdeep = filtrarcostodir(dire,filtromd,'_mv');
 						 	var scdeep = filtrarcostodir(dire,filtroscd,'_mv');
 						 	var odeep = filtrarcostodir(dire,filtrood,'_mv');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filtrarcosto(hab,filtrolabor,5,'_mv');
 						 var bbep = filtrarcosto(hab,filtrobb,5,'_mv');
 						 var mep = filtrarcosto(hab,filtrom,5,'_mv');
 						 var scep = filtrarcosto(hab,filtrosc,5,'_mv');
 						 var oep = filtrarcosto(hab,filtroo,5,'_mv');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filtrarcosto(hab,filtrolabor,4,'_mv');
 						  var bbdtto = filtrarcosto(hab,filtrobb,4,'_mv');
 						  var mdtto = filtrarcosto(hab,filtrom,4,'_mv');
 						  var scdtto = filtrarcosto(hab,filtrosc,4,'_mv');
 						  var odtto = filtrarcosto(hab,filtroo,4,'_mv');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filtrarcosto(hab,filtrolabor,3,'_mv');
 						  var bbdivoc = filtrarcosto(hab,filtrobb,3,'_mv');
 						  var mdivoc = filtrarcosto(hab,filtrom,3,'_mv');
 						  var scdivoc = filtrarcosto(hab,filtrosc,3,'_mv');
 						  var odivoc = filtrarcosto(hab,filtroo,3,'_mv');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);


						});




				});




			}// fin de mvgi2 DOLARES


			if(opciones == 'mvgi3'){

			 
				var v1 = 1;
				var postForm ={'v3' : v3,
								'v1': v1};
			 	alert('estoy dentro de mvgi3');
				$.post("cgesinv/habilitadoramvequiv",postForm,function(habi){
  
						$.post("cgesinv/direccionmvequv",postForm,function(dir){

								alert(habi);
								var hab = $.parseJSON(habi);
 
								alert(dir);
								var dire = $.parseJSON(dir);

								///esfuerzo propio
				 			
 							// direccion ejecutiva esfuerzo propio

 							 var labordeep = fildirequiv(dire,filtrolabor,'_mv');
 						 	var bbdeep = fildirequiv(dire,filtrobbd,'_mv');
 						 	var mdeep = fildirequiv(dire,filtromd,'_mv');
 						 	var scdeep = fildirequiv(dire,filtroscd,'_mv');
 						 	var odeep = fildirequiv(dire,filtrood,'_mv');
 						 	var totaldeep = filtrartotal(labordeep,bbdeep,mdeep,scdeep,odeep);
 						 
 							/// elementos de costo y total esfuerzo propio
 						 var laborep = filcostomon(hab,filtrolabor,'_mv');
 						 var bbep = filcostomon(hab,filtrobb,5,'_mv');
 						 var mep = filcostomon(hab,filtrom,5,'_mv');
 						 var scep = filcostomon(hab,filtrosc,5,'_mv');
 						 var oep = filcostomon(hab,filtroo,5,'_mv');
 						 var totalep = filtrartotal(laborep,bbep,mep,scep,oep);
 						 // elemento de de costo y total de distrito oriental 
 						  var labordtto = filcostomon(hab,filtrolabor,'_mv');
 						  var bbdtto = filcostomon(hab,filtrobb,4,'_mv');
 						  var mdtto = filcostomon(hab,filtrom,4,'_mv');
 						  var scdtto = filcostomon(hab,filtrosc,4,'_mv');
 						  var odtto = filcostomon(hab,filtroo,4,'_mv');
 						  var totaldtto = filtrartotal(labordtto,bbdtto,mdtto,scdtto,odtto);

 						  // elementos de costo y total de division occidental 
 						  var labordivoc = filcostomon(hab,filtrolabor,'_mv');
 						  var bbdivoc = filcostomon(hab,filtrobb,3,'_mv');
 						  var mdivoc = filcostomon(hab,filtrom,3,'_mv');
 						  var scdivoc = filcostomon(hab,filtrosc,3,'_mv');
 						  var odivoc = filcostomon(hab,filtroo,3,'_mv');
 						  var totaldivoc = filtrartotal(labordivoc,bbdivoc,mdivoc,scdivoc,odivoc);
 						  // elementos de costo y total de division oriental
 						  	var labordivor = filtrardivo(labordtto,laborep);
							var bbdivor = filtrardivo(bbdtto,bbep);
							var mdivor = filtrardivo(mdtto,mep);
							var scdivor = filtrardivo(scdtto,scep);
							var odivor = filtrardivo(odtto,oep);
							var totaldivor = filtrartotal(labordivor,bbdivor,mdivor,scdivor,odivor);
						
						// elemento de costo y total de direccion ejecutiva costa afuera

						var	labordireje = filtrardireccion(labordivor,labordivoc,labordeep);
						var	bbdireje = filtrardireccion(bbdivor,bbdivoc,bbdeep);
						var	mdireje = filtrardireccion(mdivor,mdivoc,dire,mdeep);
						var	scdireje = filtrardireccion(scdivor,scdivoc,dire,scdeep);
						var	odireje = filtrardireccion(odivor,odivoc,dire,odeep);
						var totaldireje = filtrartotal(labordireje,bbdireje,mdireje,scdireje,odireje);
 							
 					// empieza informacion para llenar la tabla
				 

					// prueba de monstrar tabla
					var informacion = mostrartabla('DIRECCION EJECUTIVA COSTA AFUERA','y-header',labordireje,bbdireje,mdireje,scdireje,odireje,totaldireje);
					informacion += mostrartabla('DIRECCION EJECUTIVA - EP','green-header',labordeep,bbdeep,mdeep,scdeep,odeep,totaldeep);
					informacion += mostrartabla('DIVISION ORIENTAL','green-header',labordivor,bbdivor,mdivor,scdivor,odivor,totaldivor);
					informacion += mostrartabla('DIVISION OCCIDENTAL','green-header',labordivoc,bbdivoc,mdivoc,scdivoc,odivoc,totaldivoc);
					informacion += mostrartabla('DTTO ORIENTAL','green-header',labordtto,bbdtto,mdtto,scdtto,odtto,totaldtto);
					informacion += mostrartabla('ESFUERZO PROPIO','green-header',laborep,bbep,mep,scep,oep,totalep);
					       
					$('#p1 tbody').html('');
					$('#p1 tbody').append(informacion);

		 


						});




				});




			}// fin de mvgi3 EQUIVALENTE DEL MEJOR VISION


		}else{

			alert('debe seleccionar un año');
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



// filtros para elementos de costo con moneda definida 
function filtrarcosto(hab,filtrado,val,com){

	 var enerotl=0;var febrerotl=0;  var marzotl=0;  var abriltl=0;  var mayotl=0;  var juniotl=0;  var juliotl =0; var agostotl=0;  var septiembretl=0;  var octubretl =0;  var noviembretl=0;  var diciembretl =0;  
	

	for (var i=0;  i < hab.length ; i++) {

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

	var informacion ='<tr>';
					informacion += '<td></td>';
					informacion += '<td class="'+clase+'">'+nombre+'</td>';
					informacion += '<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
					informacion += '</tr>';
					informacion += '<tr>';	
					informacion += '<td class="red-header"></td>';
					informacion += '<td class="red-header">DESCRIPCION</td>';
					informacion += '<td class="red-header">ENE</td>';
					informacion += '<td class="red-header">FEB</td>';
					informacion += '<td class="red-header">MAR</td>';
					informacion += '<td class="red-header">ABR</td>';
					informacion += '<td class="red-header">MAY</td>';
					informacion += '<td class="red-header">JUN</td>';
					informacion += '<td class="red-header">JUL</td>';
					informacion += '<td class="red-header">AGO</td>';
					informacion += '<td class="red-header">SEP</td>';
					informacion += '<td class="red-header">OCT</td>';
					informacion += '<td class="red-header">NOV</td>';
					informacion += '<td class="red-header">DIC</td>';
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td>Labor</td>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<td>'+parseFloat(labor[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td>Beneficio y Bienestar</td>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<td>'+parseFloat(beneficio[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td>Materiales</td>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<td>'+parseFloat(materiales[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td>Servicios y Contratos</td>';
					for (var i = 0; i < 12 ; i++) {
					informacion += '<td>'+parseFloat(servicios[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td>Otros</td>';
						for (var i = 0; i < 12 ; i++) {
					informacion += '<td>'+parseFloat(otros[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';
					informacion += '<tr>';
					informacion += '<td></td>';
					informacion += '<td class="red-header">Total</td>';
						for (var i = 0; i < 12 ; i++) {
					informacion += '<td class="red-header">'+parseFloat(total[i]).toFixed(2)+'</td>';
					}
					informacion += '</tr>';


					return informacion;
}


//filtro para el equivalente


function filcostomon(hab,filtrado,val,com){

	 var enerob=0;var febrerob=0;  var marzob=0;  var abrilb=0;  var mayob=0;  var juniob=0;  var juliob =0; var agostob=0;  var septiembreb=0;  var octubreb =0;  var noviembreb=0;  var diciembreb =0;  
	
	var enerot=0;var febrerot=0;  var marzot=0;  var abrilt=0;  var mayot=0;  var juniot=0;  var juliot =0; var agostot=0;  var septiembret=0;  var octubret =0;  var noviembret=0;  var diciembret =0;  
	
	var enerod=0;var febrerod=0;  var marzod=0;  var abrild=0;  var mayod=0;  var juniod=0;  var juliod =0; var agostod=0;  var septiembred=0;  var octubred =0;  var noviembred=0;  var diciembred =0;  
		

	for (var i=0;  i < hab.length ; i++) {

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