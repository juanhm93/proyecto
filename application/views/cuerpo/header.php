<div class="Contenedor" id="Main-externo">
		<div class="Contenedor" id="Main-header">
			<a href=""><span class="Contenedor-con-Imagen" id="Main-Logo"></span></a>
			<div class="Contenedor" id="Contenedor-Degradado">
				<div class="Contenedor-con-Imagen" id="Logo-Continuacion"><span class="Contenedor" id="Nombre-Aplicacion">Sistema de ejecucion presupuestaria</span></div>
				<div class="Contenedor-con-Imagen" id="Logo-Final"></div>
			</div>
		</div>
		<div class="Contenedor-con-sombra" id="Main-BackCuerpoRight">
			<div class="Contenedor-con-sombra" id="Main-BackCuerpoLeft">
				<div class="Contenedor" id="Main-Cuerpo">
					<div class="Contenedor-con-Bordes" id="Main-Identificador_usuario">
						<span class="Texto-Identificador" id="Main-Usuario"> Bienvenido, user </span>
						<span class="Texto-Identificador" id="Main-Fecha"><?php 
							$datos =date('Y-m-d'); 		
						 echo $fecha = $this->fecha->obtenerFechaEnLetra($datos); ?></span>
					</div>
					<div class="Contenedor" id="Main-breadcrumbs"><div id="Main-Traza"><div id="Main-Traza-aux"></div></div>
					<div class="EsquinasBread" id="EsquinaBreadDerecha"></div>
				</div>
