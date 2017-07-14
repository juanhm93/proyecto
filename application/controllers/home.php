<?php defined('BASEPATH') or exit('No direct script access allowed');



class Home extends CI_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->model('fecha');
        $this->load->model('memproyecto');
    }
        
    public function index()
    {
        //$this->load->helper(array('form'));
        //$this->load->view('home');
        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view('cuerpo/contenido', $result);
        $this->load->view('cuerpo/footer');
    }
}
