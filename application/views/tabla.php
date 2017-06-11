<div class="Contenedor-Editable" id="Region-Editable">
						<div class="mos-tab">
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<h4>  proyectos de inversion esfuerzo propios</h4>
							
							<table id="example" style="font-family:courier; font-size: 11px;" class="display nowrap" cellspacing="1" width="100%">

								<thead>
									<tr>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td colspan="2" align="center">Enero</td>
										<td colspan="2" align="center">Febrero</td>
										<td colspan="2" align="center">Marzo</td>
										<td colspan="2" align="center">Abril</td>
										<td colspan="2" align="center">Mayo</td>
										<td colspan="2" align="center">Junio</td>
										<td colspan="2" align="center">Julio</td>
										<td colspan="2" align="center">Agosto</td>
										<td colspan="2" align="center">Septiembre</td>
										<td colspan="2" align="center">Octubre</td>
										<td colspan="2" align="center">Noviembre</td>
										<td colspan="2" align="center">Diciembre</td>
										
										
										
										
										
									</tr>
									<tr>
										<td>Numero</td>
										<td>Categoria</td>
										<td>Renglon</td>
										<td>Titulo</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
										<td>Plan</td>
										<td>Real</td>
									</tr>
								
								</thead>
								<?php
								foreach ($consulta->result() as $fila) {
									?>

									<tbody>
										<tr>
											<td><?= $fila->numcategoria?></td>
											<td><?= $fila->descripcion ?></td>
											<td><?= $fila->renglon ?></td>
											<td><?= $fila->titulo ?></td>
											<td><?= $fila->enero_p ?></td>
											<td><?= $fila->enero_r ?></td>
											<td><?= $fila->febrero_p ?></td>
											<td><?= $fila->febrero_r ?></td>
											<td><?= $fila->marzo_p ?></td>
											<td><?= $fila->marzo_r ?></td>
											<td><?= $fila->abril_p ?></td>
											<td><?= $fila->abril_r ?></td>
											<td><?= $fila->marzo_p ?></td>
											<td><?= $fila->marzo_r ?></td>
											<td><?= $fila->junio_p ?></td>
											<td><?= $fila->junio_r ?></td>
											<td><?= $fila->julio_p ?></td>
											<td><?= $fila->julio_r ?></td>
											<td><?= $fila->agosto_p ?></td>
											<td><?= $fila->agosto_r ?></td>
											<td><?= $fila->septiembre_p ?></td>
											<td><?= $fila->septiembre_r ?></td>
											<td><?= $fila->octubre_p ?></td>
											<td><?= $fila->octubre_r ?></td>
											<td><?= $fila->noviembre_p ?></td>
											<td><?= $fila->noviembre_r ?></td>
											<td><?= $fila->diciembre_p ?></td>
											<td><?= $fila->diciembre_r ?></td>
										</tr>
									</tbody>
									<?php }
									?><!--fin foreach-->
								</table>
							
						</div>
					</div>


