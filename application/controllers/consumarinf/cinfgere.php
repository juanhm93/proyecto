<?php

/**
* 
*/
class Cinfgere extends CI_Controller
{
	
	function __construct()
	{	
		parent::__construct();
		 $this->load->model('fecha');
		 $this->load->model('mconsumarinf/mconsumarinf');
	}

	public function index(){

		$this->load->view('cuerpo/vhtablahab');
		$this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['gerencia'] = $this->mconsumarinf->gerencia();
        $result['tipodiv'] = $this->mconsumarinf->tipodiv();
        $this->load->view('vconsumarinf/vinfgere',$result);
        $this->load->view('cuerpo/footer');	
	}



}