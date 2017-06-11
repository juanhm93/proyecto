<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-proyecto">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nuevo proyecto</h4>
							<form class="form-horizontal" method="post" action="<?= base_url();?>insertform/cins/insertproyecto">
							<div class="box-body">
								<div class="form-group">
								<label for="renglon" class="col-sm-2 control-label">Renglon </label>
								<input type="text" class="form-control" name="renglon" id="renglon" aria-describedby="emailHelp" placeholder="ingrese datos del renglon de proyecto">
								<small id="emailHelp" class="form-text text-muted"> (Ejemplo de renglon de proyecto )</small>
								</div>
								<div class="form-group">
								<label for="titulo" class="col-sm-2 control-label">Titulo</label>
								<input type="text" class="form-control" name="titulo" id="titulo" aria-describedby="emailHelp" placeholder="ingresar el titulo del proyecto">
								<small id="emailHelp" class="form-text text-muted"> (Ejemplo de titulo de proyecto )</small>
								</div>
								<!-- completar con el llamado de los select desde la base de datos :) -->
								<div class="form-group" >
								<label for="categoria" class="col-sm-2 control-label">Categoria</label>
								<select class="form-control" name="categoria" id="categoria">
								  <?php
								  foreach ($categoria as $fila) {?>
								   <option value="<?= $fila['id'];?>"><?=$fila['numcategoria']." ".$fila['descripcion'];?></option>
								<?php  } ?>
								</select>
								</div>
								<div class="form-group">
								<label for="division" class="col-sm-2 control-label">Division</label>
								<select class="form-control" name="division" id="division">
									<?php foreach ($division as $fila) { ?>
										<option value="<?=$fila['iddi'];?>"><?= $fila['divisonopc'];?></option>  
									<?php } ?>  
								</select>
								</div>
									<div class="form-group">
								<label for="distrito" class="col-sm-2 control-label">Distrito o EM </label>
								<select class="form-control" name="distrito" id="distrito">
								<?php foreach ($distrito as $fila){ ?>	
								   <option value="<?=$fila['iddistrito'];?>"><?= $fila['distrito']?></option>
								  <?php } ?>
								</select>
								</div>
								<div class="form-group">
								<label for="gerenciapro" class="col-sm-2 control-label">Gerencia</label>
								<select class="form-control" name="gerenciapro" id="gerenciapro">
								<?php foreach ($gereproyecto as $fila){ ?>	
								   <option value="<?=$fila['idgp'];?>"><?= $fila['gp']?></option>
								  <?php } ?>
								</select>
								</div>
								<fieldset class="form-group">
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
								</fieldset>
								
								<button type="submit" class="btn btn-danger" >guardar</button>
							

							</div>
								</form>

						</div>
						
					</div>