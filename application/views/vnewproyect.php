<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Nuevo Proyecto</h2>
						<div class="form-proyecto">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							 
							<form class="form-horizontal" method="post" action="<?= base_url();?>insertform/cins/insertproyecto">
							<div class="box-body">
								<div class="form-group select_container">
								<div for="renglon"  class="select_title">Renglon </div>
								<input type="text" class="form-control" name="renglon" id="renglon" aria-describedby="emailHelp" placeholder="ingrese datos del renglon de proyecto">
								<small id="emailHelp" class="form-text text-muted"> (Ejemplo de renglon de proyecto )</small>
								</div>
								<div class="form-group select_container">
								<div for="titulo"  class="select_title">Titulo</div>
								<input type="text" class="form-control" name="titulo" id="titulo" aria-describedby="emailHelp" placeholder="ingresar el titulo del proyecto">
								<small id="emailHelp" class="form-text text-muted"> (Ejemplo de titulo de proyecto )</small>
								</div>
								<!-- completar con el llamado de los select desde la base de datos :) -->
								<div class="form-group select_container"  >
								<div for="categoria"  class="select_title">Categoria</div>
								<select class="select-select" class="form-control" name="categoria" id="categoria">
								  <option value="">--Seleccionar categoria--</option>
								  <?php
								  foreach ($categoria as $fila) {?>
								   <option value="<?= $fila['id'];?>"><?=$fila['numcategoria']." ".$fila['descripcion'];?></option>
								<?php  } ?>
								</select>
								</div>
								<div class="form-group select_container" >
								<div for="dom" class="select_title">asignado</div>
								<select class="select-select" class="form-control" name="dom" id="dom">
								<option value="">--Opciones--</option>
								  <?php
								  foreach ($dom as $fila) {?>
								   <option value="<?= $fila['idom'];?>"><?=$fila['domvalor']?></option>
								<?php  } ?>
								</select>
								</div>
								<div class="form-group select_container" id="divisionpro">
								<div for="division"  class="select_title">Division</div>
								<select class="select-select" class="form-control" name="division" id="division">
								<option value="">--Seleccionar division--</option>
									<?php foreach ($division as $fila) { ?>
										<option value="<?=$fila['iddi'];?>"><?= $fila['divisonopc'];?></option>  
									<?php } ?>  
								</select>
								</div>
								<div class="form-group select_container" id="emxpro">
								<div for="emx"  class="select_title">EM</div>
								<select class="select-select" class="form-control" name="emx" id="emx">
								<option value="">--Seleccionar EM--</option>
									<?php foreach ($emx as $fila) { ?>
										<option value="<?=$fila['idemx'];?>"><?= $fila['emmixta'];?></option>  
									<?php } ?>  
								</select>
								</div>
							<!--	<fieldset class="form-group">
								<legend>Tipo</legend>
								<div class="form-check">
								  <label class="form-check-label" class="radio-inline">
								    <input type="radio" class="form-check-input" name="optionsRadios" id="tipo" value="option1" checked>
								    Inversiones
								  </label>
								</div>
								<div class="form-check">
								<label class="form-check-label" class="radio-inline">
								    <input type="radio" class="form-check-input" name="optionsRadios" id="tipo" value="option2">
								    Operaciones
								  </label>
								</div>
								</fieldset>-->

								<div class="form-group select_container" >
								<button type="submit" class="btn btn-danger" >guardar</button>
								</div>
								
								

							</div>
								</form>

						</div>
						
					</div>