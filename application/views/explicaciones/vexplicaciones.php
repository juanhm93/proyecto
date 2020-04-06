
<div class="Contenedor-Editable" id="Region-Editable">
					<span class="Titulo-Aplicacion">Proyecto</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Explicaciones</span>
					<span class="Sub-Titulo-Texto">Debe seleccionar todas las opciones para cargar las explicaciones</span>
					<div style="height: 70px;"></div>
				 
					<div class="form-proyecto">
					<form class="form-horizontal" action="<?= base_url()?>cexplicaciones/postexplicaciones" method="post">
							 	
							 	<div class="form-group select_container1"  class="col-xs-12">

										<div for="proyecto" class="select_title">Proyecto</div>

										<select class="select-select" name="proyecto" id="proyecto" required >
										  <option value="">--seleccionar opcion--</option>
										  	<?php foreach ($proyecto as $fila) {?>
										   		<option value="<?= $fila['idproyecto'];?>"><?=$fila['titulo'];?></option> 
											<?php  } ?>
										</select>
							</div>
								<div class="form-group select_container1"  class="col-xs-12">

										<div for="expli" class="select_title">Explicaciones</div>

										<select class="select-select" name="expli" id="expli" required >
										  <option value="">--seleccionar opcion--</option>
										   		<option value="1">Real vs Plan</option> 
											 	<option value="2">MV vs Aprobado</option> 
										</select>
							</div>

							 <div class="form-group select_container1">
									
								<div for="meses" class="select_title">Mes</div>
										<select class="select-select" name="meses" id="meses" required >
										  <option value="">--seleccionar Opcion--</option>
										  <option value="1">Enero</option>
										  <option value="2">Febrero</option>
										  <option value="3">Marzo</option>
										  <option value="4">Abril</option>
										  <option value="5">Mayo</option>
										  <option value="6">Junio</option>
										  <option value="7">Julio</option>
										  <option value="8">Agosto</option>
										  <option value="9">Septiembre</option>
										  <option value="10">Octubre</option>
										  <option value="11">Noviembre</option>
										  <option value="12">Diciembre</option>
										</select>
								</div>	

							<div class="form-group select_container1" >
										<div for="anexplicaciones" class="select_title">Año</div>		
										<select class="select-select" id="anexplicaciones" name="anexplicaciones" required >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
							<div class="form-group select_container1" >
							<button type="submit" id="buscarvalor" class="btn btn-danger">guardar</button>
							</div>

							<div id="explicaonestabla" style="height: 250px;"  class='Tabla-Aplicacion'>


							</div>
							

							</form>
						</div>


</div>


