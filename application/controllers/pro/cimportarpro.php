<?php


/**
* 
*/
class Cimportarpro extends CI_Controller
{
	
	function __construct()
	{
		 parent::__construct();
		 $this->load->model('fecha');
		 

	}

	public function index(){
		 $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');	
        $this->load->view('pro/vimportpro');
        $this->load->view('cuerpo/footer');	
	}


}