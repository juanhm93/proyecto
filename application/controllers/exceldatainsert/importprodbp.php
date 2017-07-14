<?php

/**
* 
*/
class Importprodbp extends CI_Controller
{
	
	public function __construct(){
		parent::__construct();
        $this->load->library('excel'); //load PHPExcel library
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
        $this->load->model('get_hab');
        $this->load->model('habilitadora/miohab');	
         $this->load->model('pro/mget_pro'); 
    }

    public function index(){

        $planreal =  $this->input->post('PR');
        $anho = $this->input->post('anhopro');

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
    			<td>renglon</td> 
    			<td>moneda</td>
                <td>MES</td>
          
    		</tr>"; 
 
    		for($i = 2; $i <= $numRows; $i++){

                //recoger los valores de las tablas en variables
    			$renglon       = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
    			$moneda         = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                $mes      = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();

                 if($i == 2){
                $auxmes = $mes;
            }
                echo '<tr>';
                echo '<td>'.$renglon.'</td>';
                echo '<td>'.$moneda.'</td>';
                echo '<td>'.$mes.'</td>';
                echo '</tr>';  
                
                if ($i != 2 ) {
                         if($renglon == "" && $moneda == "" && $mes == "" ){
                        break;
                        }//fin if vacio 

                          $auxmoneda=0;
                           if($moneda == "VEF"){
                                $auxmoneda = 1;
                            }
                            if($moneda == "USD"){
                                $auxmoneda = 2;
                            }

                              $IDpro = $this->mget_pro->getidproyecto($renglon);
 

                
                 if($this->mget_pro->getprorealnum_rows($IDpro,$anho,$auxmoneda) > 0){

                        $idreal =  $this->mget_pro->getIDprorealnum_rows($IDpro,$auxmoneda,$anho); 
                        $this->get_hab->updaterealpuntual($idreal,$auxmes,$mes,$auxmoneda,$anho);

                     }else{

                        $this->mget_pro->insertrealpuntualproyecto($IDpro,$auxmes,$mes,$auxmoneda,$anho);

                     }     


                }// fin distinto de 2
               

             }//fin del for recorrido de excel
           echo "</table>";

             ?> <script>
                window.alert('Se ha cargado el anual correctamente');
                window.location= '<?= base_url()?>pro/cimportarpdbp';
            </script><?php

            
                }//condicion si es un archivo xls xlsv
		}//fin index

}

//SELECT habilitadora.descriphab,gerencia.siglas,gerencia.gerehab FROM `habilitadora` JOIN gerencia ON habilitadora.idgerencia = gerencia.idgere