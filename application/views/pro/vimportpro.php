<div class="Contenedor-Editable" id="Region-Editable">
					<span class="Titulo-Aplicacion">Proyecto</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Importar proyectos</span>
					<span class="Sub-Titulo-Texto">Esta opcion carga las caracteristicas que pertenece al proyecto segun su especificación en el formato</span>
					<div style="height: 70px;"></div>
						<div class="form-rango">
							 
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>exceldatainsert/cprocarga">

 
								<div class="form-group select_container">	
								<input type="file" name="excel"   > 
								</div>

								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="importar">							
								</div>

								
							</form>

						</div>
				 
					</div>