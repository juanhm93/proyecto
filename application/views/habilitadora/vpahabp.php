<div class="Contenedor-Editable" id="Region-Editable">
						<h2>Importar puntual Habilitadora</h2>
						<div class="form-proyecto">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<form name="import" id="formulariohabilitadora" method="post" enctype="multipart/form-data" action="<?= base_url()?>exceldatainsert/importprodbp">
								
								<div class="form-group select_container" >
											<div for="anohabilitadora" class="select_title">año</div>		
											<select class="select-select" id="anohabilitadora" name="anohabilitadora"  >
												<option value="">--seleccionar opcion--</option>		
												<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
													<option value="<?= $i;?>"><?= $i;?></option>		
												<?php } ?> 	
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