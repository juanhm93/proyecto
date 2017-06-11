<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es" lang="es">
<head>
	<title>Aplicaciones de PDVSA </title>
	<!--link rel="stylesheet" title="Principal-Aplicaciones" type="text/css" href="main-aplicacion.css" /-->
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/bootstrap.min.css">
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/home_style.css">
</head>
<body>
	<div class="Contenedor" id="Main-externo">
		<div class="Contenedor" id="Main-header">
			<a href=""><span class="Contenedor-con-Imagen" id="Main-Logo"></span></a>
			<div class="Contenedor" id="Contenedor-Degradado">
				<div class="Contenedor-con-Imagen" id="Logo-Continuacion"><span class="Contenedor" id="Nombre-Aplicacion">Nombre de la Aplicación </span></div>
				<div class="Contenedor-con-Imagen" id="Logo-Final"></div>
			</div>
		</div>
		<div class="Contenedor-con-sombra" id="Main-BackCuerpoRight">
			<div class="Contenedor-con-sombra" id="Main-BackCuerpoLeft">
				<div class="Contenedor" id="Main-Cuerpo">
					<div class="Contenedor-con-Bordes" id="Main-Identificador_usuario">
						<span class="Texto-Identificador" id="Main-Usuario"> Bienvenido, user </span>
						<span class="Texto-Identificador" id="Main-Fecha">Lunes, 26 de Marzo de 2007</span>
					</div>
					<div class="Contenedor" id="Main-breadcrumbs"><div id="Main-Traza"><div id="Main-Traza-aux"></div></div>
					<div class="EsquinasBread" id="EsquinaBreadDerecha"></div>
				</div>
				<div class="Contenedor-Editable-Fondo" id="Vista">
					<div class="Contenedor-Editable" id="Menu">
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<span class="PuntoHo_Cortico"></span>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<span class="PuntoHo_Cortico"></span>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-sub-Menu" ><span class="Text-menu"> Texto del Sub-Menu </span></a>
						<a href="" class="Contenedor-Texto-sub-Menu" ><span class="Text-menu"> Texto del Sub-Menu </span></a>
						<a href="" class="Contenedor-Texto-sub-Menu" ><span class="Text-menu"> Texto del Sub-Menu </span></a>
						<a href="" class="Contenedor-Texto-sub-Menu" ><span class="Text-menu"> Texto del Sub-Menu </span></a>
						<span class="PuntoHo_Cortico"></span>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
						<a href="" class="Contenedor-Texto-Menu"><span class="Text-menu" > Texto del Menu </span></a>
					</div>
					<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-rango">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>Rango de ejecución presupuestaria</h4>
							<label for="">Desde: </label>
							<select class="form-control">
								<option>Enero</option>
								<option>Febrero</option>
								<option>Marzo</option>
								<option>Abril</option>
								<option>Mayo</option>
								<option>Junio</option>
								<option>Julio</option>
								<option>Agosto</option>
								<option>Septiembre</option>
								<option>Octubre</option>
								<option>Noviembre</option>
								<option>Diciembre</option>
							</select>
							<label for="">Hasta: </label>
							<select class="form-control">
								<option>Enero</option>
								<option>Febrero</option>
								<option>Marzo</option>
								<option>Abril</option>
								<option>Mayo</option>
								<option>Junio</option>
								<option>Julio</option>
								<option>Agosto</option>
								<option>Septiembre</option>
								<option>Octubre</option>
								<option>Noviembre</option>
								<option>Diciembre</option>
							</select>
							<label for="">del </label>
							<select class="form-control">
								<option>2017</option>
								<option>2016</option>
								<option>2015</option>
								<option>2013</option>
								<option>2011</option>
								<option>2010</option>
							</select>
						</div>
						<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
	</div>
	<div class="Contenedor-con-Bordes" id="Main-Contenedor-footer"></div>
	</div>
	<script src="<?php echo base_url(); ?>js/jquery.min.js"></script>
	<script src="<?php echo base_url(); ?>js/bootstrap.min.js"></script>
</body>
</html>
