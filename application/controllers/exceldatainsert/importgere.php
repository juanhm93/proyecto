<?php

/**
* 
*/
class Importgere extends CI_Controller
{
	
	public function __construct(){
		parent::__construct();
        $this->load->library('excel'); //load PHPExcel library
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
        $this->load->model('get_hab');
        $this->load->model('habilitadora/miohab');	
    }

    public function index(){
    	$nametmp  = $_FILES["excel"]["tmp_name"];
    	$filename = $_FILES["excel"]["name"];

    	if (substr($filename, -3) == "xls" || substr($filename, -4) == "xlsx") {

    		$fecha   = date("y-m-d");
    		$carpeta = "archivos-excel/";
    		$excel   = $fecha."-".$filename;

    		$ruta = "$carpeta$excel";
    		echo "ruta:" . $ruta;
    		move_uploaded_file($_FILES['excel']['tmp_name'], $ruta);

    		$objPHPExcel = PHPEXCEL_IOFactory::load($ruta);

            //hoja que se va a leer
    		$objPHPExcel->setActiveSheetIndex(0);
            //obteniendo numero de filas del documento
    		$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
    		echo "numero de filas".$numRows;
    		echo "<table border=1>
    		<tr>
    			<td>gerencia</td>
    			<td>Siglas</td>
    			<td>inversion</td>
    			<td>operacion</td>
    			<td>division</td>
    		</tr>";

    		for($i = 1; $i <= $numRows; $i++){

                //recoger los valores de las tablas en variables
    			$gerencia       = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
    			$siglas         = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();
    			$tipoI          = $objPHPExcel->getActiveSheet()->getCell('D' . $i)->getCalculatedValue();
    			$tipoO      = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();
    			$tipodiv     = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();

    			echo '<tr>';
    			echo '<td>'.$gerencia.'</td>';
    			echo '<td>'.$siglas.'</td>';
    			echo '<td>'.$tipoI.'</td>';
    			echo '<td>'.$tipoO.'</td>';
    			echo '<td>'.$tipodiv.'</td>'; 
    			echo '</tr>';

    			  if($gerencia == ""){
                         break;
                  }

	               if($this->miohab->existegere($gerencia) > 0){

	                   $IDg = $this->miohab->getidgere($gerencia);

	                   
	                   foreach ($IDg->result() as  $fila) {
	                    	 
	                 		
    					if($tipoI == "INV"){
    						$IDh = $this->miohab->invudp($fila->idgere,1);

    						$aux = $this->miohab->getiddiv($tipodiv);
    						foreach ($aux->result() as   $value) {
    							$hab = array('idgerencia' => $fila->idgere,
    										'tipodivfk'	 =>  $value->iddiv);
    						}
    					 
    						foreach ($IDh as $x) {
    							$this->excel_data_insert_model->udphabilitador($x->idhab,$hab);
    						}

    					 }
    					
    					if($tipoO == "OP"){

    						$IDh = $this->miohab->invudp($fila->idgere,2);
    						$aux = $this->miohab->getiddiv($tipodiv);
    						foreach ($aux->result() as   $value) {
    							$hab = array('idgerencia' => $fila->idgere,
    										'tipodivfk'	 =>  $value->iddiv);
    						}
    						foreach ($IDh as $x) {
    							$this->excel_data_insert_model->udphabilitador($x->idhab,$hab);
    						}
    						
    					}
    					}// fin for each gerencia 	*/
    					
	               }else{
	                         $insertar = array('siglas' => $siglas,
                                        'gerehab' => $gerencia );
                        $this->get_hab->gerencia($insertar);
                        $gereID  = $this->get_id->getmax_number_gere();

                        if($tipoI == "INV"){

                            $j =    $this->miohab->inv($gereID,1);
                            $j = $j+1;
                            $valor = "HI";	
                            $aux = "$valor-$siglas$j";
                            echo 'descripcion de  habilitadora'.$aux.'<br>';
                           
                             $div = $this->miohab->getiddiv($tipodiv);
                             foreach ($div->result() as  $value) {
                             	  $hab = array('idgerencia' => $gereID,
                                'descriphab' => $aux,
                                'idtipo_IO' => 1,
                                'tipodivfk' =>   $value->iddiv);
                             }
                            $this->excel_data_insert_model->habilitador($hab);
                            }//fin if INV


                        if($tipoO == "OP"){

                            $j =    $this->miohab->inv($gereID,2);
                            $j = $j+1;
                            $valor = "HO";
                            $aux = "$valor-$siglas$j";
                            echo 'descripcion de  habilitadora'.$aux.'<br>';

                            $div = $this->miohab->getiddiv($tipodiv);
                             foreach ($div->result() as  $value) {
                             	  $hab = array('idgerencia' => $gereID,
                                'descriphab' => $aux,
                                'idtipo_IO' => 2,
                                'tipodivfk' =>  $value->iddiv);
                             }
                            $this->excel_data_insert_model->habilitador($hab);
                        }//fin if OP

	               }//fin nums > 0

             }//fin del for recorrido de excel
             echo '</table>';
		}//condicion si es un archivo xls xlsv

	}//fin de index	

}