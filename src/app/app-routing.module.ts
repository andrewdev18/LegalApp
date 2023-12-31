import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent as SalesListComponent } from './sales/pages/list/list.component';
import { CreateComponent as SalesCreateComponent } from './sales/pages/create/create.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'LAPP' },
  { path: 'ventas', component: SalesListComponent, title: 'LAPP - Ventas' },
  { path: 'ventas/crear', component: SalesCreateComponent, title: 'LAPP - Nueva Venta' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }