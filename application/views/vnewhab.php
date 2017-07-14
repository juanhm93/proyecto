<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Nueva Habilitadora</h2>
						<div class="form-proyectoem">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form method="post" action="<?= base_url()?>insertform/cins/inserthab">
								<div class="form-group select_container">
								<div for="habilitadora" class="select_title">Nombre</div>
								<input type="text" class="form-control" name="habilitadora" id="habilitadora" aria-describedby="emailHelp" placeholder="ingrese nombre de la habilitadora">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de habilitadora "Ambiente")</small>
								</div>
								<div class="form-group select_container">
								<div for="siglashab" class="select_title">Siglas</div>
								<input type="text" class="form-control" name="siglashab" id="siglashab" placeholder="ingrese siglas de su habilitadora ">
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
								<button type="submit" class="btn btn-danger">guardar</button>
								</div> 
								</form>
						</div>
						
					</div>