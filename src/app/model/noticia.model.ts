import { Usuario } from './usuario.model';

export class Noticia {
	

	/**
	 * id de la nota
	 */
	id_nota : number;
	
	/**
	 * titulo de la nota
	 */
	titulo : string;
	
	/**
	 * resumen de la nota
	 */
	resumen : string;
	
	/**
	 * fecha de publicacion de la nota
	 */
	f_publicacion : string;
	
	/**
	 * usuario que creo la nota
	 */
	usuario : Usuario;

}