<?php

/**
* 
*/
class Chabopm extends CI_Controller
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
        $result['hab'] = $this->memproyecto->gethab();
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view('habilitadora/vhabopm',$result);
        $this->load->view('cuerpo/footer');	
	}
}