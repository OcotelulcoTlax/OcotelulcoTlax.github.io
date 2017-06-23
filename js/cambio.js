$( function(){
    var arrImagenes = [ 'fondo1.png','fondo2.png'];
    var imagenActual = 'fondo1.png';
    var tiempo = 3000;
    var id_contenedor = 'ef'
    setInterval( function(){
        /**do{
            var randImage = arrImagenes[Math.ceil(Math.random()*(arrImagenes.length-1))];
        }while( randImage == imagenActual )
        imagenActual = randImage;
		**/
		if(imagenActual === 'fondo1.png'){
			imagenActual = 'fondo2.png';
		}else{
			imagenActual = 'fondo1.png'
		}
        cambiarImagenFondo(imagenActual, id_contenedor, 'ef2');
    }, tiempo)
})
 
function cambiarImagenFondo(nuevaImagen, contenedor, contenedor2){
    var contenedor = $('#' + contenedor);
	var contenedor2 = $('#' + contenedor2);
    //cargar imagen primero
    var tempImagen = new Image();
	var tempImagen2 = new Image();
    $(tempImagen).load( function(){
        contenedor.css('backgroundImage', 'url('+tempImagen.src+')');
    });
	$(tempImagen2).load(function(){
		contenedor2.css('backgroundImage', 'url('+tempImagen2.src+')');
	});
		
    tempImagen.src = '' + nuevaImagen;
	if(nuevaImagen === 'background15.jpg'){
		tempImagen2.src = 'background1.jpg' ;
	}else{
			tempImagen2.src = '' + nuevaImagen;
	}
}
