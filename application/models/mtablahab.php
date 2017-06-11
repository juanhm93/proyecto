<?php
/**
 *
 */
class Mtablahab extends CI_model
{
    public function getDatoshab()
    {
        $this->db->select('g.gerehab,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,e.elemento ');
        $this->db->From('habilitadora h');
        $this->db->join('gerencia g', 'g.idgere=h.idgerencia');
        $this->db->join('reales r','r.idreal = h.idreal');
        $this->db->join('elementocosto e','e.idele = h.idelementoc');
        $this->db->order_by('idgerencia','asc');
        $this->db->order_by('idele','asc');
        return $this->db->get();
    }

}



////

//// seleccionar de la tabla gerencia 



//// seleccionar de la tabla real
