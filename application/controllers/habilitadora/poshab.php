<?php


class Poshab extends CI_Controller
{
	
	function __construct()
	{
		parent::__construct();	
		$this->load->model('mupdatemix');	
		$this->load->model('excel_data_insert_model');
		$this->load->model('get_id');
	}

	public function index(){

		$lab = $this->input->post('l1');
		$bb = $this->input->post('bb');
		$mat = $this->input->post('m1');
		$sc = $this->input->post('sc');
		$otro = $this->input->post('o1');
		$moneda = $this->input->post('moneda');
		$idhabilitadora = $this->input->post('habilitadora');
		$anho = $this->input->post('anhohab');

		// arreglo para insertar en la tabla mixta

		echo $anho;
		echo $idhabilitadora;
 

			//$query = $this->mupdatemix->verificarmix($idhabilitadora);
			 
			
			if($this->mupdatemix->habtrue($idhabilitadora,$moneda,$anho) > 0){
				echo "update";

				$elemento = $this->mupdatemix->hab($idhabilitadora,$moneda,$anho);


				foreach ($elemento->result() as $value) {
							
							//echo "id elemento".$value->idlele."<br>";
								echo "ID".$value->idreal."<br>";
  
							switch ($value->idelementoc){
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
		                        'idhab'                   => $value->idhab,
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
		                        'idhab'                   => $value->idhab,
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
		                        'idhab'                   => $value->idhab,
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
		                        'idhab'                   => $value->idhab,
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
		                        'idhab'                   => $value->idhab,
		                        'idanho'                    => $anho);

								 $this->mupdatemix->updaterealmixta($real,$value->idreal);
								 break;

							default:
								echo "en este caso deberia de haber un error";
								break;

						}// fin siwtch



				}// fin for each result()

				?><script language='Javascript'>
			    window.alert('El real de la EMX se ha cargado correntamente');
			    window.location='<?= base_url()?>habilitadora/chabopm';
			    </script>
			    <?php
		 	 
			 //   redirect('cgerencia','refresh');

			}else{

				echo "insert";
			 		$m1 = array('idgerencia' => $idhabilitadora,
										'idelementoc' => 1);
			 		$this->excel_data_insert_model->habilitador($m1);
			 		$idhab =	$this->get_id->getmax_number_hab();
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
                        'idhab'                   =>$idhab,
                        'idanho'        => $anho);

			 		 $this->excel_data_insert_model->reales($realab);

			 		 // bienestar y beneficios

			 		 $m2 = array('idgerencia' => $idhabilitadora,
										'idelementoc' => 2);
			 		$this->excel_data_insert_model->habilitador($m2);
			 		$idhab =	$this->get_id->getmax_number_hab();
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
                        'idhab'                   =>$idhab,
                        'idanho'        => $anho);
			 		 $this->excel_data_insert_model->reales($realbb);

			 		 // materiales

			 		$m3 = array('idgerencia' => $idhabilitadora,
										'idelementoc' => 3);
			 		$this->excel_data_insert_model->habilitador($m3);
			 		$idhab =	$this->get_id->getmax_number_hab();
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
                        'idhab'                   => $idhab,
                        'idanho'        => $anho);
			 		 $this->excel_data_insert_model->reales($realmat);
				
				// servicios y contratos 
			 		
			 		 $m4 = array('idgerencia' => $idhabilitadora,
										'idelementoc' => 4);
			 		$this->excel_data_insert_model->habilitador($m4);
			 		$idhab =	$this->get_id->getmax_number_hab();
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
                        'idhab'                   => $idhab,
                        'idanho'        => $anho);
			 		 $this->excel_data_insert_model->reales($realsc);

			 		 //otros

			 		 $m5 = array('idgerencia' => $idhabilitadora,
										'idelementoc' => 5);
			 		$this->excel_data_insert_model->habilitador($m5);
			 		$idhab =	$this->get_id->getmax_number_hab();
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
                        'idhab'                   => $idhab,
                        'idanho'        => $anho);
			 		 $this->excel_data_insert_model->reales($realotro);
									
			 		 // BUSCAR COMO REDIRECCIONAR CORRECTAMENTE DESDE CODEIGNITER PARA OTRA VISTA USANDO JAVASCRIPT
		 		?><script language='Javascript'>
			    window.alert('El real de la EMX se ha cargado correntamente');
			    window.location='<?= base_url()?>habilitadora/chabopm';
			    </script>
			    <?php
		 		
			}



	}// fin de la function que estamos usando


}//fin class en general