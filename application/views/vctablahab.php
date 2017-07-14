<div class="Contenedor-Editable" id="Region-Editable">
						
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>Habilitadoras Gestion Inversion esfuerzo propios</h4>
								<div class="form-group select_container" >
											<div for="anhogestinv" class="select_title">año</div>		
											<select class="select-select" id="anhogestinv" name="anhogestinv"  >
												<option value="">seleccionar opcion</option>		
										<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
													<option value="<?= $i;?>"><?= $i;?></option>		
												<?php } ?> 	
											</select>
								</div>	
							 <div class="form-proyecto" >

							

							 <div class="tab">
  							<button class="tablinks" onclick="openCity(event, 'plan')">Plan</button>
  							<button class="tablinks" onclick="openCity(event, 'real')">Real</button>
  							<button class="tablinks" onclick="openCity(event, 'mv')">Mejor Vision</button>
							</div>

					<div id="plan" class="tabcontent">

						<div class="tab">
  							<button class="tablinks" onclick="openCity(event, 'plan1')">Plan MMBsF</button>
  							<button class="tablinks" onclick="openCity(event, 'plan2')">plan MM$</button>
  							<button class="tablinks" onclick="openCity(event, 'plan3')">Plan MM$ Equiv</button>
							</div>
	  				
	  				
	  			
					</div>

					<div id="real" class="tabcontent">
	  					<div class="tab">
  							<button class="tablinks" onclick="openCity(event, 'real1')">Real MMBsF</button>
  							<button class="tablinks" onclick="openCity(event, 'real2')">Real MM$</button>
  							<button class="tablinks" onclick="openCity(event, 'real3')">Real MM$ Equiv</button>
							</div>

	  				</div>
					<div id="mv" class="tabcontent">
							<div class="tab">
  							<button class="tablinks" onclick="openCity(event, 'MV1')">MV MMBsF</button>
  							<button class="tablinks" onclick="openCity(event, 'MV2')">MV MM$</button>
  							<button class="tablinks" onclick="openCity(event, 'MV3')">MV MM$ Equiv</button>
							</div>
					</div> 

					<div id="real1" class="tabcontent">
	  				 	<h3 align="center">Real MMBsF</h3>
	  					 
						 
							<table id="example" class="display nowrap" cellspacing="0" width="100%">

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
									<tbody id="habilita">
											
									</tbody>
								</table>	

				 
						
					</div> 

					<div id="real2" class="tabcontent">
	  				 	<h3>Real MM$</h3>
	  					 
						 
							<table id="r2" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habdolares">
											
									</tbody>
								</table>					 
					</div> 

					<div id="real3" class="tabcontent">
	  				 	<h3>Real MM$ Equiv</h3>
	  					 
						 
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
									<tbody id="habdolaresequiv">
											
									</tbody>
								</table>					 
					</div> 



					<div id="plan1" class="tabcontent">
	  				 	<h3>Plan MMBsF</h3>
	  					 
						 
							<table id="p1" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habplanbs">
											
									</tbody>
								</table>					 
					</div> 

					<div id="plan2" class="tabcontent">
	  				 	<h3>Plan MM$</h3>
	  					 
						 
							<table id="p2" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habplandol">
											
									</tbody>
								</table>					 
					</div> 

					<div id="plan3" class="tabcontent">
	  				 	<h3>Plan MM$ Equiv	</h3>
	  					 
						 
							<table id="p3" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habplandole">
											
									</tbody>
								</table>					 
					</div> 



					<div id="MV1" class="tabcontent">
	  				
						<h3>Mejor vision MMBsF </h3>
	  					 
						 
							<table id="mejorv1" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habmvb">
											
									</tbody>
								</table>					 



					</div> 

					<div id="MV2" class="tabcontent">
	  				
	  				<h3>Mejor vision MM$ </h3>
	  					 
						 
							<table id="mejorv2" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habmvd">
											
									</tbody>
								</table>					 
					</div> 
					<div id="MV3" class="tabcontent">
	  				
	  				<h3>Mejor vision MM$ </h3>
	  					 
						 
							<table id="mejorv3" class="display nowrap" cellspacing="0" width="100%">
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
									<tbody id="habmvde">
											
									</tbody>
								</table>					 
					</div> 

				

 
						</div>
							

							
 
					</div>