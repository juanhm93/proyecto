<?php

/**
* 
*/
class Cepdivo extends CI_Controller
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
        $result['proyectos'] = $this->mconsumarinf->proyectos();
        $result['dom'] = $this->mconsumarinf->dom();
        $this->load->view('vreportediv/vepdivo',$result);
        $this->load->view('cuerpo/footer');	


	}
}