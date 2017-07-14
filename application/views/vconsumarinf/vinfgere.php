<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Completar informacion de gerencia</h2>
						<div class="form-proyecto">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>consumarinf/cinsertinf/gerenciadiv">
							
								<div class="form-group select_container" class="col-xs-8">

										<div for="tipodiv" class="select_title">tipo </div>

										<select class="select-select" name="tipodiv" id="tipodiv" required >
										  <option value="">--seleccione opcion--</option>
										  	<?php foreach ($tipodiv as $fila) {?>
										   		<option value="<?= $fila['iddiv'];?>"><?=$fila['descdiv'];?></option>
											<?php  } ?>
										</select>
							</div>
							 		
							<div class="form-group select_container" class="col-xs-8">	 
							<div class="select_title">gerencia</div>
							 
							<table id="example" class="display nowrap" cellspacing="0" width="100%">
								<thead>
									<tr>
										<th style=" ">Gerencia</th>
										<th>Seleccionar</th>	 
									</tr>
								</thead>
								<tbody>
								
								<?php
								foreach ($gerencia  as $fila) {
									?>
									
										<tr>
											<td><?= $fila['gerehab']?></td>
											<td ><input type="checkbox" class="form-check-input" name="checkea[]" id="tipo" value="<?=$fila['idgere'];?>" ></td>
										</tr>
									
									
									<?php }
									?><!--fin foreach-->
									</tbody>
								</table>
								
							</div>	
								<div class="form-group select_container">
									<input   id="seleccionar" type="hidden" name="seleccionar" value="">				
								</div>
								
								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="Guardar">				
								</div>

								
							</form>
		
						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
					</div>