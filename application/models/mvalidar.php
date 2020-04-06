<?php




/**
* 
*/
class Mvalidar extends CI_model
{
	

	public function valnumcategoria($num){

		$this->db->select('id');
		$this->db->from('categoria');
		$this->db->where('numcategoria',$num);
		return $this->db->get();
	}
	public function valdescripcion($des){

		$this->db->select('id');
		$this->db->from('categoria');
		$this->db->where('descripcion',$des);
		return $this->db->get();
	}
	public function valgerepro($gere){

		$this->db->select('idgp');
		$this->db->from('gereproyecto');
		$this->db->where('gp',$gere);
		return $this->db->get();
	}
	public function valsiglashab($s){

		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('siglas',$s);
		return $this->db->get();
	}
	public function valgerehab($gere){

		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('gerehab',$gere);
		return $this->db->get();
	}


}