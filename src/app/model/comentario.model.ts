import { Usuario } from './usuario.model';

export class Comentario {

    /**
	 * id del registro
	 */
	id_comentario : number;
	
	/**
	 * texto del comentario
	 */
	comentario : string;
	
	/**
	 * Fecha en la que se hizo el comentario
	 */
	f_comentario : string;

	
	/**
	 * Usuario que realiza el comentario
	 */
	usuario : Usuario;

}