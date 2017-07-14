<?php
/**
 *
 */
class Cmostrarpep extends CI_Controller
{

    function __construct(){

        parent::__construct();
        $this->load->model('Consulta');
        $this->load->model('fecha');
        $this->load->model('mtablahab');
        $this->load-> model('memproyecto');

    }
    public function index()
    {
        

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        //$result = $this->mtablahab->getDatoshab();
        //$data   = array('habilitadora' => $result);
        //$result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view("pro/vmostrarpep");

        $this->load->view('cuerpo/footer');	
 
    }
}