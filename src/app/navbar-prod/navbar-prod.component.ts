import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-prod',
  templateUrl: './navbar-prod.component.html',
  styleUrls: ['./navbar-prod.component.css']
})
export class NavbarProdComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  /**
   * irParaCategorias
   */
  public irParaCategorias() {
    this.router.navigate(['/categorias']);
    
  }
  public irParaProdutos() {
    this.router.navigate(['/produtos']);
    
  }
  public irParaFeirantes() {
    this.router.navigate(['/feirantes']);
    
  }

}
