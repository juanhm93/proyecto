<div class="Contenedor-Editable" id="Region-Editable">
							<span class="Titulo-Aplicacion">PROYECTOS </span>
							<span class="Separador_Modulo"></span>
							<span class="Sub-Titulo-Aplicacion">Nuevo Proyecto</span>
						<div  >
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							 
							<form class="form-horizontal" method="post" action="<?= base_url();?>insertform/cins/insertproyecto">
							<div class="box-body">

								<div class="form-group select_container1">
										<div for="anhops" class="select_title">Año</div>		
										<select class="select-select" id="anhops" name="anhops" required  >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y")+2; $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
								</div>

								<div class="form-group select_container1" >
								<div for="dom" class="select_title">Tipo</div>
								<select class="select-select" class="form-control" name="dom" id="dom" required >
								<option value="">--Opciones--</option>
								  <?php
								  foreach ($dom as $fila) {?>
								   <option value="<?= $fila['idom'];?>"><?=$fila['domvalor']?></option>
								<?php  } ?>
								</select>
								</div>


								<!-- completar con el llamado de los select desde la base de datos :) -->
								

								<div class="form-group select_container1" id="emep">
								
								
								</div>

								<div class="form-group select_container1" id="divisionpro">
								<div for="division"  class="select_title">Division</div>
								<select class="select-select" class="form-control" name="division" id="division">
								<option value="">--Seleccionar division--</option>
									<?php foreach ($division as $fila) { ?>
										<option value="<?=$fila['iddi'];?>"><?= $fila['divisonopc'];?></option>  
									<?php } ?>  
								</select>
								</div>
								<div class="form-group select_container1" id="emxpro">
								<div for="emx"  class="select_title">EM</div>
								<select class="select-select" class="form-control" name="emx" id="emx">
								<option value="">--Seleccionar EM--</option>
									<?php foreach ($emx as $fila) { ?>
										<option value="<?=$fila['idemx'];?>"><?= $fila['emmixta'];?></option>  
									<?php } ?>  
								</select>
								</div>
								<div class="form-group select_container1">
								<div for="titulo"  class="select_title">Titulo</div>
								<input type="text" class="form-control" name="titulo" id="titulo" aria-describedby="emailHelp" placeholder="ingresar el titulo del proyecto" required>
								<small id="emailHelp" class="form-text text-muted"> Ejemplo ("RECOMPLETACIÓN EXPLORATORIA PCG-06" )</small>
								</div>
						 
								<div class="form-group select_container1" >
								<button type="submit" class="btn btn-danger" >guardar</button>
								</div>
								
								

							</div>
								</form>

						</div>
						
					</div>