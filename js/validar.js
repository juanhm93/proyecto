function mostrar(s1,s2){

	var s1 = document.getElementByID(s1);
	var s2 = document.getElementByID(s2);

	var proyecto = document.getElementByID("proyectosem");
	var anho = document.getElementByID("anho");
	var enero = document.getElementByID("realenero");
	var febrero = document.getElementByID("realfebrero");
	var marzo = document.getElementByID("realmarzo");
	var abril = document.getElementByID("realabril");
	var mayo = document.getElementByID("realmayo");
	var junio = document.getElementByID("realjunio");
	var julio = document.getElementByID("realjulio");
	var agosto = document.getElementByID("realagosto");
	var sep = document.getElementByID("realsep");
	var oct = document.getElementByID("realoct");
	var nov = document.getElementByID("realnoviembre");
	var dic = document.getElementByID("realdic");


	if(enero ===""){
		enero.val() = 0;

	} //esta condicion no puede ser usaa ya que puede dañar los datos antes precargados pudiera poner en cero las tablas que
	//ya tienen asignado un valor....

}