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

	}

	public function inserthab(){

		$ghab =	$this->input->post('habilitadora');
		$siglas = $this->input->post('siglashab');

		$gerencia = array('siglas' => $siglas,
						'gerehab' => $ghab );

		if($this->mcargando->hab($gerencia)){
			 
			 ?><script>
				window.alert('Se ha guardado una habilitadora correctamente');
				window.location= '<?= base_url()?>home';
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

		if($this->mcargando->categoria($cat)){
			 
			 ?><script>
				window.alert('Se ha guardado una categoria correctamente');
				window.location= '<?= base_url()?>home';
			</script>
			<?php

		}else{

			?><script>
				window.alert('La categoria no puede ser registrada');
				window.location= '<?= base_url()?>complemento/categoria';
			</script>
			<?php	

		}



	}

	public function insertgerepro(){

			
		$gereproyecto = array('gp' => $this->input->post('gerepro'));

		if($this->mcargando->gerepro($gereproyecto)){
			 
			 ?><script>
				window.alert('Se ha guardado gerencia de proyecto correctamente');
				window.location= '<?= base_url()?>home';
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

	}

	public function insertproyecto(){

	$renglon = $this->input->post('renglon');
	$titulo = $this->input->post('titulo');
	$categoria = $this->input->post('categoria');

	$division = $this->input->post('division');
	$distrito = $this->input->post('distrito');
	$tipo = $this->input->post('optionsRadios');
	

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

	function insertreal(){

		$proyecto = $this->input->post('proyectosem');
		$anho = $this->input->post('anho');
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

	

		$realproyecto = array('enero_r' 				=> $enero,
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


		  $this->excel_data_insert_model->reales($realproyecto); 


		   $realID = $this->get_id->getmax_number_real();

		  $proy = array('idreal' => $realID); 

		  $this->memproyecto->proyectoem($proyecto,$proy);

	}

	

}