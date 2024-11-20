import { Component } from '@angular/core';


@Component({
  selector: 'app-datos-animal',
  standalone: true,
  imports: [],
  templateUrl: './datos-animal.component.html',
  styleUrl: './datos-animal.component.scss'
})
export class DatosAnimalComponent {
  pets: any[] = []; // Aquí se almacenarán los datos de las mascotas

  constructor() {}

  ngOnInit() {
    // Llama al backend usando fetch
    fetch('http://localhost:8080/proyecto/pets') // Cambia la URL si es necesario
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json(); // Convierte la respuesta a JSON
      })
      .then((data) => {
        this.pets = data; // Asigna los datos a la variable 'pets'
      })
      .catch((error) => {
        console.error('Error al obtener las mascotas:', error);
      });
  }

}
