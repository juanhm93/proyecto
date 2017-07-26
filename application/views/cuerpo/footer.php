</div>
		</div>
	</div>
	</div>
	<div class="Contenedor-con-Bordes" id="Main-Contenedor-footer"></div>
	</div>
	<!--<script src="<?php //echo base_url(); ?>js/jquery.min.js"></script>-->
	<script src="<?php echo base_url(); ?>js/bootstrap.min.js"></script>
	<script type="text/javascript" src="<?= base_url()?>js/validar.js"></script>
    <script type="text/javascript" src="<?= base_url()?>js/script.js"></script>  
      <script type="text/javascript" src="<?= base_url()?>js/tabs.js"></script> 
       <?php 
         if ($this->uri->segment(1) == "pro"){
         ?> <script type="text/javascript" src="<?= base_url()?>js/mostrarpro.js"></script>
        <?php
         }   
        ?>
       <?php 
         if ($this->uri->segment(1) == "ctablahab"){
         ?><script type="text/javascript" src="<?= base_url()?>js/mostrarhabgestioninv.js"></script>
         <?php
         }   ?>
          <?php
        if ($this->uri->segment(1) == "coperahab"){
         ?><script type="text/javascript" src="<?= base_url()?>js/mostrarhaboperaciones.js"></script>
         <?php
         }   
        ?>
          <?php
        if ($this->uri->segment(1) == "cdirejep"){
         ?><script type="text/javascript" src="<?= base_url()?>js/cargardirejeca.js"></script>
         <?php
         }   
        ?>
          <?php
        if ($this->uri->segment(1) == "cgesinv"){
         ?><script type="text/javascript" src="<?= base_url()?>js/gestioninversion.js"></script>
         <?php
         }   
        ?>
           <?php
        if ($this->uri->segment(1) == "coperaciones"){
         ?><script type="text/javascript" src="<?= base_url()?>js/operacionesep.js"></script>
         <?php
         }   
        ?>
         <?php
        if ($this->uri->segment(1) == "cepdivoriental"){
         ?><script type="text/javascript" src="<?= base_url()?>js/epdivoriental.js"></script>
         <?php
         }   
        ?>
	<script language="javascript" type="text/javascript">  

