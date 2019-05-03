import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  private estudiante:Estudiante;
  private forma: FormGroup;

  constructor() {
    this.forma = new FormGroup({
      rut: new FormControl('19760338'),
      dv: new FormControl('9'),
      name: new FormControl('Alejandro'),
      lastName: new FormControl('Perez'),
      phone: new FormControl('58906145'),
      carrera: new FormControl('Ingeniería en Informática'),
      email: new FormControl('fjklasd@gmail.com'),
      promocion: new FormControl('2017')
    });
  }

  ngOnInit() {
  }

}
