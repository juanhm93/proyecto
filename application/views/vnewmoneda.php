<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nueva moneda</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/insertmoneda">
								<div class="form-group">
								<label for="nombmoneda">Nombre</label>
								<input type="text" class="form-control" name="nombmoneda" id="nombmoneda" aria-describedby="emailHelp" placeholder="ingrese moneda">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de moneda 'dolar')</small>
								</div>
								<div class="form-group">
								<label for="siglasmoneda">siglas</label>
								<input type="text" class="form-control" name="siglasmoneda" id="siglasmoneda" placeholder="ingrese siglas de moneda">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de siglas 'USD')</small>
								</div>
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>