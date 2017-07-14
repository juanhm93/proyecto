<?php

/**
* 
*/
class Mgetproyecto extends CI_model
{
	
	public function getcategoria(){

		$this->db->select('id,numcategoria,descripcion');
		$query = $this->db->get('categoria');
			 return $query->result_array();
	}

	public function getdivision(){

		$this->db->select('iddi,divisonopc');	
		$query = $this->db->get('division');
		return $query->result_array(); 
	}

	public function getdom(){
		$this->db->select('*');
		$query = $this->db->get('dom');
		return $query->result_array();

	}
	public function getemx(){

		$this->db->select('*');
		$query = $this->db->get('emx');
		return $query->result_array();

	}

	public function getgereproyecto(){
		$this->db->select('*');
		$query = $this->db->get('gereproyecto');
		return  $query->result_array();
		
	}


	
}