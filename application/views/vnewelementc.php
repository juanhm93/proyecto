<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nuevo elemento de costo</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/insertelemento">
								<div class="form-group">
								<label for="costo">Nombre</label>
								<input type="text" class="form-control" name="costo" id="costo" aria-describedby="emailHelp" placeholder="ingrese nombre del elemento ">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de elemento "Labor")</small>
								</div> 
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>