<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nueva Categoria</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/insertcategoria">
								<div class="form-group">
								<label for="numcategoria">Numero</label>
								<input type="text" class="form-control" name="numcategoria" id="numcategoria" aria-describedby="emailHelp" placeholder="ingrese numero de la categoria">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de categoria completa 09 GEOFISICA)</small>
								</div>
								<div class="form-group">
								<label for="categoria">Descripcion</label>
								<input type="text" class="form-control" name="categoria" id="categoria" placeholder="ingrese descripcion de categoria">
								</div> 
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>