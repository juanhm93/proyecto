<?php

/**
* 
*/
class Cgereproyecto extends CI_controller
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
		$this->load->view('vnewgerepro');
		$this->load->view('cuerpo/footer');	

	}



}