
import { Inject, OnInit, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comentario } from '../model/comentario.model';
import { Noticia } from '../model/noticia.model';
import { ComentariosService } from '../service/noticias';

@Component({
  selector: 'comentarios',
  templateUrl: './comentarios.component.html'
})
export class ModalComentarios implements OnInit {
    //Variables del entorno
    titulo: string;

    //SEt de lista de comentarios
    listComentarios :  Comentario[];

    /**
     * Constrictor de la clase
     * @param dialogRef 
     * @param data 
     * @param service 
     */
  constructor(
    public dialogRef: MatDialogRef<ModalComentarios>,
    @Inject(MAT_DIALOG_DATA) public data: Noticia, private service: ComentariosService) {
        this.titulo = data.titulo;
  }

  /**
   * Metodo de inicio
   */
  ngOnInit() {
    this.getlistaComentarios();
  }

  /**
   * Metodo del modal para cerrar
   */
  onNoClick(): void {
    this.dialogRef.close();
  }


  /**
   * Obtiene la lista de los comentatios de la nota
   */
  getlistaComentarios(){
    this.service.getListComentarios(this.data.id_nota,{}).subscribe(data => {
        this.listComentarios = data;
        console.log('lista comentarios',data);
    }, error => {
        this.service.openSnackBar("Hubo un error al realizar la peticion");
    });
  }



}