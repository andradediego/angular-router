import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
     private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    this.router.navigate([
      '/servers', id, 'edit'
    ],
    {queryParams: {allowEdit: '1'},
    fragment: 'loading'
  });
  }

  onLogin() {
    this.authService.login();
    console.log('You are logged');
  }

  onLogout() {
    this.authService.logout();
    console.log('You are no longer logged');
  }
}
