<?php


class Cpahab extends CI_Controller
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
        $result['tplan'] = $this->memproyecto->gettipoplan();
        $this->load->view('habilitadora/vpahab',$result);
        $this->load->view('cuerpo/footer');	
	}
}