class Validaciones{

	constructor(){
		
	}
	
	//min_size()
	//@param id Id objeto dom
	//@param minsize tamaño minimo a validar
	
	min_size(id, minsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				if (elemento.type == 'text'){
					let valorelemento = elemento.value;
					if (valorelemento.length<minsize){
						return false;
					}
					else{
						return true;
					}
				}
				break;
			case 'FILE':
				break;
			default:
				break;
		}

	}

	//max_size()
	//@param id Id objeto dom
	//@param minsize tamaño maximo a validar
	
	max_size(id, maxsize){
		let elemento = document.getElementById(id);
		switch (elemento.tagName){
			case 'INPUT':
				if (elemento.type == 'text'){
					let valorelemento = elemento.value;
					if (valorelemento.length>maxsize){
						return false;
					}
					else{
						return true;
					}
				}
				break;
			case 'FILE':
				break;
			default:
				break;
		}

	}

}