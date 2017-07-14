<?php
/**
 *
 */
class Ctablapro extends CI_Controller
{

    function __construct(){

        parent::__construct();
        $this->load->model('consulta');
        $this->load->model('fecha');

    }
    public function index()
    {
        

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result = $this->consulta->getDatos();
        $data   = array('consulta' => $result);
        $this->load->view("tabla", $data);
        
        $this->load->view('cuerpo/footer');	
 
    }
}