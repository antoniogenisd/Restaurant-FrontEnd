import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListadoOrdenesComponent } from '../../components/listado-ordenes/listado-ordenes.component';

@Component({
  selector: 'app-orden',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ListadoOrdenesComponent],
  templateUrl: './orden.component.html',
  styleUrl: './orden.component.css',
})
export class OrdenComponent { }
