import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tea-detail',
  templateUrl: './tea-detail.component.html',
  styleUrls: ['./tea-detail.component.scss']
})
export class TeaDetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  id: string = 'No ID';

  constructor()
  {
    const idParam = this.route.snapshot.paramMap.get('id')
    if(idParam){
      this.id = idParam;
    }
    

  }
}
