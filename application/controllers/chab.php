<?php defined('BASEPATH') or exit('No direct script access allowed');



class Chab extends CI_Controller
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
        $this->load->view('habilitadora/vpahabp');
        $this->load->view('cuerpo/footer');
    }
}