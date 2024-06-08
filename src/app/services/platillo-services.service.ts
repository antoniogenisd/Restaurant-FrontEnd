import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
