<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa" >
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nueva gerencia de proyecto</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/insertgerepro">
								<div class="form-group">
								<label for="gerepro">Nombre</label>
								<input type="text" class="form-control" name="gerepro" id="gerepro" aria-describedby="emailHelp" placeholder="ingrese nombre de la gerencia">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de gerencia PROYECTOS MAYORES)</small>
								</div>	
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>