<div class="Contenedor-Editable" id="Region-Editable">
						<div class="form-proyectoem">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>Proyectos Empresas Mixtas</h4>


							<form class="form-horizontal" method="post" action="<?=base_url()?>insertform/cins/insertreal">
								
									<!-- completar con el llamado de los select desde la base de datos :) -->
								 
									<div class="form-group" class="col-xs-8">
									<label for="proyectosem" class="col-sm-3 control-label">proyectos EM</label>
									<select class="form-control" name="proyectosem" id="proyectosem" >
									  <option value="">--seleccione proyecto--</option>
									  <?php
									  foreach ($empro as $fila) {?>
									   <option value="<?= $fila['idproyecto'];?>"><?=$fila['renglon']." ".$fila['titulo'];?></option>
									<?php  } ?>
									</select>
									</div>

									<div class="form-group">
									<label for="anho" class="col-sm-3 control-label">año</label>		
									<select class="form-control" id="anho" name="anho" >
									<option value="">--seleccionar un año--</option>		
									<?php 
									for($i=2017; $i >= 2010; $i--){ ?>
									<option value="<?= $i;?>"><?= $i;?></option>		
									<?php } ?> 	
									</select>
									</div>




									<div class="form-group">
										<label for="">Desde: </label>
									<select id="mesinicio" name="mesinicio" class="form-control" >
									<option value="">--seleccionar mes--</option>
									<option value="enero">Enero</option>
									<option value="febrero">Febrero</option>
									<option value="marzo">Marzo</option>
									<option value="abril">Abril</option>
									<option value="mayo">Mayo</option>
									<option value="junio">Junio</option>
									<option value="julio">Julio</option>
									<option value="agosto">Agosto</option>
									<option value="septiembre">Septiembre</option>
									<option value="octubre">Octubre</option>
									<option value="noviembre">Noviembre</option>
									<option value="diciembre">Diciembre</option>
									</select>
									<label for="">Hasta: </label>
									<!-- 
									Para el disabled con javascript 

									document.getElementById("myCheck").disabled = true;

									tengo que colocar el disabled a las opciones que ya no puedes marcarse que son los meses anteriores al que se escoja en el desde

									-->
									<select  id="mesfin" name="mesfin" class="form-control"></select>
								</div>
								
								<div id="ene" class="element" class="form-group">
								<label for="realenero">Enero</label>
								<input type="text" class="form-control" name="realenero" id="realenero" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								</div>

								<div id="feb" class="element" class="form-group">
								<label for="realfebrero">Febrero</label>
								<input type="text" class="form-control" name="realfebrero" id="realfebrero" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								</div>

								<div id="marzo" class="element" class="form-group">
								<label for="realmarzo">Marzo</label>
								<input type="text" class="form-control" name="realmarzo" id="realmarzo" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small></div>

								<div id="abr" class="element" class="form-group">
								<label for="realabril">Abril</label>
								<input type="text" class="form-control" name="realabril" id="realabril" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								</div>
								
								<div id="mayo" class="element" class="form-group">
								<label for="realmayo">Mayo</label>
								<input type="text" class="form-control" name="realmayo" id="realmayo" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								</div>

								<div id="jun" class="element" class="form-group">
								<label for="realjunio">Junio</label>
								<input type="text" class="form-control" name="realjunio" id="realjunio" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="jul" class="element" class="form-group">
								<label for="realjulio">Julio</label>
								<input type="text" class="form-control" name="realjulio" id="realjulio" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="ago" class="element" class="form-group">
								<label for="realagosto">Agosto</label>
								<input type="text" class="form-control" name="realagosto" id="realagosto" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="sep" class="element" class="form-group">
								<label for="realsep">Septiembre</label>
								<input type="text" class="form-control" name="realsep" id="realsep" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="oct" class="element" class="form-group">
								<label for="realoct">Octubre</label>
								<input type="text" class="form-control" name="realoct" id="realoct" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="nov" class="element" class="form-group">
								<label for="realnoviembre">Noviembre</label>
								<input type="text" class="form-control" name="realnoviembre" id="realnoviembre" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<div id="dic" class="element" class="form-group">
								<label for="realdic">Diciembre</label>
								<input type="text" class="form-control" name="realdic" id="realdic" aria-describedby="re" placeholder="ingrese real en MM$">
								<small id="re" class="form-text text-muted">(Ejemplo de 1000,0000)</small>
								
								</div>
								<button type="submit" class="btn btn-danger" >guardar</button>
							

							 

								</div>
									

							</form>
							
							 

							

						</div>
					</div>