<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Login_model extends CI_Model {
  function login($username, $password) {
    $this -> db -> select('id, indicador, contraseña, tipo_usuario_id');
    $this -> db -> from('usuarios');
    $this -> db -> where('indicador', $username);
    $this -> db -> where('contraseña', MD5($password));
    $this -> db -> limit(1);

    $query = $this -> db -> get();

    if($query -> num_rows() == 1) {
      return $query->result();
    } else {
      return false;
    }
  }
}
?>
