import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { AuthGuard } from '../guards/auth.guards';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard], // Protección para todas las rutas hijas
    children: [
      { path: '', redirectTo: 'tea-list', pathMatch: 'full' },
      { path: 'tea-list', component: TeaListComponent },
      { path: 'tea-detail/:id', component: TeaDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
