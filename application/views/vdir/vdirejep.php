
<div class="Contenedor-Editable" id="Region-Editable">
					<h2>Direccion ejecutiva - EP </h2>
				 
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>habilitadora/poshab" method="post">
							 
							 <div class="form-group select_container">
									
								<div for="PR" class="select_title">Cargar</div>
										<select class="select-select" name="PR" id="PR" >
										  <option value="">--seleccionar Opcion--</option>
										  <option value="1">Plan</option>
										  <option value="2">Real</option>
										</select>
								</div>	

							<div class="form-group select_container"  class="col-xs-12">

										<div for="moneda" class="select_title">Moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccionar opcion--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>
							<div class="form-group select_container" >
										<div for="anhodir" class="select_title">año</div>		
										<select class="select-select" id="anhodir" name="anhodir"  >
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


</div>


