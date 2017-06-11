<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4 style="text-align: center;">Nueva habilitadora</h4>
							<form method="post" action="<?= base_url()?>insertform/cins/inserthab">
								<div class="form-group">
								<label for="habilitadora">Nombre</label>
								<input type="text" class="form-control" name="habilitadora" id="habilitadora" aria-describedby="emailHelp" placeholder="ingrese nombre de la habilitadora">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de habilitadora "Ambiente")</small>
								</div>
								<div class="form-group">
								<label for="siglashab">Siglas</label>
								<input type="text" class="form-control" name="siglashab" id="siglashab" placeholder="ingrese siglas de su habilitadora ">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de siglas AMB)</small>
								</div> 
								<button type="submit" class="btn btn-danger">guardar</button>
								</form>

						</div>
						
					</div>