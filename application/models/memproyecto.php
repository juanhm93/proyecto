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

	  public function proyectoem($id,$real){
	 	$this->db->where('idproyecto',$id);
	 	$this->db->update('proyecto',$real);
	 }


}