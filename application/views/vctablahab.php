<div class="Contenedor-Editable" id="Region-Editable">
						<div class="mos-tab">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>habilitadoras inversion esfuerzo propios</h4>
							
							<table id="example" style="font-family:courier; font-size: 11px;" class="display nowrap" cellspacing="1" width="100%">

								<thead>
								<tr>
									<tr>
										<td></td>
										<td colspan="12" align="center">real</td>
									</tr>
									<tr> 
										<td></td>
										<td></td>
										<td>Enero</td>
										<td>Febrero</td>
										<td>Marzo</td>
										<td>abril</td>
										<td>Mayo</td>
										<td>Junio</td>
										<td>Julio</td>
										<td>Agosto</td>
										<td>Septiembre</td>
										<td>Octubre</td>
										<td>Noviembre</td>
										<td>Diciembre</td>
									</tr>
									
								</thead>
								<?php
									foreach ($habilitadora->result() as $fila) {
								?>
									<tbody>
										<tr>
											<td><?= $fila->gerehab?></td>
											<td><?= $fila->elemento?></td>
											<td><?= $fila->enero_r ?></td>
											<td><?= $fila->febrero_r ?></td>
											<td><?= $fila->marzo_r ?></td>
											<td><?= $fila->abril_r ?></td>
											<td><?= $fila->mayo_r ?></td>
											<td><?= $fila->junio_r ?></td>
											<td><?= $fila->julio_r ?></td>
											<td><?= $fila->agosto_r ?></td>
											<td><?= $fila->septiembre_r ?></td>
											<td><?= $fila->octubre_r ?></td>
											<td><?= $fila->noviembre_r ?></td>
											<td><?= $fila->diciembre_r ?></td>
										</tr>
									</tbody>
									<?php }
									?><!--fin foreach-->
								</table>

							

							

						</div>
					</div>