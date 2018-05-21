import {Component} from '@angular/core';

@Component({
  selector: 'app-root', // Selector o etiqueta
  templateUrl: './app.component.html', // Estructura
  styleUrls: ['./app.component.css'] // Estilos
})

export class AppComponent {

  arregloPeliculasSecundarias = [
    {
      nombre: 'Black Panther',
      esEstreno: true,
      urlImagen: 'https://i.blogs.es/c7f5ce/blackpanther/450_1000.jpg'
    },
    {
      nombre: 'Maze Runner',
      esEstreno: true,
      urlImagen: 'https://images.penguinrandomhouse.com/cover/9781524714451'
    },
    {
      nombre: 'Star Wars',
      esEstreno: true,
      urlImagen: 'https://liberal.com.mx/wp-content/uploads/2017/12/eu_sws-8_last-jedi_hero_v9_r_ddc759e5.jpeg'
    },
    {
      nombre: 'Liga de la justicia',
      esEstreno: true,
      urlImagen: 'https://www.cronista.com/__export/1511228969706/sites/diarioelcronista/img/2017/11/21/cc211117w023f11.jpg_258117318.jpg'
    },
  ];


  arregloPeliculas = [
    {
      nombre: 'Tomb Raider',
      descripcion: 'Alicia Vikander, Walton Goggins',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg'
    },
    {
      nombre: 'Ready Player One',
      descripcion: 'Tye Sheridan, Olivia Cooke',
      esEstreno: false,
      urlImagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFQprASMSiRnRHYgQl5sHoGr8GiMI9IB2XVIQP_tmD61KFgUY'
    },
  ];


  alertar(evento) {
    console.log('Evento: ', evento); // true
    alert('DIO CLICK EN ES ESTRENO!!!!!!!!!');
  }










































  // nombre = 'Adrian';
  // apellido = 'Eguez';
  // edad = 28;
  // sueldo = 3411234.13;
  // fechaNacimiento = new Date('1989-06-10');
  // nombreBoton = 'Cambiar color';
  // nombreClase = 'sa-titulo';
  // clase = 'papa';
  //
  // cambiarClaseDeTitulo() {
  //   const nombreClaseEsTitulo = this.nombreClase === 'sa-titulo';
  //   if (nombreClaseEsTitulo) {
  //     this.nombreClase = 'sa-subtitulo';
  //   } else {
  //     this.nombreClase = 'sa-titulo';
  //   }
  // }
  //
  // aplicarClase(valorInput: string) {
  //   this.nombreClase = valorInput;
  // }
}




