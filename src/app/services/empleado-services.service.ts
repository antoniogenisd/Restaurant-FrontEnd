import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoServicesService {
  public url: string = 'http://localhost:8082';
  public listaEmpleados: any[];

  constructor(private http: HttpClient) {
    this.listaEmpleados = [];
  }
  obtenerListaEmpleados(): void {
    this.http.get(this.url + '/api/empleados').subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaEmpleados = respuesta;
    });
  }

  guardarEmpleado(
    nombre: string,
    direccion: string,
    telefono: string,
    puesto: string,
    sueldo: number
  ) {
    this.http
      .post(this.url + '/api/empleados', {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono,
        puesto: puesto,
        sueldo: sueldo,
      })
      .subscribe((respuesta: any) => {
        console.log(respuesta.msg);
        Swal.fire({
          title: 'Deseas guardar los cambios?',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.obtenerListaEmpleados();
            window.location.reload();
          } else if (result.isDenied) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
      });
  }

  editarEmpleado(
    idSelect: number,
    editNombre: string,
    editDireccion: string,
    editTelefono: string,
    editPuesto: string,
    editSueldo: number
  ) {
    this.http
      .put(this.url + '/api/empleados/actualizar/' + idSelect, {
        nombre: editNombre,
        direccion: editDireccion,
        telefono: editTelefono,
        puesto: editPuesto,
        sueldo: editSueldo
      })
      .subscribe((respuesta: any) => {
        console.log(respuesta.msg);
        Swal.fire({
          title: 'Do you want to save the changes?',
          showDenyButton: false,
          showCancelButton: false,
          confirmButtonText: 'ok',
        }).then((result) => {
          if (result.isConfirmed) {
            this.obtenerListaEmpleados();
            window.location.reload();
          } else if (result.isDenied) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
        });
      });
  }


  eliminarCliente(
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
          .delete(this.url + '/api/empleados/eliminar?id=' + idSelect)
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
                this.obtenerListaEmpleados();
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

  eliminarEmpleado(
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
          .delete(this.url + '/api/clientes/eliminar?id=' + idSelect)
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
                this.obtenerListaEmpleados();
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

}
