<?php
class Chabilitadora extends CI_controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('excel');
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
        $this->load->model('get_hab');
    }

    public function Excelhab()
    {


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

                    for ($i = 7; $i <= $numRows; $i++) {

                        $gerencia_ele_costo = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
                        $real_enero         = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                        $real_febrero       = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();
                        $real_marzo         = $objPHPExcel->getActiveSheet()->getCell('D' . $i)->getCalculatedValue();
                        $real_abril         = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();
                        $real_mayo          = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();
                        $real_junio         = $objPHPExcel->getActiveSheet()->getCell('G' . $i)->getCalculatedValue();
                        $real_julio         = $objPHPExcel->getActiveSheet()->getCell('H' . $i)->getCalculatedValue();
                        $real_agosto        = $objPHPExcel->getActiveSheet()->getCell('I' . $i)->getCalculatedValue();
                        $real_septiembre    = $objPHPExcel->getActiveSheet()->getCell('J' . $i)->getCalculatedValue();
                        $real_octubre       = $objPHPExcel->getActiveSheet()->getCell('K' . $i)->getCalculatedValue();
                        $real_noviembre     = $objPHPExcel->getActiveSheet()->getCell('L' . $i)->getCalculatedValue();
                        $real_diciembre     = $objPHPExcel->getActiveSheet()->getCell('M' . $i)->getCalculatedValue();

                        echo "<table>
                                <tr>
                                    <td>gerencia</td>
                                    <td>enero</td>
                                    <td>Febrero</td>
                                    <td>Marzo</td>
                                    <td>Abril</td>
                                    <td>Mayo</td>
                                    <td>Junio</td>
                                    <td>Julio</td>
                                    <td>Agosto</td>
                                    <td>Septiembre</td>
                                    <td>Octubre</td>
                                    <td>Noviembre</td>
                                    <td>Diciemrbe</td>
                                </tr>
                            </table>";

                        if ($contador == 2) {
                            $i = $numRows;
                        }

                        /*
                        $comparar="Total";
                        $c2 = strpos($gerencia_ele_costo, "Labor");
                        $c3 = strpos($gerencia_ele_costo, "Beneficio y Bienestar");
                        $c4 = strpos($gerencia_ele_costo, 'Materiales');
                        $c5 = strpos($gerencia_ele_costo, "Servicios y Contratos");
                        $c6 = strpos($gerencia_ele_costo, "Otros");
                        $c7 = strpos($gerencia_ele_costo, $comparar);

                        //validando que no se inserten columnas sin valores
                        if ($gerencia_ele_costo == "" and $real_enero == "" and $real_febrero == "") {
                        $contador++;
                        echo "contador ++ ".$contador;
                        continue;
                        }

                        //modificando contador 
                        if($c7===true AND $contador!=0){
                        $contador--;
                        echo "contador -- ".$contador;
                        }
                        
                        //asignando valor a plan cuando son vacios
                        if ($real_enero == "") {$real_enero = 0;}
                        if ($real_febrero == "") {$real_febrero = 0;}
                        if ($real_marzo == "") {$real_marzo = 0;}
                        if ($real_abril == "") {$real_abril = 0;}
                        if ($real_mayo == "") {$real_mayo = 0;}
                        if ($real_junio == "") {$real_junio = 0;}
                        if ($real_julio == "") {$real_julio = 0;}
                        if ($real_agosto == "") {$real_agosto = 0;}
                        if ($real_septiembre == "") {$real_septiembre = 0;}
                        if ($real_octubre == "") {$real_octubre = 0;}
                        if ($real_noviembre == "") {$real_noviembre = 0;}
                        if ($real_diciembre == "") {$real_diciembre = 0;}
                        */
                            if($i!=$numRows){
                              
                                if ($gerencia_ele_costo!="" AND $c2===false AND $c3===false AND $c4===false AND $c5===false AND $c6===false AND $c7===false) {
                                   
                                    echo "gerencia".$aux = $gerencia_ele_costo;
                                    $gerencia = array('gerehab' => $gerencia_ele_costo);

                                    $this->get_hab->gerencia($gerencia);
                                }
                                $real = array('enero_r' => $real_enero,
                                    'febrero_r'             => $real_febrero,
                                    'marzo_r'               => $real_marzo,
                                    'abril_r'               => $real_abril,
                                    'mayo_r'                => $real_mayo,
                                    'junio_r'               => $real_junio,
                                    'julio_r'               => $real_julio,
                                    'agosto_r'              => $real_agosto,
                                    'septiembre_r'          => $real_septiembre,
                                    'octubre_r'             => $real_octubre,
                                    'noviembre_r'           => $real_noviembre,
                                    'diciembre_r'           => $real_diciembre);

                                    $this->excel_data_insert_model->reales($real);
                                    $realID = $this->get_id->getmax_number_real();

                                        if (strpos($gerencia_ele_costo, 'Labor')) {
                                            echo "nombre" . $nombre = "$aux$gerencia_ele_costo";
                                            $labor                  = array('renglonL' => $nombre, 'idreal' => $realID);
                                            $this->get_hab->labor($labor);
                                        }
                                            if (strpos($gerencia_ele_costo, 'Beneficio y Bienestar')) {
                                                echo "nombre" . $nombre = "$aux$gerencia_ele_costo";
                                                $bb                     = array('renglonB' => $nombre, 'idreal' => $realID);
                                                $this->get_hab->beneficio($bb);
                                            }
                                                if (strpos($gerencia_ele_costo, 'Materiales')) {
                                                    echo "nombre" . $nombre = "$aux$gerencia_ele_costo";
                                                    $materiales             = array('renglonM' => $nombre, 'idreal' => $realID);
                                                    $this->get_hab->materiales($materiales);
                                                }
                                                    if (strpos($gerencia_ele_costo, 'Servicios y Contratos')) {
                                                        echo "nombre" . $nombre = "$aux$gerencia_ele_costo";
                                                        $servicios              = array('renglonS' => $nombre, 'idreal' => $realID);
                                                        $this->get_hab->servicios($servicios);
                                                    }
                                                        if (strpos($gerencia_ele_costo, 'Otros')) {
                                                            echo "nombre" . $nombre = "$aux$gerencia_ele_costo";
                                                            $otros                  = array('renglonO' => $nombre, 'idreal' => $realID);
                                                            $this->get_hab->otros($otros);

                                                            echo "1" . $laborID = $this->get_id->getmax_number_labor();
                                                            echo "2" . $bbID    = $this->get_id->getmax_number_bene();
                                                            echo "3" . $matID   = $this->get_id->getmax_number_materiales();
                                                            echo "4" . $servID  = $this->get_id->getmax_number_serv();
                                                            echo "5" . $otrosID = $this->get_id->getmax_number_otros();
                                                            echo "6" . $gereID  = $this->get_id->getmax_number_gere();

                                                            $hab = array('idgerencia' => $gereID,
                                                                'idlabor'                 => $laborID,
                                                                'idbeneficio'             => $bbID,
                                                                'idmateriales'            => $matID,
                                                                'idservicio'              => $servID,
                                                                'idotros'                 => $otrosID);

                                                            $this->excel_data_insert_model->habilitador($hab);
                                                        }                           
                            }//fin $i!=$numrow
                    }//fin for              
            } //fin condicional verificador de archivos xls y xlsx
    }//fin del metodo Excelhab
}//fin clase
?>