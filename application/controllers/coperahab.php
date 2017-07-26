<?php



/**
* 
*/
class Coperahab extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
        $this->load->model('Consulta');
        $this->load->model('fecha');
        $this->load->model('mtablahab');
        $this->load-> model('memproyecto');
        $this->load->model('mupdatemix');
	}
	 public function index()
    {
        

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $this->load->view("habilitadora/voperacioneshab");
        $this->load->view('cuerpo/footer');	
 
    }

    
}