import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ListadoPlatillosComponent } from '../../components/listado-platillos/listado-platillos.component';

@Component({
  selector: 'app-platillo',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, ListadoPlatillosComponent],
  templateUrl: './platillo.component.html',
  styleUrl: './platillo.component.css',
})
export class PlatilloComponent {}
