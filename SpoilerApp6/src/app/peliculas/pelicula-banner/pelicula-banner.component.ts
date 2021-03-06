import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
/*
export class PeliculaBannerComponent implements OnInit {

  urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg';
  descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  nombrePelicula = 'Tomb Raider';
  descripcionPelicula = 'Alicia vikander,Walton Googins';
  esEstreno = true;
  textoEstreno: string;
  claseEstreno: string;
*/
export class PeliculaBannerComponent implements
  OnInit, OnChanges {

  @Input() urlImagen: string;
  @Input() descripcionImagen: string;
  @Input() nombrePelicula: string;
  @Input() descripcionPelicula: string;
  @Input() esEstreno: boolean;


  @Output() dioClickEnEstado: EventEmitter<boolean> = new EventEmitter();


  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }

  ngOnInit() {
    console.log("Inicio y seteo color",this.nombrePelicula);
    this.setearColoryClase();
  }

  ngOnChanges(propiedadesActualizadas){
    console.log('Algo',propiedadesActualizadas);
    if (propiedadesActualizadas.esEstreno){
      this.setearColoryClase();
    }
  }

  setearColoryClase(){
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

  hizoClickEnEstado(){
    this.dioClickEnEstado.emit(true);
  }
}
