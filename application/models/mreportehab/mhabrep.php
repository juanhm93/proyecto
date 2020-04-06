<?php




//SELECT habilitadora.idhab,habilitadora.idgerencia FROM `habilitadora` 
//JOIN `gerencia` on habilitadora.idgerencia = gerencia.idgere
//WHERE gerencia.idtipo = 5

/*
	SELECT reales.enero_r,reales.febrero_r,reales.marzo_r,reales.abril_r,reales.mayo_r,reales.junio_r,reales.julio_r,reales.agosto_r,reales.septiembre_r,reales.octubre_r,reales.noviembre_r,reales.diciembre_r,moneda.siglasm FROM `habilitadora` 
JOIN `gerencia` on habilitadora.idgerencia = gerencia.idgere 
JOIN `reales` on habilitadora.idhab = reales.idhab
JOIN `moneda` on reales.idmoneda = moneda.idmoneda 
WHERE gerencia.idtipo = 5 AND habilitadora.idelementoc = 1
*/


/**
plan.febrero_p,plan.marzo_p,plan.abril_p,plan.mayo_p,plan.junio_p,plan.julio_p,plan.agosto_p,plan.septiembre_p,plan.octubre_p,plan.noviembre_p,plan.diciembre_p
* 
*/
class Mhabrep extends CI_Model
{
	
	 
	 public function inv(){
	 	$this->db->select('r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,m.siglasm,hab.idelecfk');
	 	$this->db->from('habilitadora h');
	 	$this->db->join('gerencia g','h.idgerencia=g.idgere');
	 	$this->db->join('habelec hab','h.idhab = hab.idhabfk');
	 	$this->db->join('reales r','hab.idhabelec=r.idhab');
	 	$this->db->join('moneda m','r.idmoneda=m.idmoneda');
	 	$this->db->where('h.idtipo_IO',1);
	 	$this->db->where('h.tipodivfk',5);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }

	  public function dttoriental(){
	 	$this->db->select('r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,m.siglasm,hab.idelecfk');
	 	$this->db->from('habilitadora h');
	 	$this->db->join('gerencia g','h.idgerencia=g.idgere');
	 	$this->db->join('habelec hab','h.idhab = hab.idhabfk');
	 	$this->db->join('reales r','hab.idhabelec=r.idhab');
	 	$this->db->join('moneda m','r.idmoneda=m.idmoneda');
	 	$this->db->where('h.idtipo_IO',1);
	 	$this->db->where('h.tipodivfk',4);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }

	  public function divoccidental(){
	 	$this->db->select('r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,m.siglasm,hab.idelecfk');
	 	$this->db->from('habilitadora h');
	 	$this->db->join('gerencia g','h.idgerencia=g.idgere');
	 	$this->db->join('habelec hab','h.idhab = hab.idhabfk');
	 	$this->db->join('reales r','hab.idhabelec=r.idhab');
	 	$this->db->join('moneda m','r.idmoneda=m.idmoneda');
	 	$this->db->where('h.idtipo_IO',1);
	 	$this->db->where('h.tipodivfk',3);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }

	  public function divoriental(){
	 	$this->db->select('r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,m.siglasm,hab.idelecfk');
	 	$this->db->from('habilitadora h');
	 	$this->db->join('gerencia g','h.idgerencia=g.idgere');
	 	$this->db->join('habelec hab','h.idhab = hab.idhabfk');
	 	$this->db->join('reales r','hab.idhabelec=r.idhab');
	 	$this->db->join('moneda m','r.idmoneda=m.idmoneda');
	 	$this->db->where('h.idtipo_IO',1);
	 	$this->db->where('h.tipodivfk',2);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }

	  public function direcejecutivaep(){
	 	$this->db->select('r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,m.siglasm,hab.idelecfk');
	 	$this->db->from('habilitadora h');
	 	$this->db->join('gerencia g','h.idgerencia=g.idgere');
	 	$this->db->join('habelec hab','h.idhab = hab.idhabfk');
	 	$this->db->join('reales r','hab.idhabelec=r.idhab');
	 	$this->db->join('moneda m','r.idmoneda=m.idmoneda');
	 	$this->db->where('h.idtipo_IO',1);
	 	$this->db->where('h.tipodivfk',1);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }

