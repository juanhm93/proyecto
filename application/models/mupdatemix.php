<?php

/**
* 
*/
class Mupdatemix extends CI_model
{
	
	 
	 public function verificarmix($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$query = $this->db->get();

	 	return $query;

	 }

	 public function div(){

	 	$this->db->select('iddi,divisonopc');
			$query = $this->db->get('division');
			 return $query;
	 }
	 public function emx1(){

	 	$this->db->select('idemx,emmixta');
			$query = $this->db->get('emx');
			 return $query;
	 }

	 // consulta que retorna la cantidad de registros existentes de elementos de costo de 1 EM
	 public function mixtaget($id,$moneda,$anho){

	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('mixta m','m.idmixta = r.idmixta');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }
	 //consulta para retornar la cantidad de registros que existes con proyectos que tienen un real

	 public function mixrealproyecto($id,$m,$a){

	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('proyecto p','p.idproyecto = r.idproyecto');
	 	$this->db->where('p.idproyecto',$id);
	 	$this->db->where('r.idmoneda',$m);
	 	$this->db->where('r.idanho',$a);
		$query = $this->db->get();
		 return $query->num_rows();  
	 }




	 //consulta que retorna un array con los valores del real de las mixtas por elemento de costo
	 public function mixelemento($id,$moneda,$anho){


	 	$this->db->select('*');
	 	$this->db->from('reales r');
	 	$this->db->join('mixta m','m.idmixta = r.idmixta');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();

	 }

	  public function hab($id,$moneda,$anho){

	  	//falta que la consulta sea solo para operaciones
	 	$this->db->select('*');
	 	$this->db->from('reales r');
	 	$this->db->join('habilitadora h','h.idhab = r.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();

	 }

	 public function habtrue($id,$moneda,$anho){

	  	//falta que la consulta sea solo para operaciones
	 	$this->db->select('*');
	 	$this->db->from('reales r');
	 	$this->db->join('habilitadora h','h.idhab = r.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('h.idtipo_IO',2);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  

	 }

	 // funcion que muestra un array con los valores del real de los proyectos EMX
	public function proyectomix($id,$m,$a){

		$this->db->select('*');
		$this->db->from('reales r');
		$this->db->join('proyecto p','p.idproyecto = r.idproyecto');
		$this->db->where('p.idproyecto',$id);
		$this->db->where('r.idmoneda',$m);
		$this->db->where('r.idanho',$a);
		return $query = $this->db->get();

	}

	 public function verificarelementoc($id){

	 	$this->db->select('idlele');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	return $query = $this->db->get();
	 }

	 public function verflab($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',1);
	 	$this->db->limit(1);
	 	$query = $this->db->get();

	 	if($query->num_rows()> 0){

	 		return true;
	 	}else{

	 		return false;
	 	}
	 
	 }

	 public function idmixlab($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',1);
	 	$query = $this->db->get();
	 	return $query->result();
	 }

	 public function verfbb($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',2);
	 	return $query = $this->db->get();	
	 
	 }


	 public function verfmat($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',3);
	 	return $query = $this->db->get();
	 
	 }


	 public function verfsc($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',1);
	 	return $query = $this->db->get();
	 
	 }


	 public function verfot($id){

	 	$this->db->select('idmixta');
	 	$this->db->from('mixta');
	 	$this->db->where('idem',$id);
	 	$this->db->where('idlele',1);
	 	return $query = $this->db->get();
	 
	 }


	public function updaterealmixta($mix,$id){

			$this->db->where('idreal',$id);
		 	$this->db->update('reales',$mix);		 
	}

	public function vrealmixta($id){

		$this->db->select('idreal');
		$this->db->from('reales');
		$this->db->where('idmixta',$id);
		return $query = $this->db->get();
	}

}