<?php


/**
* 
*/
class Cepdivoccidental extends CI_controller
{
		
		function __construct()
		{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('mreportehab/mhabrep');
		$this->load->model('mgetproyecto');
		 
		}

		public function index(){

        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav');
        $this->load->view('generartotales/vepdivoccidental');
        $this->load->view('cuerpo/footer');	
		}


		//HABILITADORA EQUIVALENTE
	public function habilitadorasplanequiv(){

 	$anho = $this->input->post('v3');
 	$inv = $this->input->post('v1');

 	$resultado = $this->mhabrep->gestioninversionhabplaneq($anho,$inv);
 	$i=0;
 	$arr = array();
 	foreach ($resultado->result() as   $value) {
 			$arr[$i]['idmoneda']= $value->idmoneda;
			$arr[$i]['gerehab'] = $value->gerehab;
			$arr[$i]['tipodivfk'] = $value->tipodivfk;
			$arr[$i]['idelecfk'] = $value->idelecfk;
			$arr[$i]['enero_p'] = $value->enero_p;
			$arr[$i]['febrero_p'] = $value->febrero_p;
			$arr[$i]['marzo_p'] = $value->marzo_p;
			$arr[$i]['abril_p'] = $value->abril_p;
			$arr[$i]['mayo_p'] = $value->mayo_p;
			$arr[$i]['junio_p'] = $value->junio_p;
			$arr[$i]['julio_p'] = $value->julio_p;
			$arr[$i]['agosto_p'] = $value->agosto_p;
			$arr[$i]['septiembre_p'] = $value->septiembre_p;
			$arr[$i]['octubre_p'] = $value->octubre_p;
			$arr[$i]['noviembre_p'] = $value->noviembre_p;
			$arr[$i]['diciembre_p'] = $value->diciembre_p;
 			$i++;
 	}
		echo json_encode($arr);	


	}// fin funcion 

		/// HABILITADORA REAL PARA EQUIVALENTE
	public function habilitadorarealequiv(){

		$anho = $this->input->post('v3');
 		$inv = $this->input->post('v1');

 	$resultado = $this->mhabrep->gestioninversionhabrealeq($anho,$inv);
 	$i=0;
 	$arr = array();
 	foreach ($resultado->result() as   $value) {
 			$arr[$i]['idmoneda'] = $value->idmoneda;
			$arr[$i]['gerehab'] = $value->gerehab;
			$arr[$i]['tipodivfk'] = $value->tipodivfk;
			$arr[$i]['idelecfk'] = $value->idelecfk;
			$arr[$i]['enero_r'] = $value->enero_r;
			$arr[$i]['febrero_r'] = $value->febrero_r;
			$arr[$i]['marzo_r'] = $value->marzo_r;
			$arr[$i]['abril_r'] = $value->abril_r;
			$arr[$i]['mayo_r'] = $value->mayo_r;
			$arr[$i]['junio_r'] = $value->junio_r;
			$arr[$i]['julio_r'] = $value->julio_r;
			$arr[$i]['agosto_r'] = $value->agosto_r;
			$arr[$i]['septiembre_r'] = $value->septiembre_r;
			$arr[$i]['octubre_r'] = $value->octubre_r;
			$arr[$i]['noviembre_r'] = $value->noviembre_r;
			$arr[$i]['diciembre_r'] = $value->diciembre_r;
 			$i++;

 	}
		echo json_encode($arr);	

	}// fin de funcion real equivalente 

