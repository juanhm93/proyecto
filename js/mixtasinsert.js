var x;

x = $(document);
x.ready(insertandoenmixtas);

function insertandoenmixtas(){


	$('#anho').change(function(){
        var em = $("#empresam option:selected");
    var mone = $("#moneda option:selected");
    var anho = $("#anho option:selected");
    var prma = $("#PR option:selected");


    if(em.val() != ''){
    	if(prma.val()!=''){
    		if ( mone.val() != '') {
    			if (anho.val()!= ''){

    				     var v1, v2, v3;
	                    v1 = em.val();
	                    v2 = mone.val();
	                    v3 = anho.val();

	                    var postForm = {
	                        'v1' : v1,
	                        'v2' : v2,
	                        'v3' : v3
	                    };

    				//////// OPCION PLAN DE LAS EMPRESAS MIXTAS ///////////////
    				if (prma.val() == '1') {

    						$.post("cmixtas/ajaxmplan",postForm,function(emxplan){

    							

    							if(emxplan.length < 4)
                       		{	
                        
                            var informacion =cabecerapdvsa();
                            informacion+= costofila('Labor','l1[]','l1');
                            informacion+= costofila('Bienestar y Beneficio','bb[]','bb');
                            informacion+= costofila('Materiales','m1[]','m1');
                            informacion+= costofila('Servicios y Contratos','sc[]','sc');
                            informacion+= costofila('Otros','o1[]','o1');

                        	$("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        	}else{
                           var planem = $.parseJSON(emxplan);
                            
                            var informacion = cabecerapdvsa();
                            informacion +=  costofilaconvalor('Labor','l1[]','l1',plan,0,planem);
                            informacion +=  costofilaconvalor('Bienestar y Beneficio','bb[]','bb',plan,1,planem);
                            informacion +=  costofilaconvalor('Materiales','m1[]','m1',plan,2,planem);
                            informacion +=  costofilaconvalor('Servicios y Contratos','sc[]','sc',plan,3,planem);
                            informacion +=  costofilaconvalor('Otros','o1[]','o1',plan,4,planem);
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion); 

                        }

  							});

    				}// fin de la opcion plan	

    				//////// OPCION REAL DE LAS EMPRESAS MIXTAS ///////////////
    				if (prma.val() == '2') {

    					$.post("cmixtas/ajaxm",postForm,function(emxreal){
  							

  							if(emxreal.length < 4)
                       		{	
                        
                            var informacion =cabecerapdvsa();
                            informacion+= costofila('Labor','l1[]','l1');
                            informacion+= costofila('Bienestar y Beneficio','bb[]','bb');
                            informacion+= costofila('Materiales','m1[]','m1');
                            informacion+= costofila('Servicios y Contratos','sc[]','sc');
                            informacion+= costofila('Otros','o1[]','o1');

                        	$("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        	}else{
                            
                            var realesem = $.parseJSON(emxreal);
                            
                            var informacion = cabecerapdvsa();
                            informacion +=  costofilaconvalor('Labor','l1[]','l1',reales,0,realesem);
                            informacion +=  costofilaconvalor('Bienestar y Beneficio','bb[]','bb',reales,1,realesem);
                            informacion +=  costofilaconvalor('Materiales','m1[]','m1',reales,2,realesem);
                            informacion +=  costofilaconvalor('Servicios y Contratos','sc[]','sc',reales,3,realesem);
                            informacion +=  costofilaconvalor('Otros','o1[]','o1',reales,4,realesem);
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion); 

                        }





  							});


    				}// fin de la opcion real 	

    				//////// OPCION MEJOR VISION DE LAS EMPRESAS MIXTAS ///////////////
    				if (prma.val() == '3') {
    						$.post("cmixtas/ajaxmv",postForm,function(emxmv){
  								
  								if(emxmv.length < 4)
                       		{	
                        
                            var informacion =cabecerapdvsa();
                            informacion+= costofila('Labor','l1[]','l1');
                            informacion+= costofila('Bienestar y Beneficio','bb[]','bb');
                            informacion+= costofila('Materiales','m1[]','m1');
                            informacion+= costofila('Servicios y Contratos','sc[]','sc');
                            informacion+= costofila('Otros','o1[]','o1');

                        	$("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        	}else{
                         	var mvem = $.parseJSON(emxmv);	
                            
                            var informacion = cabecerapdvsa();
                            informacion +=  costofilaconvalor('Labor','l1[]','l1',mejorvision,0,mvem);
                            informacion +=  costofilaconvalor('Bienestar y Beneficio','bb[]','bb',mejorvision,1,mvem);
                            informacion +=  costofilaconvalor('Materiales','m1[]','m1',mejorvision,2,mvem);
                            informacion +=  costofilaconvalor('Servicios y Contratos','sc[]','sc',mejorvision,3,mvem);
                            informacion +=  costofilaconvalor('Otros','o1[]','o1',mejorvision,4,mvem);
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion); 

                        }

  							
  							});


    				}// fin de la opcion mejor vision	

    				//////// OPCION ANTEPORYECTO DE LAS EMPRESAS MIXTAS ///////////////
    				if (prma.val() == '4') {

    					$.post("cmixtas/ajaxante",postForm,function(emxant){
    						
    							if(emxant.length < 4)
                       		{	
                        
                            var informacion =cabecerapdvsa();
                            informacion+= costofila('Labor','l1[]','l1');
                            informacion+= costofila('Bienestar y Beneficio','bb[]','bb');
                            informacion+= costofila('Materiales','m1[]','m1');
                            informacion+= costofila('Servicios y Contratos','sc[]','sc');
                            informacion+= costofila('Otros','o1[]','o1');

                        	$("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        	}else{
                         	var anteem = $.parseJSON(emxant);
                            
                            var informacion = cabecerapdvsa();
                            informacion +=  costofilaconvalor('Labor','l1[]','l1',anteproyecto,0,anteem);
                            informacion +=  costofilaconvalor('Bienestar y Beneficio','bb[]','bb',anteproyecto,1,anteem);
                            informacion +=  costofilaconvalor('Materiales','m1[]','m1',anteproyecto,2,anteem);
                            informacion +=  costofilaconvalor('Servicios y Contratos','sc[]','sc',anteproyecto,3,anteem);
                            informacion +=  costofilaconvalor('Otros','o1[]','o1',anteproyecto,4,anteem);
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion); 

                        }




  							});

    				}// fin de la opcion anteproyecto	







    			}else{

    				alert('Debe seleccionar un año de ejecución');
    			}

    		}else{

    			alert('Debe seleccionar algun tipo de moneda');
    		}



    	}else{

    		alert('Debe seleccionar Plan, Real, mejor vision o anteproyecto');
    	}

    }else{

    	alert("Debe seleccionar alguna empresa Mixta");
    }


 


});

}

