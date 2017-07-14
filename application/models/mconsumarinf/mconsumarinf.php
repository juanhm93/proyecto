<?php


/**
* 
*/
class Mconsumarinf extends CI_Model
{
	
	 
	 public function gerencia(){

			$this->db->select('idgere,gerehab');
			$this->db->where('idtipo'," ");
			$query = $this->db->get('gerencia');
			 return $query->result_array();

	 }
	  public function proyectos(){

			$this->db->select('idproyecto,renglon,titulo,idcategoria');
			$this->db->where('iddom',0);
			$query = $this->db->get('proyecto');
			 return $query->result_array();

	 }
	 public function emx(){
	 		$this->db->select('idemx,emmixta');
			$query = $this->db->get('emx');
			 return $query->result_array();
	 }
	  public function dom(){
	 		$this->db->select('idom,domvalor');
			$query = $this->db->get('dom');
			 return $query->result_array();
	 }

	  public function tipodiv(){

			$this->db->select('iddiv,descdiv');
			$query = $this->db->get('tipodiv');
			 return $query->result_array();

	 }
	 public function siglas(){
	 		$this->db->select('idgere,gerehab');
			$this->db->where('siglas'," ");
			$query = $this->db->get('gerencia');
			 return $query->result_array();
	 }

	 public function consumargerencia($id,$arr){
	 	$this->db->where('idgere',$id);
	 	$this->db->update('gerencia',$arr);
	 	
	 }
	 
	 public function siglasg($id,$arr){
	 	$this->db->where('idgere',$id);
	 	if($this->db->update('gerencia',$arr)){
	 		return true;
	 	}
	 	
	 }
	 public function pro($id,$arr){
	 	$this->db->where('idproyecto',$id);
	 	if($this->db->update('proyecto',$arr)){
	 		return true;
	 	}
	 }
	 
}