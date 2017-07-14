<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Ingresar Proyectos Esfuerzo Propio</h2>
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>exceldatainsert/obtenerfile/Excel">


							<div class="form-group select_container" class="col-xs-8">

										<div for="moneda" class="select_title">Tipo de Moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccione moneda--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>
								
								<div class="form-group select_container">
										<div for="anho" class="select_title">Año</div>		
										<select class="select-select" id="anho" name="anho" >
											<option value="">--seleccionar un año--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
								</div>
								<div class="form-group select_container">
									
								<input type="file" name="excel" style="margin-left: 33px;" > 
								</div>
								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="enviar">							
								</div>

								
							</form>

						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
					</div>