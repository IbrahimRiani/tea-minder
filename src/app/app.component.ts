import { Component, inject } from '@angular/core';
import { TeaService } from './data/tea.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  teaService: TeaService = inject(TeaService)
  authService: AuthService = inject (AuthService)
  title = 'tea-minder';

  constructor(){
    this.authService.user$.subscribe({
      next: (value: string) =>{
        console.log('AUTH SERVICE USER DATA =>', value);
      }
    })

  }
}
