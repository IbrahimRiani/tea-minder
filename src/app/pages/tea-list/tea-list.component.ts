import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent {
  constructor(private router: Router) {}

  goToDetail(id: number) {
    this.router.navigate(['/tea-detail', id]);
  }
}
