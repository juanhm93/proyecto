<?php

/**
* 
*/
class Importphp extends CI_Controller
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

        $planreal =  $this->input->post('PR');
        $anho = $this->input->post('anohabilitadora');

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
             <td>dist</td>
             <td>elemento</td>
             <td>moneda</td>
             <td>mes</td>
         </tr>"; 

         for($i = 2; $i <= $numRows; $i++){

                //recoger los valores de las tablas en variables
             $gerencia     = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
             $dist         = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
             $elemento     = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();
             $moneda       = $objPHPExcel->getActiveSheet()->getCell('D' . $i)->getCalculatedValue();
             $mes          = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();

             if($i == 2){
                $auxmes = $mes;
            }
            echo '<tr>';
            echo '<td>'.$gerencia.'</td>';
            echo '<td>'.$dist.'</td>';
            echo '<td>'.$elemento.'</td>';
            echo '<td>'.$moneda.'</td>';
            echo '<td>'.$mes.'</td>';
            echo '</tr>';

                if($i != 2){

                        
                        if($gerencia == "" && $dist == "" && $elemento == "" ){
                        break;
                        }//fin if vacio 
                            $auxmoneda=0;
                           if($moneda == "VEF"){
                                $auxmoneda = 1;
                            }
                            if($moneda == "USD"){
                                $auxmoneda = 2;
                            }

                         $idhab = $this->get_hab->getidhabilitadora($gerencia);
 

                
                 if($this->get_hab->gethabrealnum_rows($idhab,$dist,$anho,$auxmoneda) > 0){

                        $idreal =  $this->get_hab->getIDprorealnum_rows($idhab,$auxmoneda,$anho,$dist); 
                        $this->get_hab->updaterealpuntual($idreal,$auxmes,$mes,$auxmoneda,$anho);

                     }else{
                        
                        $habilitadora = array('idhabfk' =>  $idhab, 'idelecfk' =>  $dist);     
                        $this->excel_data_insert_model->inserthabilitadora($habilitadora);
                        $idhabe =  $this->get_id->getmax_number_habelec();
                        

                        $this->get_hab->insertrealpuntual($idhabe,$auxmes,$mes,$auxmoneda,$anho);

                     }     

                }//fin if != 2 

            }//fin del for  
            echo "</table>";


             ?> <script>
                window.alert('Se ha cargado el anual correctamente');
                window.location= '<?= base_url()?>chab';
            </script><?php



        }//fin del for recorrido de excel
             
             
    }//condicion si es un archivo xls xlsv


  
           




}	

//SELECT habilitadora.descriphab,gerencia.siglas,gerencia.gerehab FROM `habilitadora` JOIN gerencia ON habilitadora.idgerencia = gerencia.idgere