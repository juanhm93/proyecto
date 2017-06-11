<?php
/**
 *
 */
class Tabla extends CI_Controller
{

	function __construct(){

		parent::__construct();
		$this->load->model('Consulta');
		$this->load->model('fecha');

	}
	
    public function index()
    {
        

        $result = $this->Consulta->getDatos();
        $data   = array('consulta' => $result);

        $this->load->view("Tabla", $data);
    }
}
