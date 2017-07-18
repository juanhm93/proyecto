<?php

/**
* 
*/
class Cmostarm extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('mupdatemix');
		$this->load->model('mtablahab');
	}
	public function ajaxm(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->mixelemento($id,$mon,$anho);

		$arr = array();
		$i=0;
		if($resultado)
		{
			foreach ($resultado->result() as $value) {
			 		
					$arr[$i]['idlele'] = $value->idlele;
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
		else
			echo 0;
			//echo json_encode($resultado);			
		
	}

	public function proyectos(){

		$idproyecto = $this->input->post('p1');
		$moneda = $this->input->post('p2');
		$anho =	$this->input->post('p3');
		
		$resultado = $this->mupdatemix->proyectomix($idproyecto,$moneda,$anho);

		$arr = array();
		$i= 0;
		foreach ($resultado->result() as $value) {
			
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
					
		}//fin del foreach
		echo json_encode($arr);

	}// fin de la funciones proyectos

	public function ajaxhab(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->hab($id,$mon,$anho);
		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value){
			 		
					$arr[$i]['idelementoc'] = $value->idelementoc;
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
	public function dom(){


		$resultado = $this->mupdatemix->div();
		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value){
			 		
					$arr[$i]['iddi'] = $value->iddi;
					$arr[$i]['divisonopc'] = $value->divisonopc; 
					$i++;
			}
		$arr[0]['num']	= $resultado->num_rows();

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
		$arr[0]['num']	= $resultado->num_rows();

		echo json_encode($arr);	

	}

	
	
	public function ajaxgiequiv(){

		$anho = $this->input->post('v3');
		$mon = $this->input->post('v2');
		
	$resultado	= $this->mtablahab->gestioninv($anho,);

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

	public function ajaxginvdolares(){

		$anho = $this->input->post('v3');
		$mon = 2;
	$resultado	= $this->mtablahab->gestioninv($anho,$mon);

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

	public function ajaxginvplanb(){

		$anho = $this->input->post('v3');
		$mon = 1;
	$resultado	= $this->mtablahab->gestioninvplan($anho,$mon);

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
	public function ajaxginvpland(){

		$anho = $this->input->post('v3');
		$mon = 2;
	$resultado	= $this->mtablahab->gestioninvplan($anho,$mon);

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

	public function ajaxprorealb(){

		$anho = $this->input->post('v3');
		$mon = 1;
	$resultado	= $this->mtablahab->getprorb($anho,$mon);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

			 		$arr[$i]['numcategoria'] = $value->numcategoria;
			 		$arr[$i]['descripcion'] = $value->descripcion;
			 		$arr[$i]['renglon'] = $value->renglon;
					$arr[$i]['titulo'] = $value->titulo;
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