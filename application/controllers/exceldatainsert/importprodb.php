<?php

/**
* 
*/
class Importprodb extends CI_Controller
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
                <td>enero</td>
                <td>febrero</td>
                <td>marzo</td>
                <td>abril</td>
                <td>mayo</td>
                <td>junio</td>
                <td>julio</td>
                <td>agosto</td>
                <td>septiembre</td>
                <td>octubre</td>
                <td>noviembre</td>
                <td>diciembre</td>
    		</tr>"; 
 
    		for($i = 4; $i <= $numRows; $i++){

                //recoger los valores de las tablas en variables
    			$renglon       = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
    			$moneda         = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                $enero      = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();
    			$febrero     = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();
                $mar     = $objPHPExcel->getActiveSheet()->getCell('G' . $i)->getCalculatedValue();
                $abr     = $objPHPExcel->getActiveSheet()->getCell('H' . $i)->getCalculatedValue();
                $may    = $objPHPExcel->getActiveSheet()->getCell('I' . $i)->getCalculatedValue();
                $jun     = $objPHPExcel->getActiveSheet()->getCell('J' . $i)->getCalculatedValue();
                $jul     = $objPHPExcel->getActiveSheet()->getCell('K' . $i)->getCalculatedValue();
                $ago     = $objPHPExcel->getActiveSheet()->getCell('L' . $i)->getCalculatedValue();
                $sep     = $objPHPExcel->getActiveSheet()->getCell('M' . $i)->getCalculatedValue();
                $oct     = $objPHPExcel->getActiveSheet()->getCell('N' . $i)->getCalculatedValue();
                $nov     = $objPHPExcel->getActiveSheet()->getCell('O' . $i)->getCalculatedValue();
                $dic     = $objPHPExcel->getActiveSheet()->getCell('P' . $i)->getCalculatedValue();
             
                echo '<tr>';
                echo '<td>'.$renglon.'</td>';
                echo '<td>'.$moneda.'</td>';
                echo '<td>'.$enero.'</td>';
                echo '<td>'.$febrero.'</td>';
                echo '<td>'.$mar.'</td>';
                echo '<td>'.$abr.'</td>';
                echo '<td>'.$may.'</td>';
                echo '<td>'.$jun.'</td>';
                echo '<td>'.$jul.'</td>';
                echo '<td>'.$ago.'</td>';
                echo '<td>'.$sep.'</td>';
                echo '<td>'.$oct.'</td>';
                echo '<td>'.$nov.'</td>';
                echo '<td>'.$dic.'</td>'; 
                echo '</tr>';  
                
                  //este if es para detener el cilaje si ya no tiene mas registros
               if($renglon == "" && $moneda == "" && $enero == "" ){
                    break;
                }//fin if vacio 

                if ($enero == "") {$enero = 0;}
                if ($febrero == "") {$febrero = 0;}
                if ($mar == "") {$mar = 0;}
                if ($abr == "") {$abr = 0;}
                if ($may == "") {$may = 0;}
                if ($jun == "") {$jun = 0;}
                if ($jul == "") {$jul = 0;}
                if ($ago == "") {$ago = 0;}
                if ($sep == "") {$sep = 0;}
                if ($oct == "") {$oct = 0;}
                if ($nov == "") {$nov = 0;}
                if ($dic == "") {$dic = 0;}
                

                                if($moneda == "VEF"){
                                        $auxmoneda = 1;
                                    }
                                     if($moneda == "USD"){
                                        $auxmoneda = 2;
                                    }   

              $IDpro = $this->mget_pro->getidproyecto($renglon);


              if($IDpro != ''){

                        switch ($planreal) {
                                case '1':
                                        if($this->mget_pro->getproplannum_rows($IDpro,$anho,$auxmoneda) > 0){
                                            
                                            

                                        }else{

                                              $plan = array('enero_p' => $enero,
                                            'febrero_p'                     => $febrero,
                                            'marzo_p'                       => $mar,
                                            'abril_p'                       => $abr,
                                            'mayo_p'                        => $may,
                                            'junio_p'                       => $jun,
                                            'julio_p'                       => $jul,
                                            'agosto_p'                      => $ago,
                                            'septiembre_p'                  => $sep,
                                            'octubre_p'                     => $oct,
                                            'noviembre_p'                   => $nov,
                                            'diciembre_p'                   => $dic,
                                            'idmoneda'                      => $auxmoneda,
                                            'idproyecto'                         => $IDpro,
                                            'idanho'                        => $anho);

                                          $this->excel_data_insert_model->plan($plan);
                                        }

                                    break;
                                case '2':
                                        if($this->mget_pro->getprorealnum_rows($IDpro,$anho,$auxmoneda) > 0){

                                             
                                        }{

                                             $real = array('enero_r' => $enero,
                                            'febrero_r'                     => $febrero,
                                            'marzo_r'                       => $mar,
                                            'abril_r'                       => $abr,
                                            'mayo_r'                        => $may,
                                            'junio_r'                       => $jun,
                                            'julio_r'                       => $jul,
                                            'agosto_r'                      => $ago,
                                            'septiembre_r'                  => $sep,
                                            'octubre_r'                     => $oct,
                                            'noviembre_r'                   => $nov,
                                            'diciembre_r'                   => $dic,
                                            'idmoneda'                      => $auxmoneda,
                                            'idproyecto'                    => $IDpro,
                                            'idanho'                        => $anho);

                                          $this->excel_data_insert_model->reales($real);

                                        }
                                    break;
                                
                                default:
                                    # code...
                                    break;
                            }// FIN SWITCH  */
                        


              }
                           
                    

             }//fin del for recorrido de excel
             ?> <script>
                window.alert('Se ha cargado el anual correctamente');
                window.location= '<?= base_url()?>pro/cimportarpdb';
            </script><?php
            
                }//condicion si es un archivo xls xlsv
		}//fin index

}

//SELECT habilitadora.descriphab,gerencia.siglas,gerencia.gerehab FROM `habilitadora` JOIN gerencia ON habilitadora.idgerencia = gerencia.idgere