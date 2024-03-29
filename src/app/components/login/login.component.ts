import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string =  '';
  public password: string = '';
  public isError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(): void {
    this.authService.loginEmailUser(this.email, this.password)
    .then((res) => {
      this.onLoginRedirect();
      this.isError = false;
      console.log("Logeado");
    })
    .catch((err) => {
      console.log('ERROR:', err.message);
      this.isError = true;
    });
  }

  onLogout(): void {
    this.authService.logoutUser();
    console.log('Usuario deslogeado');
  }

  onLoginRedirect() {
    this.router.navigate(['home']);
  }

}
