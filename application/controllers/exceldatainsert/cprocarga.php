<?php
class Cprocarga extends CI_controller
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
                    <td>renglon</td>
                    <td>titulo</td>
                    <td>division</td>
                    <td>dom</td>
                    <td>em</td>
                   
                </tr>";

                    for ($i = 5; $i <= $numRows; $i++) {

                        $categoria = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
                        $renglon = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                         $titulo = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();
                        $division = $objPHPExcel->getActiveSheet()->getCell('D' . $i)->getCalculatedValue();
                         $dom = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();
                        $em = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();
                      
                     echo '<tr>';
                        echo '<td>'.$categoria.'</td>';
                        echo '<td>'.$renglon.'</td>';
                        echo '<td>'.$titulo.'</td>';
                        echo '<td>'.$division.'</td>';
                        echo '<td>'.$dom.'</td>';
                        echo '<td>'.$em.'</td>';
                         echo '</tr>';   



                        if($this->miohab->existecat($categoria)>0){

                          $IDcategoria =  $this->miohab->idcat($categoria);


                          //verificar id division 


                          $IDdivision =  $this->miohab->iddiv($division);


                          if($dom == 'EP'){

                            if($this->miohab->existepro($renglon)>0){


                            }else{

                                $pro = array('renglon' => $renglon, 
                                        'titulo' => $titulo,
                                       'idcategoria' => $IDcategoria,
                                        'iddivision' => $IDdivision,
                                        'iddom'=> 1);


                            $this ->excel_data_insert_model->proyectos($pro);  
                            }

                                
                          }// dom == EP
                          if($dom == 'EM'){

                            if($this->miohab->existepro($renglon)>0){


                            }else{
                                
                               $IDem = $this->miohab->idem($em);

                                   $pro = array('renglon' => $renglon, 
                                        'titulo' => $titulo,
                                       'idcategoria' => $IDcategoria,
                                        'iddivision' => $IDdivision,
                                        'iddom'=> 2,
                                        'idemfk' => $IDem);


                            $this ->excel_data_insert_model->proyectos($pro);  
                              

                                
                            }





                          }//dom EM 



                        }else{


                            
                        } 
                           
                    }//fin for  
                     
                        echo '</table>'; 
                         ?><script>
                window.alert('Se ha importado correctamente los proyectos');
                window.location= '<?= base_url()?>pro/cimportarpro';
            </script> <?php  
 
                                 
            } //fin condicional verificador de archivos xls y xlsx

    }//fin del metodo Excelhab
}//fin clase
 
                    