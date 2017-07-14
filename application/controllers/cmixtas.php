<?php

/**
* 
*/
class Cmixtas extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('memproyecto');
	}

	public function index(){

		$this->load->model('mtablahab');
        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav'); 
        $result['em'] = $this->memproyecto->mixtas();
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view("vcarmixtas",$result);
        $this->load->view('cuerpo/footer');	
 
	}
}