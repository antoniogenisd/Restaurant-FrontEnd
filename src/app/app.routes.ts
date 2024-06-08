import { Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { EmpleadoComponent } from '../pages/empleado/empleado.component';
import { PlatilloComponent } from '../pages/platillo/platillo.component';
import { OrdenComponent } from '../pages/orden/orden.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'empleados', component: EmpleadoComponent },
  { path: 'platillos', component: PlatilloComponent },
  { path: 'ordenes', component: OrdenComponent },
];
