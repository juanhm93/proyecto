<?php

/**
* 
*/
class Cmosproyect extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('mupdatemix');
		$this->load->model('mtablahab');
	}
	
	public function p1(){

		$anho = $this->input->post('v3');
		$mon = $this->input->post('v2');

	$resultado	= $this->mtablahab->getprorb($anho,$mon);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

			 		$arr[$i]['numcategoria'] = $value->numcategoria;
			 		$arr[$i]['descripcion'] = $value->descripcion;
			 		$arr[$i]['renglon'] = $value->renglon;
					$arr[$i]['titulo'] = $value->titulo;
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
	public function p3(){

		$anho = $this->input->post('v3');
		 
	$resultado	= $this->mtablahab->getprorbd($anho);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

					$arr[$i]['idproyecto'] = $value->idproyecto;
			 		$arr[$i]['idmoneda'] = $value->idmoneda;
			 		$arr[$i]['numcategoria'] = $value->numcategoria;
			 		$arr[$i]['descripcion'] = $value->descripcion;
			 		$arr[$i]['renglon'] = $value->renglon;
					$arr[$i]['titulo'] = $value->titulo;
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
	public function r1(){

		$anho = $this->input->post('v3');
		$mon = $this->input->post('v2');

	$resultado	= $this->mtablahab->getproreal($anho,$mon);

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

	public function r3(){

		$anho = $this->input->post('v3');
		 
	$resultado	= $this->mtablahab->getprorealbd($anho);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

					$arr[$i]['idproyecto'] = $value->idproyecto;
			 		$arr[$i]['idmoneda'] = $value->idmoneda;
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
	 
	 public function mv1(){

		$anho = $this->input->post('v3');
		$mon = $this->input->post('v2');

	$resultado	= $this->mtablahab->getpromv($anho,$mon);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

			 		$arr[$i]['numcategoria'] = $value->numcategoria;
			 		$arr[$i]['descripcion'] = $value->descripcion;
			 		$arr[$i]['renglon'] = $value->renglon;
					$arr[$i]['titulo'] = $value->titulo;
					$arr[$i]['enero_mv'] = $value->enero_mv; 
					$arr[$i]['febrero_mv']=$value->febrero_mv; 
					$arr[$i]['marzo_mv']=$value->marzo_mv; 
					$arr[$i]['abril_mv']=$value->abril_mv; 
					$arr[$i]['mayo_mv']=$value->mayo_mv; 
					$arr[$i]['junio_mv']=$value->junio_mv; 
					$arr[$i]['julio_mv']=$value->julio_mv; 
					$arr[$i]['agosto_mv']=$value->agosto_mv; 
					$arr[$i]['septiembre_mv']=$value->septiembre_mv; 
					$arr[$i]['octubre_mv']=$value->octubre_mv;				 
					$arr[$i]['noviembre_mv']=$value->noviembre_mv; 
					$arr[$i]['diciembre_mv']=$value->diciembre_mv;
					$i++;
			}
			echo json_encode($arr);

	}

	public function mv3(){

		$anho = $this->input->post('v3');
		 
	$resultado	= $this->mtablahab->getpromvbd($anho);

			$arr = array();
			$i=0;

			foreach ($resultado->result() as $value){

					$arr[$i]['idprofk'] = $value->idprofk;
			 		$arr[$i]['idmonedafk'] = $value->idmonedafk;
			 		$arr[$i]['numcategoria'] = $value->numcategoria;
			 		$arr[$i]['descripcion'] = $value->descripcion;
			 		$arr[$i]['renglon'] = $value->renglon;
					$arr[$i]['titulo'] = $value->titulo;
					$arr[$i]['enero_mv'] = $value->enero_mv; 
					$arr[$i]['febrero_mv']=$value->febrero_mv; 
					$arr[$i]['marzo_mv']=$value->marzo_mv; 
					$arr[$i]['abril_mv']=$value->abril_mv; 
					$arr[$i]['mayo_mv']=$value->mayo_mv; 
					$arr[$i]['junio_mv']=$value->junio_mv; 
					$arr[$i]['julio_mv']=$value->julio_mv; 
					$arr[$i]['agosto_mv']=$value->agosto_mv; 
					$arr[$i]['septiembre_mv']=$value->septiembre_mv; 
					$arr[$i]['octubre_mv']=$value->octubre_mv;				 
					$arr[$i]['noviembre_mv']=$value->noviembre_mv; 
					$arr[$i]['diciembre_mv']=$value->diciembre_mv;
					$i++;
			}
			echo json_encode($arr);

	}



}