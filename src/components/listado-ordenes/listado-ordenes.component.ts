import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenServiceService } from '../../app/services/orden-service.service';

@Component({
  selector: 'app-listado-ordenes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-ordenes.component.html',
  styleUrl: './listado-ordenes.component.css'
})
export class ListadoOrdenesComponent {
  constructor(private or: OrdenServiceService) {
    or.obtenerListaOrdenes();
  }
  get listaOrdenes() {
    return this.or.listaOrdenes;
  }
}
