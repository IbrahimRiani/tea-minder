import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 99d967d01132b012c1cc9f99b4c834d1a3da5bbd

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent {
<<<<<<< HEAD
  constructor(private router: Router) {}

  goToDetail(id: number) {
    this.router.navigate(['/tea-detail', id]);
  }
=======

>>>>>>> 99d967d01132b012c1cc9f99b4c834d1a3da5bbd
}
