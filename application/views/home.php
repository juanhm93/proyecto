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
				<div class="Contenedor-con-Imagen" id="Logo-Continuacion"><span class="Contenedor" id="Nombre-Aplicacion">SISGP </span></div>
				<div class="Contenedor-con-Imagen" id="Logo-Final"></div>
			</div>
		</div>
		<div class="Contenedor-con-sombra" id="Main-BackCuerpoRight">
			<div class="Contenedor-con-sombra" id="Main-BackCuerpoLeft">
				<div class="Contenedor" id="Main-Cuerpo">
					<div class="Contenedor-con-Bordes" id="Main-Identificador_usuario">
						<span class="Texto-Identificador" id="Main-Usuario"> Bienvenido, user </span>
						<span class="Texto-Identificador" id="Main-Fecha">Lunes, 26 de USAR FECHA PC de 2017</span>
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
							<h4>ingresar proyectos esfuerzo propios</h4>
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url();?>exceldatainsert/obtenerfile/Excel">
								<input type="file" name="excel" > <br>
								<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="enviar">
							</form>

							 
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
