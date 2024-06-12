import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientePlatillo } from '../../interfaces/cliente-platillo';
import { EmpleadoComponent } from '../../pages/empleado/empleado.component';
import { Cliente } from '../interfaces/cliente';
import { Empleado } from '../interfaces/empleado';
import { Orden } from '../interfaces/orden';

import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class OrdenServiceService {
  public url: string = 'http://localhost:8082';
  public listaOrdenes: any[];
  public listaEmpleado: EmpleadoComponent[];
  public listaCliente: ClientePlatillo[];
  detallesOrden: Orden | null = null;



  constructor(private http: HttpClient) {
    this.listaOrdenes = [];
    this.listaEmpleado = [];
    this.listaCliente = [];
  }
  obtenerListaOrdenes(): void {
    this.http.get(this.url + '/api/ordenes').subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaOrdenes = respuesta;
    });
  }


  eliminarOrden(
    idSelect: number,
  ) {
    Swal.fire({
      title: "¿Estas seguro de que quieres aliminar este registo?",
      text: "No podras deshacer los cambios",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .delete(this.url + '/api/ordenes/eliminar?id=' + idSelect)
          .subscribe((respuesta: any) => {
            console.log(respuesta.msg);
            Swal.fire({
              icon: 'success',
              title: 'Registros Actualizados',
              showDenyButton: false,
              showCancelButton: false,
              confirmButtonText: 'ok',
            }).then((result) => {
              if (result.isConfirmed) {
                this.obtenerListaOrdenes();
                window.location.reload();
              } else if (result.isDenied) {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "No se pudo eliminar el registo",
                });
              }
            });
          });
      }
    });
  }

  guardarOrden(
    fecha: Date,
    cliente: number,
    empleado: number,
    descripcion: string,
    subtotal: number,
    total: number
  ) {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Canelar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .post(this.url + '/api/ordenes', {
            fecha: fecha,
            cliente: cliente,
            empleado: empleado,
            descripcion: descripcion,
            subtotal: subtotal,
            total: total
          })
          .subscribe((respuesta: any) => {
            console.log(respuesta.msg);
            this.obtenerListaOrdenes();
            window.location.reload();
          });
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardardaron", "", "info");
      }
    });
  }


  editarOrden(
    idSelect: number,
    fechaEdit: Date,
    clienteEdit: number,
    empleadoEdit: number,
    descripcionEdit: string,
    subtotalEdit: number,
    totalEdit: number
  ) {
    Swal.fire({
      title: "¿Deseas guardar los cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `Canelar`
    }).then((result) => {
      if (result.isConfirmed) {
        this.http
          .put(this.url + '/api/ordenes/actualizar/' + idSelect, {
            fecha: fechaEdit,
            cliente: clienteEdit,
            empleado: empleadoEdit,
            descripcion: descripcionEdit,
            subtotal: subtotalEdit,
            total: totalEdit
          })
          .subscribe((respuesta: any) => {
            console.log(respuesta.msg);
            this.obtenerListaOrdenes();
            window.location.reload();
          });
        Swal.fire("Guardado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardardaron", "", "info");
      }
    });
  }

  getOrdenById(idSelect: number) {
    this.http.get<Orden>(this.url + '/api/ordenes/obtener/' + idSelect).subscribe((respuesta: Orden) => {
      console.log(respuesta);
      this.detallesOrden = respuesta;
    });
  }

}
