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