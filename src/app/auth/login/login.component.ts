import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  private authService: AuthService = inject(AuthService);

  loginForm: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }

  sendForm(): void{
    if(!this.loginForm.invalid){
      //console.log('FORM LOGIN =>', this.loginForm.value);
      this.authService.login(
        this.loginForm.value.email, 
        this.loginForm.value.password)
    }else{
      console.log('INVALID');
    }
    
  }
}
