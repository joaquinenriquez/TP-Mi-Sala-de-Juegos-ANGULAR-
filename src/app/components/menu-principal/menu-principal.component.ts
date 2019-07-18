import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  public isLogged = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    ngOnInit() {
      this.getCurrentUser();
    }

    getCurrentUser(){
      this.authService.isAuth().subscribe(auth => {
        if (auth) {
          console.log('Usuario logeado');
          this.isLogged = true;
        } else {
          console.log('Usuario no logeado');
          this.isLogged = false;
        }
      });
    }

    onLogout(){
      this.authService.logoutUser();
    }


  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private afsAuth: AngularFireAuth) {}

}


