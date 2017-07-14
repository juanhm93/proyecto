<div class="Contenedor-Editable" id="Region-Editable">
						<h4>  proyectos de inversion esfuerzo propios</h4>
						 
							<!-- TODO: Validar rango de meses ascendente (No: Junio-Febrero, Si: Febrero-Junio) -->
							<table id="example" class="display nowrap" cellspacing="0" width="100%">

								<thead>
									<tr>
										
										<th></th>
										<th></th>
										<th></th>
										<th colspan="2" align="center">Enero</th>
										<th colspan="2" align="center">Febrero</th>
										<th colspan="2" align="center">Marzo</th>
										<th colspan="2" align="center">Abril</th>
										<th colspan="2" align="center">Mayo</th>
										<th colspan="2" align="center">Junio</th>
										<th colspan="2" align="center">Julio</th>
										<th colspan="2" align="center">Agosto</th>
										<th colspan="2" align="center">Septiembre</th>
										<th colspan="2" align="center">Octubre</th>
										<th colspan="2" align="center">Noviembre</th>
										<th colspan="2" align="center">Diciembre</th>
									</tr>
									<tr>
										<th >Categoria</th>
										<th >Renglon</th>
										<th >Titulo</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
										<th >Plan</th>
										<th >Real</th>
									</tr>
								</thead>
									<tbody>
								<?php

								foreach ($consulta->result() as $fila) {
									?>
										<tr>
											<td><?= $fila->numcategoria." ".$fila->descripcion ?></td>
											<td><?= $fila->renglon ?></td>
											<td class="titulotd"><?= $fila->titulo ?></td>
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
									
									
									<?php }
									?><!--fin foreach-->
									</tbody>
								</table>
							
					 
					</div>


