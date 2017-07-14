
<div class="Contenedor-Editable" id="Region-Editable">
					<h2>Habilitadoras Operaciones </h2>
				 
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>habilitadora/poshab" method="post">
							<div class="form-group select_container"  class="col-xs-12">

										<div for="habilitadora" class="select_title">Habilitadora</div>
										<select class="select-select" name="habilitadora" id="habilitadora" >
										  <option value="">--seleccionar opcion--</option>
										  	<?php foreach ($hab as $fila) {?>
										   		<option value="<?= $fila['idgere'];?>"><?=$fila['gerehab'];?></option>
											<?php  } ?>
										</select>
									</div>
							<div class="form-group select_container"  class="col-xs-12">

										<div for="moneda" class="select_title">tipo de moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccionar opcion--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>
							<div class="form-group select_container" >
										<div for="anho" class="select_title">año</div>		
										<select class="select-select" id="anhohab" name="anhohab"  >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
							<div id="tablamixta" style="overflow-x: auto;" >
							</div>
							<button type="submit" id="buscarvalor" class="btn btn-danger">guardar</button>
							</form>
						</div>


					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
</div>


