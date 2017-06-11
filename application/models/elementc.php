<?php


/**
* 
*/
class Elementc extends CI_model
{
	
	public function costosele($idel){

	    $this->db->select('elemento');
	    $this->db->from('elementocosto');
	    $this->db->where('idele',$idel);
	    $this->db->limit(1);
	    $query = $this->db->get();	
	    return 	$query->result();
	}

	public function costosid($element){

	    $this->db->select('idele');
	    $this->db->from('elementocosto');
	    $this->db->where('elemento',$element);
	     $this->db->limit(1);
	    $query = $this->db->get();	
	  
	  	foreach ($query->result() as $fila) {
	  		return $fila->idele;
	  	}
	}



	public function todoelement($gerencia){

		$this->db->select('idele,elemento');
		$this->db->from('elementocosto');
		$query = $this->db->get();
		 

		foreach ($query->result() as $fila)  {
                if($gerencia == $fila->elemento){
                    return true;
                    break;
                }
			}
		}
	public function gerenciando($gereID){

		$this->db->select('gerehab');
	    $this->db->from('gerencia');
	    $this->db->where('idgere',$gereID);
	    $query = $this->db->get();	
	    return 	$query->result();



	}

	public function costoele(){

	$this->db->select('elemento')->from('elementocosto');
	return $this->db->get();
	}
	

	public function idcategoria($cat){

		 $this->db->select('id');
	    $this->db->from('categoria');
	    $this->db->where('descripcion',$cat);
	     $this->db->limit(1);
	    $query = $this->db->get();	
	  
	  	foreach ($query->result() as $fila) {
	  		return $fila->idele;
	  	}
	}


	 

}