<div class="Contenedor-Editable" id="Region-Editable">
						<h4>Proyectos Empresas Mixtas</h4>
						<div class="form-proyectoem ">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							


							<form class="form-horizontal" method="post" action="<?=base_url()?>insertform/cins/insertreal">
								
									<!-- completar con el llamado de los select desde la base de datos :) -->
								 
									<div class="form-group select_container" class="col-xs-8">

										<div for="proyectosem" class="select_title">proyectos EM</div>

										<select class="select-select" name="proyectosem" id="proyectosem" >
										  <option value="">--seleccione proyecto--</option>
										  	<?php foreach ($empro as $fila) {?>
										   		<option value="<?= $fila['idproyecto'];?>"><?=$fila['renglon']." ".$fila['titulo'];?></option>
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

									<div class="form-group select_container">
										<div for="anho" class="select_title">año</div>		
										<select class="select-select" id="anhop" name="anhop" >
											<option value="">--seleccionar un año--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
									</div>


							<!--

									<div class="form-group input_container">
										<div for="" class="input_title">Desde: </div>
											<select id="mesinicio" name="mesinicio" class="input-select" >
											<option value="">seleccionar mes</option>
											<option value="enero">Enero</option>
											<option value="febrero">Febrero</option>
											<option value="marzo">Marzo</option>
											<option value="abril">Abril</option>
											<option value="mayo">Mayo</option>
											<option value="junio">Junio</option>
											<option value="julio">Julio</option>
											<option value="agosto">Agosto</option>
											<option value="septiembre">Septiembre</option>
											<option value="octubre">Octubre</option>
											<option value="noviembre">Noviembre</option>
											<option value="diciembre">Diciembre</option>
										</select>
								</div>

								<div class="form-group input_container">
									<div class="input_title" for="">Hasta: </div>
									
									<select  id="mesfin" name="mesfin" class="input-select"></select>
								</div>
								-->
							
								<div id="meses" class="grid-container"></div>

						
								<button type="submit" class="btn btn-danger" >guardar</button>
							

							 

								</div>
									

							</form>
							
							 

							

						</div>
					</div>