<div class="Contenedor-Editable" id="Region-Editable">
	<h4>Operaciones Esfuerzo Propio</h4>
 
	
		 <div class="form-group select_container" >
										<div for="anhoperaciones" class="select_title">año</div>		
										<select class="select-select" id="anhoperaciones" name="anhoperaciones"  >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
				 <div class="form-rango" >
		 			<div class="tab">
  							<button class="tablinks" onclick="openCity(event,'planhab')">Plan</button>
  							<button class="tablinks" onclick="openCity(event,'realhab')">Real</button>
  							<button class="tablinks" onclick="openCity(event,'mvhab')">Mejor Vision</button>
							</div>

					<div id="planhab" class="tabcontent">

					 
						<div class="radio">
  									<input type="radio"  name="mostrarp" id="planbs" value="pop1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="pop2" >
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="pop3">
									<label for="plande">Plan MM$ EQV</label>	
	  						</div>
	  			
					</div>

					<div id="realhab" class="tabcontent">
	  					<div class="radio">
	  					 	<input type="radio"  name="mostrarp" id="realbs" value="rop1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="rop2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="rop3">
									<label for="realde">Real MM$ EQV</label>

	  					 </div>

	  				</div>
					<div id="mvhab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="mvbs" value="mvop1">
									<label for="mvbs">Mejor Vision MMBsF</label>
									<input type="radio"  name="mostrarp" id="mvd" value="mvop2">
									<label for="mvd">Mejor Vision MM$</label>
									<input type="radio"  name="mostrarp" id="mvde" value="mvop3">
									<label for="mvde">Mejor Vision MM$ EQV</label>
							</div>
					</div> 


 			
		</div>				 				
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		<table id="p1" class="display nowrap" cellspacing="0" width="100%">
			<thead>
				<tr> 
					<th>REAL</th>
					<th>Elemento</th>
					<th>Enero</th>
					<th>Febrero</th>
					<th>Marzo</th>
					<th>abril</th>
					<th>Mayo</th>
					<th>Junio</th>
					<th>Julio</th>
					<th>Agosto</th>
					<th>Septiembre</th>
					<th>Octubre</th>
					<th>Noviembre</th>
					<th>Diciembre</th>
				</tr>
			</thead>
			<tbody>
				

			</tbody>
		</table>



