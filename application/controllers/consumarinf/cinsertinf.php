<?php


/**
* 
*/
class Cinsertinf extends CI_Controller
{
	
	function __construct()
	{	
		parent::__construct();
		 $this->load->model('mconsumarinf/mconsumarinf');
	}

	public function gerenciadiv(){


		$gerencias = $this->input->post('checkea');
		$tipodiv  = $this->input->post('tipodiv');
		$num = $this->input->post('seleccionar');
		for ($i=0; $i < $num ; $i++) { 
		
			$insert = array('idtipo' => $tipodiv);
			$this->mconsumarinf->consumargerencia($gerencias[$i],$insert);	 	
		}
		?>
		<script language='Javascript'>
			    window.alert('se actualizo el tipo al que pertenece');
			    window.location="<?php echo base_url() ?>consumarinf/cinfgere";
			    </script>";
		<?php 
			 

	}

	public function siglas(){

		$gerencia = $this->input->post('gerencia');
		$siglas = $this->input->post('siglas');

		$consumarsiglas = array('siglas' => $siglas);
		
		if($this->mconsumarinf->siglasg($gerencia,$consumarsiglas)){?>
			<script language='Javascript'>
			    window.alert('se actualizo las siglas de la gerencia');
			    window.location="<?php echo base_url() ?>consumarinf/csiglasgere";
			    </script>"
			    <?php
		
		}

	}

	public function pro(){

		$proyecto = $this->input->post('proyectos');

		$dom = $this->input->post('dom');

		if($dom == 1){

			$div = $this->input->post('divi');

			$proupd = array('iddivision' => $div,
							'iddom'=> $dom);


			if($this->mconsumarinf->pro($proyecto,$proupd)){
				?>
			<script language='Javascript'>
			    window.alert('termino de completar los registros del proyecto');
			    window.location="<?php echo base_url() ?>consumarinf/cinfproyectos";
			    </script>"
			    <?php
		

			}

		}
		if ($dom ==2) {


			$emx = $this->input->post('emx');
			$proupd = array(
							'iddom'=> $dom,
							'idemx'=> $emx);

			if($this->mconsumarinf->pro($proyecto,$proupd)){
				?>
			<script language='Javascript'>
			    window.alert('termino de completar los registros del proyecto');
			    window.location="<?php echo base_url() ?>consumarinf/cinfproyectos";
			    </script>"
			    <?php

			}

		}
	}
}