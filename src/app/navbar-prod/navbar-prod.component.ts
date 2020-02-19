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
  public irParaHome() {
    this.router.navigate(['/home']);
  }

  public irParaLogin() {
    this.router.navigate(['/login']);
  }

  public irParaCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

  novo(){
    this.router.navigate(['/postProduto','produto.id']);
  }

}