		/// HABILITADORA MEJOR VISION EQUIVALENTE
	public function habilitadoramvequiv(){

		$anho = $this->input->post('v3');
 		$inv = $this->input->post('v1');

 	$resultado = $this->mhabrep->ginvmvequiv($anho,$inv);
 	$i=0;
 	$arr = array();
 	foreach ($resultado->result() as   $value) {
 			$arr[$i]['idmoneda'] = $value->idmonedafk;
			$arr[$i]['gerehab'] = $value->gerehab;
			$arr[$i]['tipodivfk'] = $value->tipodivfk;
			$arr[$i]['idelecfk'] = $value->idelecfk;
			$arr[$i]['enero_mv'] = $value->enero_mv;
			$arr[$i]['febrero_mv'] = $value->febrero_mv;
			$arr[$i]['marzo_mv'] = $value->marzo_mv;
			$arr[$i]['abril_mv'] = $value->abril_mv;
			$arr[$i]['mayo_mv'] = $value->mayo_mv;
			$arr[$i]['junio_mv'] = $value->junio_mv;
			$arr[$i]['julio_mv'] = $value->julio_mv;
			$arr[$i]['agosto_mv'] = $value->agosto_mv;
			$arr[$i]['septiembre_mv'] = $value->septiembre_mv;
			$arr[$i]['octubre_mv'] = $value->octubre_mv;
			$arr[$i]['noviembre_mv'] = $value->noviembre_mv;
			$arr[$i]['diciembre_mv'] = $value->diciembre_mv;
 			$i++;

 	}
		echo json_encode($arr);	

	}// fin de funcion real equivalente 


		/// HABILITADORA MEJOR VISION EQUIVALENTE
	public function habilitadorantequiv(){

		$anho = $this->input->post('v3');
 		$inv = $this->input->post('v1');

 	$resultado = $this->mhabrep->ginvantequiv($anho,$inv);
 	$i=0;
 	$arr = array();
 	foreach ($resultado->result() as  $value) {
 			$arr[$i]['idmoneda'] = $value->idmonedafk;
			$arr[$i]['gerehab'] = $value->gerehab;
			$arr[$i]['tipodivfk'] = $value->tipodivfk;
			$arr[$i]['idelecfk'] = $value->idelecfk;
			$arr[$i]['enero_ant'] = $value->enero_ant;
			$arr[$i]['febrero_ant'] = $value->febrero_ant;
			$arr[$i]['marzo_ant'] = $value->marzo_ant;
			$arr[$i]['abril_ant'] = $value->abril_ant;
			$arr[$i]['mayo_ant'] = $value->mayo_ant;
			$arr[$i]['junio_ant'] = $value->junio_ant;
			$arr[$i]['julio_ant'] = $value->julio_ant;
			$arr[$i]['agosto_ant'] = $value->agosto_ant;
			$arr[$i]['septiembre_ant'] = $value->septiembre_ant;
			$arr[$i]['octubre_ant'] = $value->octubre_ant;
			$arr[$i]['noviembre_ant'] = $value->noviembre_ant;
			$arr[$i]['diciembre_ant'] = $value->diciembre_ant;
 			$i++;

 	}
		echo json_encode($arr);	

	}// fin de funcion real equivalente 

	public function pplanequiv(){

		$anho = $this->input->post('v3');
		$div = $this->input->post('v2');

 		$resultado = $this->mgetproyecto->pplanepdivor($anho,$div);
 		$i=0;
 		$arr = array();
 			foreach ($resultado->result() as $value) {
 			$arr[$i]['idmoneda']= $value->idmoneda;
			$arr[$i]['numcategoria']= $value->numcategoria;
			$arr[$i]['enero_p'] = $value->enero_p;
			$arr[$i]['febrero_p'] = $value->febrero_p;
			$arr[$i]['marzo_p'] = $value->marzo_p;
			$arr[$i]['abril_p'] = $value->abril_p;
			$arr[$i]['mayo_p'] = $value->mayo_p;
			$arr[$i]['junio_p'] = $value->junio_p;
			$arr[$i]['julio_p'] = $value->julio_p;
			$arr[$i]['agosto_p'] = $value->agosto_p;
			$arr[$i]['septiembre_p'] = $value->septiembre_p;
			$arr[$i]['octubre_p'] = $value->octubre_p;
			$arr[$i]['noviembre_p'] = $value->noviembre_p;
			$arr[$i]['diciembre_p'] = $value->diciembre_p;
 			$i++;
 			}
			echo json_encode($arr);	

		}


