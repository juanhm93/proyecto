<div class="Contenedor-Editable" id="Region-Editable">
						
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>Habilitadoras Operaciones</h4>
								<div class="form-group select_container" >
											<div for="anhopera" class="select_title">año</div>		
											<select class="select-select" id="anhopera" name="anhopera"  >
												<option value="">seleccionar opcion</option>		
										<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
													<option value="<?= $i;?>"><?= $i;?></option>		
												<?php } ?> 	
											</select>
								</div>	
							 <div class="form-rango" >

							

							 <div class="tab">
  							<button class="tablinks" onclick="openCity(event, 'planhab')">Plan</button>
  							<button class="tablinks" onclick="openCity(event, 'realhab')">Real</button>
  							<button class="tablinks" onclick="openCity(event, 'mvhab')">Mejor Vision</button>
							</div>

					<div id="planhab" class="tabcontent">

					 
						<div class="radio">
  									<input type="radio"  name="mostrarp" id="planbs" value="po1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="po2" >
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="po3">
									<label for="plande">Plan MM$ EQV</label>	
	  						</div>
	  			
					</div>

					<div id="realhab" class="tabcontent">
	  					<div class="radio">
	  					 	<input type="radio"  name="mostrarp" id="realbs" value="ro1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="ro2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="ro3">
									<label for="realde">Real MM$ EQV</label>

	  					 </div>

	  				</div>
					<div id="mvhab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="mvbs" value="mvo1">
									<label for="mvbs">Mejor Vision MMBsF</label>
									<input type="radio"  name="mostrarp" id="mvd" value="mvo2">
									<label for="mvd">Mejor Vision MM$</label>
									<input type="radio"  name="mostrarp" id="mvde" value="mvo3">
									<label for="mvde">Mejor Vision MM$ EQV</label>
							</div>
					</div> 


 
						</div>
						
						<table id="r3" class="display nowrap" cellspacing="0" width="100%">
								<thead>
									<tr> 
										<th>HAB</th>
										<th>DESCRIPCION</th>
										<th>ENE</th>
										<th>FEB</th>
										<th>MAR</th>
										<th>ABR</th>
										<th>MAY</th>
										<th>JUN</th>
										<th>JUL</th>
										<th>AGO</th>
										<th>SEP</th>
										<th>OCT</th>
										<th>NOV</th>
										<th>DIC</th>
									</tr>
								</thead>
									<tbody>

											
									</tbody>
								</table>					 
							

							
 
					</div>