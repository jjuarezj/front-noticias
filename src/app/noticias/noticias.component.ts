import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComentarios } from '../modales/comentarios.component';
import { Noticia } from '../model/noticia.model';
import { NoticiasService } from '../service/noticias';



/**
 * @title Crear y consultar noticias
 */
@Component({
    selector: 'noticias-component',
    templateUrl: './noticias.component.html'
})
export class NoticiasComponent implements OnInit {

    //Declaracion  variables
    listNoticias: Noticia[];

    /**
    * Constructor de la clase noticias
    */
    constructor( private service: NoticiasService,private dialog: MatDialog) {

    }

    /**
    *Me todo de inicio
    */
    ngOnInit() {

        this.listaNoticias();

    }

    /**
    * Metodo que lista todas las noticias
    */
    listaNoticias() {

        this.service.getListNoticias({}).subscribe(data => {
            this.listNoticias = data;
        }, error => {
            this.service.openSnackBar("Hubo un error al realizar la peticion");
        });
 
    }


 /**
   * Metodo que abre un dialogo de venta
   */
  openDialog(nota : Noticia): void {
   
      const dialogRef = this.dialog.open(ModalComentarios, {
        width: '700px',
        height: '500px',
        data: nota
      });
      dialogRef.afterClosed().subscribe(result => {

      });

  }

}