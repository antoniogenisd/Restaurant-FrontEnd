import { Component, ElementRef, ViewChild } from '@angular/core';
import { PlatilloServicesService } from '../../app/services/platillo-services.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-platillos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-platillos.component.html',
  styleUrl: './listado-platillos.component.css',
})
export class ListadoPlatillosComponent {

  public idSelect: number = 0;


  //atributos
  @ViewChild('nombre')
  referenciaNombre!: ElementRef;

  @ViewChild('descripcion')
  referenciaDescripcion!: ElementRef;

  @ViewChild('precio')
  referenciaPrecio!: ElementRef;

  //atributos
  @ViewChild('nombreEdit')
  referenciaENombre!: ElementRef;

  @ViewChild('descripcionEdit')
  referenciaEDescripcion!: ElementRef;

  @ViewChild('precioEdit')
  referenciaEPrecio!: ElementRef;


  constructor(private ps: PlatilloServicesService) {
    ps.obtenerListaPlatillos();
  }
  get ListaPlatillos() {
    return this.ps.listaPlatillos;
  }
  getId(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
  }

  guardarPlatilo() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const descripcion = this.referenciaDescripcion.nativeElement.value;
    const precio = this.referenciaPrecio.nativeElement.value;
    if (!nombre || !descripcion || !precio) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      this.ps.guardarPlatillo(
        nombre,
        descripcion,
        precio
      );
    }


  }

  editarPlatillo() {
    const nombreEdit = this.referenciaENombre.nativeElement.value;
    const descripcionEdit = this.referenciaEDescripcion.nativeElement.value;
    const precioEdit = this.referenciaEPrecio.nativeElement.value;
    if (!nombreEdit || !descripcionEdit || !precioEdit) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      this.ps.editarPlatillo(
        this.idSelect,
        nombreEdit,
        descripcionEdit,
        precioEdit
      );
    }
  }

  getElimPlatillo(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
    this.ps.eliminarPlatillo(
      this.idSelect
    )
  }
}
