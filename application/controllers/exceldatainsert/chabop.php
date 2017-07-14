<?php
class Chabop extends CI_controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('excel');
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
        $this->load->model('get_hab');
        $this->load->model('elementc');
    }

    public function index()
    {
         $moneda = $this->input->post('moneda');
        $anho = $this->input->post('anho');


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
                                <td>descripcion</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                        <td>Plan</td>
                                        <td>Real</td>
                                </tr>";
                    for ($i = 0; $i <= $numRows; $i++) {

                        $gerencia_ele_costo = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                        $plan_enero         = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();
                        $real_enero         = $objPHPExcel->getActiveSheet()->getCell('G' . $i)->getCalculatedValue();
                        $plan_febrero       = $objPHPExcel->getActiveSheet()->getCell('J' . $i)->getCalculatedValue();
                        $real_febrero       = $objPHPExcel->getActiveSheet()->getCell('K' . $i)->getCalculatedValue();
                        $plan_marzo         = $objPHPExcel->getActiveSheet()->getCell('N' . $i)->getCalculatedValue();
                        $real_marzo         = $objPHPExcel->getActiveSheet()->getCell('O' . $i)->getCalculatedValue();
                        $plan_abril         = $objPHPExcel->getActiveSheet()->getCell('R' . $i)->getCalculatedValue();
                        $real_abril         = $objPHPExcel->getActiveSheet()->getCell('S' . $i)->getCalculatedValue();
                        $plan_mayo         = $objPHPExcel->getActiveSheet()->getCell('V' . $i)->getCalculatedValue();
                        $real_mayo          = $objPHPExcel->getActiveSheet()->getCell('W' . $i)->getCalculatedValue();
                        $plan_junio         = $objPHPExcel->getActiveSheet()->getCell('Z' . $i)->getCalculatedValue();
                        $real_junio         = $objPHPExcel->getActiveSheet()->getCell('AA' . $i)->getCalculatedValue();
                        $plan_julio         = $objPHPExcel->getActiveSheet()->getCell('AD' . $i)->getCalculatedValue();
                        $real_julio         = $objPHPExcel->getActiveSheet()->getCell('AE' . $i)->getCalculatedValue();
                        $plan_agosto         = $objPHPExcel->getActiveSheet()->getCell('AH' . $i)->getCalculatedValue();
                        $real_agosto        = $objPHPExcel->getActiveSheet()->getCell('AI' . $i)->getCalculatedValue();
                        $plan_septiembre    = $objPHPExcel->getActiveSheet()->getCell('AL' . $i)->getCalculatedValue();
                        $real_septiembre    = $objPHPExcel->getActiveSheet()->getCell('AM' . $i)->getCalculatedValue();
                        $plan_octubre     = $objPHPExcel->getActiveSheet()->getCell('AP' . $i)->getCalculatedValue();
                        $real_octubre       = $objPHPExcel->getActiveSheet()->getCell('AQ' . $i)->getCalculatedValue();
                        $plan_noviembre     = $objPHPExcel->getActiveSheet()->getCell('AT' . $i)->getCalculatedValue();
                        $real_noviembre     = $objPHPExcel->getActiveSheet()->getCell('AU' . $i)->getCalculatedValue();
                        $plan_diciembre     = $objPHPExcel->getActiveSheet()->getCell('AX' . $i)->getCalculatedValue();
                        $real_diciembre     = $objPHPExcel->getActiveSheet()->getCell('AY' . $i)->getCalculatedValue();
                         
                         echo '<tr>';
                        echo '<td>'.$gerencia_ele_costo.'</td>';
                        echo '<td>'.$plan_enero.'</td>';
                        echo '<td>'.$real_enero.'</td>';
                        echo '<td>'.$plan_febrero.'</td>';
                        echo '<td>'.$real_febrero.'</td>';
                        echo '<td>'.$plan_marzo.'</td>';
                        echo '<td>'.$real_marzo.'</td>';
                        echo '<td>'.$plan_abril.'</td>';
                        echo '<td>'.$real_abril.'</td>';
                        echo '<td>'.$plan_mayo.'</td>';
                        echo '<td>'.$real_mayo.'</td>';
                        echo '<td>'.$plan_junio.'</td>';
                        echo '<td>'.$real_junio.'</td>';
                         echo '<td>'.$plan_julio.'</td>';
                        echo '<td>'.$real_julio.'</td>';
                        echo '<td>'.$plan_agosto.'</td>';
                        echo '<td>'.$real_agosto.'</td>';
                        echo '<td>'.$plan_septiembre.'</td>';
                        echo '<td>'.$real_septiembre.'</td>';
                        echo '<td>'.$plan_octubre.'</td>';
                        echo '<td>'.$real_octubre.'</td>';
                        echo '<td>'.$plan_noviembre.'</td>';
                        echo '<td>'.$real_noviembre.'</td>';
                          echo '<td>'.$plan_diciembre.'</td>';
                        echo '<td>'.$real_diciembre.'</td>';
                         echo '</tr>';


                    /*    if ($contador == 2) {
                            $i = $numRows;
                        }

                        $comparar='Total';
                        $c7 = strpos($gerencia_ele_costo, "Total");
                        
                        if ($gerencia_ele_costo == "" and $real_enero == "" and $real_febrero == "") {
                            $contador++;
                            continue;
                        }

                        //modificando contador 
                        if($c7!==false AND $contador!=0){
                            $contador--;
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
                        if ($plan_enero == "") {$plan_enero = 0;}
                        if ($plan_febrero == "") {$plan_febrero = 0;}
                        if ($plan_marzo == "") {$plan_marzo = 0;}
                        if ($plan_abril == "") {$plan_abril = 0;}
                        if ($plan_mayo == "") {$plan_mayo = 0;}
                        if ($plan_junio == "") {$plan_junio = 0;}
                        if ($plan_julio == "") {$plan_julio = 0;}
                        if ($plan_agosto == "") {$plan_agosto = 0;}
                        if ($plan_septiembre == "") {$plan_septiembre = 0;}
                        if ($plan_octubre == "") {$plan_octubre = 0;}
                        if ($plan_noviembre == "") {$plan_noviembre = 0;}
                        if ($plan_diciembre == "") {$plan_diciembre = 0;}
                        
                         $ele = $this->elementc->todoelement($gerencia_ele_costo);

                         if($ele === true){
                            echo "si es uno de los elementos de costo : ".$ele."<br>";
                         }else{
                            echo "es una habilitadora<br>";
                         }
                            $gerenciaID=0;

                            if($i!=$numRows){
                             
                                if ($gerencia_ele_costo!="" AND  $c7===false AND $ele!==true) {                                    
                                   
                                    $aux = $gerencia_ele_costo;
                                    echo "gerencia".$aux."<br>";
                                    //validar la comparacion de si la gerencia ya existe
                                    //si exite devolver el id

                                    
                                    if($this->get_hab->validarger($gerencia_ele_costo)> 0){

                                     $gerenciaID = $this->get_hab->idgere();
                                        
                                    }else{

                                    $gerencia = array('gerehab' => $gerencia_ele_costo);

                                    $this->get_hab->gerencia($gerencia);

                                    }
                                    } 
                                    if($ele){
                                        $costoID =  $this->elementc->costosid($gerencia_ele_costo); 
                                        if($gerenciaID!=0){

                                            if($this->get_hab->habrealnum($gereID,$moneda,$anho,$costoID)> 0 &&$this->get_hab->habplannum($gereID,$moneda,$anho,$costoID)> 0){

                                            $id1 = $this->get_hab->habrealget($gereID,$moneda,$anho,$costoID);

                                           $id2 = $this->get_hab->habplanget($gereID,$moneda,$anho,$costoID);

                                           echo $id1->idreal;
                                           echo $id1->idhab;

                                           echo $id2->idplan;
                                           echo $id2->idhab;

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
                                            'diciembre_r'           => $real_diciembre,
                                            'idmoneda'              => $moneda,
                                            'idhab'                 => $habID,
                                            'idanho'                => $anho);

                                            $plan = array('enero_p' => $plan_enero,
                                        'febrero_p'             => $plan_febrero,
                                        'marzo_p'               => $plan_marzo,
                                        'abril_p'               => $plan_abril,
                                        'mayo_p'                => $plan_mayo,
                                        'junio_p'               => $plan_junio,
                                        'julio_p'               => $plan_julio,
                                        'agosto_p'              => $plan_agosto,
                                        'septiembre_p'          => $plan_septiembre,
                                        'octubre_p'             => $plan_octubre,
                                        'noviembre_p'           => $plan_noviembre,
                                        'diciembre_p'           => $plan_diciembre,
                                        'idmoneda'              => $moneda,
                                        'idhab'                 => $habID,
                                        'idanho'                => $anho);
                                            //este es el update
                                            $this->get_hab->updateplan($idPlan,$plan);
                                            $this->get_hab->updatereal($idReal,$real);
                                       
                                           
                                        }// fin si existe alguien en real o en plan activo


                                    
                                        }else{

                                             $gereID  = $this->get_id->getmax_number_gere();
                                          
                                            $this->elementc->gerenciando($gereID);

                                         $conca = "$aux$gerencia_ele_costo";
                                         echo $conca;


                                         $hab = array('idgerencia' =>  $gereID, 
                                                            'descriphab'=> $conca,
                                                         'idelementoc' => $costoID);
                                        
                                         //vereficar la insercion de la habilitadora para poder ver si se inserta o es un update tambien

                                        $this->excel_data_insert_model->habilitador($hab);

                                        $habID = $this->get_id->getmax_number_hab(); 


                                        $plan = array('enero_p' => $plan_enero,
                                        'febrero_p'             => $plan_febrero,
                                        'marzo_p'               => $plan_marzo,
                                        'abril_p'               => $plan_abril,
                                        'mayo_p'                => $plan_mayo,
                                        'junio_p'               => $plan_junio,
                                        'julio_p'               => $plan_julio,
                                        'agosto_p'              => $plan_agosto,
                                        'septiembre_p'          => $plan_septiembre,
                                        'octubre_p'             => $plan_octubre,
                                        'noviembre_p'           => $plan_noviembre,
                                        'diciembre_p'           => $plan_diciembre,
                                        'idmoneda'              => $moneda,
                                        'idhab'                 => $habID,
                                        'idanho'                => $anho);

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
                                            'diciembre_r'           => $real_diciembre,
                                            'idmoneda'              => $moneda,
                                            'idhab'                 => $habID,
                                            'idanho'                => $anho);

                                        
                                        $this->excel_data_insert_model->plan($plan);
                                        $this->excel_data_insert_model->reales($real);


                                        }//fin idgerencia
                                         
                                         //si se inserta usar este metodo
                                         
                                        


                                         


                                        //hacer validacion para ver si es insert o update
                                        
                                        
                                                                                 
                                    }//fin  else   
                            }//fin $i!=$numrow*/
                    }//fin for  
                     echo '</table>';     
                  //  echo "valor de i".$i; 
                   // redirect('chab', 'refresh');              
            } //fin condicional verificador de archivos xls y xlsx

    }//fin del metodo Excelhab
}//fin clase