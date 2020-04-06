<?php


/**
* 
*/
class Cexplicaciones extends CI_Controller
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
        $result['proyecto'] = $this->mgetproyecto->getproyecto();
        $this->load->view('explicaciones/vexplicaciones',$result);
        $this->load->view('cuerpo/footer');	

	}

	public function proyectoplan(){

		$anho	= $this->input->post('v3');
		$idpro = $this->input->post('v1');

			$resultado = $this->mgetproyecto->planp($anho,$idpro);
 		$i=0;
 		$arr = array();
 		foreach ($resultado->result() as  $value) {
 			$arr[$i]['idmoneda']= $value->idmoneda;
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

	public function proyectoreal(){

		$anho	= $this->input->post('v3');
		$idpro = $this->input->post('v1');

			$resultado = $this->mgetproyecto->realesp($anho,$idpro);
 		$i=0;
 		$arr = array();
 		foreach ($resultado->result() as  $value) {
 			$arr[$i]['idmoneda']= $value->idmoneda;
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

	public function proyectomejorvision(){

		$anho	= $this->input->post('v3');
		$idpro = $this->input->post('v1');

			$resultado = $this->mgetproyecto->mvp($anho,$idpro);
 		$i=0;
 		$arr = array();
 		foreach ($resultado->result() as  $value) {
 			$arr[$i]['idmoneda']= $value->idmonedafk;
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

	public function proyectoexplicaciones(){
		
		$anho	= $this->input->post('v3');
		$idpro = $this->input->post('v1');

			$resultado = $this->mgetproyecto->explip($anho,$idpro);
 		$i=0;
 		$arr = array();
 		foreach ($resultado->result() as  $value) {

 			$arr[$i]['idtipoexp']= $value->idtipoexp;
 			$arr[$i]['idmoneda']= $value->idmoneda;
			$arr[$i]['enero_ex'] = $value->enero_ex;
			$arr[$i]['febrero_ex'] = $value->febrero_ex;
			$arr[$i]['marzo_ex'] = $value->marzo_ex;
			$arr[$i]['abril_ex'] = $value->abril_ex;
			$arr[$i]['mayo_ex'] = $value->mayo_ex;
			$arr[$i]['junio_ex'] = $value->junio_ex;
			$arr[$i]['julio_ex'] = $value->julio_ex;
			$arr[$i]['agosto_ex'] = $value->agosto_ex;
			$arr[$i]['septiembre_ex'] = $value->septiembre_ex;
			$arr[$i]['octubre_ex'] = $value->octubre_ex;
			$arr[$i]['noviembre_ex'] = $value->noviembre_ex;
			$arr[$i]['diciembre_ex'] = $value->diciembre_ex;
 			$i++;
 		}
		echo json_encode($arr);	


	}

	public function	postexplicaciones(){

		$id = $this->input->post('proyecto');
		$mes = $this->input->post('meses');	
		$anho = $this->input->post('anexplicaciones');	
			
		$explicaciones = $this->input->post('expli');

		if($explicaciones == '1'){

		$prb = $this->input->post('planrealbsf');	
		$prd = $this->input->post('planrealdol');	

		}else{

		$rmvb = $this->input->post('mvaprbsf');	
		$rmvd = $this->input->post('mvaprdol');

		}


	    $resultado =  $this->mgetproyecto->idexplicaciones($anho,$id);

	    if($resultado->num_rows() > 0){

	    	foreach ($resultado->result() as $key => $value) {

	    			$idexp   =  $value->idexp;
	    		 	
				switch ($mes) {
				case '1':
				 if ($explicaciones == '1') {

				 	if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('enero_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('enero_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				 	
				 }else{
				 	if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('enero_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('enero_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				 }

					break;
				case '2':

				if($explicaciones== '1'){
					 if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('febrero_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('febrero_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }


				}else{

					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('febrero_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('febrero_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				}
				
				
					break;
				case '3':
				if($explicaciones== '1'){
					if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('marzo_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('marzo_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{
						if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('marzo_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('marzo_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					

				 
					break;
				case '4':
				if($explicaciones== '1'){
					if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('abril_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('abril_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{
					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('abril_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('abril_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					  

				
					break;
				case '5':
				if($explicaciones== '1'){

					if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('mayo_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('mayo_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				}else{
					if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('mayo_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('mayo_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					 

				 
					break;
				case '6':
				if($explicaciones== '1'){



				}else{

					
				}
					
					break;
				case '7':
				if($explicaciones== '1'){

					 if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('julio_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('julio_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				}else{

				 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('julio_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('julio_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					

					break;
				case '8':
				if($explicaciones== '1'){
					 if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('agosto_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('agosto_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{

					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('agosto_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('agosto_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }	
				}
					

				
					break;
				case '9':
				if($explicaciones== '1'){
					if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('septiembre_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('septiembre_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{

						 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('septiembre_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('septiembre_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				}
				 

				
					break;
				case '10':
				if($explicaciones== '1'){
					if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('octubre_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('octubre_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{
					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('octubre_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('octubre_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					

				
					break;
				case '11':
				if($explicaciones== '1'){
					 if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('noviembre_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('noviembre_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }


				}else{

					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('noviembre_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('noviembre_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				}
					
				
					break;
				case '12':
				if($explicaciones== '1'){
					 if($value->idtipoexp == 1 && $value->idmoneda== 1){

				 	$array=  array('diciembre_ex' => $prb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);

				 } 

				 if($value->idtipoexp == 1 && $value->idmoneda== 2){

				 	$array=  array('diciembre_ex' => $prd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }

				}else{
					 if($value->idtipoexp == 2 && $value->idmoneda==1){

				 	 $array=  array('diciembre_ex' => $rmvb,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);

				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
				  if($value->idtipoexp == 2 && $value->idmoneda== 2){

				 	$array=  array('diciembre_ex' => $rmvd,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	$this->mgetproyecto->updateexplicaciones($idexp,$array);
				 }
					
				}
					

				
					break;

				default:
					# code...
					break;
				}

	    	}// fin de foreach

	    	  ?> <script>
                window.alert('Carga de explicaciones completada');
                window.location= '<?= base_url()?>cexplicaciones';
            </script><?php
	    	

	    }else{

	    

	    		switch ($mes) {
				case '1':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('enero_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('enero_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);
				 }else{
				 	 $rmvbsf=  array('enero_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('enero_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);

				 }
				 	


				 	

					break;
				case '2':
					  if ($explicaciones=='1') {
					  	$prbsf=  array('febrero_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('febrero_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 	 
				 }else{

				 		$rmvbsf=  array('febrero_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('febrero_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol); 
				 }
					 	

				 	 
					break;
				case '3':
				 if ($explicaciones=='1') {
				 		$prbsf=  array('marzo_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('marzo_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 }else{
				 		 $rmvbsf=  array('marzo_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('marzo_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					  

				 
					break;
				case '4':
				 if ($explicaciones=='1') {
				 		$prbsf=  array('abril_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('abril_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 }else{
				 	 $rmvbsf=  array('abril_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('abril_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					  
					break;
				case '5':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('mayo_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('mayo_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 }else{
				 		 $rmvbsf=  array('mayo_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('mayo_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
				 	 	

				 
					break;
				case '6':
				 if ($explicaciones=='1') {
				 		$prbsf=  array('junio_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('junio_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 }else{
				 	$rmvbsf=  array('junio_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('junio_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					  

				 	 
					break;
				case '7':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('julio_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('julio_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);
				 }else{
				 		 $rmvbsf=  array('julio_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('julio_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					  	


				 
					break;
				case '8':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('agosto_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('agosto_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);
				 }else{

				 		 $rmvbsf=  array('agosto_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('agosto_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 }
					  


				 	
					break;
				case '9':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('septiembre_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('septiembre_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);

				 }else{
				 	 $rmvbsf=  array('septiembre_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('septiembre_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					  

				 	
					break;
				case '10':
				 if ($explicaciones=='1') {
				 		$prbsf=  array('octubre_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('octubre_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);


				 }else{
				 	 $rmvbsf=  array('octubre_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('octubre_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 }
					  
				 	
					break;
				case '11':
				 if ($explicaciones=='1') {
				 	$prbsf=  array('noviembre_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('noviembre_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);
				 }else{
				 	 $rmvbsf=  array('noviembre_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('noviembre_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 	
				 }
					   


				 	
					break;
				case '12':
				 if ($explicaciones=='1') {
				 		$prbsf=  array('diciembre_ex' => $prb,
								'idproyectofk' => $id,	
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 1);
		    	$this->mgetproyecto->insertexplicaciones($prbsf);

				 	$prdol=  array('diciembre_ex' => $prd,
				 				'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 1);
				 $this->mgetproyecto->insertexplicaciones($prdol);
				 }else{

				 		 $rmvbsf=  array('diciembre_ex' => $rmvb,
								'idproyectofk' => $id,
								'idmoneda' => 1,
								'idanho' => $anho,
								'idtipoexp' => 2);
				  $this->mgetproyecto->insertexplicaciones($rmvbsf);
			 
				 	$rmvdol=  array('diciembre_ex' => $rmvd,
								'idproyectofk' => $id,
								'idmoneda' => 2,
								'idanho' => $anho,
								'idtipoexp' => 2);
				 	 $this->mgetproyecto->insertexplicaciones($rmvdol);
				 }
					   
				 
					break;

				default:
					# code...
					break;
				}

					  ?> <script>
                window.alert('Carga de explicaciones completada');
                window.location= '<?= base_url()?>cexplicaciones';
            </script><?php
	    	

	    }

	}
}