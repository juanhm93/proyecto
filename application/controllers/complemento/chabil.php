<?php


/**
* 
*/
class Chabil extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		//$this->load->model('mtablahab');
		$this->load->model('fecha');
		$this->load->model('habilitadora/miohab');

	}
	public function index(){

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['div'] = $this->miohab->gettipodiv();
        $this->load->view('vnewhab',$result);
        $this->load->view('cuerpo/footer');	
	}

	public function inserthab(){

		$ghab =	$this->input->post('habilitadora');
		$siglas = $this->input->post('siglashab');
		$tipo = $this->input->post('chekea');

		
		$gerencia = array('siglas' => $siglas,
						'gerehab' => $ghab, 
						'idtipo'=> $tipo);


		if($this->mcargando->hab($gerencia)){
						 

		 	$gere =  $this->get_id->getmax_number_gere();

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

}