var x;

x = $(document);
x.ready(newproyecto);

function newproyecto() {

	$('#dom').change(function(){

    if($(this).val() == 1){

        $.post("cproyecto/categoria",function(habi){

            var datos = $.parseJSON(dom);

           


							var informacion	='<div for="categoria"  class="select_title">Categoria</div>';
							informacion +=	'<select class="select-select" class="form-control" name="categoria" id="categoria">';
							informacion +=	'<option value="">--Seleccionar categoria--</option>';
							for (var i = 0; i < opc; i++) {
							informacion += 	'<option <option value="'+datos[i]['numcategoria']+'">'+datos[i]['descripcion']+'</option>';
							}
							informacion +=	'</select>';             
         					
            $('#resultado').html('');
            $('#resultado').append(informacion);
    
           
       }); 
    }// fin if el value es 1 
     if($(this).val() == 2){
        $.post("cproyecto/emx",function(habi){
            var datos = $.parseJSON(dom);

                var opc = datos[0]['num'];
               

                var informacion = "<div for='emx' class='select_title'>Mixta </div>";
                    informacion += "<select class='select-select' name='emx' id='emx' required >";
                    informacion += " <option value=''>--seleccione opcion--</option>";
                    for (var i = 0; i < opc; i++) {
                    informacion +=  " <option value="+datos[i]['idemx']+">"+datos[i]['emmixta']+"</option>";
                    }
                    informacion += "</select>";    

      
            $('#resultado').html('');
            $('#resultado').append(informacion);
     
       }); 

    
    }
       
});




}
 /*  var informacion = "<div for='divi' class='select_title'>Division </div>";
                    informacion += "<select class='select-select' name='divi' id='divi' required >";
                    informacion += " <option value=''>--seleccione opcion--</option>";
                    for (var i = 0; i < opc; i++) {
                    informacion +=  " <option value="+datos[i]['iddi']+">"+datos[i]['divisonopc']+"</option>";
                    }
                    informacion += "</select>";    */  