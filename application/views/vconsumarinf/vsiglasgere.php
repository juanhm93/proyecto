<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Completar gerencia siglas</h2>
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>consumarinf/cinsertinf/siglas">
							
								<div class="form-group select_container" class="col-xs-8">

										<div for="gerencia" class="select_title">gerencia </div>

										<select class="select-select" name="gerencia" id="gerencia" required >
										  <option value="">--seleccione opcion--</option>
										  	<?php foreach ($siglas as $fila) {?>
										   		<option value="<?= $fila['idgere'];?>"><?=$fila['gerehab'];?></option>
											<?php  } ?>
										</select>
							</div>
							 	
							 	<div class="form-group select_container">
								<div for="siglas"  class="select_title">siglas </div>
								<input type="text" class="form-control" name="siglas" id="siglas" aria-describedby="emailHelp" placeholder="ingrese datos del siglas de habilitadora">
								<small id="emailHelp" class="form-text text-muted"> (Ejemplo de ambiente - AMB )</small>
								</div>
								
								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="Guardar">				
								</div>

								
							</form>
		
						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
					</div>