<?php

/**
* 
*/
class Get_hab extends CI_model
{
	
	public function gerencia($gere){
		$this->db->insert('gerencia',$gere);
	}
	
	
}