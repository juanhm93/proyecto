<?php

/**
* 
*/
class Cdirejep extends CI_Controller
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
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view('vdir/vdirejep',$result);
        $this->load->view('cuerpo/footer');	
	}
}