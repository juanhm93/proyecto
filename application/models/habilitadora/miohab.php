<?php



/**
* 
*/
class Miohab extends CI_Model
{

	public function inv($id,$tipo){
		$this->db->select('idhab');
		$this->db->from('habilitadora');
		$this->db->where('idgerencia',$id);
		$this->db->where('idtipo_IO',$tipo);
		$query = $this->db->get();
		return $query->num_rows();

	}
	public function invudp($id,$tipo){
		$this->db->select('idhab');
		$this->db->from('habilitadora');
		$this->db->where('idgerencia',$id);
		$this->db->where('idtipo_IO',$tipo);
		$query = $this->db->get();
		return $query->result();

	}

	public function getiddiv($div){
		$this->db->select('iddiv');
		$this->db->from('tipodiv');
		$this->db->where('descdiv',$div);
		$query = $this->db->get();
		return $query;
	}



	public function existegere($gere){
		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('gerehab',$gere);
		$query = $this->db->get();
		return $query->num_rows();
	}

	public function existecat($cate){
		$this->db->select('id');
		$this->db->from('categoria');
		$this->db->where('descripcion',$cate);
		$query = $this->db->get();
		return $query->num_rows();
	}

	public function idcat($cate){
		$this->db->select('id');
		$this->db->from('categoria');
		$this->db->where('descripcion',$cate);
		$query = $this->db->get();
		$val = $query->result_array();
		return $val[0]['id'];
	}

		public function iddiv($div){
		$this->db->select('iddi');
		$this->db->from('division');
		$this->db->where('divisonopc',$div);
		$query = $this->db->get();
		$val = $query->result_array();
		return $val[0]['iddi'];
	}

	public function existepro($ren){
		$this->db->select('idproyecto');
		$this->db->from('proyecto');
		$this->db->where('renglon',$ren);
		$query = $this->db->get();
		return $query->num_rows();
	}

		
		public function idem($em){
		$this->db->select('idemx');
		$this->db->from('emx');
		$this->db->where('emmixta',$em);
		$query = $this->db->get();
		$val = $query->result_array();
		return $val[0]['idemx'];
	}




	public function getidgere($gere)
	{
		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('gerehab',$gere);
		$query = $this->db->get();
		return $query;

	}
	//public function op
}

