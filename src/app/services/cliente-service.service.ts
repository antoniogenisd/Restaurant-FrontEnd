import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root',
})
export class ClienteServiceService {
  public url: string = 'http://localhost:8082';

  public listaClientes: any[];

  constructor(private http: HttpClient) {
    this.listaClientes = [];
  }

  obtenerListaClientes(): void {
    this.http.get(this.url + '/api/clientes').subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaClientes = respuesta;
    });
  }

  guardarCliente(
    nombre: string,
    direccion: string,
    telefono: string,
  ) {
    this.http
      .post(this.url + '/api/clientes', {
        nombre: nombre,
        direccion: direccion,
        telefono: telefono
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
            this.obtenerListaClientes();
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

  editarCliente(
    idSelect: number,
    nombreEdit: string,
    direccionEdit: string,
    telefonoEdit: string,
  ) {
    this.http
      .put(this.url + '/api/clientes/actualizar/' + idSelect, {
        nombre: nombreEdit,
        direccion: direccionEdit,
        telefono: telefonoEdit
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
            this.obtenerListaClientes();
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
                this.obtenerListaClientes();
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
