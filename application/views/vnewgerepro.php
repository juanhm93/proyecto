<div class="Contenedor-Editable" id="Region-Editable">
						<span class="Titulo-Aplicacion">GERENCIA</span>
						<span class="Separador_Modulo"></span>
						<span class="Sub-Titulo-Aplicacion">Nueva Gerencia de Proyecto</span>
						<span class="Sub-Titulo-Texto">Insertar datos en todos lo campos para poder guardar</span>
					 <div style="height: 70px;"></div>
						<div class="form-completa" >
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							
							<form method="post" action="<?= base_url()?>insertform/cins/insertgerepro">
								<div class="form-group select_container">
								<div for="gerepro" class="select_title">Nombre</div>
								<input type="text" class="form-control" name="gerepro" id="gerepro" aria-describedby="emailHelp" placeholder="ingrese nombre de la gerencia" required>
								<small id="emailHelp" class="form-text text-muted">(Ejemplo   PROYECTOS MAYORES)</small>
								</div>	
								<div class="form-group select_container">
								<button type="submit" class="btn btn-danger">guardar</button>
								</div>	
								
								</form>

						</div>
						
					</div>