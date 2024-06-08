import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { ListadoClientesComponent } from '../listado-clientes/listado-clientes.component';
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ListadoClientesComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {}
