<div class="Contenedor-Editable" id="Region-Editable">
						
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>Proyectos EP</h4>
								<div class="form-group select_container" >
											<div for="anhopro" class="select_title">año</div>		
											<select class="select-select" id="anhopro" name="anhopro"  >
												<option value="">seleccionar opcion</option>		
										<?php for($i=date("Y"); $i >= 2010; $i--){ ?>
													<option value="<?= $i;?>"><?= $i;?></option>		
												<?php } ?> 	
											</select>
								</div>	

							 <div class="form-rango" >
						
							<div class="radio">
									
  									<input type="radio"  name="mostrarp" id="planbs" value="p1">
									<label for="planbs">Plan MMBsF</label>

									<input type="radio"  name="mostrarp" id="pland" value="p2">
									<label for="pland">Plan MM$</label>

									<input type="radio"  name="mostrarp" id="plande" value="p3">
									<label for="plande">Plan MM$ EQV</label>							
							 		
									<input type="radio"  name="mostrarp" id="realbs" value="r1">
									<label for="realbs">Real MMBsF</label>

									<input type="radio"  name="mostrarp" id="reald" value="r2">
									<label for="reald">Real MM$</label>

									<input type="radio"  name="mostrarp" id="realde" value="r3">
									<label for="realde">Real MM$ EQV</label>

									<input type="radio"  name="mostrarp" id="mvbs" value="mv1">
									<label for="mvbs">MV MMBsF</label>

									<input type="radio"  name="mostrarp" id="mvd" value="mv2">
									<label for="mvd">MV MM$</label>

									<input type="radio"  name="mostrarp" id="mvde" value="mv3">
									<label for="mvde">MV MM$ EQV</label>
							 	</div>	 
							
 
				</div>
					<table id="mejorv3" class="display nowrap" cellspacing="0" width="100%">
								<thead>
									<tr> 
										<th>CATEGORIA</th>
										<th>RENGLON</th>
										<th>TITULO</th>
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
								<tfoot>
									<tr> 
										<th>CATEGORIA</th>
										<th>RENGLON</th>
										<th>TITULO</th>
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
								</tfoot>	
								<tbody>
									<tr> 
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
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
					</table>			