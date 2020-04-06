<div class="Contenedor-Editable" id="Region-Editable">
						 
					<span class="Titulo-Aplicacion">Proyecto</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Importar Puntual</span>
					<span class="Sub-Titulo-Texto">Esta opcion carga el real, mv, anteproyecto del mes especificado en el formato excel</span>
					<div style="height: 70px;"></div>	
						<div class="form-completa">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" id="formulariohabilitadora" method="post" enctype="multipart/form-data" action="<?= base_url()?>exceldatainsert/importprodbp">
								
								<div class="form-group select_container" >
											<div for="anhopro" class="select_title">Año</div>		
											<select class="select-select" id="anhopro" name="anhopro" required >
												<option value="">--seleccionar opcion--</option>		
												<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
													<option value="<?= $i;?>"><?= $i;?></option>		
												<?php } ?> 	
											</select>
									</div>		

								<div class="form-group select_container">
									
								<div for="PR" class="select_title">Importacion</div>
										<select class="select-select" name="PR" id="PR" required>
										  <option value="">--seleccionar Opcion--</option>
										  <option value="1">Real</option>
										  <option value="2">Mejor Vision</option>
										  <option value="3">Anteproyecto</option>
										</select>
								</div>	

								<div class="form-group select_container">
								<input type="file" name="excel" style="margin-left: 33px;" > 
								</div>
								<div class="form-group select_container">
									<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="Importar">					
								</div>

								
							</form>

						</div>
					<!--	<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>-->
					</div>
				