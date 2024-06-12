import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenServiceService } from '../../app/services/orden-service.service';
import { ClienteServiceService } from '../../app/services/cliente-service.service';
import { EmpleadoServicesService } from '../../app/services/empleado-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-ordenes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-ordenes.component.html',
  styleUrl: './listado-ordenes.component.css'
})
export class ListadoOrdenesComponent {

  //atributos
  @ViewChild('fecha')
  referenciaNombre!: ElementRef;

  @ViewChild('cliente')
  referenciaCliente!: ElementRef;

  @ViewChild('empleado')
  referenciaEmpleado!: ElementRef;

  @ViewChild('descripcion')
  referenciaDescripcion!: ElementRef;

  @ViewChild('subtotal')
  referenciaSubtotal!: ElementRef;

  @ViewChild('total')
  referenciaTotal!: ElementRef;

  //atributos
  @ViewChild('fechaEdit')
  referenciaENombre!: ElementRef;

  @ViewChild('clienteEdit')
  referenciaECliente!: ElementRef;

  @ViewChild('empleadoEdit')
  referenciaEEmpleado!: ElementRef;

  @ViewChild('descripcionEdit')
  referenciaEDescripcion!: ElementRef;

  @ViewChild('subtotalEdit')
  referenciaESubtotal!: ElementRef;

  @ViewChild('totalEdit')
  referenciaETotal!: ElementRef;


  public idSelect: number = 0;
  public detallesOrdenObj: object[] = [];

  constructor(private or: OrdenServiceService, private cl: ClienteServiceService, private em: EmpleadoServicesService) {
    or.obtenerListaOrdenes();
    cl.obtenerListaClientes();
    em.obtenerListaEmpleados();
  }
  get listaOrdenes() {
    return this.or.listaOrdenes;
  }

  get listaClientes() {
    return this.cl.listaClientes;
  }

  get listaEmpleados() {
    return this.em.listaEmpleados;
  }

  get detallesOrden() {
    return this.or.detallesOrden;
  }

  getId(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
  }


  guardarOrden() {
    const fecha = this.referenciaNombre.nativeElement.value;
    const cliente = this.referenciaCliente.nativeElement.value;
    const empleado = this.referenciaEmpleado.nativeElement.value;
    const descripcion = this.referenciaDescripcion.nativeElement.value;
    const subtotal = this.referenciaSubtotal.nativeElement.value;
    const total = this.referenciaTotal.nativeElement.value;
    if (!fecha || !cliente || !empleado || !descripcion || !subtotal || !total) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      console.log(this.guardarOrden)
      this.or.guardarOrden(
        fecha,
        cliente,
        empleado,
        descripcion,
        subtotal,
        total
      );
    }
  }

  editarOrden() {
    const fechaEdit = this.referenciaENombre.nativeElement.value;
    const clienteEdit = this.referenciaECliente.nativeElement.value;
    const empleadoEdit = this.referenciaEEmpleado.nativeElement.value;
    const descripcionEdit = this.referenciaEDescripcion.nativeElement.value;
    const subtotalEdit = this.referenciaESubtotal.nativeElement.value;
    const totalEdit = this.referenciaETotal.nativeElement.value;
    if (!fechaEdit || !clienteEdit || !empleadoEdit || !descripcionEdit || !subtotalEdit || !totalEdit) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Llena todos los campos!",
      });
    } else {
      console.log(this.guardarOrden)
      this.or.editarOrden(
        this.idSelect,
        fechaEdit,
        clienteEdit,
        empleadoEdit,
        descripcionEdit,
        subtotalEdit,
        totalEdit
      );
    }
  }

  getDetalle(id: number) {
    this.idSelect = id;
    console.log(id)
    this.or.getOrdenById(
      this.idSelect
    )
  }

  getEliminarOrden(id: number) {
    this.idSelect = id;
    console.log(this.idSelect)
    this.or.eliminarOrden(
      this.idSelect
    )
  }


}
