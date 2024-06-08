import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