$(document).ready(function(){

//let's create arrays
var enero = [
    {display: "Enero", value: "enero" },
    {display: "Febrero", value: "febrero" },
    {display: "Marzo", value: "marzo" },
    {display: "Abril", value: "abril" },
    {display: "Mayo", value: "mayo" },
    {display: "Junio", value: "junio" },
    {display: "Julio", value: "julio" },
    {display: "Agosto", value: "agosto" },
    {display: "Septiembre", value: "septiembre" },
    {display: "Octubre", value: "octubre" },
    {display: "Noviembre", value: "noviembre" },
    {display: "Diciembre", value: "diciembre" }];


$('input[type=checkbox]').change(function(){

    var elemento=this;
    var contador=0;

    $('input[type=checkbox]').each(function(){
        if($(this).is(':checked')){
            contador++;
        } 
    });
    $('#seleccionar').val(contador);

});

////////////// SCROLL PARA TABLAS  /////////////////////////
var $table = $('table.scroll'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

// Adjust the width of thead cells when window resizes
$(window).resize(function() {
    // Get the tbody columns width array
    colWidth = $bodyCells.map(function() {
        return $(this).width();
    }).get();
    
    // Set the width of thead columns
    $table.find('thead tr').children().each(function(i, v) {
        $(v).width(colWidth[i]);
    });    
}).resize(); // Trigger resize handler


//////////////////////////////////////////////////////////////

$('#dom').change(function(){

    if($(this).val() == 1){

       $.ajax({
        type:"POST",
        url:"<?= base_url()?>/ajax/cmostarm/dom",
        dateType:"json",
        success: function(dom){

            var datos = $.parseJSON(dom);

                var opc = datos[0]['num'];
               

                var informacion = "<div for='divi' class='select_title'>asignado </div>";
                    informacion += "<select class='select-select' name='divi' id='divi' required >";
                    informacion += " <option value=''>--seleccione opcion--</option>";
                    for (var i = 0; i < opc; i++) {
                    informacion +=  " <option value="+datos[i]['iddi']+">"+datos[i]['divisonopc']+"</option>";
                    }
                    informacion += "</select>";    
                    informacion +="</div>";        
         
            $('#resultado').html('');
            $('#resultado').append(informacion);
    
            }
       }); 
    }// fin if el value es 1 

    if($(this).val() == 2){
        $.ajax({
        type:"POST",
        url:"<?= base_url()?>/ajax/cmostarm/emx",
        dateType:"json",
        success: function(dom){

            var datos = $.parseJSON(dom);

                var opc = datos[0]['num'];
               

                var informacion = "<div for='emx' class='select_title'>asignado </div>";
                    informacion += "<select class='select-select' name='emx' id='emx' required >";
                    informacion += " <option value=''>--seleccione opcion--</option>";
                    for (var i = 0; i < opc; i++) {
                    informacion +=  " <option value="+datos[i]['idemx']+">"+datos[i]['emmixta']+"</option>";
                    }
                    informacion += "</select>";    
                    informacion +="</div>";        
            $('#resultado').html('');
            $('#resultado').append(informacion);
    
            }
       }); 

    
    }
       
});

//If parent option is changed
$("#mesinicio").change(function() {
        var parent = $(this).val(); //get option value from parent

		 $("#meses").html('');

        var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

        var pos = meses.indexOf(parent);

        var listaux = enero.filter(function(mes,i){	
        	return i>=pos;
        });

        listaux.unshift({display: "--seleccionar mes--", value: ""});

        list(listaux);
       
});

$('#mesfin').change(function(){

	var inicio = $("#mesinicio option:selected");
	var fin = $("#mesfin option:selected");

	var meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];


	var posini = meses.indexOf(inicio.val());
	var pos = meses.indexOf(fin.val());

	if(pos != -1){
		 $("#meses").html('');
		for (var i = posini; i <= pos; i++) {
			$("#meses").append("<div class='input_container'><div class='input_title'>"+meses[i]+"</div><input class='input-select' type='number' name='"+meses[i]+"'> </div>");	
			}
	}


});



$("#dom").change(function(){

    var dom = $("#dom option:selected");

    if(dom.val() == 1){
        //mostrar html con las variables de division
        $("#divisionpro").show();
        $("#emxpro").hide();

    }
    if(dom.val() == 2){
        //mostrar html con las vfariables de las empresas mixtas
         $("#divisionpro").hide();
        $("#emxpro").show();
    }
});


$("#anhop").change(function(){

	var proyectem = $("#proyectosem option:selected");
	var mone = $("#moneda option:selected");
    var anhop = $("#anhop option:selected");
     
    if(proyectem.val() != '' &&  mone.val() != '' && anhop.val() !=''){

 
                var  p1 = proyectem.val();
                var  p2 = mone.val();
                var  p3 = anhop.val();
                  

                    var postForm = {
                        'p1' : p1,
                        'p2' : p2,
                        'p3' : p3
                    };
			//alert("esto es el post form  "+postForm);    		
                 $.ajax({
                 	type:"POST",
                 	url:"<?= base_url()?>/ajax/cmostarm/proyectos",
                 	data:postForm,
                 	dateType:"json",
                 	success: function(pro){

                 		alert("aqui json  "+pro.length);

                 		if(pro.length < 4){
                 			var informacion = "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='enero' class='col-sm-2 control-label'>enero</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='enero' id='enero' value='0' >";
                 			informacion +="<small id='enero' class='form-text text-muted'>(ejemplo: 2343,456 )</small></div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='febrero' class='col-sm-2 control-label'>febrero</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='febrero' id='febrero' value='0' ></div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='marzo' class='col-sm-2 control-label'>marzo</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='marzo' id='marzo' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='abril' class='col-sm-2 control-label'>abril</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='abril' id='abril' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='mayo' class='col-sm-2 control-label'>mayo</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='mayo' id='mayo' value='0' >";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='junio' class='col-sm-2 control-label'>junio</label>";
                 			informacion += "<input type='number' step='any' class='form-control' name='junio' id='junio' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='julio' class='col-sm-2 control-label'>julio</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='julio' id='julio' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='agosto' class='col-sm-2 control-label'>agosto</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='agosto' id='agosto' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='sep' class='col-sm-2 control-label'>septiembre</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='sep' id='sep' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='oct' class='col-sm-2 control-label'>octubre</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='oct' id='oct' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='nov' class='col-sm-2 control-label'>noviembre</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='nov' id='nov' value='0' > </div>";
                 			informacion += "<div class='input_title' class='form-group'>";
                 			informacion += "<label for='dic' class='col-sm-2 control-label'>diciembre</label>";
                 			informacion += "<input 'input-select' type='number' step='any' class='form-control' name='dic' id='dic' value='0' > </div>";							
                 		$("#meses").html('');	
						$("#meses").append(informacion);



                 		}else{

                 			var datos = $.parseJSON(pro);
                 			 alert("datos de bd "+datos[0]["enero_r"]);

                 			var informacion = "<div  class='form-group'>";
                 			informacion += "<label for='enero' class='col-sm-2 control-label'>enero</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='enero' id='enero' value='"+datos[0]["enero_r"]+"' >";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='febrero' class='col-sm-2 control-label'>febrero</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='febrero' id='febrero' value='"+datos[0]["febrero_r"]+"' ></div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='marzo' class='col-sm-2 control-label'>marzo</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='marzo' id='marzo' value='"+datos[0]["marzo_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='abril' class='col-sm-2 control-label'>abril</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='abril' id='abril' value='"+datos[0]["abril_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='mayo' class='col-sm-2 control-label'>mayo</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='mayo' id='mayo' value='"+datos[0]["mayo_r"]+"' >";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='junio' class='col-sm-2 control-label'>junio</label>";
                 			informacion += "<input type='number' step='any' class='form-control' name='junio' id='junio' value='"+datos[0]["junio_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='julio' class='col-sm-2 control-label'>julio</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='julio' id='julio' value='"+datos[0]["julio_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='agosto' class='col-sm-2 control-label'>agosto</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='agosto' id='agosto' value='"+datos[0]["agosto_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='sep' class='col-sm-2 control-label'>septiembre</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='sep' id='sep' value='"+datos[0]["septiembre_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='oct' class='col-sm-2 control-label'>octubre</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='oct' id='oct' value='"+datos[0]["octubre_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='nov' class='col-sm-2 control-label'>noviembre</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='nov' id='nov' value='"+datos[0]["noviembre_r"]+"' > </div>";
                 			informacion += "<div  class='form-group'>";
                 			informacion += "<label for='dic' class='col-sm-2 control-label'>diciembre</label>";
                 			informacion += "<input  type='number' step='any' class='form-control' name='dic' id='dic' value='"+datos[0]["diciembre_r"]+"' > </div>";							
                 		$("#meses").html('');	
						$("#meses").append(informacion);

                 		}//fin del else segunda opcion



	
                 	}//fin funtion success

                 });         

    }// fin if validar que todos los campos tengan una opcion seleccionada

});

/*	 

$("#menu  insertar").click(function() {
  $("#insetar").slideToggle( "slow" );
});                 		

*/  



$('#anhohab').change(function(){
        var hab = $("#habilitadora option:selected");
    var mone = $("#moneda option:selected");
    var anho = $("#anhohab option:selected");

    alert(hab.val());
    alert(mone.val());
    alert(anho.val());


    if(hab.val() != '' &&  mone.val() != '' && anho.val() !=''){
        alert('pasamos al if ');
                  var v1, v2, v3;
                    v1 = hab.val();
                    v2 = mone.val();
                    v3 = anho.val();

                    var postForm = {
                        'v1' : v1,
                        'v2' : v2,
                        'v3' : v3
                    };
 

                $.ajax({
                        type:"POST",
                        url:"<?= base_url()?>ajax/cmostarm/ajaxhab",
                        //url:"localhost/proyecto/ajax/cmostarm/ajaxm.php",
                        data:  postForm,
                        dateType:"json",
                        success: function(res){
                            alert(res.length);
                        if(res.length < 4)
                        {   
                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                            informacion +="<thead>";
                            informacion +="<tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion +="<td colspan='12' align='center'>real</td>";
                            informacion +="</tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion += "<td>Enero</td>";
                            informacion += "<td>Febrero</td>";
                            informacion += "<td>Marzo</td>"; 
                            informacion += "<td>abril</td>"; 
                            informacion += "<td>Mayo</td>"; 
                            informacion += "<td>Junio</td>"; 
                            informacion += "<td>Julio</td>"; 
                            informacion += "<td>Agosto</td>"; 
                            informacion += "<td>Septiembre</td>"; 
                            informacion += "<td>Octubre</td>"; 
                            informacion += "<td>Noviembre</td>"; 
                            informacion += "<td>Diciembre</td>"; 
                            informacion += "</tr>"; 
                            informacion += "</thead>"; 
                            informacion += "<tbody>"; 
                            informacion += "<tr>"; 
                            informacion += "<td>Labor</td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Bienestar y Beneficio</td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Materiales</td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td></tr>";
                            informacion += "<tr>";
                            informacion += "<td>Servicios y Contratos</td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Otros</td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                            informacion += "</tr>";
                            informacion += "</tbody>";
                            informacion += "</table>";
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        }
                        else
                        {
                            var datos = $.parseJSON(res);
                            alert(datos[4]['idlele']);
                            alert(datos[4]['enero_r']);
                            

                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'";
                            informacion +="<thead>";
                            informacion +="<tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion +="<td colspan='12' align='center'>real</td>";
                            informacion +="</tr>";
                            informacion +="<tr>";
                            informacion +="<td></td>";
                            informacion += "<td>Enero</td>";
                            informacion += "<td>Febrero</td>";
                            informacion += "<td>Marzo</td>"; 
                            informacion += "<td>abril</td>"; 
                            informacion += "<td>Mayo</td>"; 
                            informacion += "<td>Junio</td>"; 
                            informacion += "<td>Julio</td>"; 
                            informacion += "<td>Agosto</td>"; 
                            informacion += "<td>Septiembre</td>"; 
                            informacion += "<td>Octubre</td>"; 
                            informacion += "<td>Noviembre</td>"; 
                            informacion += "<td>Diciembre</td>"; 
                            informacion += "</tr>"; 
                            informacion += "</thead>"; 
                            informacion += "<tbody>"; 
                            informacion += "<tr>"; 
                            informacion += "<td>Labor</td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['enero_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['febrero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['marzo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['abril_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['mayo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['junio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['julio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['agosto_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['septiembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['octubre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['noviembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['diciembre_r']+"'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Bienestar y Beneficio</td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['enero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['febrero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['marzo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['abril_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['mayo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['junio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['julio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['agosto_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['septiembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['octubre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['noviembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['diciembre_r']+"'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Materiales</td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['enero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['febrero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['marzo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['abril_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['mayo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['junio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['julio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['agosto_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['septiembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['octubre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['noviembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['diciembre_r']+"'></td></tr>";
                            informacion += "<tr>";
                            informacion += "<td>Servicios y Contratos</td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['enero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['febrero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['marzo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['abril_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['mayo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['junio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['julio_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['agosto_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['septiembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['octubre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['noviembre_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['diciembre_r']+"'></td>";
                            informacion += "</tr>";
                            informacion += "<tr>";
                            informacion += "<td>Otros</td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['enero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['febrero_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['marzo_r']+"'></td>";
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['abril_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['mayo_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['junio_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['julio_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['agosto_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['septiembre_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['octubre_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['noviembre_r']+"'></td>"; 
                            informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['diciembre_r']+"'></td>"; 
                            informacion += "</tr>";
                            informacion += "</tbody>";
                            informacion += "</table>";
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                        }
                    }

                });
    }


});



$('#anho').change(function(){
        var em = $("#empresam option:selected");
    var mone = $("#moneda option:selected");
    var anho = $("#anho option:selected");

    if(em.val() != '' &&  mone.val() != '' && anho.val() !=''){

                  var v1, v2, v3;
                    v1 = em.val();
                    v2 = mone.val();
                    v3 = anho.val();

                    var postForm = {
                        'v1' : v1,
                        'v2' : v2,
                        'v3' : v3
                    };
 

                $.ajax({
                        type:"POST",
                        url:"<?= base_url()?>/ajax/cmostarm/ajaxm",
                        //url:"localhost/proyecto/ajax/cmostarm/ajaxm.php",
                        data:  postForm,
                        dateType:"json",
                        success: function(res){
                            alert(res.length);
                            /*var datos = $.parseJSON(res);
                            alert(datos[4]['idlele']);
                            alert(datos[4]['enero_r']);
                            */
                            //var datos = JSON.stringify(res);
                            //alert(datos);
                            //alert(res);
                            //$.each(datos, function(index, value){
                              //  $('#tablamixta').append("index= "+index+", data= "+value+"<br>");
                            //});
                            //$('#tablamixta').html('');
                        if(res.length < 4)
                        {	
                        	var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                        	informacion +="<thead>";
                        	informacion +="<tr>";
                        	informacion +="<th colspan='13' align='center'>real</th>";
                        	informacion +="</tr>";
                        	informacion +="<tr>";
                        	informacion +="<th></th>";
                        	informacion += "<th>Enero</th>";
                        	informacion += "<th>Febrero</th>";
                        	informacion += "<th>Marzo</th>"; 
                        	informacion += "<th>abril</th>"; 
                        	informacion += "<th>Mayo</th>"; 
                        	informacion += "<th>Junio</th>"; 
                        	informacion += "<th>Julio</th>"; 
                        	informacion += "<th>Agosto</th>"; 
                        	informacion += "<th>Septiembre</th>"; 
                        	informacion += "<th>Octubre</th>"; 
                        	informacion += "<th>Noviembre</th>"; 
                        	informacion += "<th>Diciembre</th>"; 
                        	informacion += "</tr>"; 
                        	informacion += "</thead>"; 
                        	informacion += "<tbody>"; 
                        	informacion += "<tr>"; 
                        	informacion += "<td>Labor</td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='0'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Bienestar y Beneficio</td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='0'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Materiales</td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='0'></td></tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Servicios y Contratos</td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='0'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Otros</td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='0'></td>"; 
                        	informacion += "</tr>";
                        	informacion += "</tbody>";
                        	informacion += "</table>";
                        	$("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                   
                        }
                        else
                        {
                            var datos = $.parseJSON(res);
                            alert(datos[4]['idlele']);
                            alert(datos[4]['enero_r']);
                            

                            var informacion = "<table id='example' class='display nowrap' cellspacing='0' width='100%'> ";
                        	informacion +="<thead>";
                        	informacion +="<tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion +="<td colspan='12' align='center'>real</td>";
                        	informacion +="</tr>";
                        	informacion +="<tr>";
                        	informacion +="<td></td>";
                        	informacion += "<td>Enero</td>";
                        	informacion += "<td>Febrero</td>";
                        	informacion += "<td>Marzo</td>"; 
                        	informacion += "<td>abril</td>"; 
                        	informacion += "<td>Mayo</td>"; 
                        	informacion += "<td>Junio</td>"; 
                        	informacion += "<td>Julio</td>"; 
                        	informacion += "<td>Agosto</td>"; 
                        	informacion += "<td>Septiembre</td>"; 
                        	informacion += "<td>Octubre</td>"; 
                        	informacion += "<td>Noviembre</td>"; 
                        	informacion += "<td>Diciembre</td>"; 
                        	informacion += "</tr>"; 
                        	informacion += "</thead>"; 
                        	informacion += "<tbody>"; 
                        	informacion += "<tr>"; 
                        	informacion += "<td>Labor</td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['enero_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='l1[]' id='l1' value='"+datos[0]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Bienestar y Beneficio</td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='bb[]' value='"+datos[1]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Materiales</td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='m1[]' value='"+datos[2]['diciembre_r']+"'></td></tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Servicios y Contratos</td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['abril_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['mayo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['junio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['julio_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['agosto_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['septiembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['octubre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['noviembre_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='sc[]' value='"+datos[3]['diciembre_r']+"'></td>";
                        	informacion += "</tr>";
                        	informacion += "<tr>";
                        	informacion += "<td>Otros</td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['enero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['febrero_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['marzo_r']+"'></td>";
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['abril_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['mayo_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['junio_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['julio_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['agosto_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['septiembre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['octubre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['noviembre_r']+"'></td>"; 
                        	informacion += "<td><input type='number' step='any' name='o1[]' value='"+datos[4]['diciembre_r']+"'></td>"; 
                        	informacion += "</tr>";
                        	informacion += "</tbody>";
                        	informacion += "</table>";
                            $("#tablamixta").html('');
                            $("#tablamixta").append(informacion);  
                        }
                    }

                });
    }


});

//function to populate child select box
function list(array_list)
{
    $("#mesfin").html(''); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#mesfin").append('<option value="'+array_list[i].value+'">'+array_list[i].display+"</option>");
    });
}
	

});
</script>

<script type="text/javascript">
$(document).ready(function(){


});		

</script>

</body>
</html>
