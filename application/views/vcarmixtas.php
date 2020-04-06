
<div class="Contenedor-Editable" id="Region-Editable">
					 
					<span class="Titulo-Aplicacion">EMPRESAS MIXTAS</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Cargar información</span>
					<span class="Sub-Titulo-Texto">Insertar o actualizar los valores del plan, real, mejor vision o anteproyecto</span>
					 <div style="height: 70px;"></div>
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>cmixtas/postmixta" method="post">


							<div class="form-group select_container1"  class="col-xs-12">
										<div for="empresam" class="select_title">Empresa mixta</div>
										<select class="select-select" name="empresam" id="empresam" >
										  <option value="">--seleccione EM--</option>
										  	<?php foreach ($em as $fila) {?>
										   		<option value="<?= $fila['idemx'];?>"><?=$fila['emmixta'];?></option>
											<?php  } ?>
										</select>
									</div>
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
							<div class="form-group select_container1"  class="col-xs-12">

										<div for="moneda" class="select_title">Moneda</div>

										<select class="select-select" name="moneda" id="moneda" >
										  <option value="">--seleccione moneda--</option>
										  	<?php foreach ($moneda as $fila) {?>
										   		<option value="<?= $fila['idmoneda'];?>"><?=$fila['siglasm'];?></option>
											<?php  } ?>
										</select>
							</div>
							<div class="form-group select_container1" >
										<div for="anho" class="select_title">Año</div>		
										<select class="select-select" id="anho" name="anho"  >
											<option value="">--seleccionar un año--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
							<div class="form-group select_container1" >
							<button type="submit" id="buscarvalor" class="btn btn-danger">guardar</button>
							</div>

							<div id="tablamixta" style="overflow-y: auto;"  class='Tabla-Aplicacion'>
								


							</div>
							
							</form>
						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
		

</div>


