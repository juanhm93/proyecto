<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Nueva Moneda</h2>
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							
							<form method="post" action="<?= base_url()?>insertform/cins/insertmoneda">
								<div class="form-group select_container">
								<div for="nombmoneda" class="select_title">Nombre</div>
								<input type="text" class="form-control" name="nombmoneda" id="nombmoneda" aria-describedby="emailHelp" placeholder="ingrese moneda">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de moneda 'dolar')</small>
								</div>
								<div class="form-group select_container">
								<div for="siglasmoneda" class="select_title">Siglas</div>
								<input type="text" class="form-control" name="siglasmoneda" id="siglasmoneda" placeholder="ingrese siglas de moneda">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de siglas 'USD')</small>
								</div>
								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div>
								
								
								</form>

						</div>
						
					</div>