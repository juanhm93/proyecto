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

<table id="p1" class="display nowrap" cellspacing="0" width="100%">
			<thead>
				<tr> 
					<th>REAL</th>
					<th>Elemento</th>
					<th>Enero</th>
					<th>Febrero</th>
					<th>Marzo</th>
					<th>abril</th>
					<th>Mayo</th>
					<th>Junio</th>
					<th>Julio</th>
					<th>Agosto</th>
					<th>Septiembre</th>
					<th>Octubre</th>
					<th>Noviembre</th>
					<th>Diciembre</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td class="y-header">DIRECCION EJECUTIVA COSTA AFUERA</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					 <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					 <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					 
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIRECCION EJECUTIVA - EP </td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	 
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
				 <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					 <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					 <td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIVISION ORIENTAL</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIVISION OCCIDENTAL</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>

				<tr>
					<td></td>
					<td class="green-header">DTTO ORIENTAL</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td class="green-header">Esfuerzo propio</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
				 	<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>

			</tbody>
		</table>