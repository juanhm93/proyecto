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
        $this->load->model('mtablahab');
        $this->load-> model('memproyecto');
        $this->load->model('mupdatemix');
      

    }
    public function index()
    {
        

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        //$result = $this->mtablahab->getDatoshab();
        //$data   = array('habilitadora' => $result);
        //$result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view("vctablahab");

        $this->load->view('cuerpo/footer');	
 
    }

    public function gesinvp(){

        $anho = $this->input->post('v3');
        $mon = $this->input->post('v2');

    $resultado  = $this->mtablahab->planh($anho,$mon);

            $arr = array();
            $i=0;

            foreach ($resultado->result() as $value){
                    
                    $arr[$i]['gerehab'] = $value->gerehab;
                    $arr[$i]['elemento'] = $value->elemento;
                    $arr[$i]['enero_p'] = $value->enero_p; 
                    $arr[$i]['febrero_p']=$value->febrero_p; 
                    $arr[$i]['marzo_p']=$value->marzo_p; 
                    $arr[$i]['abril_p']=$value->abril_p; 
                    $arr[$i]['mayo_p']=$value->mayo_p; 
                    $arr[$i]['junio_p']=$value->junio_p; 
                    $arr[$i]['julio_p']=$value->julio_p; 
                    $arr[$i]['agosto_p']=$value->agosto_p; 
                    $arr[$i]['septiembre_p']=$value->septiembre_p; 
                    $arr[$i]['octubre_p']=$value->octubre_p;                 
                    $arr[$i]['noviembre_p']=$value->noviembre_p; 
                    $arr[$i]['diciembre_p']=$value->diciembre_p;
                    $i++;
            }
            echo json_encode($arr);

    }
     public function gesinvpequiv(){

        $anho = $this->input->post('v3');
        $mon = $this->input->post('v2');

    $resultado  = $this->mtablahab->planhequiv($anho);

            $arr = array();
            $i=0;

            foreach ($resultado->result() as $value){
                    
                    $arr[$i]['idmoneda'] = $value->idmoneda;
                    $arr[$i]['idhab'] = $value->idhab;
                    $arr[$i]['gerehab'] = $value->gerehab;
                    $arr[$i]['elemento'] = $value->elemento;
                    $arr[$i]['enero_p'] = $value->enero_p; 
                    $arr[$i]['febrero_p']=$value->febrero_p; 
                    $arr[$i]['marzo_p']=$value->marzo_p; 
                    $arr[$i]['abril_p']=$value->abril_p; 
                    $arr[$i]['mayo_p']=$value->mayo_p; 
                    $arr[$i]['junio_p']=$value->junio_p; 
                    $arr[$i]['julio_p']=$value->julio_p; 
                    $arr[$i]['agosto_p']=$value->agosto_p; 
                    $arr[$i]['septiembre_p']=$value->septiembre_p; 
                    $arr[$i]['octubre_p']=$value->octubre_p;                 
                    $arr[$i]['noviembre_p']=$value->noviembre_p; 
                    $arr[$i]['diciembre_p']=$value->diciembre_p;
                    $i++;
            }
            echo json_encode($arr);

    }

    public function ajaxgestioninv(){

        $anho = $this->input->post('v3');
        $mon = $this->input->post('v2');

    $resultado  = $this->mtablahab->gestioninv($anho,$mon);

            $arr = array();
            $i=0;

            foreach ($resultado->result() as $value){
                    
                    $arr[$i]['gerehab'] = $value->gerehab;
                    $arr[$i]['elemento'] = $value->elemento;
                    $arr[$i]['enero_r'] = $value->enero_r; 
                    $arr[$i]['febrero_r']=$value->febrero_r; 
                    $arr[$i]['marzo_r']=$value->marzo_r; 
                    $arr[$i]['abril_r']=$value->abril_r; 
                    $arr[$i]['mayo_r']=$value->mayo_r; 
                    $arr[$i]['junio_r']=$value->junio_r; 
                    $arr[$i]['julio_r']=$value->julio_r; 
                    $arr[$i]['agosto_r']=$value->agosto_r; 
                    $arr[$i]['septiembre_r']=$value->septiembre_r; 
                    $arr[$i]['octubre_r']=$value->octubre_r;                 
                    $arr[$i]['noviembre_r']=$value->noviembre_r; 
                    $arr[$i]['diciembre_r']=$value->diciembre_r;
                    $i++;
            }
            echo json_encode($arr);

    }




}