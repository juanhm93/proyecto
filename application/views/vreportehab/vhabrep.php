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

		function arrayejec($total,$total2){
 
			$enerotl=0;$febrerotl=0;  $marzotl=0;  $abriltl=0;  $mayotl=0;  $juniotl=0;  $juliotl =0; $agostotl=0;  $septiembretl=0;  $octubretl =0;  $noviembretl=0;  $diciembretl =0; 

			for ($i=0; $i < 12 ; $i++) { 

				if($i==0){
					$enerotl += $total[$i] + $total2[$i];	
				}
				if($i==1){
					$febrerotl += $total[$i] + $total2[$i];	
				}
				if($i==2){
					$marzotl += $total[$i] + $total2[$i];	
				}
				if($i==3){
					$abriltl += $total[$i] + $total2[$i];	
				}
				if($i==4){
					$mayotl += $total[$i] + $total2[$i];	
				}
				if($i==5){
					$juniotl += $total[$i] + $total2[$i];	
				}
				if($i==6){
					$juliotl += $total[$i] + $total2[$i];	
				}
				if($i==7){
					$agostotl += $total[$i] + $total2[$i];	
				}
				if($i==8){
					$septiembretl += $total[$i] + $total2[$i];	
				}
				if($i==9){
					$octubretl += $total[$i] + $total2[$i];	
				}
				if($i==10){
					$noviembretl += $total[$i] + $total2[$i];	
				}
				if($i==11){
					$diciembretl += $total[$i] + $total2[$i];	
				}
			 } 

			return array($enerotl,$febrerotl,$marzotl,$abriltl,$mayotl,$juniotl,$juliotl,$agostotl,$septiembretl,$octubretl,$noviembretl,$diciembretl);
		}

		function direccionejecutivaca($total,$total2,$total3){
 
			$enerotl=0;$febrerotl=0;  $marzotl=0;  $abriltl=0;  $mayotl=0;  $juniotl=0;  $juliotl =0; $agostotl=0;  $septiembretl=0;  $octubretl =0;  $noviembretl=0;  $diciembretl =0; 

			for ($i=0; $i < 12 ; $i++) { 

				if($i==0){
					$enerotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==1){
					$febrerotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==2){
					$marzotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==3){
					$abriltl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==4){
					$mayotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==5){
					$juniotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==6){
					$juliotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==7){
					$agostotl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==8){
					$septiembretl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==9){
					$octubretl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==10){
					$noviembretl += $total[$i] + $total2[$i] + $total3[$i];	
				}
				if($i==11){
					$diciembretl += $total[$i] + $total2[$i] + $total3[$i];	
				}
			 } 

			return array($enerotl,$febrerotl,$marzotl,$abriltl,$mayotl,$juniotl,$juliotl,$agostotl,$septiembretl,$octubretl,$noviembretl,$diciembretl);
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

		$tdttolabor = arraytotal("filtrolabor",$dtto);
		$tdttob = arraytotal("filtrobien",$dtto);
		$tdttom = arraytotal("filtromat",$dtto);
		$tdttos = arraytotal("filtroserv",$dtto);
		$tdttoo = arraytotal("filtrotro",$dtto);
	
		$tdivocclabor = arraytotal("filtrolabor",$divocc);
		$tdivoccb = arraytotal("filtrobien",$divocc);
		$tdivoccm = arraytotal("filtromat",$divocc);
		$tdivoccs = arraytotal("filtroserv",$divocc);
		$tdivocco = arraytotal("filtrotro",$divocc);

		$tdivorilabor = arrayejec($totalabor,$tdttolabor);
		$tdivorib = arrayejec($totalb,$tdttob);
		$tdivorim = arrayejec($totalm,$tdttom);
		$tdivoris = arrayejec($totals,$tdttos);
		$tdivorio = arrayejec($totalo,$tdttoo);

		$tdirejeplabor = arraytotal("filtrolabor",$direjep);
		$tdirejepb = arraytotal("filtrobien",$direjep);
		$tdirejepm = arraytotal("filtromat",$direjep);
		$tdirejeps = arraytotal("filtroserv",$direjep);
		$tdirejepo = arraytotal("filtrotro",$direjep);


			$decal = direccionejecutivaca($tdirejeplabor,$tdivorilabor,$tdivocclabor);
			$decab = direccionejecutivaca($tdirejepb,$tdivorib,$tdivoccb);
			$decam = direccionejecutivaca($tdirejepm,$tdivorim,$tdivoccm);
			$decas = direccionejecutivaca($tdirejeps,$tdivoris,$tdivoccs);
			$decao = direccionejecutivaca($tdirejepo,$tdivorio,$tdivocco);


	/*	$tdivorilabor = arraytotal("filtrolabor",$divori);
		$tdivorib = arraytotal("filtrobien",$divori);
		$tdivorim = arraytotal("filtromat",$divori);
		$tdivoris = arraytotal("filtroserv",$divori);
		$tdivorio = arraytotal("filtrotro",$divori);
		*/

		
		



		 ?>
		<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
		<table id="example" class="display nowrap" cellspacing="0" width="100%">
	
			<thead>
				<tr>	
					<th colspan="13" align="center"> </th>
				</tr>
				<tr > 
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
				<tr>
					<td></td>
					<td class="y-header">DIRECCION EJECUTIVA COSTA AFUERA</td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($decal as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($decab as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($decam as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($decas as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($decao as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIRECCION EJECUTIVA - EP </td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($tdirejeplabor as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($tdirejepb as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($tdirejepm as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($tdirejeps as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($tdirejepo as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIVISION ORIENTAL</td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($tdivorilabor as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($tdivorib as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($tdivorim as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($tdivoris as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($tdivorio as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td class="green-header">DIVISION OCCIDENTAL</td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($tdivocclabor as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($tdivoccb as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($tdivoccm as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($tdivoccs as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($tdivocco as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>

				<tr>
					<td></td>
					<td class="green-header">DTTO ORIENTAL</td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($tdttolabor as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($tdttob as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($tdttom as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($tdttos as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($tdttoo as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td class="green-header">Esfuerzo propio</td>
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
					<td class="red-header">  </td>
					<td class="red-header">DESCRIPCION</td>
					<td class="red-header">ENE</td>
					<td class="red-header">FEB</td>
					<td class="red-header">MAR</td>
					<td class="red-header">ABR</td>
					<td class="red-header">MAY</td>
					<td class="red-header">JUN</td>
					<td class="red-header">JUL</td>
					<td class="red-header">AGO</td>
					<td class="red-header">SEP</td>
					<td class="red-header">OCT</td>
					<td class="red-header">NOV</td>
					<td class="red-header">DIC</td>
				</tr>
				<tr>
					<td></td>
					<td>Labor</td>
				<?php foreach ($totalabor as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
				<td></td>
					<td>Beneficio y Bienestar</td>
					<?php foreach ($totalb as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Materiales</td>
					<?php foreach ($totalm as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Servicios y Contratos</td>
					<?php foreach ($totals as  $value) {
					
					echo "<td>".round($value,2)."</td>";

				}	 ?>
				</tr>
				<tr>
					<td></td>
					<td>Otros</td>
					<?php foreach ($totalo as  $value) {
					
					echo "<td>".round($value,2)."</td>";

					}	 ?>
				</tr>

			</tbody>
		</table>

	</div>
</div>


