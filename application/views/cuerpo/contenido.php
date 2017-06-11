<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-rango">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>ingresar proyectos inversion esfuerzo propios</h4>
							<form name="import" method="post" enctype="multipart/form-data" action="<?php echo base_url(); ?>exceldatainsert/obtenerfile/Excel">
								<input type="file" name="excel" > <br>
								<input class="btn btn-danger navbar-btn" id="esfuerzoP" type="submit" name="submit" value="enviar">
							</form>


						</div>
						<div class="form-mensaje">
							<div class="alert alert-success" role="alert">
							  <p><span class="glyphicon glyphicon-alert" aria-hidden="true"></span>   La tabla mostrada es <strong>Preliminar</strong></p>
							</div>
						</div>
					</div>