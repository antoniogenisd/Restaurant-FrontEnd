import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListadoEmpleadosComponent } from '../../components/listado-empleados/listado-empleados.component';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FooterComponent, NavbarComponent, ListadoEmpleadosComponent],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
})
export class EmpleadoComponent {}
