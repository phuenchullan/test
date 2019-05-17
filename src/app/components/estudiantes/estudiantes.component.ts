import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Estudiante } from '../../interfaces/estudiante';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  private estudiante:Estudiante;
  private forma: FormGroup;
  private estudiantes:Array<Estudiante> = [];

  constructor() {
    this.forma = new FormGroup({
      rut: new FormControl(''),
      dv: new FormControl(''),
      name: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      carrera: new FormControl(''),
      email: new FormControl(''),
      promocion: new FormControl('')
    });
    this.obtenerEstudiantes().subscribe(data => {
      this.estudiantes = data;
    })
  }

  ngOnInit() { }

  obtenerEstudiantes():Observable<any>{
    return new Observable((observer) => {
      observer.next(
        JSON.parse(localStorage.getItem('estudiantes'))
      )
    });
  }

  generateData(){
    this.estudiante = this.forma.value;
    console.log(this.estudiante);
    if (this.estudiante != null) {
      Array<Estudiante>(this.estudiantes.push(this.estudiante));
      localStorage.setItem('estudiantes',JSON.stringify(this.estudiantes));
    }
  }

  deleteEstudiante(i){
    console.log('Elemento que quiere eliminar es '+i);
    this.estudiantes.splice(i,1);
    localStorage.setItem('estudiantes',JSON.stringify(this.estudiantes));
    console.log(this.estudiantes);
  }

  editarEstudiante(i){
    console.log('Editando estudiante '+i);
  }

}
