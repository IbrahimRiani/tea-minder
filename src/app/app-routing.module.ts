import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeaListComponent } from './pages/tea-list/tea-list.component';
import { TeaDetailComponent } from './pages/tea-detail/tea-detail.component';
import { authGuard } from './guards/auth.guards';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'tea-list',
    component: TeaListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'tea-detail/:id',
    component: TeaDetailComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
