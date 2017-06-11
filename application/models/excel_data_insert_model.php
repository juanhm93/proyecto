<?php

class Excel_data_insert_model extends CI_Model {
 
    public function  __construct() {
        parent::__construct();
        
    }
	
/*public function Add_User($data_user){

$this->db->insert('user', $data_user);

   }*/
 public function categoria($categ){

 	$this->db->insert('categoria',$categ);
 }  
 public function plan($planproyec){

 	$this->db->insert('plan',$planproyec);

 }
 public function reales($realesvar){

 	$this->db->insert('reales',$realesvar);
 }

 public function proyectos($proyec){

 	$this->db->insert('proyecto',$proyec);
 }

 public function habilitador($hab){

 	$this->db->insert('habilitadora',$hab);
 	
 }

	
}