<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
	<title>Aplicaciones de PDVSA </title>
	<!--link rel="stylesheet" title="Principal-Aplicaciones" type="text/css" href="main-aplicacion.css" /-->
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/bootstrap.min.css">
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/home_style.css">
	<!--DataTable-->
	<link rel="stylesheet" type="text/css" href="<?= base_url()?>css/jquery.dataTables.min.css">

	<style type="text/css">
		
		div.dataTables_wrapper {
        width: "45%";
        margin: 0 auto;
    }
	</style>
	
	<script type="text/javascript" src="<?= base_url()?>js/jquery-1.12.4.js" ></script>
	<script type="text/javascript" src="<?= base_url()?>js/jquery.dataTables.min.js" ></script>
	<script type="text/javascript" >
		
		$(document).ready(function() {
		    $('#example').DataTable( {
		        "scrollY": 200,
		        "scrollX": true
		    } );
		} );	
	</script>
</head>
<body>