<?php

/**
* 
*/
class Cmixtas extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('memproyecto');
		$this->load->model('mupdatemix');
		$this->load->model('excel_data_insert_model');
		$this->load->model('get_id');
	}

	public function index(){

		$this->load->model('mtablahab');
        $this->load->view('cuerpo/head');
        $this->load->view('cuerpo/header');
        $this->load->view('cuerpo/nav'); 
        $result['em'] = $this->memproyecto->mixtas();
        $result['moneda'] = $this->memproyecto->getmoneda();
        $this->load->view("vcarmixtas",$result);
        $this->load->view('cuerpo/footer');	
 
	}
	public function ajaxmplan(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->mixelementoplan($id,$mon,$anho);

		$arr = array();
		$i=0;
	 
			foreach ($resultado->result() as $value) {
			 		$arr[$i]['idplan'] = $value->idplan;
			 		$arr[$i]['idmixta'] = $value->idmixta;
					$arr[$i]['idlele'] = $value->idlele;
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

	public function ajaxm(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->mixelemento($id,$mon,$anho);

		$arr = array();
		$i=0;
	 
			foreach ($resultado->result() as $value) {
			 		$arr[$i]['idreal'] = $value->idreal;
			 		$arr[$i]['idmixta'] = $value->idmixta;
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
	public function ajaxmv(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->mixelementomv($id,$mon,$anho);

		$arr = array();
		$i=0;
	 
			foreach ($resultado->result() as $value) {
			 		$arr[$i]['idmv'] = $value->idmv;
			 		$arr[$i]['idmixta'] = $value->idmixta;
					$arr[$i]['idlele'] = $value->idlele;
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
	public function ajaxante(){

		$id = $this->input->post('v1');
		$mon = $this->input->post('v2');
		$anho = $this->input->post('v3');	

		$resultado = $this->mupdatemix->mixelementoante($id,$mon,$anho);

		$arr = array();
		$i=0;
	 
			foreach ($resultado->result() as $value) {
			 		$arr[$i]['idante'] = $value->idante;
			 		$arr[$i]['idmixta'] = $value->idmixta;
					$arr[$i]['idlele'] = $value->idlele;
					$arr[$i]['enero_ant'] = $value->enero_ant; 
					$arr[$i]['febrero_ant']=$value->febrero_ant; 
					$arr[$i]['marzo_ant']=$value->marzo_ant; 
					$arr[$i]['abril_ant']=$value->abril_ant; 
					$arr[$i]['mayo_ant']=$value->mayo_ant; 
					$arr[$i]['junio_ant']=$value->junio_ant; 
					$arr[$i]['julio_ant']=$value->julio_ant; 
					$arr[$i]['agosto_ant']=$value->agosto_ant; 
					$arr[$i]['septiembre_ant']=$value->septiembre_ant; 
					$arr[$i]['octubre_ant']=$value->octubre_ant;				 
					$arr[$i]['noviembre_ant']=$value->noviembre_ant; 
					$arr[$i]['diciembre_ant']=$value->diciembre_ant;
					$i++;
			}
			echo json_encode($arr); 		
		
	}



	public function postmixta(){

		$lab = $this->input->post('l1');
		$bb = $this->input->post('bb');
		$mat = $this->input->post('m1');
		$sc = $this->input->post('sc');
		$otro = $this->input->post('o1');
		$moneda = $this->input->post('moneda');
		$idempresam = $this->input->post('empresam');
		$anho = $this->input->post('anho');
		$prma = $this->input->post('PR');
		// arreglo para insertar en la tabla mixta

		echo $anho;
		echo $idempresam;

		 //////////////////// OPCION PARA PLAN ////////////////////////////////////////////
			if($prma== '1'){

				if($this->mupdatemix->mixtagetplan($idempresam,$moneda,$anho) > 0){
					echo "update";

					$elemento = $this->mupdatemix->mixelementoplan($idempresam,$moneda,$anho);


					foreach ($elemento->result() as $value) {
								
								echo "id elemento".$value->idlele."<br>";
									echo "ID".$value->idplan."<br>";
	  
								switch ($value->idlele){
								case 1:
									
									echo "entro al caso 1";
									$plan = array('enero_p' => $lab[0],
			                        'febrero_p'                 => $lab[1],
			                        'marzo_p'                   => $lab[2],
			                        'abril_p'                   => $lab[3],
			                        'mayo_p'                    => $lab[4],
			                        'junio_p'                   => $lab[5],
			                        'julio_p'                   => $lab[6],
			                        'agosto_p'                  => $lab[7],
			                        'septiembre_p'              => $lab[8],
			                        'octubre_p'                 => $lab[9],
			                        'noviembre_p'              	=> $lab[10],
			                        'diciembre_p'               => $lab[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'idanho'                    => $anho);

			    				$this->excel_data_insert_model->updateplan($value->idplan,$plan);

									break;
								case 2: 

									echo "entro al caso 2";
									$plan = array('enero_p' => $bb[0],
									'febrero_p'                 => $bb[1],
									'marzo_p'                   => $bb[2],
									'abril_p'                   => $bb[3],
									'mayo_p'                    => $bb[4],
									'junio_p'                   => $bb[5],
									'julio_p'                   => $bb[6],
									'agosto_p'                  => $bb[7],
									'septiembre_p'              => $bb[8],
									'octubre_p'                 => $bb[9],
									'noviembre_p'              	=> $bb[10],
									'diciembre_p'               => $bb[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								$this->excel_data_insert_model->updateplan($value->idplan,$plan);
								break;
								case 3:
									echo "caso 3";
									 $plan = array('enero_p' => $mat[0],
									'febrero_p'                 => $mat[1],
									'marzo_p'                   => $mat[2],
									'abril_p'                   => $mat[3],
									'mayo_p'                    => $mat[4],
									'junio_p'                   => $mat[5],
									'julio_p'                   => $mat[6],
									'agosto_p'                  => $mat[7],
									'septiembre_p'              => $mat[8],
									'octubre_p'                 => $mat[9],
									'noviembre_p'              	=> $mat[10],
									'diciembre_p'               => $mat[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								$this->excel_data_insert_model->updateplan($value->idplan,$plan);
								break;
								case 4:
								 	 $plan = array('enero_p' => $sc[0],
									'febrero_p'                 => $sc[1],
									'marzo_p'                   => $sc[2],
									'abril_p'                   => $sc[3],
									'mayo_p'                    => $sc[4],
									'junio_p'                   => $sc[5],
									'julio_p'                   => $sc[6],
									'agosto_p'                  => $sc[7],
									'septiembre_p'              => $sc[8],
									'octubre_p'                 => $sc[9],
									'noviembre_p'              	=> $sc[10],
									'diciembre_p'               => $sc[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								 	 $this->excel_data_insert_model->updateplan($value->idplan,$plan);
								 	 break;	
								 case 5:
								 	$plan = array('enero_p' => $otro[0],
									'febrero_p'                 => $otro[1],
									'marzo_p'                   => $otro[2],
									'abril_p'                   => $otro[3],
									'mayo_p'                    => $otro[4],
									'junio_p'                   => $otro[5],
									'julio_p'                   => $otro[6],
									'agosto_p'                  => $otro[7],
									'septiembre_p'              => $otro[8],
									'octubre_p'                 => $otro[9],
									'noviembre_p'              	=> $otro[10],
									'diciembre_p'               => $otro[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'idanho'                    => $anho);

									 $this->excel_data_insert_model->updateplan($value->idplan,$plan);
									 break;

								default:
									echo "en este caso deberia de haber un error";
									break;

							}// fin siwtch



					}// fin for each result()


			 	?><script language='Javascript'>
				    window.alert('El plan de la EMX se actualizo correntamente');
				    window.location="<?php echo base_url() ?>cmixtas";
				    </script>";<?php
				 //   redirect('cmixtas','refresh');

				}else{

					echo "insert";
				 		$m1 = array('idem' => $idempresam,
											'idlele' => 1);
				 		$this->excel_data_insert_model->mixtas($m1);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $planlab = array('enero_p' => $lab[0],
	                        'febrero_p'                 => $lab[1],
	                        'marzo_p'                   => $lab[2],
	                        'abril_p'                   => $lab[3],
	                        'mayo_p'                    => $lab[4],
	                        'junio_p'                   => $lab[5],
	                        'julio_p'                   => $lab[6],
	                        'agosto_p'                  => $lab[7],
	                        'septiembre_p'              => $lab[8],
	                        'octubre_p'                 => $lab[9],
	                        'noviembre_p'              	=> $lab[10],
	                        'diciembre_p'               => $lab[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'idanho'        => $anho);

				 		 $this->excel_data_insert_model->plan($planlab);

				 		 // bienestar y beneficios

				 		 $m2 = array('idem' => $idempresam,
											'idlele' => 2);
				 		$this->excel_data_insert_model->mixtas($m2);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		$planbb = array('enero_p' => $bb[0],
	                        'febrero_p'                 => $bb[1],
	                        'marzo_p'                   => $bb[2],
	                        'abril_p'                   => $bb[3],
	                        'mayo_p'                    => $bb[4],
	                        'junio_p'                   => $bb[5],
	                        'julio_p'                   => $bb[6],
	                        'agosto_p'                  => $bb[7],
	                        'septiembre_p'              => $bb[8],
	                        'octubre_p'                 => $bb[9],
	                        'noviembre_p'              	=> $bb[10],
	                        'diciembre_p'               => $bb[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->plan($planbb);

				 		 // materiales

				 		$m3 = array('idem' => $idempresam,
											'idlele' => 3);
				 		$this->excel_data_insert_model->mixtas($m3);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $planmat = array('enero_p' => $mat[0],
	                        'febrero_p'                 => $mat[1],
	                        'marzo_p'                   => $mat[2],
	                        'abril_p'                   => $mat[3],
	                        'mayo_p'                    => $mat[4],
	                        'junio_p'                   => $mat[5],
	                        'julio_p'                   => $mat[6],
	                        'agosto_p'                  => $mat[7],
	                        'septiembre_p'              => $mat[8],
	                        'octubre_p'                 => $mat[9],
	                        'noviembre_p'              	=> $mat[10],
	                        'diciembre_p'               => $mat[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->plan($planmat);
					
					// servicios y contratos 
				 		
				 		 $m4 = array('idem' => $idempresam,
											'idlele' => 4);
				 		$this->excel_data_insert_model->mixtas($m4);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $plansc = array('enero_p' => $sc[0],
	                        'febrero_p'                 => $sc[1],
	                        'marzo_p'                   => $sc[2],
	                        'abril_p'                   => $sc[3],
	                        'mayo_p'                    => $sc[4],
	                        'junio_p'                   => $sc[5],
	                        'julio_p'                   => $sc[6],
	                        'agosto_p'                  => $sc[7],
	                        'septiembre_p'              => $sc[8],
	                        'octubre_p'                 => $sc[9],
	                        'noviembre_p'              	=> $sc[10],
	                        'diciembre_p'               => $sc[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->plan($plansc);

				 		 //otros

				 		 $m5 = array('idem' => $idempresam,
											'idlele' => 5);
				 		$this->excel_data_insert_model->mixtas($m5);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $planotro = array('enero_p' => $otro[0],
	                        'febrero_p'                 => $otro[1],
	                        'marzo_p'                   => $otro[2],
	                        'abril_p'                   => $otro[3],
	                        'mayo_p'                    => $otro[4],
	                        'junio_p'                   => $otro[5],
	                        'julio_p'                   => $otro[6],
	                        'agosto_p'                  => $otro[7],
	                        'septiembre_p'              => $otro[8],
	                        'octubre_p'                 => $otro[9],
	                        'noviembre_p'              	=> $otro[10],
	                        'diciembre_p'               => $otro[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->plan($planotro);
										
				 		 // BUSCAR COMO REDIRECCIONAR CORRECTAMENTE DESDE CODEIGNITER PARA OTRA VISTA USANDO JAVASCRIPT
			 		?><script language='Javascript'>
				    window.alert('El plan de la EMX se  cargo correntamente');
				    window.location='<?= base_url()?>cmixtas';
				    </script>
				    <?php


				}

			}// fin de la opcion para plan



		//////////////// OPCION PARA REAL //////////////////////////////////////////////////////////	
			if($prma == '2'){

					if($this->mupdatemix->mixtaget($idempresam,$moneda,$anho) > 0){
					echo "update";

					$elemento = $this->mupdatemix->mixelemento($idempresam,$moneda,$anho);


					foreach ($elemento->result() as $value) {
								
								echo "id elemento".$value->idlele."<br>";
									echo "ID".$value->idreal."<br>";
	  
								switch ($value->idlele){
								case 1:
									
									echo "entro al caso 1";
									$real = array('enero_r' => $lab[0],
			                        'febrero_r'                 => $lab[1],
			                        'marzo_r'                   => $lab[2],
			                        'abril_r'                   => $lab[3],
			                        'mayo_r'                    => $lab[4],
			                        'junio_r'                   => $lab[5],
			                        'julio_r'                   => $lab[6],
			                        'agosto_r'                  => $lab[7],
			                        'septiembre_r'              => $lab[8],
			                        'octubre_r'                 => $lab[9],
			                        'noviembre_r'              	=> $lab[10],
			                        'diciembre_r'               => $lab[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixta'                   => $value->idmixta,
			                        'idanho'                    => $anho);

			    				$this->mupdatemix->updaterealmixta($real,$value->idreal);

									break;
								case 2: 

									echo "entro al caso 2";
									$real = array('enero_r' => $bb[0],
									'febrero_r'                 => $bb[1],
									'marzo_r'                   => $bb[2],
									'abril_r'                   => $bb[3],
									'mayo_r'                    => $bb[4],
									'junio_r'                   => $bb[5],
									'julio_r'                   => $bb[6],
									'agosto_r'                  => $bb[7],
									'septiembre_r'              => $bb[8],
									'octubre_r'                 => $bb[9],
									'noviembre_r'              	=> $bb[10],
									'diciembre_r'               => $bb[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixta'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								$this->mupdatemix->updaterealmixta($real,$value->idreal);
								break;
								case 3:
									echo "caso 3";
									 $real = array('enero_r' => $mat[0],
									'febrero_r'                 => $mat[1],
									'marzo_r'                   => $mat[2],
									'abril_r'                   => $mat[3],
									'mayo_r'                    => $mat[4],
									'junio_r'                   => $mat[5],
									'julio_r'                   => $mat[6],
									'agosto_r'                  => $mat[7],
									'septiembre_r'              => $mat[8],
									'octubre_r'                 => $mat[9],
									'noviembre_r'              	=> $mat[10],
									'diciembre_r'               => $mat[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixta'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								$this->mupdatemix->updaterealmixta($real,$value->idreal);
								break;
								case 4:
								 	 $real = array('enero_r' => $sc[0],
									'febrero_r'                 => $sc[1],
									'marzo_r'                   => $sc[2],
									'abril_r'                   => $sc[3],
									'mayo_r'                    => $sc[4],
									'junio_r'                   => $sc[5],
									'julio_r'                   => $sc[6],
									'agosto_r'                  => $sc[7],
									'septiembre_r'              => $sc[8],
									'octubre_r'                 => $sc[9],
									'noviembre_r'              	=> $sc[10],
									'diciembre_r'               => $sc[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixta'                   => $value->idmixta,
			                        'idanho'                    => $anho);

								 	 $this->mupdatemix->updaterealmixta($real,$value->idreal);
								 	 break;	
								 case 5:
								 	$real = array('enero_r' => $otro[0],
									'febrero_r'                 => $otro[1],
									'marzo_r'                   => $otro[2],
									'abril_r'                   => $otro[3],
									'mayo_r'                    => $otro[4],
									'junio_r'                   => $otro[5],
									'julio_r'                   => $otro[6],
									'agosto_r'                  => $otro[7],
									'septiembre_r'              => $otro[8],
									'octubre_r'                 => $otro[9],
									'noviembre_r'              	=> $otro[10],
									'diciembre_r'               => $otro[11],
			                        'idmoneda'                  => $moneda, 
			                        'idmixta'                   => $value->idmixta,
			                        'idanho'                    => $anho);

									 $this->mupdatemix->updaterealmixta($real,$value->idreal);
									 break;

								default:
									echo "en este caso deberia de haber un error";
									break;

							}// fin siwtch



					}// fin for each result

				}else{

					echo "insert";
				 		$m1 = array('idem' => $idempresam,
											'idlele' => 1);
				 		$this->excel_data_insert_model->mixtas($m1);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $realab = array('enero_r' => $lab[0],
	                        'febrero_r'                 => $lab[1],
	                        'marzo_r'                   => $lab[2],
	                        'abril_r'                   => $lab[3],
	                        'mayo_r'                    => $lab[4],
	                        'junio_r'                   => $lab[5],
	                        'julio_r'                   => $lab[6],
	                        'agosto_r'                  => $lab[7],
	                        'septiembre_r'              => $lab[8],
	                        'octubre_r'                 => $lab[9],
	                        'noviembre_r'              	=> $lab[10],
	                        'diciembre_r'               => $lab[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixta'                   =>$idmixta,
	                        'idanho'        => $anho);

				 		 $this->excel_data_insert_model->reales($realab);

				 		 // bienestar y beneficios

				 		 $m2 = array('idem' => $idempresam,
											'idlele' => 2);
				 		$this->excel_data_insert_model->mixtas($m2);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		$realbb = array('enero_r' => $bb[0],
	                        'febrero_r'                 => $bb[1],
	                        'marzo_r'                   => $bb[2],
	                        'abril_r'                   => $bb[3],
	                        'mayo_r'                    => $bb[4],
	                        'junio_r'                   => $bb[5],
	                        'julio_r'                   => $bb[6],
	                        'agosto_r'                  => $bb[7],
	                        'septiembre_r'              => $bb[8],
	                        'octubre_r'                 => $bb[9],
	                        'noviembre_r'              	=> $bb[10],
	                        'diciembre_r'               => $bb[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixta'                   =>$idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->reales($realbb);

				 		 // materiales

				 		$m3 = array('idem' => $idempresam,
											'idlele' => 3);
				 		$this->excel_data_insert_model->mixtas($m3);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $realmat = array('enero_r' => $mat[0],
	                        'febrero_r'                 => $mat[1],
	                        'marzo_r'                   => $mat[2],
	                        'abril_r'                   => $mat[3],
	                        'mayo_r'                    => $mat[4],
	                        'junio_r'                   => $mat[5],
	                        'julio_r'                   => $mat[6],
	                        'agosto_r'                  => $mat[7],
	                        'septiembre_r'              => $mat[8],
	                        'octubre_r'                 => $mat[9],
	                        'noviembre_r'              	=> $mat[10],
	                        'diciembre_r'               => $mat[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixta'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->reales($realmat);
					
					// servicios y contratos 
				 		
				 		 $m4 = array('idem' => $idempresam,
											'idlele' => 4);
				 		$this->excel_data_insert_model->mixtas($m4);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $realsc = array('enero_r' => $sc[0],
	                        'febrero_r'                 => $sc[1],
	                        'marzo_r'                   => $sc[2],
	                        'abril_r'                   => $sc[3],
	                        'mayo_r'                    => $sc[4],
	                        'junio_r'                   => $sc[5],
	                        'julio_r'                   => $sc[6],
	                        'agosto_r'                  => $sc[7],
	                        'septiembre_r'              => $sc[8],
	                        'octubre_r'                 => $sc[9],
	                        'noviembre_r'              	=> $sc[10],
	                        'diciembre_r'               => $sc[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixta'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->reales($realsc);

				 		 //otros

				 		 $m5 = array('idem' => $idempresam,
											'idlele' => 5);
				 		$this->excel_data_insert_model->mixtas($m5);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $realotro = array('enero_r' => $otro[0],
	                        'febrero_r'                 => $otro[1],
	                        'marzo_r'                   => $otro[2],
	                        'abril_r'                   => $otro[3],
	                        'mayo_r'                    => $otro[4],
	                        'junio_r'                   => $otro[5],
	                        'julio_r'                   => $otro[6],
	                        'agosto_r'                  => $otro[7],
	                        'septiembre_r'              => $otro[8],
	                        'octubre_r'                 => $otro[9],
	                        'noviembre_r'              	=> $otro[10],
	                        'diciembre_r'               => $otro[11],
	                        'idmoneda'                  => $moneda,
	                        'idmixta'                   => $idmixta,
	                        'idanho'        => $anho);
				 		 $this->excel_data_insert_model->reales($realotro);
									
				}


				if($this->mupdatemix->mixtagetmv($idempresam,$moneda,$anho) > 0){
					echo "update";

					$elemento = $this->mupdatemix->mixelementomv($idempresam,$moneda,$anho);


					foreach ($elemento->result() as $value) {
								
								echo "id elemento".$value->idlele."<br>";
									echo "ID".$value->idplan."<br>";
	  
								switch ($value->idlele){
								case 1:
									
									echo "entro al caso 1";
									$mv = array('enero_mv' => $lab[0],
			                        'febrero_mv'                 => $lab[1],
			                        'marzo_mv'                   => $lab[2],
			                        'abril_mv'                   => $lab[3],
			                        'mayo_mv'                    => $lab[4],
			                        'junio_mv'                   => $lab[5],
			                        'julio_mv'                   => $lab[6],
			                        'agosto_mv'                  => $lab[7],
			                        'septiembre_mv'              => $lab[8],
			                        'octubre_mv'                 => $lab[9],
			                        'noviembre_mv'              	=> $lab[10],
			                        'diciembre_mv'               => $lab[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

			    				$this->excel_data_insert_model->updatemv($value->idmv,$mv);

									break;
								case 2: 

									echo "entro al caso 2";
									$mv = array('enero_mv' => $bb[0],
									'febrero_mv'                 => $bb[1],
									'marzo_mv'                   => $bb[2],
									'abril_mv'                   => $bb[3],
									'mayo_mv'                    => $bb[4],
									'junio_mv'                   => $bb[5],
									'julio_mv'                   => $bb[6],
									'agosto_mv'                  => $bb[7],
									'septiembre_mv'              => $bb[8],
									'octubre_mv'                 => $bb[9],
									'noviembre_mv'              	=> $bb[10],
									'diciembre_mv'               => $bb[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updatemv($value->idmv,$mv);
								break;
								case 3:
									echo "caso 3";
									 $mv = array('enero_mv' => $mat[0],
									'febrero_mv'                 => $mat[1],
									'marzo_mv'                   => $mat[2],
									'abril_mv'                   => $mat[3],
									'mayo_mv'                    => $mat[4],
									'junio_mv'                   => $mat[5],
									'julio_mv'                   => $mat[6],
									'agosto_mv'                  => $mat[7],
									'septiembre_mv'              => $mat[8],
									'octubre_mv'                 => $mat[9],
									'noviembre_mv'              	=> $mat[10],
									'diciembre_mv'               => $mat[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updatemv($value->idmv,$mv);
								break;
								case 4:
								 	 $mv = array('enero_mv' => $sc[0],
									'febrero_mv'                 => $sc[1],
									'marzo_mv'                   => $sc[2],
									'abril_mv'                   => $sc[3],
									'mayo_mv'                    => $sc[4],
									'junio_mv'                   => $sc[5],
									'julio_mv'                   => $sc[6],
									'agosto_mv'                  => $sc[7],
									'septiembre_mv'              => $sc[8],
									'octubre_mv'                 => $sc[9],
									'noviembre_mv'              	=> $sc[10],
									'diciembre_mv'               => $sc[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								 	 $this->excel_data_insert_model->updatemv($value->idmv,$mv);
								 	 break;	
								 case 5:
								 	$mv = array('enero_mv' => $otro[0],
									'febrero_mv'                 => $otro[1],
									'marzo_mv'                   => $otro[2],
									'abril_mv'                   => $otro[3],
									'mayo_mv'                    => $otro[4],
									'junio_mv'                   => $otro[5],
									'julio_mv'                   => $otro[6],
									'agosto_mv'                  => $otro[7],
									'septiembre_mv'              => $otro[8],
									'octubre_mv'                 => $otro[9],
									'noviembre_mv'              	=> $otro[10],
									'diciembre_mv'               => $otro[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

									 $this->excel_data_insert_model->updatemv($value->idmv,$mv);
									 break;

								default:
									echo "en este caso deberia de haber un error";
									break;

							}// fin siwtch



					}// fin for each result()


			 	?><script language='Javascript'>
				    window.alert('El Real y la mejor vision de la EMX se actualizo correntamente');
				    window.location="<?php echo base_url() ?>cmixtas";
				    </script>";<?php
				 //   redirect('cmixtas','refresh');

				}else{

					echo "insert";
				 		$m1 = array('idem' => $idempresam,
											'idlele' => 1);
				 		$this->excel_data_insert_model->mixtas($m1);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvlab = array('enero_mv' => $lab[0],
	                        'febrero_mv'                 => $lab[1],
	                        'marzo_mv'                   => $lab[2],
	                        'abril_mv'                   => $lab[3],
	                        'mayo_mv'                    => $lab[4],
	                        'junio_mv'                   => $lab[5],
	                        'julio_mv'                   => $lab[6],
	                        'agosto_mv'                  => $lab[7],
	                        'septiembre_mv'              => $lab[8],
	                        'octubre_mv'                 => $lab[9],
	                        'noviembre_mv'              	=> $lab[10],
	                        'diciembre_mv'               => $lab[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);

				 		 $this->excel_data_insert_model->mv($mvlab);

				 		 // bienestar y beneficios

				 		 $m2 = array('idem' => $idempresam,
											'idlele' => 2);
				 		$this->excel_data_insert_model->mixtas($m2);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		$mvbb = array('enero_mv' => $bb[0],
	                        'febrero_mv'                 => $bb[1],
	                        'marzo_mv'                   => $bb[2],
	                        'abril_mv'                   => $bb[3],
	                        'mayo_mv'                    => $bb[4],
	                        'junio_mv'                   => $bb[5],
	                        'julio_mv'                   => $bb[6],
	                        'agosto_mv'                  => $bb[7],
	                        'septiembre_mv'              => $bb[8],
	                        'octubre_mv'                 => $bb[9],
	                        'noviembre_mv'              	=> $bb[10],
	                        'diciembre_mv'               => $bb[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvbb);

				 		 // materiales

				 		$m3 = array('idem' => $idempresam,
											'idlele' => 3);
				 		$this->excel_data_insert_model->mixtas($m3);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvmat = array('enero_mv' => $mat[0],
	                        'febrero_mv'                 => $mat[1],
	                        'marzo_mv'                   => $mat[2],
	                        'abril_mv'                   => $mat[3],
	                        'mayo_mv'                    => $mat[4],
	                        'junio_mv'                   => $mat[5],
	                        'julio_mv'                   => $mat[6],
	                        'agosto_mv'                  => $mat[7],
	                        'septiembre_mv'              => $mat[8],
	                        'octubre_mv'                 => $mat[9],
	                        'noviembre_mv'              	=> $mat[10],
	                        'diciembre_mv'               => $mat[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvmat);
					
					// servicios y contratos 
				 		
				 		 $m4 = array('idem' => $idempresam,
											'idlele' => 4);
				 		$this->excel_data_insert_model->mixtas($m4);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvsc = array('enero_mv' => $sc[0],
	                        'febrero_mv'                 => $sc[1],
	                        'marzo_mv'                   => $sc[2],
	                        'abril_mv'                   => $sc[3],
	                        'mayo_mv'                    => $sc[4],
	                        'junio_mv'                   => $sc[5],
	                        'julio_mv'                   => $sc[6],
	                        'agosto_mv'                  => $sc[7],
	                        'septiembre_mv'              => $sc[8],
	                        'octubre_mv'                 => $sc[9],
	                        'noviembre_mv'              	=> $sc[10],
	                        'diciembre_mv'               => $sc[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvsc);

				 		 //otros

				 		 $m5 = array('idem' => $idempresam,
											'idlele' => 5);
				 		$this->excel_data_insert_model->mixtas($m5);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvotro = array('enero_mv' => $otro[0],
	                        'febrero_mv'                 => $otro[1],
	                        'marzo_mv'                   => $otro[2],
	                        'abril_mv'                   => $otro[3],
	                        'mayo_mv'                    => $otro[4],
	                        'junio_mv'                   => $otro[5],
	                        'julio_mv'                   => $otro[6],
	                        'agosto_mv'                  => $otro[7],
	                        'septiembre_mv'              => $otro[8],
	                        'octubre_mv'                 => $otro[9],
	                        'noviembre_mv'              	=> $otro[10],
	                        'diciembre_mv'               => $otro[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvotro);
										
				 		 // BUSCAR COMO REDIRECCIONAR CORRECTAMENTE DESDE CODEIGNITER PARA OTRA VISTA USANDO JAVASCRIPT
			 		?><script language='Javascript'>
				    window.alert('El real y la mejor vision EMX se cargo correntamente');
				    window.location='<?= base_url()?>cmixtas';
				    </script>
				    <?php


				}



			}/// fin de opcion 2 para real


			//////////////// OPCION PARA MEJOR VISION /////////////////////////////
			if($prma== '3'){

				if($this->mupdatemix->mixtagetmv($idempresam,$moneda,$anho) > 0){
					echo "update";

					$elemento = $this->mupdatemix->mixelementomv($idempresam,$moneda,$anho);


					foreach ($elemento->result() as $value) {
								
								echo "id elemento".$value->idlele."<br>";
									echo "ID".$value->idmv."<br>";
	  
								switch ($value->idlele){
								case 1:
									
									echo "entro al caso 1";
									$mv = array('enero_mv' => $lab[0],
			                        'febrero_mv'                 => $lab[1],
			                        'marzo_mv'                   => $lab[2],
			                        'abril_mv'                   => $lab[3],
			                        'mayo_mv'                    => $lab[4],
			                        'junio_mv'                   => $lab[5],
			                        'julio_mv'                   => $lab[6],
			                        'agosto_mv'                  => $lab[7],
			                        'septiembre_mv'              => $lab[8],
			                        'octubre_mv'                 => $lab[9],
			                        'noviembre_mv'              	=> $lab[10],
			                        'diciembre_mv'               => $lab[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

			    				$this->excel_data_insert_model->updatemv($value->idmv,$mv);

									break;
								case 2: 

									echo "entro al caso 2";
									$mv = array('enero_mv' => $bb[0],
									'febrero_mv'                 => $bb[1],
									'marzo_mv'                   => $bb[2],
									'abril_mv'                   => $bb[3],
									'mayo_mv'                    => $bb[4],
									'junio_mv'                   => $bb[5],
									'julio_mv'                   => $bb[6],
									'agosto_mv'                  => $bb[7],
									'septiembre_mv'              => $bb[8],
									'octubre_mv'                 => $bb[9],
									'noviembre_mv'              	=> $bb[10],
									'diciembre_mv'               => $bb[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updatemv($value->idmv,$mv);
								break;
								case 3:
									echo "caso 3";
									 $mv = array('enero_mv' => $mat[0],
									'febrero_mv'                 => $mat[1],
									'marzo_mv'                   => $mat[2],
									'abril_mv'                   => $mat[3],
									'mayo_mv'                    => $mat[4],
									'junio_mv'                   => $mat[5],
									'julio_mv'                   => $mat[6],
									'agosto_mv'                  => $mat[7],
									'septiembre_mv'              => $mat[8],
									'octubre_mv'                 => $mat[9],
									'noviembre_mv'              	=> $mat[10],
									'diciembre_mv'               => $mat[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updatemv($value->idmv,$mv);
								break;
								case 4:
								 	 $mv = array('enero_mv' => $sc[0],
									'febrero_mv'                 => $sc[1],
									'marzo_mv'                   => $sc[2],
									'abril_mv'                   => $sc[3],
									'mayo_mv'                    => $sc[4],
									'junio_mv'                   => $sc[5],
									'julio_mv'                   => $sc[6],
									'agosto_mv'                  => $sc[7],
									'septiembre_mv'              => $sc[8],
									'octubre_mv'                 => $sc[9],
									'noviembre_mv'              	=> $sc[10],
									'diciembre_mv'               => $sc[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								 	 $this->excel_data_insert_model->updatemv($value->idmv,$mv);
								 	 break;	
								 case 5:
								 	$mv = array('enero_mv' => $otro[0],
									'febrero_mv'                 => $otro[1],
									'marzo_mv'                   => $otro[2],
									'abril_mv'                   => $otro[3],
									'mayo_mv'                    => $otro[4],
									'junio_mv'                   => $otro[5],
									'julio_mv'                   => $otro[6],
									'agosto_mv'                  => $otro[7],
									'septiembre_mv'              => $otro[8],
									'octubre_mv'                 => $otro[9],
									'noviembre_mv'              	=> $otro[10],
									'diciembre_mv'               => $otro[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

									 $this->excel_data_insert_model->updatemv($value->idmv,$mv);
									 break;

								default:
									echo "en este caso deberia de haber un error";
									break;

							}// fin siwtch



					}// fin for each result()


			 	?><script language='Javascript'>
				    window.alert('La mejor vision de la EMX se actualizo correntamente');
				    window.location="<?php echo base_url() ?>cmixtas";
				    </script>";<?php
				 //   redirect('cmixtas','refresh');

				}else{

					echo "insert";
				 		$m1 = array('idem' => $idempresam,
											'idlele' => 1);
				 		$this->excel_data_insert_model->mixtas($m1);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvlab = array('enero_mv' => $lab[0],
	                        'febrero_mv'                 => $lab[1],
	                        'marzo_mv'                   => $lab[2],
	                        'abril_mv'                   => $lab[3],
	                        'mayo_mv'                    => $lab[4],
	                        'junio_mv'                   => $lab[5],
	                        'julio_mv'                   => $lab[6],
	                        'agosto_mv'                  => $lab[7],
	                        'septiembre_mv'              => $lab[8],
	                        'octubre_mv'                 => $lab[9],
	                        'noviembre_mv'              	=> $lab[10],
	                        'diciembre_mv'               => $lab[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);

				 		 $this->excel_data_insert_model->mv($mvlab);

				 		 // bienestar y beneficios

				 		 $m2 = array('idem' => $idempresam,
											'idlele' => 2);
				 		$this->excel_data_insert_model->mixtas($m2);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		$mvbb = array('enero_mv' => $bb[0],
	                        'febrero_mv'                 => $bb[1],
	                        'marzo_mv'                   => $bb[2],
	                        'abril_mv'                   => $bb[3],
	                        'mayo_mv'                    => $bb[4],
	                        'junio_mv'                   => $bb[5],
	                        'julio_mv'                   => $bb[6],
	                        'agosto_mv'                  => $bb[7],
	                        'septiembre_mv'              => $bb[8],
	                        'octubre_mv'                 => $bb[9],
	                        'noviembre_mv'              	=> $bb[10],
	                        'diciembre_mv'               => $bb[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvbb);

				 		 // materiales

				 		$m3 = array('idem' => $idempresam,
											'idlele' => 3);
				 		$this->excel_data_insert_model->mixtas($m3);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvmat = array('enero_mv' => $mat[0],
	                        'febrero_mv'                 => $mat[1],
	                        'marzo_mv'                   => $mat[2],
	                        'abril_mv'                   => $mat[3],
	                        'mayo_mv'                    => $mat[4],
	                        'junio_mv'                   => $mat[5],
	                        'julio_mv'                   => $mat[6],
	                        'agosto_mv'                  => $mat[7],
	                        'septiembre_mv'              => $mat[8],
	                        'octubre_mv'                 => $mat[9],
	                        'noviembre_mv'              	=> $mat[10],
	                        'diciembre_mv'               => $mat[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvmat);
					
					// servicios y contratos 
				 		
				 		 $m4 = array('idem' => $idempresam,
											'idlele' => 4);
				 		$this->excel_data_insert_model->mixtas($m4);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvsc = array('enero_mv' => $sc[0],
	                        'febrero_mv'                 => $sc[1],
	                        'marzo_mv'                   => $sc[2],
	                        'abril_mv'                   => $sc[3],
	                        'mayo_mv'                    => $sc[4],
	                        'junio_mv'                   => $sc[5],
	                        'julio_mv'                   => $sc[6],
	                        'agosto_mv'                  => $sc[7],
	                        'septiembre_mv'              => $sc[8],
	                        'octubre_mv'                 => $sc[9],
	                        'noviembre_mv'              	=> $sc[10],
	                        'diciembre_mv'               => $sc[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvsc);

				 		 //otros

				 		 $m5 = array('idem' => $idempresam,
											'idlele' => 5);
				 		$this->excel_data_insert_model->mixtas($m5);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $mvotro = array('enero_mv' => $otro[0],
	                        'febrero_mv'                 => $otro[1],
	                        'marzo_mv'                   => $otro[2],
	                        'abril_mv'                   => $otro[3],
	                        'mayo_mv'                    => $otro[4],
	                        'junio_mv'                   => $otro[5],
	                        'julio_mv'                   => $otro[6],
	                        'agosto_mv'                  => $otro[7],
	                        'septiembre_mv'              => $otro[8],
	                        'octubre_mv'                 => $otro[9],
	                        'noviembre_mv'              	=> $otro[10],
	                        'diciembre_mv'               => $otro[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->mv($mvotro);
										
				 		 // BUSCAR COMO REDIRECCIONAR CORRECTAMENTE DESDE CODEIGNITER PARA OTRA VISTA USANDO JAVASCRIPT
			 		?><script language='Javascript'>
				    window.alert('La mejor vision de la EMX se ha cargado correntamente');
				    window.location='<?= base_url()?>cmixtas';
				    </script>
				    <?php


				}

			}// fin de la opcion para mejor vision
	
	//////////////// OPCION PARA ANTEPROYECTO /////////////////////////////
			if($prma== '4'){

				if($this->mupdatemix->mixtagetante($idempresam,$moneda,$anho) > 0){
					echo "update";

					$elemento = $this->mupdatemix->mixelementoante($idempresam,$moneda,$anho);


					foreach ($elemento->result() as $value) {
								
								echo "id elemento".$value->idlele."<br>";
								 
	  
								switch ($value->idlele){
								case 1:
									
									echo "entro al caso 1";
									$ant = array('enero_ant' => $lab[0],
			                        'febrero_ant'                 => $lab[1],
			                        'marzo_ant'                   => $lab[2],
			                        'abril_ant'                   => $lab[3],
			                        'mayo_ant'                    => $lab[4],
			                        'junio_ant'                   => $lab[5],
			                        'julio_ant'                   => $lab[6],
			                        'agosto_ant'                  => $lab[7],
			                        'septiembre_ant'              => $lab[8],
			                        'octubre_ant'                 => $lab[9],
			                        'noviembre_ant'              	=> $lab[10],
			                        'diciembre_ant'               => $lab[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

			    				$this->excel_data_insert_model->updateante($value->idante,$ant);

									break;
								case 2: 

									echo "entro al caso 2";
									$ante = array('enero_ant' => $bb[0],
									'febrero_ant'                 => $bb[1],
									'marzo_ant'                   => $bb[2],
									'abril_ant'                   => $bb[3],
									'mayo_ant'                    => $bb[4],
									'junio_ant'                   => $bb[5],
									'julio_ant'                   => $bb[6],
									'agosto_ant'                  => $bb[7],
									'septiembre_ant'              => $bb[8],
									'octubre_ant'                 => $bb[9],
									'noviembre_ant'              	=> $bb[10],
									'diciembre_ant'               => $bb[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updateante($value->idante,$ante);
								break;
								case 3:
									echo "caso 3";
									 $ante = array('enero_ant' => $mat[0],
									'febrero_ant'                 => $mat[1],
									'marzo_ant'                   => $mat[2],
									'abril_ant'                   => $mat[3],
									'mayo_ant'                    => $mat[4],
									'junio_ant'                   => $mat[5],
									'julio_ant'                   => $mat[6],
									'agosto_ant'                  => $mat[7],
									'septiembre_ant'              => $mat[8],
									'octubre_ant'                 => $mat[9],
									'noviembre_ant'              	=> $mat[10],
									'diciembre_ant'               => $mat[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								$this->excel_data_insert_model->updateante($value->idante,$ante);
								break;
								case 4:
								 	 $ante = array('enero_ant' => $sc[0],
									'febrero_ant'                 => $sc[1],
									'marzo_ant'                   => $sc[2],
									'abril_ant'                   => $sc[3],
									'mayo_ant'                    => $sc[4],
									'junio_ant'                   => $sc[5],
									'julio_ant'                   => $sc[6],
									'agosto_ant'                  => $sc[7],
									'septiembre_ant'              => $sc[8],
									'octubre_ant'                 => $sc[9],
									'noviembre_ant'              	=> $sc[10],
									'diciembre_ant'               => $sc[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

								 	 $this->excel_data_insert_model->updateante($value->idante,$ante);
								 	 break;	
								 case 5:
								 	$ante = array('enero_ant' => $otro[0],
									'febrero_ant'                 => $otro[1],
									'marzo_ant'                   => $otro[2],
									'abril_ant'                   => $otro[3],
									'mayo_ant'                    => $otro[4],
									'junio_ant'                   => $otro[5],
									'julio_ant'                   => $otro[6],
									'agosto_ant'                  => $otro[7],
									'septiembre_ant'              => $otro[8],
									'octubre_ant'                 => $otro[9],
									'noviembre_ant'              	=> $otro[10],
									'diciembre_ant'               => $otro[11],
			                        'idmonedafk'                  => $moneda, 
			                        'idmixtafk'                   => $value->idmixta,
			                        'anho'                    => $anho);

									 $this->excel_data_insert_model->updateante($value->idante,$ante);
									 break;

								default:
									echo "en este caso deberia de haber un error";
									break;

							}// fin siwtch



					}// fin for each result()


			 	?><script language='Javascript'>
				    window.alert('El anteproyecto de la EMX se actualizo correntamente');
				    window.location="<?php echo base_url() ?>cmixtas";
				    </script>";<?php
				 //   redirect('cmixtas','refresh');

				}else{

					echo "insert";
				 		$m1 = array('idem' => $idempresam,
											'idlele' => 1);
				 		$this->excel_data_insert_model->mixtas($m1);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $antelab = array('enero_ant' => $lab[0],
	                        'febrero_ant'                 => $lab[1],
	                        'marzo_ant'                   => $lab[2],
	                        'abril_ant'                   => $lab[3],
	                        'mayo_ant'                    => $lab[4],
	                        'junio_ant'                   => $lab[5],
	                        'julio_ant'                   => $lab[6],
	                        'agosto_ant'                  => $lab[7],
	                        'septiembre_ant'              => $lab[8],
	                        'octubre_ant'                 => $lab[9],
	                        'noviembre_ant'              	=> $lab[10],
	                        'diciembre_ant'               => $lab[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);

				 		 $this->excel_data_insert_model->anteproyecto($antelab);

				 		 // bienestar y beneficios

				 		 $m2 = array('idem' => $idempresam,
											'idlele' => 2);
				 		$this->excel_data_insert_model->mixtas($m2);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		$antebb = array('enero_ant' => $bb[0],
	                        'febrero_ant'                 => $bb[1],
	                        'marzo_ant'                   => $bb[2],
	                        'abril_ant'                   => $bb[3],
	                        'mayo_ant'                    => $bb[4],
	                        'junio_ant'                   => $bb[5],
	                        'julio_ant'                   => $bb[6],
	                        'agosto_ant'                  => $bb[7],
	                        'septiembre_ant'              => $bb[8],
	                        'octubre_ant'                 => $bb[9],
	                        'noviembre_ant'              	=> $bb[10],
	                        'diciembre_ant'               => $bb[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   =>$idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->anteproyecto($antebb);

				 		 // materiales

				 		$m3 = array('idem' => $idempresam,
											'idlele' => 3);
				 		$this->excel_data_insert_model->mixtas($m3);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $antemat = array('enero_ant' => $mat[0],
	                        'febrero_ant'                 => $mat[1],
	                        'marzo_ant'                   => $mat[2],
	                        'abril_ant'                   => $mat[3],
	                        'mayo_ant'                    => $mat[4],
	                        'junio_ant'                   => $mat[5],
	                        'julio_ant'                   => $mat[6],
	                        'agosto_ant'                  => $mat[7],
	                        'septiembre_ant'              => $mat[8],
	                        'octubre_ant'                 => $mat[9],
	                        'noviembre_ant'              	=> $mat[10],
	                        'diciembre_ant'               => $mat[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->anteproyecto($antemat);
					
					// servicios y contratos 
				 		
				 		 $m4 = array('idem' => $idempresam,
											'idlele' => 4);
				 		$this->excel_data_insert_model->mixtas($m4);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $antesc = array('enero_ant' => $sc[0],
	                        'febrero_ant'                 => $sc[1],
	                        'marzo_ant'                   => $sc[2],
	                        'abril_ant'                   => $sc[3],
	                        'mayo_ant'                    => $sc[4],
	                        'junio_ant'                   => $sc[5],
	                        'julio_ant'                   => $sc[6],
	                        'agosto_ant'                  => $sc[7],
	                        'septiembre_ant'              => $sc[8],
	                        'octubre_ant'                 => $sc[9],
	                        'noviembre_ant'              	=> $sc[10],
	                        'diciembre_ant'               => $sc[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->anteproyecto($antesc);

				 		 //otros

				 		 $m5 = array('idem' => $idempresam,
											'idlele' => 5);
				 		$this->excel_data_insert_model->mixtas($m5);
				 		$idmixta =	$this->get_id->getmax_number_emx();
				 		 $anteotro = array('enero_ant' => $otro[0],
	                        'febrero_ant'                 => $otro[1],
	                        'marzo_ant'                   => $otro[2],
	                        'abril_ant'                   => $otro[3],
	                        'mayo_ant'                    => $otro[4],
	                        'junio_ant'                   => $otro[5],
	                        'julio_ant'                   => $otro[6],
	                        'agosto_ant'                  => $otro[7],
	                        'septiembre_ant'              => $otro[8],
	                        'octubre_ant'                 => $otro[9],
	                        'noviembre_ant'              	=> $otro[10],
	                        'diciembre_ant'               => $otro[11],
	                        'idmonedafk'                  => $moneda,
	                        'idmixtafk'                   => $idmixta,
	                        'anho'        => $anho);
				 		 $this->excel_data_insert_model->anteproyecto($anteotro);

			 		?><script language='Javascript'>
				    window.alert('El anteproyecto de la EMX se cargo correntamente');
				    window.location='<?= base_url()?>cmixtas';
				    </script>
				    <?php


				}

			}// fin de la opcion para anteproyecto
			
	}// fin de la function que estamos usando


}