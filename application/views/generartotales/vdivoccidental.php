<div class="Contenedor-Editable" id="Region-Editable">
 
 	<span class="Titulo-Aplicacion">DIVISIÓN OCCIDENTAL</span>
					<span class="Separador_Modulo"></span>
					<span class="Sub-Titulo-Aplicacion">Ver resumen</span>
	
		 <div class="form-group select_container">
										<div for="anhodivoccidental" class="select_title">Año</div>		
										<select class="select-select" id="anhodivoccidental" name="anhodivoccidental" >
											<option value="">--seleccionar opcion--</option>		
											<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
												<option value="<?= $i;?>"><?= $i;?></option>		
											<?php } ?> 	
										</select>
							</div>
		<div id="result"></div>		 			 				
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		
	<div id="occidentaltabla" style="overflow-y: auto; height: 500px;background:#C1C0B2;"  class='Tabla-Aplicacion'>
		<!-- cabecera de Arriba -->

	<div class="Tabla-Fondo"> 
		<div class="Tabla-Elemento-Encabezado" style="width:200px;background:red;"> TOTAL DIRECCION EJECUTIVA COSTA AFUERA</div>
		<div class="Tabla-Elemento-Encabezado" style="width:1211px;background:red;" align="center" ></div>
	</div>	
<!-- cabecera de mostrar las descripciones -->

		<div class="Tabla-Fondo"> 
		<div class="Tabla-Elemento-Encabezado" style="width:200px;background:white;color:blue;">INVERSIONES</div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Moneda </div>
		<!--para bolivares -->
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Aprobado   </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Plan Ene - mes  </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Real Ene - mes  </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Real vs Plan </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Var. Real vs Plan % </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;"> Mejor Visión </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;"> MV vs Aprob.</div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">var. MV vs Aprob. %</div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Presupuesto 2018 </div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Ppto 2018 vs Aprob</div>
		<div class="Tabla-Elemento-Encabezado" style=" background:red;">Var Ppto 2018 vs Aprob  %</div>

	</div>
	 


					<div class="Tabla-Fondo">
					<div class="Tabla-Elemento-Encabezado" style="width:200px; background:#FDF774;color:blue;" >ESFUERZOS PROPIOS</div>
					<div class="Tabla-Elemento" style=" background:#FDF774;color:blue;" >MMbs Puros</div>
					<div class="Tabla-Elemento" style="background:#FDF774;" ></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					</div>	
					<div class="Tabla-Fondo">
					<div class="Tabla-Elemento-Encabezado" style="width:200px; background:#FDF774;color:blue;" ></div>
					<div class="Tabla-Elemento" style=" background:#FDF774;color:blue;" >MM$ Puros</div>
					<div class="Tabla-Elemento" style="background:#FDF774;" ></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					</div>	
					<div class="Tabla-Fondo">
					<div class="Tabla-Elemento-Encabezado" style="width:200px; background:#FDF774;color:blue;" ></div>
					<div class="Tabla-Elemento" style=" background:#FDF774;color:blue;" >MM$ Equiv</div>
					<div class="Tabla-Elemento" style="background:#FDF774;" ></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					</div>	

 	<?php for ($i=0; $i < 3; $i++) { 
 	?>
 		<div class="Tabla-Fondo">
					<div class="Tabla-Elemento" style="width:200px; background:white;" ></div>
					<div class="Tabla-Elemento" style="background:white;" ></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					</div>	
	<?php } ?>

	<div class="Tabla-Fondo">
					<div class="Tabla-Elemento" style="width:200px; background:#FDF774;color:blue;" >EMPRESAS MIXTAS</div>
					<div class="Tabla-Elemento" style="background:#FDF774;" ></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					<div class="Tabla-Elemento" style="background:#FDF774;"></div>
					</div>	

	<?php for ($i=0; $i < 5; $i++) { 
 	?>
 		<div class="Tabla-Fondo">
					<div class="Tabla-Elemento" style="width:200px; background:white; color:blue" ></div>
					<div class="Tabla-Elemento" style="background:white;" ></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					<div class="Tabla-Elemento" style="background:white;"></div>
					</div>	
	<?php } ?>

	<div class="Tabla-Fondo">
					<div class="Tabla-Elemento" style="width:200px; background:yellow;color:blue;" >TOTAL INVERSIONES</div>
					<div class="Tabla-Elemento" style="background:yellow;" ></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					<div class="Tabla-Elemento" style="background:yellow;"></div>
					</div>	

<div class="Tabla-Fondo">
					<div class="Tabla-Elemento" style="width:200px;" ></div>
					<div class="Tabla-Elemento"  ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					<div class="Tabla-Elemento" ></div>
					</div>	


 
 

									
	</div>	


	 
