<?php

/**
* 
*/
class Mdireccion extends CI_Model
{
	
	
	public function getdirplan($inop,$m,$anh){
	/* SELECT * FROM `plan` JOIN direccion ON plan.iddirfk = direccion.iddir JOIN dir_io ON direccion.iddir_iofk = dir_io.iddir_io JOIN elementocosto ON direccion.idelefk = elementocosto.idele WHERE plan.idanho = 2017 AND dir_io.tipoiofk = 1 
		*/
		 $this->db->select('p.iddirfk,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p,e.elemento');
        $this->db->From('plan p');
        $this->db->join('direccion d', 'p.iddirfk = d.iddir');
        $this->db->join('dir_io dir','d.iddir_iofk = dir.iddir_io');
        $this->db->join('elementocosto e','e.idele = d.idelefk');
        $this->db->where('p.idanho',$anh);
        $this->db->where('p.idmoneda',$m);
        $this->db->where('dir.tipoiofk',$inop);
        $this->db->order_by('idele','asc');
        return $this->db->get();

	}
	public function getdireal($inop,$m,$anh){

		 $this->db->select('r.iddirfk,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,e.elemento');
        $this->db->From('reales r');
        $this->db->join('direccion d', 'r.iddirfk = d.iddir');
        $this->db->join('dir_io dir','d.iddir_iofk = dir.iddir_io');
        $this->db->join('elementocosto e','e.idele = d.idelefk');
        $this->db->where('r.idanho',$anh);
        $this->db->where('r.idmoneda',$m);
        $this->db->where('dir.tipoiofk',$inop);
        $this->db->order_by('idele','asc');
        return $this->db->get();


	}
	public function getdirmv($inop,$m,$anh){

		$this->db->select('mv.iddirfk,mv.enero_mv,mv.febrero_mv,mv.marzo_mv,mv.abril_mv,mv.mayo_mv,mv.junio_mv,mv.julio_mv,mv.agosto_mv,mv.septiembre_mv,mv.octubre_mv,mv.noviembre_mv,mv.diciembre_mv,e.elemento');
		$this->db->from('mejorv mv');
		$this->db->join('direccion d','mv.iddirfk=d.iddir');
		$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
		$this->db->join('elementocosto e','e.idele = d.idelefk');
		$this->db->where('mv.anho',$anh);
		$this->db->where('mv.idmonedafk',$m);
		$this->db->where('dir.tipoiofk',$inop);
		$this->db->order_by('idele','asc');
		return $this->db->get();
	}
	
	public function cantdirplan($io,$moneda,$anho){

	 	$this->db->select('p.idplan');
	 	$this->db->from('plan p');
	 	$this->db->join('direccion d','p.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$io);
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }


	 public function cantdir($io,$moneda,$anho){

	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('direccion d','r.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$io);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }

	  public function cantdirmv($io,$moneda,$anho){

	 	$this->db->select('mv.idmv');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('direccion d','mv.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$io);
	 	$this->db->where('mv.idmonedafk',$moneda);
	 	$this->db->where('mv.anho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
		 
	 }

	  public function elementodirplan($id,$moneda,$anho){


	 	$this->db->select('p.idplan,d.iddir,d.idelefk');
	 	$this->db->from('plan p');
	 	$this->db->join('direccion d','p.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$id);
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		return $query = $this->db->get();

	 }

	 public function elementodir($id,$moneda,$anho){


	 	$this->db->select('r.idreal,d.iddir,d.idelefk');
	 	$this->db->from('reales r');
	 	$this->db->join('direccion d','r.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$id);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		return $query = $this->db->get();

	 }

	  public function elementodirmv($id,$moneda,$anho){


	 	$this->db->select('mv.idmv,d.iddir,d.idelefk');
	 	$this->db->from('mejorv mv');
	 	$this->db->join('direccion d','mv.iddirfk=d.iddir');
	 	$this->db->join('dir_io dir','d.iddir_iofk=dir.iddir_io');
	 	$this->db->where('dir.tipoiofk',$id);
	 	$this->db->where('mv.idmonedafk',$moneda);
	 	$this->db->where('mv.anho',$anho);
		return $query = $this->db->get();

	 }



}