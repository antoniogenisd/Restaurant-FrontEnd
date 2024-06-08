import { Component } from '@angular/core';
import { PlatilloServicesService } from '../../app/services/platillo-services.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-platillos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-platillos.component.html',
  styleUrl: './listado-platillos.component.css',
})
export class ListadoPlatillosComponent {
  constructor(private ps: PlatilloServicesService) {
    ps.obtenerListaPlatillos();
  }
  get ListaPlatillos() {
    return this.ps.listaPlatillos;
  }
}
