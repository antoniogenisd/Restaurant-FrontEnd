import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadoServicesService } from '../../app/services/empleado-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-empleados',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css',
})
export class ListadoEmpleadosComponent {

  public idSelect: number = 0;

  //atributos
  @ViewChild('nombre')
  referenciaNombre!: ElementRef;

  @ViewChild('direccion')
  referenciaDireccion!: ElementRef;

  @ViewChild('telefono')
  referenciaTelefono!: ElementRef;

  //atributos
  @ViewChild('puesto')
  referenciaPuesto!: ElementRef;

  @ViewChild('sueldo')
  referenciaSueldo!: ElementRef;

  //atributos
  @ViewChild('editNombre')
  referenciaENombre!: ElementRef;

  @ViewChild('editDireccion')
  referenciaEDireccion!: ElementRef;

  @ViewChild('editTelefono')
  referenciaETelefono!: ElementRef;

  //atributos
  @ViewChild('editPuesto')
  referenciaEPuesto!: ElementRef;

  @ViewChild('editSueldo')
  referenciaESueldo!: ElementRef;



  constructor(private es: EmpleadoServicesService) {
    es.obtenerListaEmpleados();
  }

  get ListaEmpleados() {
    return this.es.listaEmpleados;
  }

  getId(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
  }

  guardarEmpleado() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const direccion = this.referenciaDireccion.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    const puesto = this.referenciaPuesto.nativeElement.value;
    const sueldo = this.referenciaSueldo.nativeElement.value;
    if (!nombre || !direccion || !telefono || !puesto || !sueldo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      this.es.guardarEmpleado(
        nombre,
        direccion,
        telefono,
        puesto,
        sueldo
      );
    }


  }

  editarEmpleado() {
    const nombre = this.referenciaENombre.nativeElement.value;
    const direccion = this.referenciaEDireccion.nativeElement.value;
    const telefono = this.referenciaETelefono.nativeElement.value;
    const puesto = this.referenciaEPuesto.nativeElement.value;
    const sueldo = this.referenciaESueldo.nativeElement.value;
    if (!nombre || !direccion || !telefono || !puesto || !sueldo) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      this.es.editarEmpleado(
        this.idSelect,
        nombre,
        direccion,
        telefono,
        puesto,
        sueldo
      );
    }

  }

  getEliminarEmpleado(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
    this.es.eliminarCliente(
      this.idSelect
    )
  }
}
