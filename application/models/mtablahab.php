<?php
/**
 *
 */
//FORMATO DE CONSULTA EN SQL
//SELECT `g`.`gerehab`,`e`.`elemento`, `r`.`enero_r`, `r`.`febrero_r`, `r`.`marzo_r`, `r`.`abril_r`, `r`.`mayo_r`, `r`.`junio_r`, `r`.`julio_r`, `r`.`agosto_r`, `r`.`septiembre_r`, `r`.`octubre_r`, `r`.`noviembre_r`, `r`.`diciembre_r` FROM `reales` `r` 
//JOIN `habelec` `hab` ON `r`.`idhab`=`hab`.`idhabelec` 
//JOIN `habilitadora` `h` ON `hab`.`idhabfk` = `h`.`idhab` 
//JOIN `gerencia` `g` ON `h`.`idgerencia` = `g`.`idgere`
//JOIN `elementocosto` `e` ON  `hab`.`idelecfk` = `e`.`idele` 
//ORDER BY `idgerencia` ASC,`idele` ASC


class Mtablahab extends CI_model
{



    public function getDatoshab()
    {
        $this->db->select('g.gerehab,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,e.elemento');
        $this->db->From('reales r');
        $this->db->join('habelec hab', 'r.idhab=hab.idhabelec');
        $this->db->join('habilitadora h','hab.idhabfk = h.idhab');
        $this->db->join('gerencia g','h.idgerencia = g.idgere');
        $this->db->join('elementocosto e','e.idele = hab.idelecfk');
        $this->db->order_by('idgerencia','asc');
        $this->db->order_by('idele','asc');
        return $this->db->get();
    }

    public function gestioninv($an,$m){
         $this->db->select('g.gerehab,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r,e.elemento');
        $this->db->From('reales r');
        $this->db->join('habelec hab', 'r.idhab=hab.idhabelec');
        $this->db->join('habilitadora h','hab.idhabfk = h.idhab');
        $this->db->join('gerencia g','h.idgerencia = g.idgere');
        $this->db->join('elementocosto e','e.idele = hab.idelecfk');
        $this->db->where('r.idanho',$an);
        $this->db->where('r.idmoneda',$m);
        $this->db->where('h.idtipo_IO',1);
        $this->db->order_by('idgerencia','asc');
        $this->db->order_by('idele','asc');
        return $this->db->get();

    }


     public function gestioninvplan($an,$m){
         $this->db->select('g.gerehab,p.enero_p,p.febrero_p,p.marzo_p,p.abril_p,p.mayo_p,p.junio_p,p.julio_p,p.agosto_p,p.septiembre_p,p.octubre_p,p.noviembre_p,p.diciembre_p,e.elemento');
        $this->db->From('plan p');
        $this->db->join('habelec hab', 'p.idhab = hab.idhabelec');
        $this->db->join('habilitadora h','hab.idhabfk = h.idhab');
        $this->db->join('gerencia g','h.idgerencia = g.idgere');
        $this->db->join('elementocosto e','e.idele = hab.idelecfk');
        $this->db->where('p.idanho',$an);
        $this->db->where('p.idmoneda',$m);
        $this->db->where('h.idtipo_IO',1);
        $this->db->order_by('idgerencia','asc');
        $this->db->order_by('idele','asc');
        return $this->db->get();

    }    

    public function getprorb($an,$m)
    {
        $this->db->select('c.numcategoria,c.descripcion,p.renglon,p.titulo,r.enero_r,r.febrero_r,r.marzo_r,r.abril_r,r.mayo_r,r.junio_r,r.julio_r,r.agosto_r,r.septiembre_r,r.octubre_r,r.noviembre_r,r.diciembre_r');
        $this->db->From('reales r');
        $this->db->join('proyecto p', 'r.idproyecto=p.idproyecto');
        $this->db->join('categoria c','p.idcategoria = c.id');
        $this->db->where('r.idanho',$an);
        $this->db->where('r.idmoneda',$m);
        $this->db->order_by('id','asc');
        return $this->db->get();
    }   


}



////

//// seleccionar de la tabla gerencia 



//// seleccionar de la tabla real
