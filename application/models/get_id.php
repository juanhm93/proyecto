<?php

/**
* 
*/
class Get_id extends CI_model
{
	
	function __construct()
	{
		parent::__construct();
	}

	function getmax_number_Categoria() {
	    $result = $this->db->select_max('id')->get('categoria')->result_array();
	    return (int) $result[0]['id'];
	}


	function getmax_number_pro() {
	    $result = $this->db->select_max('idproyecto')->get('proyecto')->result_array();
	    return (int) $result[0]['idproyecto'];
	}


	function getmax_number_hab() {
	    $result = $this->db->select_max('idhab')->get('habilitadora')->result_array();
	    return (int) $result[0]['idhab'];
	}
	function getmax_number_habelec() {
	    $result = $this->db->select_max('idhabelec')->get('habelec')->result_array();
	    return (int) $result[0]['idhabelec'];
	}

	function getmax_number_emx() {
	    $result = $this->db->select_max('idmixta')->get('mixta')->result_array();
	    return (int) $result[0]['idmixta'];
	}

	function getmax_number_bene(){
		$result = $this->db->select_max('idbeneficio')->get('beneficioybienestar')->result_array();
	    return (int) $result[0]['idbeneficio'];	
	}
	function getmax_number_materiales(){
		$result = $this->db->select_max('idmateriales')->get('materiales')->result_array();
	    return (int) $result[0]['idmateriales'];
	}
	function getmax_number_serv(){
		$result = $this->db->select_max('idservicios')->get('serviciosycontratos')->result_array();
	    return (int) $result[0]['idservicios'];

	}
	function getmax_number_otros(){
		$result = $this->db->select_max('idotros')->get('otros')->result_array();
	    return (int) $result[0]['idotros'];	
	}
	function getmax_number_gere(){
		$result = $this->db->select_max('idgere')->get('gerencia')->result_array();
	    return (int) $result[0]['idgere'];	
	}


}




