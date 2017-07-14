	<?php

/**
 *
 */
defined('BASEPATH') or exit('No direct script access allowed');
class Obtenerfile extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->library('excel'); //load PHPExcel library
        //$this->load-> ('upload_model');//To Upload file in a directory
        $this->load->model('excel_data_insert_model');
        $this->load->model('get_id');
    }

    public function index()
    {
           $this->load->view('home');

    }

    public function Excel()
    {
        $moneda = $this->input->post('moneda');
        $anho = $this->input->post('anho');

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
           
            for ($i = 6; $i <= $numRows; $i++) {

                //recoger los valores de las tablas en variables
                $categoria       = $objPHPExcel->getActiveSheet()->getCell('A' . $i)->getCalculatedValue();
                $renglon         = $objPHPExcel->getActiveSheet()->getCell('B' . $i)->getCalculatedValue();
                $titulo          = $objPHPExcel->getActiveSheet()->getCell('C' . $i)->getCalculatedValue();
                $plan_enero      = $objPHPExcel->getActiveSheet()->getCell('D' . $i)->getCalculatedValue();
                $real_enero      = $objPHPExcel->getActiveSheet()->getCell('E' . $i)->getCalculatedValue();
                $plan_febrero    = $objPHPExcel->getActiveSheet()->getCell('F' . $i)->getCalculatedValue();
                $real_febrero    = $objPHPExcel->getActiveSheet()->getCell('G' . $i)->getCalculatedValue();
                $plan_marzo      = $objPHPExcel->getActiveSheet()->getCell('H' . $i)->getCalculatedValue();
                $real_marzo      = $objPHPExcel->getActiveSheet()->getCell('I' . $i)->getCalculatedValue();
                $plan_abril      = $objPHPExcel->getActiveSheet()->getCell('J' . $i)->getCalculatedValue();
                $real_abril      = $objPHPExcel->getActiveSheet()->getCell('K' . $i)->getCalculatedValue();
                $plan_mayo       = $objPHPExcel->getActiveSheet()->getCell('L' . $i)->getCalculatedValue();
                $real_mayo       = $objPHPExcel->getActiveSheet()->getCell('M' . $i)->getCalculatedValue();
                $plan_junio      = $objPHPExcel->getActiveSheet()->getCell('N' . $i)->getCalculatedValue();
                $real_junio      = $objPHPExcel->getActiveSheet()->getCell('O' . $i)->getCalculatedValue();
                $plan_julio      = $objPHPExcel->getActiveSheet()->getCell('P' . $i)->getCalculatedValue();
                $real_julio      = $objPHPExcel->getActiveSheet()->getCell('Q' . $i)->getCalculatedValue();
                $plan_agosto     = $objPHPExcel->getActiveSheet()->getCell('R' . $i)->getCalculatedValue();
                $real_agosto     = $objPHPExcel->getActiveSheet()->getCell('S' . $i)->getCalculatedValue();
                $plan_septiembre = $objPHPExcel->getActiveSheet()->getCell('T' . $i)->getCalculatedValue();
                $real_septiembre = $objPHPExcel->getActiveSheet()->getCell('U' . $i)->getCalculatedValue();
                $plan_octubre    = $objPHPExcel->getActiveSheet()->getCell('V' . $i)->getCalculatedValue();
                $real_octubre    = $objPHPExcel->getActiveSheet()->getCell('W' . $i)->getCalculatedValue();
                $plan_noviembre  = $objPHPExcel->getActiveSheet()->getCell('X' . $i)->getCalculatedValue();
                $real_noviembre  = $objPHPExcel->getActiveSheet()->getCell('Y' . $i)->getCalculatedValue();
                $plan_diciembre  = $objPHPExcel->getActiveSheet()->getCell('Z' . $i)->getCalculatedValue();
                $real_diciembre  = $objPHPExcel->getActiveSheet()->getCell('AA' . $i)->getCalculatedValue();
                /*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

                //validando que no se inserten columnas sin valores
                if ($categoria == "" and $renglon == "" and $titulo == "") {
                    $i = $numRows;
                }
                /*+++++++++++++++++++++++++++++++++++++++++++++++*/

                //asignando valor a plan cuando son vacios
                if ($plan_enero == "") {$plan_enero = 0;}
                if ($real_enero == "") {$real_enero = 0;}
                if ($plan_febrero == "") {$plan_febrero = 0;}
                if ($real_febrero == "") {$real_febrero = 0;}
                if ($plan_marzo == "") {$plan_marzo = 0;}
                if ($real_marzo == "") {$real_marzo = 0;}
                if ($plan_abril == "") {$plan_abril = 0;}
                if ($real_abril == "") {$real_abril = 0;}
                if ($plan_mayo == "") {$plan_mayo = 0;}
                if ($real_mayo == "") {$real_mayo = 0;}
                if ($plan_junio == "") {$plan_junio = 0;}
                if ($real_junio == "") {$real_junio = 0;}
                if ($plan_julio == "") {$plan_julio = 0;}
                if ($real_julio == "") {$real_julio = 0;}
                if ($plan_agosto == "") {$plan_agosto = 0;}
                if ($real_agosto == "") {$real_agosto = 0;}
                if ($plan_septiembre == "") {$plan_septiembre = 0;}
                if ($real_septiembre == "") {$real_septiembre = 0;}
                if ($plan_octubre == "") {$plan_octubre = 0;}
                if ($real_octubre == "") {$real_octubre = 0;}
                if ($plan_noviembre == "") {$plan_noviembre = 0;}
                if ($real_noviembre == "") {$real_noviembre = 0;}
                if ($plan_diciembre == "") {$plan_diciembre = 0;}
                if ($real_diciembre == "") {$real_diciembre = 0;}
                /*+++++++++++++++++++++++++++++++++++++++++++++++*/

                //para guardar categorias de distinto nombre
                if ($categoria != '') {
                    $verificacion = true;
                }
                //validando campos de categorias//
                if ($categoria != "") {
                    $categoriaAyuda = $categoria;
                } else {
                    $categoria = $categoriaAyuda;
                }

                $txt = 'Total';
                $aux = strpos($categoria, $txt);
                /*+++++++++++++++++++++++++++++++++++++++++++++++*/

                //if para validar que no tome la linea de los TOTALES

                if ($aux === false  and $i != $numRows) {

                    $numeroCategoria = substr($categoria, 0, 2);
                    $nombreCategoria = substr($categoria, 3, strlen($categoria));
                    /*++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

                    $datoscategoria = array('numcategoria' => $numeroCategoria,
                        'descripcion'                          => $nombreCategoria,
                    );

                    
                    //condicional para evitar cargar en la base de datos categorias con el mismo nombre
                    if ($verificacion == true) {
                        $this->excel_data_insert_model->categoria($datoscategoria);
                        $verificacion = false;
                    }


                    $categoriaID = $this->get_id->getmax_number_Categoria();


                    $proyecto = array('renglon' => $renglon,
                        'titulo'                    => $titulo,
                        'idcategoria'               => $categoriaID);

                    $this->excel_data_insert_model->proyectos($proyecto);

                    $proyectoID = $this->get_id->getmax_number_pro(); 

                    // maravilloso corazon - rafael buscar
                    $planproyecto = array('enero_p' => $plan_enero,
                        'febrero_p'                     => $plan_febrero,
                        'marzo_p'                       => $plan_marzo,
                        'abril_p'                       => $plan_abril,
                        'mayo_p'                        => $plan_mayo,
                        'junio_p'                       => $plan_junio,
                        'julio_p'                       => $plan_julio,
                        'agosto_p'                      => $plan_agosto,
                        'septiembre_p'                  => $plan_septiembre,
                        'octubre_p'                     => $plan_octubre,
                        'noviembre_p'                   => $plan_noviembre,
                        'diciembre_p'                   => $plan_diciembre,
                        'idmoneda'                      => $moneda,
                        'idproyecto'                    => $proyectoID,
                        'idanho'                        => $anho);

                    $realproyecto = array('enero_r' => $real_enero,
                        'febrero_r'                     => $real_febrero,
                        'marzo_r'                       => $real_marzo,
                        'abril_r'                       => $real_abril,
                        'mayo_r'                        => $real_mayo,
                        'junio_r'                       => $real_junio,
                        'julio_r'                       => $real_julio,
                        'agosto_r'                      => $real_agosto,
                        'septiembre_r'                  => $real_septiembre,
                        'octubre_r'                     => $real_octubre,
                        'noviembre_r'                   => $real_noviembre,
                        'diciembre_r'                   => $real_diciembre,
                        'idmoneda'                      => $moneda,
                        'idproyecto'                    => $proyectoID,
                        'idanho'                        => $anho);



                    $this->excel_data_insert_model->plan($planproyecto);
                    $this->excel_data_insert_model->reales($realproyecto);
                   
                } else {

                    continue;
                } //fin--if($aux === false and $i != $numRows)

            } //fin del for recorrido para guardar excel

            redirect('home', 'refresh');
        } else {
            echo "el Archivo tiene extension .xls";
        }

    } //fin class public excel
}
?><script>
                window.alert('Se ha importaron las categorias correctamente');
                window.location= '<?= //base_url()?>pro/cimportarcat';
            </script> <?php  