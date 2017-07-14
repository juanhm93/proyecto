
<div class="Contenedor-Editable" id="Region-Editable">
					<h2>Empresas Mixtas </h2>
					<p>ingresar valores respectivos para la cargar de la empresa "COLOCAR EMPRESA"</p>
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>em/celemixtar/postmixta" method="post">
							<div class="form-group select_container"  class="col-xs-12">

										<div for="empresam" class="select_title">Empresa mixta</div>
										<select class="select-select" name="empresam" id="empresam" >
										  <option value="">--seleccione EM--</option>
										  	<?php foreach ($em as $fila) {?>
										   		<option value="<?= $fila['idemx'];?>"><?=$fila['emmixta'];?></option>
											<?php  } ?>
										</select>
									</div>
							<div class="form-group select_container"  class="col-xs-12">

										<div for="moneda" class="select_title">tipo de moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccione moneda--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>
							<div class="form-group select_container" >
										<div for="anho" class="select_title">año</div>		
										<select class="select-select" id="anho" name="anho"  >
											<option value="">--seleccionar un año--</option>		
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


