<div class="Contenedor-Editable" id="Region-Editable">
	<h4>Esfuerzo Propio Division Oriental</h4>
 
	
		 <div class="form-group select_container">
										<div for="anhoepdivoriental" class="select_title">año</div>		
										<select class="select-select" id="anhoepdivoriental" name="anhoepdivoriental"  >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
				 <div class="form-rango">
		 			<div class="tab">

		 					<button class="tablinks" onclick="openCity(event,'resumen')">Resumen</button>
  							<button class="tablinks" onclick="openCity(event,'planhab')">Plan</button>
  							<button class="tablinks" onclick="openCity(event,'realhab')">Real</button>
  							<button class="tablinks" onclick="openCity(event,'mvhab')">Mejor Vision</button>
							</div>

					<div id="resumen" class="tabcontent">
						
						<div class="radio">
  									<input type="radio"  name="mostrarp" id="planbs" value="resumen">
									<label for="planbs">Mostrar Resumen</label>
	  						</div>

		<table id="resumentotal" class="display nowrap" cellspacing="0" width="100%">
			<thead>
			<tr> 
				<th>Real 2014 $ EQUIV</th>
				<th>Real 2015 $ EQUIV</th>
				<th> CATEGORIA </th>
				<th>Aprobado 2016 MM$ Equiv</th>
				<th>Plan Ene - ene MMBs Puros</th>
				<th>Plan Ene - ene MM$ Puros </th>
				<th>Plan Ene - ene MM$ Equiv </th>
				<th>Real Ene - ene MMBs Puros</th>
				<th>Real Ene - ene MM$ Puros </th>
				<th>Real Ene - ene MM$ Equiv </th>
				<th>Var. Real vs Plan</th>
				<th> Mejor Visión 2016  MMBs Puros</th> 
				<th> Mejor Visión 2016 MM Divisas</th> 
				<th> Mejor Visión 2016 MM$ Equiv</th>
				<th> Var. MV vs Aprob. 2016 $ Equiv 
				<th>Presupuesto 2017 MMBs Puros</th>
				<th>Presupuesto 2017 MM Divisas </th>
				<th>Presupuesto 2017 MM$  Equiv  </th>
				<th>Var Ppto 2017 vs Aprob 2016 $ $Equiv</th>
				</tr>
			</thead>
			<tbody>
				

			</tbody>
		</table>


					</div>

					<div id="planhab" class="tabcontent">

					 
						<div class="radio">
  									<input type="radio"  name="mostrarp" id="planbs" value="pepdivori1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="pepdivori2" >
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="pepdivori3">
									<label for="plande">Plan MM$ EQV</label>	
	  						</div>
	  			
					</div>

					<div id="realhab" class="tabcontent">
	  					<div class="radio">
	  					 	<input type="radio"  name="mostrarp" id="realbs" value="repdivori1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="repdivori2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="repdivori3">
									<label for="realde">Real MM$ EQV</label>

	  					 </div>

	  				</div>
					<div id="mvhab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="mvbs" value="mvepdivori1">
									<label for="mvbs">Mejor Vision MMBsF</label>
									<input type="radio"  name="mostrarp" id="mvd" value="mvepdivori2">
									<label for="mvd">Mejor Vision MM$</label>
									<input type="radio"  name="mostrarp" id="mvde" value="mvepdivori3">
									<label for="mvde">Mejor Vision MM$ EQV</label>
							</div>
					</div> 


 			
		</div>				 				
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		



	<div id="planrealmejorv">
			
		<table id="divoriental" class="display nowrap" cellspacing="0" width="100%">
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

	</div>
		
