<?php

/**
* 
*/
class Cproyecto extends CI_controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('mgetproyecto');
	}

	public function index(){

		$this->load->view('cuerpo/head');
		$this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $result['categoria'] = $this->mgetproyecto->getcategoria();
        $result['division'] = $this->mgetproyecto->getdivision();
        $result['dom'] = $this->mgetproyecto->getdom();
        $result['emx'] = $this->mgetproyecto->getemx();
        //$result['gereproyecto'] = $this->mgetproyecto->getgereproyecto();
        $this->load->view('vnewproyect',$result);
        $this->load->view('cuerpo/footer');	
	
	}

	public function division(){


		$resultado = $this->mupdatemix->div();
		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value){
			 		
					$arr[$i]['iddi'] = $value->iddi;
					$arr[$i]['divisonopc'] = $value->divisonopc; 
					$i++;
			}
	 

		echo json_encode($arr);	

	}

	public function emx(){


		$resultado = $this->mupdatemix->emx1();
		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value){
			 		
					$arr[$i]['idemx'] = $value->idemx;
					$arr[$i]['emmixta'] = $value->emmixta; 
					$i++;
			}
 

		echo json_encode($arr);	

	}
	public function categoria(){

			$resultado = $this->mupdatemix->categ();
		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value){
			 		
					$arr[$i]['id'] = $value->id;
					$arr[$i]['numcategoria'] = $value->numcategoria; 
					$arr[$i]['descripcion'] = $value->descripcion; 
					$i++;

			}
		 

		echo json_encode($arr);	



	}


}