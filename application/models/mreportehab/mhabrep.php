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
	 	$this->db->where('h.tipodivfk',5);
	 	$this->db->order_by('idhabfk','asc');
	 	 $query = $this->db->get();
	 	 return $query->result_array();
	 }
}