<?php


/**
* 
*/
class Mcargando extends CI_model
{
	
	function __construct()
	{
		parent::__construct();

	}
	public function hab($gere){

		if($this->db->insert('gerencia',$gere)){
			return true;
		}	
	}

	public function division($div){

		if($this->db->insert('division',$div)){
			return true;	
		}
		
	}	

	public function moneda($mon){

		if($this->db->insert('moneda',$mon)){
			return true;
		}
	}

	public function elemento($costo){

		if($this->db->insert('elementocosto',$costo)){
			return true;
		}
	}

	public function categoria($catego){

		if($this->db->insert('categoria',$catego)){
			return true;
		}
	}

	public function gerepro($gerep){
		if($this->db->insert('gereproyecto',$gerep)){
			return true;
		}
		

	}
	public function proyecto($proyecto){

		if($this->db->insert('proyecto',$proyecto)){
			return true;
		}
	
	}



}