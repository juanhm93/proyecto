<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Nuevo Elemento de Costo</h2>
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form method="post" action="<?= base_url()?>insertform/cins/insertelemento">
								<div class="form-group select_container">
								<div for="costo" class="select_title" >Nombre</div>
								<input type="text" class="form-control" name="costo" id="costo" aria-describedby="emailHelp" placeholder="ingrese nombre del elemento ">
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de elemento "Labor")</small>
								</div> 
								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div> 
								
								</form>

						</div>
						
					</div>