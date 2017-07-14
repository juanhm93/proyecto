<?php

/**
* 
*/
class Cproyecto extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('mgetproyecto');
	}

	public function index(){

		$this->load->view('cuerpo/head');
		$this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['categoria'] = $this->mgetproyecto->getcategoria();
        $result['division'] = $this->mgetproyecto->getdivision();
        $result['dom'] = $this->mgetproyecto->getdom();
        $result['emx'] = $this->mgetproyecto->getemx();
        $result['gereproyecto'] = $this->mgetproyecto->getgereproyecto();
        $this->load->view('vnewproyect',$result);
        $this->load->view('cuerpo/footer');	
	
	}
}