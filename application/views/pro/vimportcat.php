<div class="Contenedor-Editable" id="Region-Editable">
						 
						<span class="Titulo-Aplicacion">CATEGORIA</span>
						<span class="Separador_Modulo"></span>
						<span class="Sub-Titulo-Aplicacion">Importar Categoria</span>
						<span class="Sub-Titulo-Texto">Agregar archivo adjunto </span>
						<div style="height: 70px;"></div>
						<div class="form-rango">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>exceldatainsert/ccatcarga">

 
								<div class="form-group select_container">
									
								<input type="file" name="excel" style="margin-left: 33px;"  required> 
								</div>
								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="importar">							
								</div>

								
							</form>

						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
					</div>