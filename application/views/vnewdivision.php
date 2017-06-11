<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa" id="division">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nueva División</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/insertdiv">
								<div class="form-group">
								<label for="division">Nombre</label>
								<input type="text" class="form-control" name="division" id="division" aria-describedby="emailHelp" placeholder="ingrese nombre de la division">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de division COSTA AFUERA ORIENTAL)</small>
								</div>	
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>