		public function prealequiv(){

			$anho = $this->input->post('v3');
			$div = $this->input->post('v2');
 		$resultado = $this->mgetproyecto->prealepdivor($anho,$div);
 		$i=0;
 		$arr = array();
 			foreach ($resultado->result() as $value) {
 			$arr[$i]['idmoneda']= $value->idmoneda;
			$arr[$i]['numcategoria']= $value->numcategoria;
			$arr[$i]['enero_r'] = $value->enero_r;
			$arr[$i]['febrero_r'] = $value->febrero_r;
			$arr[$i]['marzo_r'] = $value->marzo_r;
			$arr[$i]['abril_r'] = $value->abril_r;
			$arr[$i]['mayo_r'] = $value->mayo_r;
			$arr[$i]['junio_r'] = $value->junio_r;
			$arr[$i]['julio_r'] = $value->julio_r;
			$arr[$i]['agosto_r'] = $value->agosto_r;
			$arr[$i]['septiembre_r'] = $value->septiembre_r;
			$arr[$i]['octubre_r'] = $value->octubre_r;
			$arr[$i]['noviembre_r'] = $value->noviembre_r;
			$arr[$i]['diciembre_r'] = $value->diciembre_r;
 			$i++;
 			}
			echo json_encode($arr);	


		}	

		public function pmvequiv(){

			$anho = $this->input->post('v3');
			$div = $this->input->post('v2');
 		$resultado = $this->mgetproyecto->pmvepdivor($anho,$div);
 		$i=0;
 		$arr = array();
 			foreach ($resultado->result() as $value) {
 			$arr[$i]['idmoneda']= $value->idmonedafk;
			$arr[$i]['numcategoria']= $value->numcategoria;
			$arr[$i]['enero_mv'] = $value->enero_mv;
			$arr[$i]['febrero_mv'] = $value->febrero_mv;
			$arr[$i]['marzo_mv'] = $value->marzo_mv;
			$arr[$i]['abril_mv'] = $value->abril_mv;
			$arr[$i]['mayo_mv'] = $value->mayo_mv;
			$arr[$i]['junio_mv'] = $value->junio_mv;
			$arr[$i]['julio_mv'] = $value->julio_mv;
			$arr[$i]['agosto_mv'] = $value->agosto_mv;
			$arr[$i]['septiembre_mv'] = $value->septiembre_mv;
			$arr[$i]['octubre_mv'] = $value->octubre_mv;
			$arr[$i]['noviembre_mv'] = $value->noviembre_mv;
			$arr[$i]['diciembre_mv'] = $value->diciembre_mv;
 			$i++;
 			}
			echo json_encode($arr);	

		}
		public function pantequiv(){

			$anho = $this->input->post('v3');
			$div = $this->input->post('v2');
 		$resultado = $this->mgetproyecto->pantepdivor($anho,$div);
 		$i=0;
 		$arr = array();
 			foreach ($resultado->result() as $value) {
 			$arr[$i]['idmoneda']= $value->idmonedafk;
			$arr[$i]['numcategoria']= $value->numcategoria;
			$arr[$i]['enero_ant'] = $value->enero_ant;
			$arr[$i]['febrero_ant'] = $value->febrero_ant;
			$arr[$i]['marzo_ant'] = $value->marzo_ant;
			$arr[$i]['abril_ant'] = $value->abril_ant;
			$arr[$i]['mayo_ant'] = $value->mayo_ant;
			$arr[$i]['junio_ant'] = $value->junio_ant;
			$arr[$i]['julio_ant'] = $value->julio_ant;
			$arr[$i]['agosto_ant'] = $value->agosto_ant;
			$arr[$i]['septiembre_ant'] = $value->septiembre_ant;
			$arr[$i]['octubre_ant'] = $value->octubre_ant;
			$arr[$i]['noviembre_ant'] = $value->noviembre_ant;
			$arr[$i]['diciembre_ant'] = $value->diciembre_ant;
 			$i++;
 			}
			echo json_encode($arr);	

		}


	 
}

