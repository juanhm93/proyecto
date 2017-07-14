<?php


/**
* 
*/
class Cemproyecto extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('memproyecto');

	}

	public function index(){

		  $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['empro'] = $this->memproyecto->getproyec();
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view("emx/vemproyectos", $result);
        //$this->load->view('cuerpo/contenido');
        $this->load->view('cuerpo/footer');
    

	}
}