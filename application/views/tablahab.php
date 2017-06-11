<!DOCTYPE html>
<html>
<head>

	<link rel="stylesheet" type="text/css" href="<?= base_url()?>css/jquery.dataTables.min.css">

	<style type="text/css" class="init">
		
		div.dataTables_wrapper {
        width: 800px;
        margin: 0 auto;
    }
	</style>
	
	<script type="text/javascript" src="<?= base_url()?>js/jquery-1.12.4.js" ></script>
	<script type="text/javascript" src="<?= base_url()?>js/jquery.dataTables.min.js" ></script>
	<script type="text/javascript" >
		
		$(document).ready(function() {
		    $('#example').DataTable( {
		        "scrollY": 200,
		        "scrollX": true
		    } );
		} );	
	</script>

	<title></title>
</head>
<body>


							
</body>
</html>
