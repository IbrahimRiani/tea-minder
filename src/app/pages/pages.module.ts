import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeaListComponent } from './tea-list/tea-list.component';
import { TeaDetailComponent } from './tea-detail/tea-detail.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [
    TeaListComponent,
    TeaDetailComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
