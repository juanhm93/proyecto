<?php
class Ccatcarga extends CI_controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('excel');
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
        $this->load->model('get_hab');
        $this->load->model('elementc');
         $this->load->model('habilitadora/miohab');
    }

    public function index()
    {

      //  $ele = false;
        $contador = 0;
        $nametmp  = $_FILES["excel"]["tmp_name"];
        $filename = $_FILES["excel"]["name"];

            if (substr($filename, -3) == "xls" || substr($filename, -4) == "xlsx") {

                $fecha   = date("y-m-d");
                $carpeta = "archivos-excel/";
                $excel   = $fecha . "-" . $filename;

                $ruta = "$carpeta$excel";
                echo "ruta:" . $ruta;
                move_uploaded_file($_FILES['excel']['tmp_name'], $ruta);

                $objPHPExcel = PHPEXCEL_IOFactory::load($ruta);

                //hoja que se va a leer
                $objPHPExcel->setActiveSheetIndex(0);
                //obteniendo numero de filas del documento
                $numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();
                echo "numero de filas :" . $numRows;
                echo "<table border=1>
                <tr>
                    <td>catengoria</td>
                    <td>descripcion</td>
                   
                </tr>";

                    for ($i = 2; $i <= $numRows; $i++) {

                        $categoria = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
                        $descripcion = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                      
                     echo '<tr>';
                        echo '<td>'.$categoria.'</td>';
                        echo '<td>'.$descripcion.'</td>';
                         echo '</tr>';                                                  
                                    
                        if($this->miohab->existecat($descripcion)>0){


                        }else{

                            $cate = array('numcategoria' => $categoria,
                                            'descripcion' => $descripcion);

                           $this->excel_data_insert_model->categoria($cate);
                        }
                           
                    }//fin for  
                      
                        echo '</table>'; 

                    ?> <script>
                window.alert('Se ha importaron las categorias correctamente');
                window.location= '<?= base_url()?>pro/cimportarcat';
            </script><?php    
                                 
            } //fin condicional verificador de archivos xls y xlsx

    }//fin del metodo Excelhab
}//fin clase
 