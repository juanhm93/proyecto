<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>pdvsa</title>
  <link rel='stylesheet prefetch' href='http://fonts.googleapis.com/css?family=Open+Sans:600'>
  <link rel = "stylesheet" type = "text/css" href = "<?php echo base_url(); ?>css/login_style.css">
</head>

<body>
  <div class="login-wrap">
    <div class="login-html">
      <h1>SISGP </h1>
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab"></label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab"></label>
      <div class="login-form">
        <div class="sign-in-htm">
          <?php echo form_open('verificacionlogin'); ?>
            <div class="group">
              <label for="user" class="label">Usuario</label>
              <input id="user" type="text" class="input" name="username">
            </div>
            <div class="group">
              <label for="pass" class="label">Contraseña</label>
              <input id="pass" type="password" class="input" data-type="password" name="password">
            </div>
            <div class="group">
              <input type="submit" class="button" value="iniciar sesion">
            </div>
          </form>
          <div class="hr"></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
