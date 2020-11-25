import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Noticia } from '../../model/noticia.model';
import { NoticiasService } from '../../service/noticias';



/**
 * @title Crear y consultar noticias
 */
@Component({
    selector: 'alta-noticias-component',
    templateUrl: './alta-noticias.component.html'
})
export class AltaNoticiasComponent implements OnInit {

    //Declaracion Formularios y variables
    noticiaForm: FormGroup;
    nota: Noticia;

    /**
    * Constructor de la clase noticias
    */
    constructor(private formBuilder: FormBuilder, private service: NoticiasService) {
        this.noticiaForm = this.formBuilder.group({
            titulo: new FormControl('', [Validators.required]),
            resumen: new FormControl('', [Validators.required])
        });
    }

    /**
    *Me todo de inicio
    */
    ngOnInit() {

    }

    /**
    * Metodo que registra una nueva noticia
    */
    registrarNoticia() {
        if (this.noticiaForm.invalid) {
            return;
        }

        //Instancia de noticia
        this.nota = new Noticia();

        //Se setean los valores de la noticia del FOrm
        this.nota.titulo = this.noticiaForm.get("titulo")?.value;
        this.nota.resumen = this.noticiaForm.get("resumen")?.value;

        //Se registra la nota desde el Service
        this.service.registraNoticia(this.nota, 1).subscribe(
            response => {

                //Si es dos es correcto
                if (response.code === "2") {
                    this.service.openSnackBar("Se registro correctamente");
                    this.noticiaForm.reset();
                } else {
                    this.service.openSnackBar("No se pudo registrar correctamente");
                }

            }, error => {
                this.service.openSnackBar("Hubo un error al realizar la peticion");
            });

    }




}