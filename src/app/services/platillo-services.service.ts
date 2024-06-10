import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class PlatilloServicesService {
  public url: string = 'http://localhost:8082';
  public listaPlatillos: any[];

  constructor(private http: HttpClient) {
    this.listaPlatillos = [];
  }
  obtenerListaPlatillos(): void {
    this.http.get(this.url + '/api/platillos').subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaPlatillos = respuesta;
    });
  }

  guardarPlatillo(
    nombre: string,
    descripcion: string,
    precio: string,
  ) {

    this.http
      .post(this.url + '/api/platillos', {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
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
            this.obtenerListaPlatillos();
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

  editarPlatillo(
    idSelect: number,
    nombreEdit: string,
    descripcionEdit: string,
    precioEdit: number,
  ) {
    this.http
      .put(this.url + '/api/platillos/actualizar/' + idSelect, {
        nombre: nombreEdit,
        direccion: descripcionEdit,
        puesto: precioEdit
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
            this.obtenerListaPlatillos();
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

  eliminarPlatillo(
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
          .delete(this.url + '/api/platillos/eliminar?id=' + idSelect)
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
                this.obtenerListaPlatillos();
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
