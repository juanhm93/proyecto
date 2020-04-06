
<div class="Contenedor-Editable" id="Region-Editable">
					<h2>Direccion ejecutiva - EP </h2>
				 
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>cdirejep/postdireccion" method="post">
							 
							 <div class="form-group select_container1">
									
								<div for="PR" class="select_title">Cargar</div>
										<select class="select-select" name="PR" id="PR" >
										  <option value="">--seleccionar Opcion--</option>
										  <option value="1">Plan</option>
										  <option value="2">Real</option>
										  <option value="3">Mejor Vision</option>
										  <option value="4">Anteproyecto</option>
										</select>
								</div>	

								<div class="form-group select_container1">
									
								<div for="invop" class="select_title">Tipo</div>
										<select class="select-select" name="invop" id="invop" >
										  <option value="">--seleccionar Opcion--</option>
										  <option value="1">Inversiones</option>
										  <option value="2">Operaciones</option>
										</select>
								</div>	

							<div class="form-group select_container1"  class="col-xs-12">

										<div for="moneda" class="select_title">Moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccionar opcion--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>


							<div class="form-group select_container1" >
										<div for="anhodir" class="select_title">Año</div>		
										<select class="select-select" id="anhodir" name="anhodir"  >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
							<div id="direccion" style="overflow-x: auto;" >
							</div>
							<button type="submit" id="buscarvalor" class="btn btn-danger">guardar</button>
							</form>
						</div>


</div>


