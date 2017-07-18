var x;

x = $(document);
x.ready(proyecto);

function proyecto(){


	$( "input" ).on( "click", function() {

		var anho = $("#anhopro option:selected");

		var opciones = $("input:checked").val();

		if(anho.val() != ''){



			var v3;
			v3 = anho.val();
			alert(v3);
			var postForm ={'v3' : v3};

			alert(opciones);

			if (opciones == "p1") {
					
					$("#mejorv3").DataTable({

						"ajax":{
							"method":"POST",
							"url":"cmosproyect/p1"
						},
						"columns":[
							{      }
						] 
					});



			}

		}

	});

}
