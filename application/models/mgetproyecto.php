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

	public function getproyecto(){
		$this->db->select('*');
		$query = $this->db->get('proyecto');
		return  $query->result_array();
		
	}

	public function planp($anho,$idpro){

		$this->db->select('p.idmoneda,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
		$this->db->from('plan p');
		$this->db->join('proyecto pro','p.idproyecto = pro.idproyecto');
	 	$this->db->where('p.idanho',$anho);
	 	$this->db->where('p.idproyecto',$idpro);
		return $this->db->get(); 

	}

	public function realesp($anho,$idpro){

		$this->db->select('r.idmoneda,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
		$this->db->from('reales r');
		$this->db->join('proyecto pro','r.idproyecto = pro.idproyecto');
	 	$this->db->where('r.idanho',$anho);
	 	$this->db->where('r.idproyecto',$idpro);
		return $this->db->get(); 

	}

	public function mvp($anho,$idpro){

		$this->db->select('mv.idmonedafk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
		$this->db->from('mejorv mv');
		$this->db->join('proyecto pro','mv.idprofk = pro.idproyecto');
	 	$this->db->where('mv.anho',$anho);
	 	$this->db->where('mv.idprofk',$idpro);
		return $this->db->get(); 

	}
	
		public function explip($anho,$idpro){

		$this->db->select('e.idtipoexp,e.idmoneda,e.enero_ex,e.febrero_ex,e.marzo_ex,e.abril_ex,e.mayo_ex,e.junio_ex,e.julio_ex,e.agosto_ex,e.septiembre_ex,e.octubre_ex,e.noviembre_ex,e.diciembre_ex');
		$this->db->from('explicaciones e');
		$this->db->join('proyecto pro','e.idproyectofk = pro.idproyecto');
	 	$this->db->where('idanho',$anho);
	 	$this->db->where('idproyectofk',$idpro);
		return $this->db->get(); 

		}

		public function idexplicaciones($anho,$idpro){

		$this->db->select('e.idexp,e.idtipoexp,e.idmoneda');
		$this->db->from('explicaciones e');
		$this->db->join('proyecto pro','e.idproyectofk = pro.idproyecto');
	 	$this->db->where('idanho',$anho);
	 	$this->db->where('idproyectofk',$idpro);
		return $this->db->get(); 

		}

		public function updateexplicaciones($id,$expl){

			$this->db->where('idexp',$id);
			$this->db->update('explicaciones',$expl);
		}
		
		public function insertexplicaciones($expl){

			$this->db->insert('explicaciones',$expl);
		}

		/// PLAN PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function pplanepdivor($anho,$div){

			$this->db->select('p.idmoneda,c.numcategoria,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
			$this->db->from('plan p');
			$this->db->join('proyecto pro','p.idproyecto = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria =c.id');
	 		$this->db->where('p.idanho',$anho);
	 		$this->db->where('pro.iddivision',$div);
	 		$this->db->where('pro.iddom',1);
			return $this->db->get(); 

		}

		/// PLAN PARA PROYECTOS ESFUERZO PORPIO
		public function pplanpro($anho){

			$this->db->select('p.idmoneda,pro.idemfk,pro.iddivision,pro.iddom,c.numcategoria,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
			$this->db->from('plan p');
			$this->db->join('proyecto pro','p.idproyecto = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria =c.id');
	 		$this->db->where('p.idanho',$anho);
			return $this->db->get(); 

		}
		///////////////////////////////////////////////////////

			/// REAL PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function prealepdivor($anho,$div){

			$this->db->select('r.idmoneda,c.numcategoria,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
			$this->db->from('reales r');
			$this->db->join('proyecto pro','r.idproyecto = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('r.idanho',$anho);
	 		$this->db->where('pro.iddivision',$div);
	 		$this->db->where('pro.iddom',1);
			return $this->db->get(); 

		}


		///////////////////////////////////////////////////////

					/// REAL PARA PROYECTOS ESFUERZO PORPIO
		public function prealpro($anho){

			$this->db->select('r.idmoneda,pro.idemfk,pro.iddivision,pro.iddom,c.numcategoria,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
			$this->db->from('reales r');
			$this->db->join('proyecto pro','r.idproyecto = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('r.idanho',$anho);
			return $this->db->get(); 

		}


		/// MEJOR VISION PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function pmvepdivor($anho,$div){

			$this->db->select('mv.idmonedafk,c.numcategoria,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
			$this->db->from('mejorv mv');
			$this->db->join('proyecto pro','mv.idprofk = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('mv.anho',$anho);
	 		$this->db->where('pro.iddivision',$div);
	 		$this->db->where('pro.iddom',1);
			return $this->db->get(); 

		}
		///////////////////////////////////////////////////////

				/// MEJOR VISION PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function pmvpro($anho){

			$this->db->select('mv.idmonedafk,pro.idemfk,pro.iddivision,pro.iddom,c.numcategoria,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
			$this->db->from('mejorv mv');
			$this->db->join('proyecto pro','mv.idprofk = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('mv.anho',$anho);
			return $this->db->get(); 

		}


		/// ANTEPROYECTO PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function pantepdivor($anho,$div){

			$this->db->select('a.idmonedafk,c.numcategoria,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
			$this->db->from('anteproyecto a');
			$this->db->join('proyecto pro','a.idprofk = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('a.anho',$anho);
	 		$this->db->where('pro.iddivision',$div);
	 		$this->db->where('pro.iddom',1);
			return $this->db->get(); 

		}
		///////////////////////////////////////////////////////
		
		/// ANTEPROYECTO PARA DIVISION ORIENTAL ESFUERZO PORPIO
		public function pantpro($anho){

			$this->db->select('a.idmonedafk,pro.idemfk,pro.iddivision,pro.iddom,c.numcategoria,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
			$this->db->from('anteproyecto a');
			$this->db->join('proyecto pro','a.idprofk = pro.idproyecto');
			$this->db->join('categoria c','pro.idcategoria = c.id');
	 		$this->db->where('a.anho',$anho);
			return $this->db->get(); 

		}
}