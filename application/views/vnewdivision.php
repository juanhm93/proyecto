<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Nueva División</h2>
						<div class="form-completa" id="division">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							
							<form method="post" action="<?= base_url()?>insertform/cins/insertdiv">
								<div class="form-group select_container">
								<div for="division" class="select_title">Nombre</div>
								<input type="text" class="form-control" name="division" id="division" aria-describedby="emailHelp" placeholder="ingrese nombre de la division">	
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de division COSTA AFUERA ORIENTAL)</small>
								</div>	
								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div>	
								</form>

						</div>
						
					</div>