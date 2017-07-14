<?php

class Csiglasgere extends CI_Controller
{
	
	function __construct()
	{	
		parent::__construct();
		 $this->load->model('fecha');
		 $this->load->model('mconsumarinf/mconsumarinf');
	}

	public function index(){

		$this->load->view('cuerpo/head');
		$this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['siglas'] = $this->mconsumarinf->siglas();
        $result['tipodiv'] = $this->mconsumarinf->tipodiv();
        $this->load->view('vconsumarinf/vsiglasgere',$result);
        $this->load->view('cuerpo/footer');	
	}



}