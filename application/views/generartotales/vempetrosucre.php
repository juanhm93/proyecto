<div class="Contenedor-Editable" id="Region-Editable">
 
 	<span class="Titulo-Aplicacion">EMPRESAS MIXTAS</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Ver resumen</span>
	
		 <div class="form-group select_container">
										<div for="anhops" class="select_title">Año</div>		
										<select class="select-select" id="anhops" name="anhops"  >
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
  							<button class="tablinks" onclick="openCity(event,'anthab')">Anteproyecto</button>
							</div>

				<div id="resumen" class="tabcontent">
						
						<div class="radio">
  									<input type="radio"  name="res" id="res" value="resumen1">
									<label for="res">Mostrar Resumen</label>
	  						</div>

	  				

	<!--	<table id="resumentotal" class="display nowrap" cellspacing="0" width="100%">
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
		</table>-->


					</div>

					<div id="planhab" class="tabcontent">

						<div class="radio">
  									<input type="radio"  name="mostrarp" id="planbs" value="pemps1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="pemps2" >
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="pemps3">
									<label for="plande">Plan MM$ EQV</label>	
	  						</div>

	  						<table id="r2" class="display nowrap" cellspacing="0" width="100%">
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

					<div id="realhab" class="tabcontent">
	  					<div class="radio">
	  					 	<input type="radio"  name="mostrarp" id="realbs" value="remps1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="remps2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="remps3">
									<label for="realde">Real MM$ EQV</label>

							<table id="r3" class="display nowrap" cellspacing="0" width="100%">
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

	  				</div>
					<div id="mvhab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="mvbs" value="mvemps1">
									<label for="mvbs">Mejor Vision MMBsF</label>
									<input type="radio"  name="mostrarp" id="mvd" value="mvemps2">
									<label for="mvd">Mejor Vision MM$</label>
									<input type="radio"  name="mostrarp" id="mvde" value="mvemps3">
									<label for="mvde">Mejor Vision MM$ EQV</label>
							</div>
							<table id="mejorv2" class="display nowrap" cellspacing="0" width="100%">
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
					<div id="anthab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="antbs" value="antemps1">
									<label for="antbs">anteproyecto MMBsF</label>
									<input type="radio"  name="mostrarp" id="antd" value="antemps2">
									<label for="antd">anteproyecto MM$</label>
									<input type="radio"  name="mostrarp" id="antde" value="antemps3">
									<label for="antde">anteproyecto MM$ EQV</label>
							</div>
							<table id="mejorv3" class="display nowrap" cellspacing="0" width="100%">
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




 			
		</div>				 				
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		
	<div id="resumenps" style="overflow-y: auto; height: 500px;" class='Tabla-Aplicacion'>
									
	</div>	


	 
