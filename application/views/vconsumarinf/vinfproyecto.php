<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Completar informacion proyectos</h2>
						<div class="form-proyecto">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>consumarinf/cinsertinf/pro">
							
								<div class="form-group select_container" class="col-xs-8">

										<div for="proyectos" class="select_title">proyecto </div>

										<select class="select-select" name="proyectos" id="proyectos" required >
										  <option value="">--seleccione proyecto--</option>
										  	<?php foreach ($proyectos as $fila) {?>
										   		<option value="<?= $fila['idproyecto'];?>"><?=$fila['renglon']." ".$fila['titulo'];?></option>
											<?php  } ?>
										</select>
							</div>

								<div class="form-group select_container" class="col-xs-8">

										<div for="dom" class="select_title">asignado </div>

										<select class="select-select" name="dom" id="dom" required >
										  <option value="">--seleccione opcion--</option>
										  	<?php foreach ($dom  as $fila) {?>
										   		<option value="<?= $fila['idom'];?>"><?=$fila['domvalor'];?></option>
											<?php  } ?>
										</select>
							</div>
							 	
							 	 <div id="resultado" class="form-group select_container" class="col-xs-8">
							 	 	
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