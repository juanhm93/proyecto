var x;
x = $(document);
x.ready(empetrosucrer);

function empetrosucrer(){

$( "input" ).on( "click", function() {

		var anho = $("#anhops option:selected");

		var opciones = $("input:checked").val();

		var v3 = anho.val();
		
		alert('la opcion '+opciones);

		if(anho.val() != ''){
			var v1= 1;
			var v2 = 2;
			 
			var postForm ={'v3' : v3,'v2':v2,'v1': v1};

			if(opciones ==	'resumen1'){

				$.post("cempetrosucre/planemequiv",postForm,function(psp){

						var psplan = $.parseJSON(psp);
					$.post("cempetrosucre/realemequiv",postForm,function(psr){

						var psreal = $.parseJSON(psr);
						$.post("cempetrosucre/mvemequiv",postForm,function(psmejv){

						var psmv = $.parseJSON(psmejv);
							$.post("cempetrosucre/antemequiv",postForm,function(psa){
							
								var psante = $.parseJSON(psa);
								$.post("cempetrosucre/propemequiv",postForm,function(propsp){
							
									var propps = $.parseJSON(propsp);
									$.post("cempetrosucre/proremequiv",postForm,function(propsr){
							
										var prorps = $.parseJSON(propsr);				

										$.post("cempetrosucre/promvemequiv",postForm,function(propsmv){
							
										var promvps = $.parseJSON(propsmv);	
											$.post("cempetrosucre/proantemequiv",postForm,function(propsant){
							
											var proantps = $.parseJSON(propsant);

												var informacion = resumenempetrosucre(psplan,psreal,psmv,psante,propps,prorps,promvps,proantps,v3);

										 						 	$('#resumenps').html('');
										 						 	$('#resumenps').append(informacion); 
										 						 /// FIN BLOQUE VISUAL DE LA TABLA	

											});			

										});

									});

								});

							});

						});

					});

				});





			}




		}else{

			alert('Debe seleccionar un año para ejecutar');
		}
	});
}


