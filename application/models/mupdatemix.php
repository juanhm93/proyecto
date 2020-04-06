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
	 public function getmix(){
	 	$this->db->select('idemx,emmixta,idiv');
			$query = $this->db->get('emx');
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
	 public function categ(){

	 	$this->db->select('id,numcategoria,descripcion');
			$query = $this->db->get('categoria');
			 return $query;
	 }



	 // consulta que retorna la cantidad de registros existentes en plan
	 public function mixtagetplan($id,$moneda,$anho){

	 	$this->db->select('p.idplan');
	 	$this->db->from('plan p');
	 	$this->db->join('mixta m','m.idmixta = p.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }
//////////////////////////////EMPRESAS MIXTAS CONSULTA INSERT UPDATE PARA AJAX/////////////////////////
	 // consulta que retorna la cantidad de registros existentes  en el real
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

	 // consulta que retorna la cantidad de registros existentes en mejor vision
	 public function mixtagetmv($id,$moneda,$anho){

	 	$this->db->select('mv.idmv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('mixta m','m.idmixta = mv.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('mv.idmonedafk',$moneda);
	 	$this->db->where('mv.anho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }
	 // consulta que retorna la cantidad de registros existentes en el anteproyecto
	 public function mixtagetante($id,$moneda,$anho){

	 	$this->db->select('a.idante');
	 	$this->db->from('anteproyecto a');
	 	$this->db->join('mixta m','m.idmixta = a.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('a.idmonedafk',$moneda);
	 	$this->db->where('a.anho',$anho);
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
	 public function mixelementoplan($id,$moneda,$anho){


	 	$this->db->select('p.idplan,m.idlele,m.idmixta,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('mixta m','m.idmixta = p.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		return $query = $this->db->get();

	 }

	 //consulta que retorna un array con los valores del real de las mixtas por elemento de costo
	 public function mixelemento($id,$moneda,$anho){


	 	$this->db->select('r.idreal,m.idlele,m.idmixta,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('mixta m','m.idmixta = r.idmixta');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();

	 }
	 // mejor vision valores desde enero a diciembre 
	  public function mixelementomv($id,$moneda,$anho){


	 	$this->db->select('mv.idmv,m.idlele,m.idmixta,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('mixta m','m.idmixta = mv.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('mv.idmonedafk',$moneda);
	 	$this->db->where('mv.anho',$anho);
		return $query = $this->db->get();

	 }

	  public function mixelementoante($id,$moneda,$anho){


	 	$this->db->select('a.idante,m.idlele,m.idmixta,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
	 	$this->db->from('anteproyecto a');
	 	$this->db->join('mixta m','m.idmixta = a.idmixtafk');
	 	$this->db->where('m.idem',$id);
	 	$this->db->where('a.idmonedafk',$moneda);
	 	$this->db->where('a.anho',$anho);
		return $query = $this->db->get();

	 }


//////////////////////////////FIN EMPRESAS MIXTAS INSERT UPDATE CONSULTA PARA AJAX/////////////////////////


//////////////////////////// CONSULTA AJAX PLAN PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	elecpetrosucreplan($anho,$mixta){

		$this->db->select('p.idmoneda,m.idlele,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('mixta m','m.idmixta = p.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('m.idem',$mixta);
	 	$this->db->where('p.idanho',$anho);
		return $query = $this->db->get();



		}


/////////////////////FIN CONSULTA AJAX PLAN PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


//////////////////////////// CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	elecpetrosucrereal($anho,$mixta){

		$this->db->select('r.idmoneda,m.idlele,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('mixta m','m.idmixta = r.idmixta');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('m.idem',$mixta);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();

		}


/////////////////////FIN CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

//////////////////////////// CONSULTA AJAX MEJOR VISION PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	elecpetrosucremv($anho,$mixta){

		$this->db->select('mv.idmonedafk,m.idlele,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('mixta m','m.idmixta = mv.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('m.idem',$mixta);
	 	$this->db->where('mv.anho',$anho);
		return $query = $this->db->get();
		
		}


/////////////////////FIN CONSULTA AJAX MEJOR VISION PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

//////////////////////////// CONSULTA AJAX ANTEPROYECTO PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	elecpetrosucreant($anho,$mixta){

		$this->db->select('a.idmonedafk,m.idlele,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
	 	$this->db->from('anteproyecto a');
	 	$this->db->join('mixta m','m.idmixta = a.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('m.idem',$mixta);
	 	$this->db->where('a.anho',$anho);
		return $query = $this->db->get();
		
		}


/////////////////////FIN CONSULTA AJAX ANTEPROYECTO PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

	////////////////////// FOR PROYECTOS/////////////////////////////////////////////////////	

//////////////////////////// CONSULTA AJAX PLAN PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	propetrosucreplan($anho,$mixta,$em){

		$this->db->select('p.idmoneda,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('proyecto pro','pro.idproyecto = p.idproyecto');
	 	$this->db->join('emx e','e.idemx = pro.idemfk');
	 	$this->db->where('e.idemx',$mixta);
	 	$this->db->where('pro.iddom',$em);
	 	$this->db->where('p.idanho',$anho);
		return $query = $this->db->get();



		}


/////////////////////FIN CONSULTA AJAX PLAN PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

//////////////////////////// CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	propetrosucrereal($anho,$mixta,$em){

		$this->db->select('r.idmoneda,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('proyecto pro','pro.idproyecto = r.idproyecto');
	 	$this->db->join('emx e','e.idemx = pro.idemfk');
	 	$this->db->where('e.idemx',$mixta);
	 	$this->db->where('pro.iddom',$em);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();



		}


/////////////////////FIN CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

/////////////////////////// CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

		public function	propetrosucremv($anho,$mixta,$em){

		$this->db->select('mv.idmonedafk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('proyecto pro','pro.idproyecto = mv.idprofk');
	 	$this->db->join('emx e','e.idemx = pro.idemfk');
	 	$this->db->where('e.idemx',$mixta);
	 	$this->db->where('pro.iddom',$em);
	 	$this->db->where('mv.anho',$anho);
		return $query = $this->db->get();

		}

/////////////////////FIN CONSULTA AJAX REAL PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////

/////////////////////////// CONSULTA AJAX MEJOR VISION PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////


		public function	propetrosucreant($anho,$mixta,$em){

		$this->db->select('a.idmonedafk,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
	 	$this->db->from('anteproyecto a');
	 	$this->db->join('proyecto pro','pro.idproyecto = a.idprofk');
	 	$this->db->join('emx e','e.idemx = pro.idemfk');
	 	$this->db->where('e.idemx',$mixta);
	 	$this->db->where('pro.iddom',$em);
	 	$this->db->where('a.anho',$anho);
		return $query = $this->db->get();


		}


/////////////////////FIN CONSULTA AJAX MEJOR VISION PARA MOSTRAR EL RESUMEN DE LAS MIXTAS ESPECIFICAS/////////////



/////////////// FIN FOR PROYECTOS /////////////////////////////////////////////////////////






	 ///////// OTRAS PRUEBAS DE CONSULTA///////////////////////////////////////

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