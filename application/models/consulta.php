<?php
/**
 *
 */
class Consulta extends CI_model
{
    public function getDatos()
    {
        $this->db->select('pr.titulo , pr.renglon ,
        	c.numcategoria , c.descripcion,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
        $this->db->From('proyecto pr');
        $this->db->join('categoria c', 'c.id=pr.idcategoria');
        $this->db->join('plan p', 'p.idproyecto=pr.idproyecto');
        $this->db->join('reales r', 'r.idproyecto=pr.idproyecto');
        return $this->db->get();
    }

}


  