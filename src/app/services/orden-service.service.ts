import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientePlatillo } from '../../interfaces/cliente-platillo';
import { Observable } from 'rxjs';
import { EmpleadoComponent } from '../../pages/empleado/empleado.component';

@Injectable({
  providedIn: 'root'
})
export class OrdenServiceService {
  public url: string = 'http://localhost:8082';
  public listaOrdenes: any[];
  public listaEmpleado: EmpleadoComponent[];
  public listaCliente: ClientePlatillo[];


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


}
