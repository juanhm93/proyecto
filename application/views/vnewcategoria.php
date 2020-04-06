<div class="Contenedor-Editable" id="Region-Editable">
						 
						<span class="Titulo-Aplicacion">CATEGIORIA</span>
						<span class="Separador_Modulo"></span>
						<span class="Sub-Titulo-Aplicacion">Nueva Categoria</span>
						<span class="Sub-Titulo-Texto">Insertar datos en todos lo campos para poder guardar</span>
					 <div style="height: 70px;"></div>
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							
							<form method="post" action="<?= base_url()?>insertform/cins/insertcategoria">
								<div class="form-group select_container">
								<div for="numcategoria" class="select_title" >Numero</div>
								<input type="number" class="form-control" name="numcategoria" id="numcategoria" aria-describedby="emailHelp" placeholder="ingrese numero de la categoria" required>
								<small id="emailHelp" class="form-text text-muted">(Ejemplo de categoria 09 GEOFISICA)</small>
								</div>
								<div class="form-group select_container">
								<div for="categoria" class="select_title">Descripcion</div>
								<input type="text" class="form-control" name="categoria" id="categoria" placeholder="ingrese descripcion de categoria" required>
								</div> 
								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div> 
								
								</form>

						</div>
						
					</div>