function resumenempetrosucre(emplan,emreal,emmv,emante,pplan,preal,pmv,pant,v3) {

		///////// PLAN //////////////////////////

		///////////// BSF //////////////////////////
		var laborpsbsfp =	filtromixta(emplan,filtrolabore,'_p',1);
		var bbpsbsfp =	filtromixta(emplan,filtrobbe,'_p',1);
		var mpsbsfp =	filtromixta(emplan,filtrome,'_p',1);
		var scpsbsfp =	filtromixta(emplan,filtrosce,'_p',1);
		var opsbsfp =	filtromixta(emplan,filtrooe,'_p',1);
		var totalpsbsfp = filtrartotal(laborpsbsfp,bbpsbsfp,mpsbsfp,scpsbsfp,opsbsfp);
		///////////// DOLARES //////////////////////////
		var laborpsdolp =	filtromixta(emplan,filtrolabore,'_p',2);
		var bbpsdolp =	filtromixta(emplan,filtrobbe,'_p',2);
		var mpsdolp =	filtromixta(emplan,filtrome,'_p',2);
		var scpsdolp =	filtromixta(emplan,filtrosce,'_p',2);
		var opsdolp =	filtromixta(emplan,filtrooe,'_p',2);
		var totalpsdolp = filtrartotal(laborpsdolp,bbpsdolp,mpsdolp,scpsdolp,opsdolp);
		///////////// DOLARES EQUIVALENTES //////////////////////////
		var laborpsDeqvp = filtroequivalente(laborpsbsfp,laborpsdolp);
		var bbpsDeqvp = filtroequivalente(bbpsbsfp,bbpsdolp);
		var mpsDeqvp = filtroequivalente(mpsbsfp,mpsdolp);
		var scpsDeqvp = filtroequivalente(scpsbsfp,scpsdolp);
		var opsDeqvp = filtroequivalente(opsbsfp,opsdolp);
		var totalpsDeqvp = filtrartotal(laborpsDeqvp,bbpsDeqvp,mpsDeqvp,scpsDeqvp,opsDeqvp);

		///////// FIN PLAN///////////////////////////////////////////


			///////// REAL //////////////////////////

		///////////// BSF //////////////////////////
		var laborpsbsfr =	filtromixta(emplan,filtrolabore,'_r',1);
		var bbpsbsfr =	filtromixta(emplan,filtrobbe,'_r',1);
		var mpsbsfr =	filtromixta(emplan,filtrome,'_r',1);
		var scpsbsfr =	filtromixta(emplan,filtrosce,'_r',1);
		var opsbsfr =	filtromixta(emplan,filtrooe,'_r',1);
		var totalpsbsfr = filtrartotal(laborpsbsfr,bbpsbsfr,mpsbsfr,scpsbsfr,opsbsfr);
		///////////// DOLARES //////////////////////////
		var laborpsdolr =	filtromixta(emplan,filtrolabore,'_r',2);
		var bbpsdolr =	filtromixta(emplan,filtrobbe,'_r',2);
		var mpsdolr =	filtromixta(emplan,filtrome,'_r',2);
		var scpsdolr =	filtromixta(emplan,filtrosce,'_r',2);
		var opsdolr =	filtromixta(emplan,filtrooe,'_r',2);
		var totalpsdolr = filtrartotal(laborpsdolr,bbpsdolr,mpsdolr,scpsdolr,opsdolr);
		///////////// DOLARES EQUIVALENTES //////////////////////////
		var laborpsDeqvr = filtroequivalente(laborpsbsfr,laborpsdolr);
		var bbpsDeqvr = filtroequivalente(bbpsbsfr,bbpsdolr);
		var mpsDeqvr = filtroequivalente(mpsbsfr,mpsdolr);
		var scpsDeqvr = filtroequivalente(scpsbsfr,scpsdolr);
		var opsDeqvr = filtroequivalente(opsbsfr,opsdolr);
		var totalpsDeqvr = filtrartotal(laborpsDeqvr,bbpsDeqvr,mpsDeqvr,scpsDeqvr,opsDeqvr);

		///////// FIN REAL///////////////////////////////////////////

		///////// MEJOR VISION //////////////////////////

		///////////// BSF //////////////////////////
		var laborpsbsfmv =	filtromixta(emplan,filtrolabore,'_mv',1);
		var bbpsbsfmv =	filtromixta(emplan,filtrobbe,'_mv',1);
		var mpsbsfmv =	filtromixta(emplan,filtrome,'_mv',1);
		var scpsbsfmv =	filtromixta(emplan,filtrosce,'_mv',1);
		var opsbsfmv =	filtromixta(emplan,filtrooe,'_mv',1);
		var totalpsbsfmv = filtrartotal(laborpsbsfmv,bbpsbsfmv,mpsbsfmv,scpsbsfmv,opsbsfmv);
		///////////// DOLARES //////////////////////////
		var laborpsdolmv =	filtromixta(emplan,filtrolabore,'_mv',2);
		var bbpsdolmv =	filtromixta(emplan,filtrobbe,'_mv',2);
		var mpsdolmv =	filtromixta(emplan,filtrome,'_mv',2);
		var scpsdolmv =	filtromixta(emplan,filtrosce,'_mv',2);
		var opsdolmv =	filtromixta(emplan,filtrooe,'_mv',2);
		var totalpsdolmv = filtrartotal(laborpsdolmv,bbpsdolmv,mpsdolmv,scpsdolmv,opsdolmv);
		///////////// DOLARES EQUIVALENTES //////////////////////////
		var laborpsDeqvmv = filtroequivalente(laborpsbsfmv,laborpsdolmv);
		var bbpsDeqvmv = filtroequivalente(bbpsbsfmv,bbpsdolmv);
		var mpsDeqvmv = filtroequivalente(mpsbsfmv,mpsdolmv);
		var scpsDeqvmv = filtroequivalente(scpsbsfmv,scpsdolmv);
		var opsDeqvmv = filtroequivalente(opsbsfmv,opsdolmv);
		var totalpsDeqvmv = filtrartotal(laborpsDeqvmv,bbpsDeqvmv,mpsDeqvmv,scpsDeqvmv,opsDeqvmv);

		///////// FIN MEJOR VISION///////////////////////////////////////////

		///////// ANTEPROYECTO  //////////////////////////

		///////////// BSF //////////////////////////
		var laborpsbsfant =	filtromixta(emplan,filtrolabore,'ant',1);
		var bbpsbsfant =	filtromixta(emplan,filtrobbe,'ant',1);
		var mpsbsfant =	filtromixta(emplan,filtrome,'ant',1);
		var scpsbsfant =	filtromixta(emplan,filtrosce,'ant',1);
		var opsbsfant =	filtromixta(emplan,filtrooe,'ant',1);
		var totalpsbsfant = filtrartotal(laborpsbsfant,bbpsbsfant,mpsbsfant,scpsbsfant,opsbsfant);
		///////////// DOLARES //////////////////////////
		var laborpsdolant =	filtromixta(emplan,filtrolabore,'ant',2);
		var bbpsdolant =	filtromixta(emplan,filtrobbe,'ant',2);
		var mpsdolant =	filtromixta(emplan,filtrome,'ant',2);
		var scpsdolant =	filtromixta(emplan,filtrosce,'ant',2);
		var opsdolant =	filtromixta(emplan,filtrooe,'ant',2);
		var totalpsdolant = filtrartotal(laborpsdolant,bbpsdolant,mpsdolant,scpsdolant,opsdolant);
		///////////// DOLARES EQUIVALENTES //////////////////////////
		var laborpsDeqvant = filtroequivalente(laborpsbsfant,laborpsdolant);
		var bbpsDeqvant = filtroequivalente(bbpsbsfant,bbpsdolant);
		var mpsDeqvant = filtroequivalente(mpsbsfant,mpsdolant);
		var scpsDeqvant = filtroequivalente(scpsbsfant,scpsdolant);
		var opsDeqvant = filtroequivalente(opsbsfant,opsdolant);
		var totalpsDeqvant = filtrartotal(laborpsDeqvant,bbpsDeqvant,mpsDeqvant,scpsDeqvant,opsDeqvant);

		///////// FIN ANTEPROYECTO ///////////////////////////////////////////

		 // labor y beneficio de real, MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfr  = filtrardivo(laborpsbsfr,bbpsbsfr); 
 						var laborybbpsdolr = filtrardivo(laborpsdolr,bbpsdolr); 
 						var laborybbpsDeqvr= filtrardivo(laborpsDeqvr,bbpsDeqvr);
 						// labor y beneficio de plan MMBSF,MM$, MMEQUIV
 						var laborybbpsbsfp  = filtrardivo(laborpsbsfp,bbpsbsfp); 
 						var laborybbpsdolp  = filtrardivo(laborpsdolp,bbpsdolp); 
 						var laborybbpsDeqvp = filtrardivo(laborpsDeqvp,bbpsDeqvp);
 						// Labor y beneficio de mejor vision MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfmv  = filtrardivo(laborpsbsfmv,bbpsbsfmv); 
 						var laborybbpsdolmv  = filtrardivo(laborpsdolmv,bbpsdolmv); 
 						var laborybbpsDeqvmv = filtrardivo(laborpsDeqvmv,bbpsDeqvmv);
 						// Labor y beneficio de anteproyecto MMBSF, MM$, MMEQUIV
 						var laborybbpsbsfant  = filtrardivo(laborpsbsfant,bbpsbsfant); 
 						var laborybbpsdolant  = filtrardivo(laborpsdolant,bbpsdolant); 
 						var laborybbpsDeqvant = filtrardivo(laborpsDeqvant,bbpsDeqvant);


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
 						var aux = 0;

 						/*	 for (var i=0; i < 12; i++) {
 						 		
 						 	if( laborybbpsDeqvr[i] != 0 || mpsDeqvr[i] != 0 || scpsDeqvr[i] != 0 || opsDeqvr[i]!= 0  ){
 						 		//alert(aux);
 						 		aux++;	
 						 	}

 						 }// fin del for comprobar cual es la ejecución del real de los meses*/

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



 							var informacion = motrarcabeceratabladiv('red','Tabla-Elemento-Encabezado',v3,meses[aux],'Parámetros Operacionales y Financieros');
 						 	informacion += descripcionestabladiv('','Tabla-Elemento','Presupuesto de Inversiones',aux,ptotalcateDeqv,ptotalcatebsf,ptotalcatedol,ptotalcateDeqv,rtotalcatebsf,rtotalcatedol,rtotalcateDeqv,mvtotalcatebsf,mvtotalcatedol,mvtotalcateDeqv,anttotalcatebsf,anttotalcatedol,anttotalcateDeqv );
 						 	informacion += descripcionestabladiv('','Tabla-Elemento','Presupuesto de Operaciones',aux,totalpsDeqvp,totalpsbsfp,totalpsdolp,totalpsDeqvp,totalpsbsfr,totalpsdolr,totalpsDeqvr,totalpsbsfmv,totalpsdolmv,totalpsDeqvmv,totalpsbsfant,totalpsdolant,totalpsbsfant);
	 		
 						 	informacion += motrarcabeceratabladiv('red','Tabla-Elemento-Encabezado',v3,meses[aux],'ELEMENTO DE COSTO');
 						 	informacion += descripcionestabladiv('','Tabla-Elemento','Labor y Beneficios',aux,laborybbpsDeqvp,laborybbpsbsfp,laborybbpsdolp,laborybbpsDeqvp,laborybbpsbsfr,laborybbpsdolr,laborybbpsDeqvr,laborybbpsbsfmv,laborybbpsdolmv,laborybbpsDeqvmv,laborybbpsbsfant,laborybbpsdolant,laborybbpsDeqvant);
	 						informacion += descripcionestabladiv('','Tabla-Elemento','Materiales',aux,mpsDeqvp,mpsbsfp,mpsdolp,mpsDeqvp,mpsbsfr,mpsdolr,mpsDeqvr,mpsbsfmv,mpsdolmv,mpsDeqvmv,mpsbsfant,mpsdolant,mpsDeqvant );
	 						informacion += descripcionestabladiv('','Tabla-Elemento','Servicios y Contratos',aux,scpsDeqvp,scpsbsfp,scpsdolp,scpsDeqvp,scpsbsfr,scpsdolr,scpsDeqvr,scpsbsfmv,scpsdolmv,scpsDeqvmv,scpsbsfmv,scpsdolant,scpsDeqvant);
	 						informacion += descripcionestabladiv('','Tabla-Elemento','Otros Costos y Gastos',aux,opsDeqvp,opsbsfp,opsdolp,opsDeqvp,opsbsfr,opsdolr,opsDeqvr,opsbsfmv,opsdolmv,opsDeqvmv,opsbsfant,opsdolant,opsDeqvant );
	 						informacion += descripcionestabladiv('red','Tabla-Elemento','Total',aux,totalpsDeqvp,totalpsbsfp,totalpsdolp,totalpsDeqvp,totalpsbsfr,totalpsdolr,totalpsDeqvr,totalpsbsfmv,totalpsdolmv,totalpsDeqvmv,totalpsbsfant,totalpsdolant,totalpsbsfant);
	 					 
	 						
	 						informacion += motrarcabeceratabladiv('red','Tabla-Elemento-Encabezado',v3,meses[aux],'CATEGORIA ');
	 						informacion += descripcionestabladiv('','Tabla-Elemento','Geofisica',aux,pgeoDeqv,pgeobsf,pgeodol,pgeoDeqv,rgeobsf,rgeodol,rgeoDeqv,mvgeobsf,mvgeodol,mvgeoDeqv,antgeobsf,antgeodol,antgeoDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Perforación de Avanzada',aux,pperfavanzDeqv,pperfavanzbsf,pperfavanzdol,pperfavanzDeqv,rperfavanzbsf,rperfavanzdol,rperfavanzDeqv,mvperfavanzbsf,mvperfavanzdol,mvperfavanzDeqv,antperfavanzbsf,antperfavanzdol,antperfavanzDeqv );
	 						informacion += descripcionestabladiv('','Tabla-Elemento','Perforación de Desarrollo',aux,pperfdesarroDeqv,pperfdesarrobsf,pperfdesarrodol,pperfdesarroDeqv,rperfdesarrobsf,rperfdesarrodol,rperfdesarroDeqv,mvperfdesarrobsf,mvperfdesarrodol,mvperfdesarroDeqv,antperfdesarrobsf,antperfdesarrodol,antperfdesarroDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Perforación Exploratoria',aux,pperfexploraDeqv,pperfexplorabsf,pperfexploradol,pperfexploraDeqv,rperfexplorabsf,rperfexploradol,rperfexploraDeqv,mvperfexplorabsf,mvperfexploradol,mvperfexploraDeqv,antperfexplorabsf,antperfexploradol,antperfexploraDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Recuperación Adicional',aux,precupadicDeqv,precupadicbsf,precupadicdol,precupadicDeqv,rrecupadicbsf,rrecupadicdol,rrecupadicDeqv,mvrecupadicbsf,mvrecupadicdol,mvrecupadicDeqv,antrecupadicbsf,antrecupadicdol,antrecupadicDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Recompletación De Pozos',aux,precompozosDeqv,precompozosbsf,precompozosdol,precompozosDeqv,rrecompozosbsf,rrecompozosdol,rrecompozosDeqv,mvrecompozosbsf,mvrecompozosdol,mvrecompozosDeqv,antrecompozosbsf,antrecompozosdol,antrecompozosDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Recuperación Suplementaria',aux,precupesupleDeqv,precupesuplebsf,precupesupledol,precupesupleDeqv,rrecupesuplebsf,rrecupesupledol,rrecupesupleDeqv,mvrecupesuplebsf,mvrecupesupledol,mvrecupesupleDeqv,antrecupesuplebsf,antrecupesupledol,antrecupesupleDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Inyección Alterna De Vapor',aux,pinyectalternavaporDeqv,pinyectalternavaporbsf,pinyectalternavapordol,pinyectalternavaporDeqv,rinyectalternavaporbsf,rinyectalternavapordol,rinyectalternavaporDeqv,mvinyectalternavaporbsf,mvinyectalternavapordol,mvinyectalternavaporDeqv,antinyectalternavaporbsf,antinyectalternavapordol,antinyectalternavaporDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Levantamiento Artificial',aux,plevantamientoartifDeqv,plevantamientoartifbsf,plevantamientoartifdol,plevantamientoartifDeqv,rlevantamientoartifbsf,rlevantamientoartifdol,rlevantamientoartifDeqv,mvlevantamientoartifbsf,mvlevantamientoartifdol,mvlevantamientoartifDeqv,antlevantamientoartifbsf,antlevantamientoartifdol,antlevantamientoartifDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Conservación y Utilización del Gas',aux,pconutigasDeqv,pconutigasbsf,pconutigasdol,pconutigasDeqv,rconutigasbsf,rconutigasdol,rconutigasDeqv,mvconutigasbsf,mvconutigasdol,mvconutigasDeqv,antconutigasbsf,antconutigasdol,antconutigasDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Planta de Líquidos y Gas',aux,pplantliqgasDeqv,pplantliqgasbsf,pplantliqgasdol,pplantliqgasDeqv,rplantliqgasbsf,rplantliqgasdol,rplantliqgasDeqv,mvplantliqgasbsf,mvplantliqgasdol,mvplantliqgasDeqv,antplantliqgasbsf,antplantliqgasdol,antplantliqgasDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Instalaciones de Producción',aux,pinstproducDeqv,pinstproducbsf,pinstproducdol,pinstproducDeqv,rinstproducbsf,rinstproducdol,rinstproducDeqv,mvinstproducbsf,mvinstproducdol,mvinstproducDeqv,antinstproducbsf,antinstproducdol,antinstproducDeqv);
							informacion += descripcionestabladiv('','Tabla-Elemento','Oleoductos y Terminales de Embarque',aux,poleoterminaembDeqv,poleoterminaembbsf,poleoterminaembdol,poleoterminaembDeqv,roleoterminaembbsf,roleoterminaembdol,roleoterminaembDeqv,mvoleoterminaembbsf,mvoleoterminaembdol,mvoleoterminaembDeqv,antoleoterminaembbsf,antoleoterminaembdol,antoleoterminaembDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Almacenamiento',aux,palmacenamientoDeqv,palmacenamientobsf,palmacenamientodol,palmacenamientoDeqv,ralmacenamientobsf,ralmacenamientodol,ralmacenamientoDeqv,mvalmacenamientobsf,mvalmacenamientodol,mvalmacenamientoDeqv,antalmacenamientobsf,antalmacenamientodol,antalmacenamientoDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Desarrollo Urbano',aux,pdesarrollourbaDeqv,pdesarrollourbabsf,pdesarrollourbadol,pdesarrollourbaDeqv,rdesarrollourbabsf,rdesarrollourbadol,rdesarrollourbaDeqv,mvdesarrollourbabsf,mvdesarrollourbadol,mvdesarrollourbaDeqv,antdesarrollourbabsf,antdesarrollourbadol,antdesarrollourbaDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Protección Integral',aux,pproteccionintegDeqv,pproteccionintegbsf,pproteccionintegdol,pproteccionintegDeqv,rproteccionintegbsf,rproteccionintegdol,rproteccionintegDeqv,mvproteccionintegbsf,mvproteccionintegdol,mvproteccionintegDeqv,antproteccionintegbsf,antproteccionintegdol,antproteccionintegDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Prevención y Control de Pérdidas',aux,ppcpDeqv,ppcpbsf,ppcpdol,ppcpDeqv,rpcpbsf,rpcpdol,rpcpDeqv,mvpcpbsf,mvpcpdol,mvpcpDeqv,antpcpbsf,antpcpdol,antpcpDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Telecomunicaciones',aux,ptelecomunicacionesDeqv,ptelecomunicacionesbsf,ptelecomunicacionesdol,ptelecomunicacionesDeqv,rtelecomunicacionesbsf,rtelecomunicacionesdol,rtelecomunicacionesDeqv,mvtelecomunicacionesbsf,mvtelecomunicacionesdol,mvtelecomunicacionesDeqv,anttelecomunicacionesbsf,anttelecomunicacionesdol,anttelecomunicacionesDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Automatización Industrial',aux,pautomatizacionindDeqv,pautomatizacionindbsf,pautomatizacioninddol,pautomatizacionindDeqv,rautomatizacionindbsf,rautomatizacioninddol,rautomatizacionindDeqv,mvautomatizacionindbsf,mvautomatizacioninddol,mvautomatizacionindDeqv,antautomatizacionindbsf,antautomatizacioninddol,antautomatizacionindDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Computación y Sistemas',aux,pcomputaysisteDeqv,pcomputaysistebsf,pcomputaysistedol,pcomputaysisteDeqv,rcomputaysistebsf,rcomputaysistedol,rcomputaysisteDeqv,mvcomputaysistebsf,mvcomputaysistedol,mvcomputaysisteDeqv,antcomputaysistebsf,antcomputaysistedol,antcomputaysisteDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Edificaciones e Instalaciones Industriales',aux,pedifinstindustDeqv,pedifinstindustbsf,pedifinstindustdol,pedifinstindustDeqv,redifinstindustbsf,redifinstindustdol,redifinstindustDeqv,mvedifinstindustbsf,mvedifinstindustdol,mvedifinstindustDeqv,antedifinstindustbsf,antedifinstindustdol,antedifinstindustDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Equipos',aux,pequiposDeqv,pequiposbsf,pequiposdol,pequiposDeqv,requiposbsf,requiposdol,requiposDeqv,mvequiposbsf,mvequiposdol,mvequiposDeqv,antequiposbsf,antequiposdol,antequiposDeqv );
							informacion += descripcionestabladiv('','Tabla-Elemento','Otras Inversiones',aux,potrasinvDeqv,potrasinvbsf,potrasinvdol,potrasinvDeqv,rotrasinvbsf,rotrasinvdol,rotrasinvDeqv,mvotrasinvbsf,mvotrasinvdol,mvotrasinvDeqv,antotrasinvbsf,antotrasinvdol,antotrasinvDeqv );
							informacion += descripcionestabladiv('red','Tabla-Elemento','Total',aux,ptotalcateDeqv,ptotalcatebsf,ptotalcatedol,ptotalcateDeqv,rtotalcatebsf,rtotalcatedol,rtotalcateDeqv,mvtotalcatebsf,mvtotalcatedol,mvtotalcateDeqv,anttotalcatebsf,anttotalcatedol,anttotalcateDeqv);
																		 						

	 						return informacion;








}
	 