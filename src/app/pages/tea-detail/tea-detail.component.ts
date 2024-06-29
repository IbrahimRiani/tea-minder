import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss']
})
export class TeaDetailComponent {
  constructor(private router: Router) {}

  navigateToTeaList(): void {
    this.router.navigate(['/tea-list']);
  }
}
