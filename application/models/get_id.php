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


	function getmax_number_plan() {
	    $result = $this->db->select_max('idplan')->get('plan')->result_array();
	    return (int) $result[0]['idplan'];
	}


	function getmax_number_real() {
	    $result = $this->db->select_max('idreal')->get('reales')->result_array();
	    return (int) $result[0]['idreal'];
	}

	function getmax_number_labor() {
	    $result = $this->db->select_max('idlabor')->get('labor')->result_array();
	    return (int) $result[0]['idlabor'];
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




