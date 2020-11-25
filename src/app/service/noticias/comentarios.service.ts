import { Injectable } from "@angular/core";
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { StartupConfigService } from '../startup-config.service';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';




@Injectable()
export class ComentariosService {

  //variables del toast
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 5;

  //Variables para setear las URL del config.json
  vbaseListaComentarios: string;


  constructor(private api: ApiService, private config: StartupConfigService, private snackBar: MatSnackBar) {
    this.vbaseListaComentarios = this.config.getValue('listaComentarios');
  }


  /**
   * Metodo que retorna todas las noticias
   * @param params 
   */
  getListComentarios(id_nota: number,params: {}): Observable<any> {
    return this.api.get(`${this.vbaseListaComentarios}/${id_nota}`, params).pipe(map(response => response));
  }

/**
 * Metodo que muestra el toast
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

