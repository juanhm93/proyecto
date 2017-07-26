<?php

class Excel_data_insert_model extends CI_Model {
 
    public function  __construct() {
        parent::__construct();
        
    }
	
/*public function Add_User($data_user){

$this->db->insert('user', $data_user);

   }*/
   		public function gerencia($g){

   			$this->db->insert('gerencia',$g);
   		}
		 public function categoria($categ){

		 	$this->db->insert('categoria',$categ);
		 }  
		 public function plan($planproyec){

		 	$this->db->insert('plan',$planproyec);

		 }
		 public function reales($realesvar){

		 	$this->db->insert('reales',$realesvar);
		 }

		 public function mv($mvvar){

		 	$this->db->insert('mejorv',$mvvar);
		 }
		 public function realesupdate($id,$reales){

		 	$this->db->where('idproyecto',$id);
		 	$this->db->update('reales',$reales);
		 }

		 public function proyectos($proyec){

		 	$this->db->insert('proyecto',$proyec);
		 }

		 public function habilitador($hab){

		 	$this->db->insert('habilitadora',$hab);
		 }
		  public function udphabilitador($id,$hab){

		  	$this->db->where('idhab',$id);
		 	$this->db->update('habilitadora',$hab);
		 }
		 public function inserthabilitadora($hab){

		 	$this->db->insert('habelec',$hab);

		 }
		 public function mixtas($mix){
		 	$this->db->insert('mixta',$mix);	
		 }
		 public function direccion($dir){
		 	$this->db->insert('direccion',$dir);	
		 }
		 
		  public function updatereal($id,$reales){

		  	$this->db->where('idreal',$id);
		 	$this->db->update('reales',$reales);
		 }

		 public function updateplan($id,$plan){

		  	$this->db->where('idplan',$id);
		 	$this->db->update('plan',$plan);
		 }
		  public function updatemv($id,$mejorv){

		  	$this->db->where('idmv',$id);
		 	$this->db->update('mejorv',$mejorv);
		 }


	
}