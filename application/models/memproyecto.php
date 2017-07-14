<?php


/**
* 
*/
class Memproyecto extends CI_model
{
	
	public function getproyec(){

		$this->db->select('idproyecto,renglon,titulo,iddom');
		$this->db->from('proyecto');
		$this->db->where('iddom',2);
		$query = $this->db->get();
		return $query->result_array();
	}

	public function mixtas(){

		$this->db->select('idemx,emmixta');
		$this->db->from('emx');
		$query = $this->db->get();
		return $query->result_array();

	}

	 public function proyectoem($id,$real){
	 	$this->db->where('idproyecto',$id);
	 	$this->db->update('proyecto',$real);
	 }


	 public function getmoneda(){
	 	$this->db->select('idmoneda,siglasm');
	 	$this->db->from('moneda');
	    $query = $this->db->get();
	    return $query->result_array();

	 }

	public function gethab(){
		$this->db->select('idgere,gerehab');
	 	$this->db->from('gerencia');
	 	//$this->db->where('tipo',2);
	    $query = $this->db->get();
	    return $query->result_array();

	}
	public function gettipoplan(){

		$this->db->select('idtp,tipop');
	 	$this->db->from('tipoplan');
	    $query = $this->db->get();
	    return $query->result_array();

	}
}