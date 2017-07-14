<div class="Contenedor-Editable" id="Region-Editable">
	<h4>  reporte habilitadora</h4>
	<div  style="overflow: auto">
	
	<?php

		function filtrolabor($var){

			return $var['idelecfk']==1;
		}

		function filtrobien($var){

			return $var['idelecfk']==2;
		}

		function filtromat($var){

			return $var['idelecfk']==3;
		}
		function filtroserv($var){

			return $var['idelecfk']==4;
		}
		function filtrotro($var){

			return $var['idelecfk']==5;
		}

		function arraytotal($filtro,$ep){
 
			$enerotl=0;
			$febrerotl=0;  
			$marzotl=0;  
			$abriltl=0;  
			$mayotl=0;  
			$juniotl=0;  
			$juliotl =0; 
			$agostotl=0;  
			$septiembretl=0;  
			$octubretl =0;  
			$noviembretl=0;  
			$diciembretl =0;  

			foreach (array_filter($ep,$filtro) as $value) {
				$enerotl += $value['enero_r'];
				$febrerotl += $value['febrero_r'];
				$marzotl += $value['marzo_r'];
				$abriltl += $value['abril_r'];
				$mayotl += $value['mayo_r'];
				$juniotl += $value['junio_r'];
				$juliotl += $value['julio_r'];
				$agostotl+= $value['agosto_r'];
				$septiembretl += $value['septiembre_r'];
				$octubretl += $value['octubre_r'];
				$noviembretl += $value['noviembre_r'];
				$diciembretl += $value['diciembre_r'];

			}

			return array($enerotl,$febrerotl,$marzotl,$abriltl,$mayotl,$juniotl,$juliotl,$agostotl,$septiembretl,$octubretl,$noviembretl,$diciembretl);


		}//fin de function

		$totalabor = arraytotal("filtrolabor",$ep);
		$totalb = arraytotal("filtrobien",$ep);
		$totalm = arraytotal("filtromat",$ep);
		$totals = arraytotal("filtroserv",$ep);
		$totalo = arraytotal("filtrotro",$ep);

		 ?>
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		<table id="example" class="display nowrap" cellspacing="0" width="100%">
	
			<thead>
				<tr>	
					<th colspan="13" align="center">real</th>
				</tr>
				<tr > 
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
				<tr>
					<td>Esfuerzo propio</td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>
					<td></td>	
				</tr>
				<tr>
					<td>Labor</td>
				<?php foreach ($totalabor as  $value) {
					
					echo "<td>".$value."</td>";

				}	 ?>
				</tr>
				<tr>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($totalb as  $value) {
					
					echo "<td>".$value."</td>";

					}	 ?>
				</tr>
				<tr>
					<td>Materiales</td>
					<?php foreach ($totalm as  $value) {
					
					echo "<td>".$value."</td>";

				}	 ?>
				</tr>
				<tr>
					<td>Servicios y Contratos</td>
					<?php foreach ($totals as  $value) {
					
					echo "<td>".$value."</td>";

				}	 ?>
				</tr>
				<tr>
					<td>Otros</td>
					<?php foreach ($totalo as  $value) {
					
					echo "<td>".$value."</td>";

					}	 ?>
				</tr>

			</tbody>
		</table>

	</div>
</div>


