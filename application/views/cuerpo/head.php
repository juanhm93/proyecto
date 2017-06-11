<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
	<title>Aplicaciones de PDVSA </title>
	<!--link rel="stylesheet" title="Principal-Aplicaciones" type="text/css" href="main-aplicacion.css" /-->
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/bootstrap.min.css">
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/home_style.css">
	<script type="text/javascript" src="<?= base_url()?>js/validar.js"></script>
	<script type="text/javascript" src="<?= base_url()?>js/jquery.js"></script>
	<script type="text/javascript" src="<?= base_url()?>js/jquery-3.2.1-min.js"></script>
	<script language="javascript" type="text/javascript">  

$(document).ready(function(){

//let's create arrays
var enero = [
	{display: "--seleccionar mes--", value: ""},
    {display: "Enero", value: "enero" },
    {display: "Febrero", value: "febrero" },
    {display: "Marzo", value: "marzo" },
    {display: "Abril", value: "abril" },
    {display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];
   
var febrero = [
	{display: "--seleccionar mes--", value: ""},
    {display: "Febrero", value: "febrero" },
    {display: "Marzo", value: "marzo" },
    {display: "Abril", value: "abril" },
    {display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];  

    var marzo = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Marzo", value: "marzo" },
    {display: "Abril", value: "abril" },
    {display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

var abril = [
	{display: "--seleccionar mes--", value: ""},
    {display: "Abril", value: "abril" },
    {display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var mayo = [
    {display: "--seleccionar mes--", value: ""},
   	{display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var junio = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var julio = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var agosto = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var septiembre = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var octubre = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var noviembre = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];

    var diciembre = [
    {display: "--seleccionar mes--", value: ""},
    {display: "Diciembre", value: "diciembre" }];


//If parent option is changed
$("#mesinicio").change(function() {
        var parent = $(this).val(); //get option value from parent
       
        switch(parent){ //using switch compare selected option and populate child
              case 'enero':
                list(enero);
                break;
              case 'febrero':
                list(febrero);
                break;             
              case 'marzo':
                list(marzo);
                break;
              case 'abril':
              	list(abril);
              	break;
              case 'mayo':
              	list(mayo);	
              	break;
              case 'junio':
              	list(junio);
              	break;
              case 'julio':
              	list(julio);
              	break;
              case 'agosto':
              	list(agosto);
              	break;
              case 'septiembre':
              	list(septiembre);
              	break;
              case 'octubre':
              	list(octubre);
              	break;
              case 'noviembre':
              	 list(noviembre);
              	break;
              case 'diciembre':
              	list(diciembre);
              	break; 

            default: //default child option is blank
                $("#mesfin").html('');  
                break;
           }
});

$('#mesfin').change(function(){

	var inicio = $("#mesinicio option:selected");
	var fin = $("#mesfin option:selected");
	if(inicio.val() == "enero" & fin.text() =="Enero"){

			$("#ene").show();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();
	}
	if(inicio.val() == "enero" & fin.text() == "Febrero"){


			$("#ene").show();$("#feb").show();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Marzo"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Abril"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Mayo"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Junio"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Julio"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Agosto"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Septiembre"){


			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Octubre"){

			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Noviembre"){

			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "enero" & fin.text() == "Diciembre"){

			$("#ene").show();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}
// aqui finaliza la opcion solo para la primera condicion "enero"
	
	if(inicio.val() == "febrero" & fin.text() == "Febrero"){


			$("#ene").hide();$("#feb").show();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Marzo"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Abril"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Mayo"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Junio"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Noviembre"){

			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "febrero" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").show();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	//aqui finaliza la condicion para el mes de "febrero"

	if(inicio.val() == "marzo" & fin.text() == "Marzo"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Abril"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Mayo"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Junio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Noviembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "marzo" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").show();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	// aqui finaliza la condicion para el mes de "marzo"


	if(inicio.val() == "abril" & fin.text() == "Abril"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Mayo"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Junio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Noviembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "abril" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").show();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	// aqui finaliza la condicion para el de "abril"

	if(inicio.val() == "mayo" & fin.text() == "Mayo"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Junio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "mayo" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").show();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}
	// aqui finaliza la condicion del mes de "mayo"

	if(inicio.val() == "junio" & fin.text() == "Junio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "junio" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").show();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	//aqui finaliza la condicion del mes de "junio"

	if(inicio.val() == "julio" & fin.text() == "Julio"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "julio" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "julio" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "julio" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "julio" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "julio" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").show();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	//aqui finaliza la condicion del mes de "julio"

	if(inicio.val() == "agosto" & fin.text() == "Agosto"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").show();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "agosto" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").show();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "agosto" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "agosto" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "agosto" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").show();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}

	//aqui finaliza la condicion del mes de "agosto"

	if(inicio.val() == "septiembre" & fin.text() == "Septiembre"){


			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").show();$("#oct").hide();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "septiembre" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").show();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "septiembre" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "septiembre" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").show();$("#oct").show();$("#nov").show();$("#dic").show();

	}
	//aqui finaliza la condicion del mes de "septiembre"

	if(inicio.val() == "octubre" & fin.text() == "Octubre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").show();$("#nov").hide();$("#dic").hide();

	}
	if(inicio.val() == "octubre" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").show();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "octubre" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").show();$("#nov").show();$("#dic").show();

	}
	// aqui finaliza la condicion del mes de "octubre"

	if(inicio.val() == "noviembre" & fin.text() == "Noviembre"){
 
			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").show();$("#dic").hide();

	}
	if(inicio.val() == "noviembre" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").show();$("#dic").show();

	}

	//aqui finaliza la condicion del mes de "noviembre"

	if(inicio.val() == "diciembre" & fin.text() == "Diciembre"){

			$("#ene").hide();$("#feb").hide();$("#marzo").hide();$("#abr").hide();
			$("#mayo").hide();$("#jun").hide();$("#jul").hide();$("#ago").hide();
			$("#sep").hide();$("#oct").hide();$("#nov").hide();$("#dic").show();

	}
	//aqui finaliza la condicion de "diciembre" y todas las condiciones para el rango de los meses


});


//function to populate child select box
function list(array_list)
{
    $("#mesfin").html(''); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#mesfin").append('<option value=""+array_list[i].value+"">'+array_list[i].display+"</option>");
    });
}
	

});
</script>

<script type="text/javascript">
$(document).ready(function(){


});		

</script>

</head>
<body>