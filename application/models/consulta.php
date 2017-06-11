<?php
/**
 *
 */
class Consulta extends CI_model
{
    public function getDatos()
    {
        $this->db->select('proyecto.titulo , proyecto.renglon ,
        	categoria.numcategoria , categoria.descripcion,plan.enero_p,plan.febrero_p,plan.marzo_p,plan.abril_p,plan.mayo_p,plan.junio_p,plan.julio_p,plan.agosto_p,plan.septiembre_p,plan.octubre_p,plan.noviembre_p,plan.diciembre_p
        	,reales.enero_r,reales.febrero_r,reales.marzo_r,reales.abril_r,reales.mayo_r,reales.junio_r,reales.julio_r,reales.agosto_r,reales.septiembre_r,reales.octubre_r,reales.noviembre_r,reales.diciembre_r');
        $this->db->From('proyecto');
        $this->db->join('categoria', 'categoria.id=proyecto.idcategoria');
        $this->db->join('plan', 'plan.idplan=proyecto.idplan');
        $this->db->join('reales', 'reales.idreal=proyecto.idreal');
        return $this->db->get();
    }

}


  