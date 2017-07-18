<?php

/**
* 
*/
class Creportehabinv extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('mreportehab/mhabrep');
	}

	public function index(){


        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['ep'] = $this->mhabrep->inv();
        $result['dtto'] = $this->mhabrep->dttoriental();
        $result['divocc'] = $this->mhabrep->divoccidental();
        $result['divori'] = $this->mhabrep->divoriental();
        $result['direjep'] =	$this->mhabrep->direcejecutivaep();	
        $this->load->view('vreportehab/vhabrep',$result);
        $this->load->view('cuerpo/footer');	
	}
}