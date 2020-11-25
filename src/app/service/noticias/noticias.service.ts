import { Injectable } from "@angular/core";
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StartupConfigService } from '../startup-config.service';
import { Noticia } from 'src/app/model/noticia.model';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';




@Injectable()
export class NoticiasService {

  //variables del toast
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  //Variables para setear las URL del config.json
  vbaseRegistraNoticia: string;
  vbaseListaNoticias: string;

  constructor(private api: ApiService, private config: StartupConfigService, private snackBar: MatSnackBar) {
    this.vbaseRegistraNoticia = this.config.getValue('registraNoticia');
    this.vbaseListaNoticias = this.config.getValue('listaNoticias');
  }

  /**
   * Metodo que permite registar una noticia
   * @param noticia 
   * @param id_usuario 
   */
  registraNoticia(noticia: Noticia, id_usuario: number): Observable<any> {
    return this.api.post(`${this.vbaseRegistraNoticia}/${id_usuario}`, noticia).pipe(map(response => response));
  }

  /**
   * Metodo que retorna todas las noticias
   * @param params 
   */
  getListNoticias(params: {}): Observable<any> {
    return this.api.get(this.vbaseListaNoticias, params).pipe(map(response => response));
  }

/**
 * metodo que muestra toast
 * @param result 
 */
  openSnackBar(result: string) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.durationInSeconds * 1000;
    this.snackBar.open(result, '', config);
  }

}

