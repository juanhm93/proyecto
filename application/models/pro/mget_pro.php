mget_pro<?php

/**
* 
*/
class mget_pro extends CI_model
{
	public function __construct(){
		parent::__construct();
        $this->load->library('excel'); //load PHPExcel library
        $this->load->model('excel_data_insert_model');
         $this->load->model('get_hab');
       }


        public function getidproyecto($id){
	 	$this->db->select('idproyecto');
	 	$this->db->from('proyecto');
	 	$this->db->where('renglon',$id);
	 	$query = $this->db->get();
	 	if($query->num_rows() > 0){
	 		$valor = $query->result_array();
		return $valor[0]['idproyecto'];
	 	}
	 }

	  public function getproplannum_rows($idpro,$an,$m){
	 	$this->db->select('p.idplan');
	 	$this->db->from('plan p');
	 	$this->db->join('proyecto pro','p.idproyecto= pro.idproyecto');
	 	$this->db->where('pro.idproyecto',$idpro);
	 	$this->db->where('p.idanho',$an);
	 	$this->db->where('p.idmoneda',$m);
	 	$query = $this->db->get();
	 	return $query->num_rows();
	 }

	  public function getprorealnum_rows($idpro,$an,$moneda){
	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('proyecto pro','r.idproyecto= pro.idproyecto');
	 	$this->db->where('pro.idproyecto',$idpro);
	 	$this->db->where('r.idanho',$an);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$query = $this->db->get();
	 	return $query->num_rows();	
	 }

	  public function getIDprorealnum_rows($idpro,$moneda,$an){
	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('proyecto pro','r.idproyecto= pro.idproyecto');
	 	$this->db->where('pro.idproyecto',$idpro);
	 	$this->db->where('r.idanho',$an);
	 	$this->db->where('r.idmoneda',$moneda);
	 	$query = $this->db->get();
	 	$valor = $query->result_array();
	 	 return $valor[0]['idreal'];
	 }
	

	 

           public  function insertrealpuntualproyecto($id,$auxmes,$mes,$aux,$an){

                        switch ($auxmes) {
                            case 'ENE':

                            $inicial =0.0;
                            $real = array('enero_r' => $mes,
                            	'febrero_r'=>  $inicial,
                            	'marzo_r'=> $inicial,
                            	'abril_r'=> $inicial,
                            	'mayo_r'=> $inicial,
                            	'junio_r'=> $inicial,
                            	'julio_r'=> $inicial,
                            	'agosto_r'=> $inicial,
                            	'septiembre_r'=> $inicial,
                            	'octubre_r'=> $inicial,
                            	'noviembre_r'=> $inicial,
                            	'diciembre_r'=> $inicial,
                                'idmoneda'                      => $aux,
                                'idproyecto'                    => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            
                            break;
                            
                            default:
                                echo 'opcion es valida solo para el primer mes';
                            break;
                        }//fin switch

             }



}

 