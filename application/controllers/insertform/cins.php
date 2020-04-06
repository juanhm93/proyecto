<?php

/**
* 
*/
class Cins extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		//cargar los modelos que se van a llamar en la funcion
		$this->load->model('elementc');
		$this->load->model('mcargando');
		$this->load->model('get_id');
		$this->load->model('excel_data_insert_model');
		$this->load->model('memproyecto');
		$this->load->model('mupdatemix');
		$this->load->model('mvalidar');	
		$this->load->model('habilitadora/miohab');

	}

	public function inserthab(){

		$ghab =	$this->input->post('habilitadora');
		$siglas = $this->input->post('siglashab');
		$tipo = $this->input->post('checkea');
		$div = $this->input->post('tipodiv');

		$var =0;
		$var1=0;
		$valghab = $this->mvalidar->valgerehab($ghab);
		$valsiglas = $this->mvalidar->valsiglashab($siglas);


		if($tipo[0] == '1'){

			if($valghab->num_rows() > 0){

			 ?><script>
				window.alert('Existe una habilitadora con las siglas ingresadas, no se puede guardar');
				window.location= '<?= base_url()?>complemento/chabil';
			</script>
			<?php


		}else{

			if ($valsiglas->num_rows() > 0) {

					?><script>
					window.alert('Existe una habilitadora con el nombre ingresado, no se puede guardar');
					window.location= '<?= base_url()?>complemento/chabil';
					</script>
					<?php

				
			}else{


				$gerencia = array('siglas' => $siglas,
						'gerehab' => $ghab );


				if($this->mcargando->hab($gerencia)){
						 
				$gereID  = $this->get_id->getmax_number_gere();
				$j = $this->miohab->inv($gereID,1);
				$j = $j+1;
				$valor = "HI";	
				$aux = "$valor-$siglas$j";
						  $hab = array('idgerencia' => $gereID,
					'descriphab' => $aux,
					'idtipo_IO' => 1,
					'tipodivfk' =>   $div);

						if($this->excel_data_insert_model->habilitador($hab)){
							 $var1 = 1;

						} else{

							$var1 = 0;

						}

				}


			}


		}//fin else num rows valgehab




			


		}// fin del tipo[] == 1

		if($tipo[1] == '2'){

			if($valghab->num_rows() > 0){

			 ?><script>
				window.alert('Existe una habilitadora con las siglas ingresadas, no se puede guardar');
				window.location= '<?= base_url()?>complemento/chabil';
			</script>
			<?php


		}else{

			if ($valsiglas->num_rows() > 0) {

					?><script>
					window.alert('Existe una habilitadora con el nombre ingresado, no se puede guardar');
					window.location= '<?= base_url()?>complemento/chabil';
					</script>
					<?php

				
			}else{


				$gerencia = array('siglas' => $siglas,
						'gerehab' => $ghab );


				if($this->mcargando->hab($gerencia)){
						 
				$gereID  = $this->get_id->getmax_number_gere();
				$j = $this->miohab->inv($gereID,2);
				$j = $j+1;
				$valor = "HO";	
				$aux = "$valor-$siglas$j";
						  $hab = array('idgerencia' => $gereID,
					'descriphab' => $aux,
					'idtipo_IO' => 2,
					'tipodivfk' =>   $div);

						if($this->excel_data_insert_model->habilitador($hab)){
							$var = 1;

						} else{

							$var = 0;
						}

				}	

			}// fin else sligas 

		}//fin else num rows valgehab
	}// fin del tipo[] == 2		
 	
 	if($var== 1 || $var1 == 1){
							?><script>
							window.alert('Se ha guardado una habilitadora correctamente');
							window.location= '<?= base_url()?>complemento/chabil';
							</script>
							<?php

		}else{

						?><script>
						window.alert('la habilitadora no puede ser registrada');
						window.location= '<?= base_url()?>complemento/chabil';
						</script>
						<?php	
		}
		
}

	public function insertdiv(){

		$divison = $this->input->post('division');

		$div = array('divisonopc'=> $divison);
		
		if($this->mcargando->division($div)){
			 
			 ?><script>
				window.alert('la division fue guardada correctamente');
				window.location= '<?= base_url()?>home';
			</script>
			<?php

		}else{

			?><script>
				window.alert('la division no puede ser registrada');
				window.location= '<?= base_url()?>complemento/cdivision';
			</script>
			<?php	

		}

			
	}

	public function insertmoneda(){

		$nombremoneda =	$this->input->post('nombmoneda');		
		$siglasM =	$this->input->post('siglasmoneda');	
		
		$moneda = array('moneda' => $nombremoneda,
					'siglasm' => $siglasM);


		if($this->mcargando->moneda($moneda)){
			 
			 ?><script>
				window.alert('Se ha guardado una nueva moneda');
				window.location= '<?= base_url()?>home';
			</script>
			<?php

		}else{

			?><script>
				window.alert('la moneda no puede ser registrada');
				window.location= '<?= base_url()?>complemento/cmoneda';
			</script>
			<?php	

		}


	}

	public function insertelemento(){

		$elemento = $this->input->post('costo');

		$costo = array('elemento'=> $elemento);

		if($thiS->mcargando->elemento($costo)){
			 
			 ?><script>
				window.alert('Se ha guardado un elemento de costo correctamente');
				window.location= '<?= base_url()?>home';
			</script>
			<?php

		}else{

			?><script>
				window.alert('El elemento de costo no puede ser registrada');
				window.location= '<?= base_url()?>complemento/cemelentoc';
			</script>
			<?php	

		}

	}

	public function insertcategoria(){
		
		$numero = $this->input->post('numcategoria');
		$categoria = $this->input->post('categoria');

		$cat = array('numcategoria'=> $numero,
				'descripcion'=>$categoria);

		$valnum = $this->mvalidar->valnumcategoria($numero);

		$valcat = $this->mvalidar->valdescripcion($categoria);

		var_dump($valnum->num_rows());
		var_dump($valcat->num_rows());


		if($valnum->num_rows() > 0){

			 ?><script>
				window.alert('Existe una categoria con ese numero, no se puede guardar');
				window.location= '<?= base_url()?>complemento/ccategoria';
			</script>
			<?php

		}else{

			if($valcat->num_rows() > 0 ){

				 ?><script>
				window.alert('Existe una categoria con esa descripcion, no se puede guardar');
				window.location= '<?= base_url()?>complemento/ccategoria';
				</script>
				<?php


			}else{

					if($this->mcargando->categoria($cat)){
			 
						?><script>
						window.alert('Se ha guardado una categoria correctamente');
						window.location= '<?= base_url()?>complemento/ccategoria';
						</script>
						<?php

					}else{

						?><script>
						window.alert('La categoria no puede ser registrada');
						window.location= '<?= base_url()?>complemento/ccategoria';
						</script>
						<?php	

					}



			}


		}

		



	}

	public function insertgerepro(){

			
		$gereproyecto = array('gp' => $this->input->post('gerepro'));



		$valgerep = $this->mvalidar->valgerepro($gereproyecto);

		if($valgerep->num_rows() > 0){

			 ?><script>
				window.alert('Existe una gerencia de proyecto con esas descripcion');
				window.location= '<?= base_url()?>complemento/cgereproyecto';
			</script>
			<?php


		}else{
					if($this->mcargando->gerepro($gereproyecto)){

						?><script>
						window.alert('Se ha guardado gerencia de proyecto correctamente');
						window.location= '<?= base_url()?>complemento/cgereproyecto';
						</script>
					<?php

					}else{

						?><script>
						window.alert('la gerencia no puede ser registrada');
						window.location= '<?= base_url()?>complemento/cgereproyecto';
						</script>
						<?php	

					}
					//aqui es que se redirecciona para la vista de la preferencia

		}// fin else num rows

		

	}

	public function insertproyecto(){

	$renglon = $this->input->post('renglon');
	$titulo = $this->input->post('titulo');
	$categoria = $this->input->post('categoria');
	$division = $this->input->post('division');
	$emx = $this->input->post('emx');
	$dom = $this->input->post('dom');
	//$tipo = $this->input->post('optionsRadios');
	

	if($dom == 1){

		$proyecto = array('renglon' => $renglon,
					'titulo' => $titulo,
					'idcategoria' => $categoria,
					'iddivision'=> $division,
					'iddom' => $dom,
					'idtipo_IO' => 1);	

		if($this->mcargando->proyecto($proyecto)){
			 
			 ?><script>
				window.alert('Se ha guardado un proyecto correctamente');
				window.location= '<?= base_url()?>complemento/cproyecto';
			</script><?php
	}
	if($dom == 2){
		$proyecto = array('renglon' => $renglon,
					'titulo' => $titulo,
					'idcategoria' => $categoria,
					'iddom' => $dom,
					'idtipo_IO' => 1,
					'idemfk' => $emx);

		if($this->mcargando->proyecto($proyecto)){
			 
			 ?><script>
				window.alert('Se ha guardado un proyecto EM correctamente');
				window.location= '<?= base_url()?>complemento/cproyecto';
			</script><?php


	}

	$proyecto = array('renglon' => $renglon,
					'titulo' => $titulo,
					'idcategoria' => $categoria,
					'iddivision'=> $division,
					'iddist' => $distrito,
					'idtipo_IO' => $tipo);	



		if($this->mcargando->proyecto($proyecto)){
			 
			 ?><script>
				window.alert('Se ha guardado un proyecto correctamente');
				window.location= '<?= base_url()?>home';
			</script>
			<?php

		}else{

			?><script>
				window.alert('la gerencia no puede ser registrada');
				window.location= '<?= base_url()?>complemento/cproyecto';
			</script>
			<?php	

		}

	

	}
	}
	}

	function insertreal(){

	$proyecto = $this->input->post('proyectosem');
		$anho = $this->input->post('anhop');
		$moneda = $this->input->post('moneda');
		$ene = $this->input->post('enero');
		$feb = $this->input->post('febrero');
		$mar = $this->input->post('marzo');
		$abr = $this->input->post('abril');
		$may = $this->input->post('mayo');
		$jun = $this->input->post('junio');
		$jul = $this->input->post('julio');
		$ago = $this->input->post('agosto');
		$sep = $this->input->post('sep');
		$oct = $this->input->post('oct');
		$nov = $this->input->post('nov');
		$dic = $this->input->post('dic');
		
		$real = array('enero_r' => $ene, 
				'febrero_r'=>$feb, 
				'marzo_r'=>$mar, 
				'abril_r'=>$abr, 
				'mayo_r'=>$may, 
				'junio_r'=>$jun, 
				'julio_r'=>$jul, 
				'agosto_r'=>$ago, 
				'septiembre_r'=>$sep,
				'octubre_r'=>$oct,				 
				'noviembre_r'=>$nov, 
				'diciembre_r'=>$dic,
				'idmoneda'=> $moneda,
				'idproyecto'=> $proyecto,
				 'idanho' => $anho);

		if($this->mupdatemix->mixrealproyecto($proyecto,$moneda,$anho)> 0 ){

		
			$this->excel_data_insert_model->realesupdate($proyecto,$real);
			?><script>
				window.alert('Se ha actualizado el real del proyecto correctamente');
				window.location= '<?= base_url()?>em/cemproyecto';
			</script>
			<?php

		}else{

			$this->excel_data_insert_model->reales($real);
			?><script>
				window.alert('Se ha guardado el real del proyecto correctamente');
				window.location= '<?= base_url()?>em/cemproyecto';
			</script>
			<?php


		}// fin else
		
	
	}

	

}


