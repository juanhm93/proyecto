<?php defined('BASEPATH') OR exit('No direct script access allowed');

class VerificacionLogin extends CI_Controller {

  function __construct() {
    parent::__construct();
    $this->load->model('login_model','',TRUE);
  }

  function index() {
    $this->load->library('form_validation');

    $this->form_validation->set_rules('username', 'Username', 'trim|required'); //|xss_clean
    $this->form_validation->set_rules('password', 'Password', 'trim|required|callback_check_database'); //|xss_clean

    if($this->form_validation->run() == FALSE) {
      $this->load->view('login');
    } else {
      redirect('home', 'refresh');
    }
  }

  function check_database($password) {
    $username = $this->input->post('username');

    $result = $this->login_model->login($username, $password);

    if($result) {
      $sess_array = array();
      foreach($result as $row) {
        $sess_array = array(
          'id' => $row->id,
          'username' => $row->indicador,
          'tipo_usuario_id' => $row->tipo_usuario_id
        );
        $this->session->set_userdata('logged_in', $sess_array);
      }
      return TRUE;
    } else {
      $this->form_validation->set_message('check_database', 'Invalid username or password');
      return false;
    }
  }
}