	 /*
		 SELECT gerencia.gerehab,habilitadora.tipodivfk,habelec.idelecfk,plan.enero_p,plan.febrero_p,plan.marzo_p,plan.abril_p,plan.mayo_p  FROM `plan` 
JOIN habelec ON plan.idhab = habelec.idhabelec JOIN habilitadora ON habilitadora.idhab = habelec.idhabfk JOIN gerencia ON gerencia.idgere = habilitadora.idgerencia WHERE plan.idanho = 2017 AND habilitadora.idtipo_IO = 1 
ORDER BY habelec.idelecfk


	 */

	 // CONSULTA HABILITADORAS PLAN PARA CUALQUIER MONEDA
	 public function gestioninversionhabplan($an,$m,$inv){

	 $this->db->select('g.gerehab,hab.tipodivfk,h.idelecfk,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');	
	 $this->db->from('plan p');
	 $this->db->join('habelec h','p.idhab=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('p.idanho',$an);
	 $this->db->where('p.idmoneda',$m);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 

	 }
	 	  // CONSULTA HABILITADORAS PLAN EQUIVALENTE 
	 public function gestioninversionhabplaneq($an,$inv){

	 $this->db->select('p.idmoneda,g.gerehab,hab.tipodivfk,h.idelecfk,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');	
	 $this->db->from('plan p');
	 $this->db->join('habelec h','p.idhab=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('p.idanho',$an);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 


	 }
	   // CONSULTA HABILITADORAS REAL PARA CUALQUIER MONEDA
	 public function gestioninversionhabreal($an,$m,$inv){

	 	 $this->db->select('g.gerehab,hab.tipodivfk,h.idelecfk,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');	
	 $this->db->from('reales r');
	 $this->db->join('habelec h','r.idhab=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('r.idanho',$an);
	 $this->db->where('r.idmoneda',$m);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 

	 }
	  // CONSULTA HABILITADORAS REAL EQUIVALENTE 
	 public function gestioninversionhabrealeq($an,$inv){
	 	 $this->db->select('r.idmoneda,g.gerehab,hab.tipodivfk,h.idelecfk,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');	
	 $this->db->from('reales r');
	 $this->db->join('habelec h','r.idhab=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('r.idanho',$an);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 

	 }
	  // CONSULTA HABILITADORAS  MEJOR VISION PARA CUALQUIER MONEDA
	 public function ginvmv($an,$m,$inv){
	 $this->db->select('g.gerehab,hab.tipodivfk,h.idelecfk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');	
	 $this->db->from('mejorv mv');
	 $this->db->join('habelec h','mv.idhabelecfk=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('mv.anho',$an);
	 $this->db->where('mv.idmonedafk',$m);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 



	 }

	 	 // CONSULTA HABILITADORAS  MEJOR VISION EQUIVALENTE 
	 public function ginvmvequiv($an,$inv){

	 $this->db->select('mv.idmonedafk,g.gerehab,hab.tipodivfk,h.idelecfk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');	
	 $this->db->from('mejorv mv');
	 $this->db->join('habelec h','mv.idhabelecfk=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('mv.anho',$an);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 

	 }

	  public function ginvant($an,$m,$inv){
	 $this->db->select('g.gerehab,hab.tipodivfk,h.idelecfk,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');	
	 $this->db->from('anteproyecto a');
	 $this->db->join('habelec h','a.idhabfk=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('a.anho',$an);
	 $this->db->where('a.idmonedafk',$m);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 



	 }

	 	 // CONSULTA HABILITADORAS  MEJOR VISION EQUIVALENTE 
	 public function ginvantequiv($an,$inv){

	 $this->db->select('a.idmonedafk,g.gerehab,hab.tipodivfk,h.idelecfk,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');	
	 $this->db->from('anteproyecto a');
	 $this->db->join('habelec h','a.idhabfk=h.idhabelec');
	 $this->db->join('habilitadora hab','h.idhabfk= hab.idhab');
	 $this->db->join('gerencia g','hab.idgerencia = g.idgere');
	 $this->db->where('a.anho',$an);
	 $this->db->where('hab.idtipo_IO',$inv);
	 $this->db->order_by('idelecfk');
	 return $this->db->get(); 

	 }
/*
	 	SELECT plan.enero_p,plan.febrero_p,plan.marzo_p,plan.abril_p,plan.mayo_p FROM `plan` JOIN direccion ON direccion.iddir = plan.iddirfk JOIN dir_io ON direccion.iddir_iofk = dir_io.iddir_io WHERE plan.idanho = 2017 AND dir_io.tipoiofk = 1 
			*/				
	 		 // CONSULTA DIRECCION EJECUTIVA PLAN PARA CUALQUIER MONEDA 
	 public function direcejecutivainvplan($an,$m,$inv){

	 	$this->db->select('d.idelefk,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('direccion d','d.iddir = p.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('p.idanho',$an);
	 	$this->db->where('p.idmoneda',$m);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();
	 	

	 }
	 // CONSULTA DIRECCION EJECUTIVA PLAN EQUIVALENTE 
	public function direcejecutivainvplaneq($an,$inv){

			$this->db->select('p.idmoneda,d.idelefk,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('direccion d','d.iddir = p.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('p.idanho',$an);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();
	}

	// CONSULTA DIRECCION EJECUTIVA REAL PARA CUALQUIER MONEDA
	public function	direcejecutivainvreal($an,$m,$inv){

		$this->db->select('d.idelefk,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('direccion d','d.iddir = r.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('r.idanho',$an);
	 	$this->db->where('r.idmoneda',$m);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();
	 	
	}
	// CONSULTA DIRECCION EJECUTIVA REAL EQUIVALENTE
	public function direcejecutivainvrealeq($an,$inv){
		$this->db->select('r.idmoneda,d.idelefk,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('direccion d','d.iddir = r.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('r.idanho',$an);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();

	}

	// CONSULTA DIRECCION EJECUTIVA MEJOR VISION 

	public function direcejecutivamv($an,$m,$inv){

		$this->db->select('d.idelefk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('direccion d','d.iddir = mv.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('mv.anho',$an);
	 	$this->db->where('mv.idmonedafk',$m);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();

	}

	// CONSULTA DIRECCION EJECUTIVA MEJOR VISION EQUIVALENTE

	public function direcejecutivamveq($an,$inv){

		$this->db->select('mv.idmonedafk,d.idelefk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('direccion d','d.iddir = mv.iddirfk');
	 	$this->db->join('dir_io dir','dir.iddir_io = d.iddir_iofk');
	 	$this->db->where('mv.anho',$an);
	 	$this->db->where('dir.tipoiofk',$inv);
	 	return $this->db->get();

	}

	public function mixtap($an){

		$this->db->select('p.idmoneda,m.idem,m.idlele,e.emmixta,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p');
	 	$this->db->from('plan p');
	 	$this->db->join('mixta m','m.idmixta = p.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('p.idanho',$an);
	 	return $this->db->get();
	}

	public function mixtar($an){

		$this->db->select('r.idmoneda,m.idem,m.idlele,e.emmixta,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
	 	$this->db->from('reales r');
	 	$this->db->join('mixta m','m.idmixta = r.idmixta');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('r.idanho',$an);
	 	return $this->db->get();
	}

		public function mixtamv($an){

		$this->db->select('mv.idmonedafk,m.idem,m.idlele,e.emmixta,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('mixta m','m.idmixta = mv.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('mv.anho',$an);
	 	return $this->db->get();
	}

		public function mixtant($an){

		$this->db->select('a.idmonedafk,m.idem,m.idlele,e.emmixta,a.enero_ant,a.febrero_ant,a.marzo_ant,a.abril_ant,a.mayo_ant,a.junio_ant,a.julio_ant,a.agosto_ant,a.septiembre_ant,a.octubre_ant,a.noviembre_ant,a.diciembre_ant');
	 	$this->db->from('anteproyecto a');
	 	$this->db->join('mixta m','m.idmixta = a.idmixtafk');
	 	$this->db->join('emx e','e.idemx = m.idem');
	 	$this->db->where('a.anho',$an);
	 	return $this->db->get();
	}





}