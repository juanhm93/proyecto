<?php

/**
* 
*/
class Cdirejep extends CI_Controller
{
	
	
	function __construct()
	{
		parent::__construct();
		$this->load->model('fecha');
		$this->load->model('memproyecto');
		$this->load->model('mdireccion');
		$this->load->model('excel_data_insert_model');
		$this->load->model('get_id');
	}

	public function index(){

		$this->load->view('cuerpo/head');
		$this->load->view('cuerpo/header');
		$this->load->view('cuerpo/nav');
		$result['moneda'] = $this->memproyecto->getmoneda();
		$this->load->view('vdir/vdirejep',$result);
		$this->load->view('cuerpo/footer');	
	}


	public function dirupdate(){

		$tip = $this->input->post('v2');
		$mon	= $this->input->post('v3');
		$anh = $this->input->post('v4'); 

		$resultado = $this->mdireccion->getdirplan($tip,$mon,$anh);

		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value) {

			$arr[$i]['iddirfk']=$value->iddirfk;
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

	public function dirupdatereal(){


		$tip = $this->input->post('v2');
		$mon	= $this->input->post('v3');
		$anh = $this->input->post('v4'); 


		$resultado = $this->mdireccion->getdireal($tip,$mon,$anh);

		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value) {

			$arr[$i]['iddirfk'] = $value->iddirfk;
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

	public function dirupdatemv(){

		$tip = $this->input->post('v2');
		$mon	= $this->input->post('v3');
		$anh = $this->input->post('v4'); 

		$resultado = $this->mdireccion->getdirmv($tip,$mon,$anh);

		$arr = array();
		$i=0;

		foreach ($resultado->result() as $value) {

			$arr[$i]['iddirfk'] = $value->iddirfk;
			$arr[$i]['elemento'] = $value->elemento;
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

	public function dirupdateante(){



		$resultado = $this->mdireccion->getdirant($tip,$mon,$anh);



		$arr = array();
		$i=0;


		foreach ($resultado->result() as $value) {

			$arr[$i]['iddirfk'] = $value->iddirfk;
			$arr[$i]['elemento'] = $value->elemento;
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

	public function postdireccion(){

		$lab = $this->input->post('l1');
		$bb = $this->input->post('bb');
		$mat = $this->input->post('m1');
		$sc = $this->input->post('sc');
		$otro = $this->input->post('o1');
		$PR = $this->input->post('PR');
		$moneda = $this->input->post('moneda');
		$invop = $this->input->post('invop');
		$anho = $this->input->post('anhodir');

		if($invop == '1'){

			$auxinv = 1;

		}else{

			$auxinv = 2;
		}


		if($PR == '1'){


			if($this->mdireccion->cantdirplan($auxinv,$moneda,$anho) > 0){
			 

				$elemento = $this->mdireccion->elementodirplan($auxinv,$moneda,$anho);


			foreach ($elemento->result() as $value) {
				 
				 

				switch ($value->idelefk){
					case 1:

					//echo "entro al caso 1";
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updateplan($value->idplan,$plan);

					break;
					case 2: 

					//echo "entro al caso 2";
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updateplan($value->idplan,$plan);
					break;
					case 3:
					//echo "caso 3";
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
						'iddirfk'                   => $value->iddir,
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
						'iddirfk'                   => $value->iddir,
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updateplan($value->idplan,$plan);
					break;

					default:
					echo "en este caso deberia de haber un error";
					break;

						}// fin siwtch



				}// fin for each result()


				?><script language='Javascript'>
				window.alert('El real de dirreccion ejecutiva se actualizo correntamente');
				window.location="<?php echo base_url() ?>cdirejep";
			</script>";<?php
			 //   redirect('cmixtas','refresh');

		}else{

			//echo "insert";

			$d1 = array('iddir_iofk' => $auxinv,
				'idelefk' => 1);
			$this->excel_data_insert_model->direccion($d1);
			$iddir =	$this->get_id->getmax_number_dir();
			$planab = array('enero_p' => $lab[0],
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
				'iddirfk'                   =>$iddir,
				'idanho'        => $anho);

			$this->excel_data_insert_model->plan($planab);

			 		 // bienestar y beneficios

			$d2 = array('iddir_iofk' => $auxinv,
				'idelefk' => 2);
			$this->excel_data_insert_model->direccion($d2);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   =>$iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->plan($planbb);

			 		 // materiales

			$d3 = array('iddir_iofk' => $auxinv,
				'idelefk' => 3);
			$this->excel_data_insert_model->direccion($d3);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->plan($planmat);

				// servicios y contratos 

			$d4 = array('iddir_iofk' => $auxinv,
				'idelefk' => 4);
			$this->excel_data_insert_model->direccion($d4);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->plan($plansc);

			 		 //otros

			$d5 = array('iddir_iofk' => $auxinv,
				'idelefk' => 5);
			$this->excel_data_insert_model->direccion($d5);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->plan($planotro);

			?><script language='Javascript'>
				window.alert('El plan de dirreccion ejecutiva se inserto correntamente');
				window.location="<?php echo base_url() ?>cdirejep";
			</script>";<?php
			
	}// fin else condiccion si  existe algun registro en el real




		}// FIN DE OPCION PR 1 




		if($PR == '2'){


			if($this->mdireccion->cantdir($auxinv,$moneda,$anho) > 0){
			echo "update";

			$elemento = $this->mdireccion->elementodir($auxinv,$moneda,$anho);


			foreach ($elemento->result() as $value) {


				switch ($value->idelefk){
					case 1:

					//echo "entro al caso 1";
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updatereal($value->idreal,$real);

					break;
					case 2: 

					//echo "entro al caso 2";
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updatereal($value->idreal,$real);
					break;
					case 3:
					//echo "caso 3";
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updatereal($value->idreal,$real);
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updatereal($value->idreal,$real);
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
						'iddirfk'                   => $value->iddir,
						'idanho'                    => $anho);

					$this->excel_data_insert_model->updatereal($value->idreal,$real);
					break;

					default:
					echo "en este caso deberia de haber un error";
					break;

						}// fin siwtch



				}// fin for each result()


				 
			 //   redirect('cmixtas','refresh');

		}else{

			//echo "insert";

			$d1 = array('iddir_iofk' => $auxinv,
				'idelefk' => 1);
			$this->excel_data_insert_model->direccion($d1);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   =>$iddir,
				'idanho'        => $anho);

			$this->excel_data_insert_model->reales($realab);

			 		 // bienestar y beneficios

			$d2 = array('iddir_iofk' => $auxinv,
				'idelefk' => 2);
			$this->excel_data_insert_model->direccion($d2);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   =>$iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->reales($realbb);

			 		 // materiales

			$d3 = array('iddir_iofk' => $auxinv,
				'idelefk' => 3);
			$this->excel_data_insert_model->direccion($d3);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->reales($realmat);

				// servicios y contratos 

			$d4 = array('iddir_iofk' => $auxinv,
				'idelefk' => 4);
			$this->excel_data_insert_model->direccion($d4);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->reales($realsc);

			 		 //otros

			$d5 = array('iddir_iofk' => $auxinv,
				'idelefk' => 5);
			$this->excel_data_insert_model->direccion($d5);
			$iddir =	$this->get_id->getmax_number_dir();
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
				'iddirfk'                   => $iddir,
				'idanho'        => $anho);
			$this->excel_data_insert_model->reales($realotro);
			
	}// fin else condiccion si  existe algun registro en el real


	if($this->mdireccion->cantdirmv($auxinv,$moneda,$anho) > 0){

			$elemento = $this->mdireccion->elementodirmv($auxinv,$moneda,$anho);


			foreach ($elemento->result() as $value) {


				switch ($value->idelefk){
					case 1:

					//echo "entro al caso 1";
					$mejorvision = array('enero_mv' => $lab[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);

					break;
					case 2: 

					//echo "entro al caso 2";
					$mejorvision = array('enero_mv' => $bb[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;
					case 3:
					//echo "caso 3";
					$mejorvision = array('enero_mv' => $mat[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;
					case 4:
					$mejorvision = array('enero_mv' => $sc[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;	
					case 5:
					$mejorvision = array('enero_mv' => $otro[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;

					default:
					echo "en este caso deberia de haber un error";
					break;

						}// fin siwtch



				}// fin for each result()


				?><script language='Javascript'>
				window.alert('El real de dirreccion ejecutiva se actualizo correntamente');
				window.location="<?php echo base_url() ?>cdirejep";
			</script>";<?php
			 //   redirect('cmixtas','refresh');

		}else{

			//echo "insert";

			$d1 = array('iddir_iofk' => $auxinv,
				'idelefk' => 1);
			$this->excel_data_insert_model->direccion($d1);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvab = array('enero_mv' => $lab[0],
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
				'iddirfk'                   =>$iddir,
				'anho'        => $anho);

			$this->excel_data_insert_model->mv($mejorvab);

			 		 // bienestar y beneficios

			$d2 = array('iddir_iofk' => $auxinv,
				'idelefk' => 2);
			$this->excel_data_insert_model->direccion($d2);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvbb = array('enero_mv' => $bb[0],
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
				'iddirfk'                   =>$iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvbb);

			 		 // materiales

			$d3 = array('iddir_iofk' => $auxinv,
				'idelefk' => 3);
			$this->excel_data_insert_model->direccion($d3);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvmat = array('enero_mv' => $mat[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvmat);

				// servicios y contratos 
			$d4 = array('iddir_iofk' => $auxinv,
				'idelefk' => 4);
			$this->excel_data_insert_model->direccion($d4);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvsc = array('enero_mv' => $sc[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvsc);

			 		 //otros

			$d5 = array('iddir_iofk' => $auxinv,
				'idelefk' => 5);
			$this->excel_data_insert_model->direccion($d5);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvotro = array('enero_mv' => $otro[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvotro);

		?><script language='Javascript'>
			window.alert('La mejor vision cargo correntamente');
			window.location='<?= base_url()?>cdirejep';
		</script>
		<?php

			
		}// fin ahora para cambiar la mejor vision



		}//fin del pr = 2

		if($PR == '3'){

			if($this->mdireccion->cantdirmv($auxinv,$moneda,$anho) > 0){

			$elemento = $this->mdireccion->elementodirmv($auxinv,$moneda,$anho);


			foreach ($elemento->result() as $value) {


				switch ($value->idelefk){
					case 1:

					//echo "entro al caso 1";
					$mejorvision = array('enero_mv' => $lab[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);

					break;
					case 2: 

					//echo "entro al caso 2";
					$mejorvision = array('enero_mv' => $bb[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;
					case 3:
					//echo "caso 3";
					$mejorvision = array('enero_mv' => $mat[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;
					case 4:
					$mejorvision = array('enero_mv' => $sc[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;	
					case 5:
					$mejorvision = array('enero_mv' => $otro[0],
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
						'iddirfk'                   => $value->iddir,
						'anho'                    => $anho);

					$this->excel_data_insert_model->updatemv($value->idmv,$mejorvision);
					break;

					default:
					echo "en este caso deberia de haber un error";
					break;

						}// fin siwtch



				}// fin for each result()


				?><script language='Javascript'>
				window.alert('El real de dirreccion ejecutiva se actualizo correntamente');
				window.location="<?php echo base_url() ?>cdirejep";
			</script>";<?php
			 //   redirect('cmixtas','refresh');

		}else{



			$d1 = array('iddir_iofk' => $auxinv,
				'idelefk' => 1);
			$this->excel_data_insert_model->direccion($d1);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvab = array('enero_mv' => $lab[0],
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
				'iddirfk'                   =>$iddir,
				'anho'        => $anho);

			$this->excel_data_insert_model->mv($mejorvab);

			 		 // bienestar y beneficios

			$d2 = array('iddir_iofk' => $auxinv,
				'idelefk' => 2);
			$this->excel_data_insert_model->direccion($d2);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvbb = array('enero_mv' => $bb[0],
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
				'iddirfk'                   =>$iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvbb);

			 		 // materiales

			$d3 = array('iddir_iofk' => $auxinv,
				'idelefk' => 3);
			$this->excel_data_insert_model->direccion($d3);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvmat = array('enero_mv' => $mat[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvmat);

				// servicios y contratos 
			$d4 = array('iddir_iofk' => $auxinv,
				'idelefk' => 4);
			$this->excel_data_insert_model->direccion($d4);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvsc = array('enero_mv' => $sc[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvsc);

			 		 //otros

			$d5 = array('iddir_iofk' => $auxinv,
				'idelefk' => 5);
			$this->excel_data_insert_model->direccion($d5);
			$iddir =	$this->get_id->getmax_number_dir();
			$mejorvotro = array('enero_mv' => $otro[0],
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
				'iddirfk'                   => $iddir,
				'anho'        => $anho);
			$this->excel_data_insert_model->mv($mejorvotro);

			?><script language='Javascript'>
			window.alert('La mejor vision se cargo correntamente');
			window.location='<?= base_url()?>cdirejep';
		</script>
		<?php
			
	}// fin ahora para cambiar la mejor vision 


		


		}//fin pr 3 condicion de mv


		
	}// fin de la function que estamos usando



}