/*	ESTA ES UNA FORMA DE INSERTAR POR RANGO 
	 $meses = $this->input->post(NULL, TRUE);

	 $realproyecto = [];

	$mxxx = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
	$neee = [];

	
	$posi =array_search($meses["mesinicio"],$mxxx);
	$posf =array_search($meses["mesfin"],$mxxx);

	foreach ($mxxx as $key => $value) {

        if($key<=$posf && $key>=$posi){
$neee[$value."_r"]=$this->input->post($value);         }     }


	
	
		  $this->excel_data_insert_model->reales($neee); */



	//var_dump($meses["mesinicio"]);
	//var_dump($meses["mesfin"]);
	// $this->memproyecto->proyectoem($proyecto,$proy);


	/* $realproyecto = array('enero_r' 				=> $enero,
                        'febrero_r'                     => $febrero,
                        'marzo_r'                       => $marzo,
                        'abril_r'                       => $abril,
                        'mayo_r'                        => $mayo,
                        'junio_r'                       => $junio,
                        'julio_r'                       => $julio,
                        'agosto_r'                      => $agosto,
                        'septiembre_r'                  => $sep,
                        'octubre_r'                     => $octubre,
                        'noviembre_r'                   => $nov,
                        'diciembre_r'                   => $dic);




		/*
		$enero = $this->input->post('realenero');	 
		$febrero = $this->input->post('realfebrero'); 
		$marzo = $this->input->post('realmarzo');
		$abril = $this->input->post('realabril');
		$mayo = $this->input->post('realmayo');
		$junio = $this->input->post('realjunio');
		$julio = $this->input->post('realjulio');
		$agosto = $this->input->post('realagosto');
		$sep = $this->input->post('realsep');
		$octubre = $this->input->post('realoct');
		$nov = $this->input->post('realnoviembre');
		$dic =  $this->input->post('realdic');

	

		

	

		   $realID = $this->get_id->getmax_number_real();

		  $proy = array('idreal' => $realID); 

		 
	*/