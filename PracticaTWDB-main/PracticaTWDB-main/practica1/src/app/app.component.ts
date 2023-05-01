import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnosArray:Alumno[]=[
    {id:1, nombre:"Miguel Angel", grado:"5", edad:20},
    {id:2, nombre:"Jose Angel", grado:"6", edad:23},
    {id:3, nombre:"Alex", grado:"9", edad:22},
    {id:4, nombre:"Garza", grado:"7", edad:19},
    {id:5, nombre:"Mau", grado:"3", edad:22}
  ]

  seleAlumno:Alumno = new Alumno();

  addOrEdit(){
    if(this.seleAlumno.id===0){
      this.seleAlumno.id=this.alumnosArray.length+1;
      this.alumnosArray.push(this.seleAlumno);
    }

    this.seleAlumno= new Alumno();
  }

  openForEdit(alumnito : Alumno){
    this.seleAlumno = alumnito
  }

  delete(){
    if(confirm("¿Deseas eliminar este registro?")){
      this.alumnosArray = this.alumnosArray.filter(x => x!=this.seleAlumno);
      this.seleAlumno = new Alumno();
    }
  }
}
