import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpleadoServicesService } from '../../app/services/empleado-services.service';

@Component({
  selector: 'app-listado-empleados',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './listado-empleados.component.html',
  styleUrl: './listado-empleados.component.css',
})
export class ListadoEmpleadosComponent {
  constructor(private es: EmpleadoServicesService) {
    es.obtenerListaEmpleados();
  }

  get ListaEmpleados() {
    return this.es.listaEmpleados;
  }
}
