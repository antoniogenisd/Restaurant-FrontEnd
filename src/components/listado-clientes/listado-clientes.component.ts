import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClienteServiceService } from '../../app/services/cliente-service.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css',
})
export class ListadoClientesComponent {

  public idSelect: number = 0;

  //atributos
  @ViewChild('nombre')
  referenciaNombre!: ElementRef;

  @ViewChild('direccion')
  referenciaDireccion!: ElementRef;

  @ViewChild('telefono')
  referenciaTelefono!: ElementRef;


  //atributos
  @ViewChild('nombreEdit')
  referenciaENombre!: ElementRef;

  @ViewChild('direccionEdit')
  referenciaEDireccion!: ElementRef;

  @ViewChild('telefonoEdit')
  referenciaETelefono!: ElementRef;

  @ViewChild('closeModal')
  closeModal!: ElementRef;

  @ViewChild('search')
  searchClient!: ElementRef;

  constructor(private cs: ClienteServiceService) {
    cs.obtenerListaClientes();
  }


  get Lista() {
    return this.cs.listaClientes;
  }


  getId(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
  }

  getElimCliente(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
    this.cs.eliminarCliente(
      this.idSelect
    )
  }

  guardarCliente() {
    const nombre = this.referenciaNombre.nativeElement.value;
    const direccion = this.referenciaDireccion.nativeElement.value;
    const telefono = this.referenciaTelefono.nativeElement.value;
    console.log(this.guardarCliente)
    this.cs.guardarCliente(
      nombre,
      direccion,
      telefono
    );
  }

  editarCliente() {
    const nombreEdit = this.referenciaENombre.nativeElement.value;
    const direccionEdit = this.referenciaEDireccion.nativeElement.value;
    const telefonoEdit = this.referenciaETelefono.nativeElement.value;
    this.cs.editarCliente(
      this.idSelect,
      nombreEdit,
      direccionEdit,
      telefonoEdit
    );
  }

  searchCliente() {
    const searchCliente = this.searchClient.nativeElement.value;
    this.cs.obtenerListaClientes();
  }

}
