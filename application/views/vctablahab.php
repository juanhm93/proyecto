<div class="Contenedor-Editable" id="Region-Editable">
						
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							 

							<span class="Titulo-Aplicacion">Habilitadora</span>
						<span class="Separador_Modulo"></span>
						<span class="Sub-Titulo-Aplicacion">Gestion inversion</span>
						<span class="Sub-Titulo-Texto"> Resumen</span>
						<div style="height: 70px;"></div>
								<div class="form-group select_container" >
											<div for="anhogestinv" class="select_title">año</div>		
											<select class="select-select" id="anhogestinv" name="anhogestinv"  >
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
  									<input type="radio"  name="mostrarp" id="planbs" value="ph1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="ph2" >
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="ph3">
									<label for="plande">Plan MM$ EQV</label>	
	  						</div>
	  			
					</div>

					<div id="realhab" class="tabcontent">
	  					<div class="radio">
	  					 	<input type="radio"  name="mostrarp" id="realbs" value="rh1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="rh2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="rh3">
									<label for="realde">Real MM$ EQV</label>

	  					 </div>

	  				</div>
					<div id="mvhab" class="tabcontent">
							<div class="radio">
  									<input type="radio"  name="mostrarp" id="mvbs" value="mvh1">
									<label for="mvbs">Mejor Vision MMBsF</label>
									<input type="radio"  name="mostrarp" id="mvd" value="mvh2">
									<label for="mvd">Mejor Vision MM$</label>
									<input type="radio"  name="mostrarp" id="mvde" value="mvh3">
									<label for="mvde">Mejor Vision MM$ EQV</label>
							</div>
					</div> 


 
						</div>

					<div id="otro" style="overflow-y: auto; height: 500px;"  class='Tabla-Aplicacion'>

						<div class="Tabla-fondo" >
	 					<div class="Tabla-Elemento-Encabezado">var</div>
						<div class="Tabla-Elemento-Encabezado">Total</div>
						<div class="Tabla-Elemento-Encabezado">ENE </div>		
						<div class="Tabla-Elemento-Encabezado"> FEB</div>
						<div class="Tabla-Elemento-Encabezado">MAR </div>
						<div class="Tabla-Elemento-Encabezado">ABR</div>
						<div class="Tabla-Elemento-Encabezado">MAY</div>
						<div class="Tabla-Elemento-Encabezado">JUN</div>
						<div class="Tabla-Elemento-Encabezado"></div>
						<div class="Tabla-Elemento-Encabezado">JUL</div>
						<div class="Tabla-Elemento-Encabezado">AGO</div>
						<div class="Tabla-Elemento-Encabezado">SEP</div>
						<div class="Tabla-Elemento-Encabezado">OCT</div>
						<div class="Tabla-Elemento-Encabezado">NOV</div>
						<div class="Tabla-Elemento-Encabezado">DIC</div>
						</div>
					</div>
							
 
					</div>