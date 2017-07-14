<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
	<title>Aplicaciones de PDVSA </title>
	<!--link rel="stylesheet" title="Principal-Aplicaciones" type="text/css" href="main-aplicacion.css" /-->
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/bootstrap.min.css">
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/home_style.css">
	<link rel="stylesheet" type="text/css" href="<?= base_url()?>css/jquery.dataTables.min.svh.css">
	 <style type="text/css">
	 	
	 	div.dataTables_wrapper {
        width: 500px;
        margin: 0 auto;
    }
	 </style>
	<script type="text/javascript" src="<?= base_url()?>js/jquery-svh.js"></script>
	<script type="text/javascript" src="<?= base_url()?>js/jquery.dataTables.min.svh.js"></script>
	<script type="text/javascript" class="init">
		$(document).ready(function() {
    $('#example').DataTable( {
        "scrollY": 120,
        "scrollX": true
    	} );
	} );
	</script>
	
</head>
<body>