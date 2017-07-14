<?php

/**
* 
*/
class Get_hab extends CI_model
{
	public function __construct(){
		parent::__construct();
        $this->load->library('excel'); //load PHPExcel library
        $this->load->model('excel_data_insert_model');
         $this->load->model('get_hab');
       }

	public function gerencia($gere){
		$this->db->insert('gerencia',$gere);
	}

	public function updateplan($id,$hab){
		$this->db->where('idplan',$id);
		$this->db->update('plan',$hab);
	}
	public function updatereal($id,$hab){
		$this->db->where('idreal',$id);
		$this->db->update('reales',$hab);
	}
	
	public function validarger($g){

		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('gerehab',$g);
		 $query = $this->db->get();
		 return $query->num_rows();
	}
	public function idgere($g){
		$this->db->select('idgere');
		$this->db->from('gerencia');
		$this->db->where('gerehab',$g);
		$query = $this->db->get();
		return $query->result();
	}

	 // consulta que retorna la cantidad de registros existentes de elementos de costo de 1 EM
	 public function habrealnum($id,$moneda,$anho,$elemento){

	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('habilitadora h','h.idhab = r.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('h.idelementoc',$elemento);	
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
	 }
	 public function habplannum($id,$moneda,$anho,$elemento){

	 	$this->db->select('r.idreal');
	 	$this->db->from('plan p');
	 	$this->db->join('habilitadora h','h.idhab = p.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('h.idelementoc',$elemento);	
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  
	 }
	  public function habrealget($id,$moneda,$anho,$elemento){

	 	$this->db->select('r.idreal,h.idhab');
	 	$this->db->from('reales r');
	 	$this->db->join('habilitadora h','h.idhab = r.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('h.idelementoc',$elemento);	
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->result();  
	 }

	 public function habplanget($id,$moneda,$anho,$elemento){

	 	$this->db->select('p.idplan,h.idhab');
	 	$this->db->from('plan p');
	 	$this->db->join('habilitadora h','h.idhab = p.idhab');
	 	$this->db->where('h.idgerencia',$id);
	 	$this->db->where('h.idelementoc',$elemento);	
	 	$this->db->where('p.idmoneda',$moneda);
	 	$this->db->where('p.idanho',$anho);
		$query = $this->db->get();
		 return $query->result();  
	 }

	 public function getidhabilitadora($g){
	 	$this->db->select('idhab');
	 	$this->db->from('habilitadora');
	 	$this->db->where('descriphab',$g);
	 	$query = $this->db->get();
	 	$valor = $query->result_array();
		return $valor[0]['idhab'];
	 }

	 public function getallhabelec($id){
	 	$this->db->select('idhabelec');
	 	$this->db->from('habelec');
	 	$this->db->where('idhabfk',$id);
	 	$query = $this->db->get();
	 	return $query->result();
	 }

	 // DEVUELVE EN LA TABLA PLAN HAY ALGUN REGISTRO CON EL ID DE LA HABILITADORA
	 public function gethabplannum_rows($id,$d,$an,$moneda){
	 	$this->db->select('p.idplan');
	 	$this->db->from('plan p');
	 	$this->db->join('habelec h','p.idhab= h.idhabelec');
	 	$this->db->where('h.idhabfk',$id);
	 	$this->db->where('h.idelecfk',$d);
	 	$this->db->where('p.idanho',$an);
        $this->db->where('p.idmoneda',$moneda);
	 	$query = $this->db->get();
	 	return $query->num_rows();
	 }
	  // DEVUELVE  EN LA TABLA REAL HAY ALGUN REGISTRO CON EL ID DE LA HABILITADORA
	 public function gethabrealnum_rows($id,$dist,$an,$moneda){
	 	$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('habelec h','r.idhab = h.idhabelec');
	 	$this->db->where('h.idhabfk',$id);
	 	$this->db->where('h.idelecfk',$dist);
	 	$this->db->where('r.idanho',$an);
        $this->db->where('r.idmoneda',$moneda);
	 	$query = $this->db->get();
	 	return $query->num_rows();	
	 }

	 public function getidrealele($id,$moneda,$anho,$idele){

	 		$this->db->select('r.idreal');
	 	$this->db->from('reales r');
	 	$this->db->join('habelec h','r.idhab = h.idhabelec');
	 	$this->db->where('h.idhabfk',$id);
	 	$this->db->where('h.idelecfk',$idele);	
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		$valor = $query->result_array();
		return $valor[0]['idreal'];
	 }

	  public function getidreal($id,$moneda,$anho){

	 	$this->db->select('r.idreal');
	 	$this->db->from('real r');
	 	$this->db->join('habelec h','r.idhab = h.idhabelec');
	 	$this->db->where('h.idhabfk',$id);	
	 	$this->db->where('r.idmoneda',$moneda);
	 	$this->db->where('r.idanho',$anho);
		$query = $this->db->get();
		 return $query->num_rows();  

	 }

	 public function updaterealpuntual($id,$auxmes,$mes,$aux,$an){

        switch ($auxmes) {
                            case 'ENE':
                            $real = array('enero_r' => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'FEB':
                            $real = array('febrero_r'      => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);

                            break;
                            case 'MAR':
                            $real = array('marzo_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'ABR':
                            $real = array('abril_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'MAY':
                            $real = array('mayo_r'          => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'JUN':
                            $real = array('junio_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'JUL':
                            $real = array('julio_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'AGO':
                            $real = array('agosto_r'       => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'SEP':
                            $real = array('septiembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'OCT':
                            $real = array('octubre_r'      => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'NOV':
                            $real = array('noviembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);
                            break;
                            case 'DIC':
                            $real = array('diciembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->updatereal($id,$real);                    
                            break;
                            default:
                            break;
                        }//fin switch

            }

           public  function insertrealpuntual($id,$auxmes,$mes,$aux,$an){


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
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            
                            break;
                            
                            default:
                                echo 'opcion es valida solo para el primer mes';
                            break;
                        }//fin switch

             }



}

/*

	case 'FEB':
                            $real = array('febrero_r'      => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);

                            break;
                            case 'MAR':
                            $real = array('marzo_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'ABR':
                            $real = array('abril_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'MAY':
                            $real = array('mayo_r'          => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'JUN':
                            $real = array('junio_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);

                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'JUL':
                            $real = array('julio_r'         => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'AGO':
                            $real = array('agosto_r'       => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'SEP':
                            $real = array('septiembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'OCT':
                            $real = array('octubre_r'      => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'NOV':
                            $real = array('noviembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);
                            break;
                            case 'DIC':
                            $real = array('diciembre_r'    => $mes,
                                'idmoneda'                      => $aux,
                                'idhab'                         => $id,
                                'idanho'                        => $an);
                            $this->excel_data_insert_model->reales($real);                                            
                            break;


*/