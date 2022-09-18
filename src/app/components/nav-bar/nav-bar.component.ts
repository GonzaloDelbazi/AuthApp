import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( public auth: AuthService) { }
  isAuthenticated: Boolean = true;

    ngOnInit(): void {
      this.auth.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth;
    })
  }

  log(isLog:boolean) {
    if(isLog) {
      return this.auth.loginWithRedirect();
    }
    return this.auth.logout();

  }

}