// mortrar cabecera sencilla
function cabecerapdvsa(){

        
           var informacion = "<div class='Tabla-Fondo' >";
                informacion+= "<div class='Tabla-Elemento-Encabezado' style='width:150px;'>ELEMENTO</div>";
                informacion+= "<div class='Tabla-Elemento-Encabezado' style='width:130px;'>ENE</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>FEB</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>MAR</div>";
                informacion+= "<div class='Tabla-Elemento-Encabezado' style='width:130px;'>ABR</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>MAY</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>JUN</div>";
                informacion+= "<div class='Tabla-Elemento-Encabezado' style='width:130px;'>JUL</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>AGO</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>SEP</div>";
                informacion+= "<div class='Tabla-Elemento-Encabezado' style='width:130px;'>OCT</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>NOV</div>";
                informacion+="<div class='Tabla-Elemento-Encabezado' style='width:130px;'>DIC</div>";
            informacion+="</div>";


     return informacion;   

}

//mostrar elementos de costo por fila
function costofila(elemento,name,id){

    var informacion ="<div class='Tabla-Fondo'>";
                  informacion+="<div class='Tabla-Elemento' style='width:150px;'>"+elemento+"</div>";
                  for (var i = 0 ; i < 12 ; i++) {
                      informacion+="<div class='Tabla-Elemento' style='width:130px;'><input type='number' step='any' name='"+name+"' id='"+id+"' value='0'></div>";
                  }
         informacion +="</div>";               
                        
        return informacion;

}

function  costofilaconvalor(elemento,name,id,mes,elementoid,prma) {

		var informacion ="<div class='Tabla-Fondo'>";
                  informacion+="<div class='Tabla-Elemento' style='width:150px;'>"+elemento+"</div>";
                  for (var i = 0 ; i < 12 ; i++) {
                      informacion+="<div class='Tabla-Elemento' style='width:130px;'><input type='number' step='any' name='"+name+"' id='"+id+"' value='"+prma[elementoid][mes[i]]+"'></div>";
                  }
         informacion +="</div>";    
                        
        return informacion;
}

 