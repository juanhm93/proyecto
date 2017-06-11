<?php
/**
 *
 */
class Ctablahab extends CI_Controller
{

    function __construct(){

        parent::__construct();
        $this->load->model('Consulta');
        $this->load->model('fecha');

    }
    public function index()
    {
        $this->load->model('mtablahab');

        $this->load->view('cuerpo/vhtablahab');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        
        $result = $this->mtablahab->getDatoshab();
        $data   = array('habilitadora' => $result);
        $this->load->view("vctablahab", $data);

        $this->load->view('cuerpo/footer');	
 
    }
}