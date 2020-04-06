<div class="Contenedor-Editable" id="Region-Editable">
					<span class="Titulo-Aplicacion">Habilitadora</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Nueva Habilitadora</span>
					<span class="Sub-Titulo-Texto">Ingrese datos completos para crear habilitadora </span>
					<div style="height: 70px;"></div>
				 
						<div class="form-proyectoem">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form method="post" action="<?= base_url()?>insertform/cins/inserthab">
								<div class="form-group select_container">
								<div for="habilitadora" class="select_title">Nombre</div>
								<input type="text" class="form-control" name="habilitadora" id="habilitadora" aria-describedby="emailHelp" placeholder="ingrese nombre de la habilitadora" required>
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de habilitadora "Ambiente")</small>
								</div>
								<div class="form-group select_container">
								<div for="siglashab" class="select_title">Siglas</div>
								<input type="text" class="form-control" name="siglashab" id="siglashab" placeholder="ingrese siglas de su habilitadora " required>
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de siglas AMB)</small>
								</div>
								<div class="form-group select_container">
								<div class="select_title">Tipo</div>
								<div class="form-check " >
								    <input type="checkbox" class="form-check-input" name="checkea[]" id="tipo" value="1" checked>
								    Inversiones
								</div>
								<div class="form-check">
								    <input type="checkbox" class="form-check-input" name="checkea[]" id="tipo" value="2">
								    Operaciones
								 
								</div>
								</div>
								<div class="form-group select_container">
										<div for="tipodiv" class="select_title">Pertenece</div>		
										<select class="select-select" id="tipodiv" name="tipodiv"  required>
											<option value="">--seleccionar opcion--</option>		
											<?php  foreach ($div as $value) { ?>
												<option value="<?= $value['iddiv'];?>"><?= $value['descdiv'];?></option>		
											<?php } ?> 	
										</select>
								</div>

								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div> 
								</form>
						</div>
						
					</div>