import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /**
   * name
   */
  public irParaHome() {
    this.router.navigate(['/home']);
  }

  public irParaLogin() {
    this.router.navigate(['/login']);
  }

  public irParaCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

}
