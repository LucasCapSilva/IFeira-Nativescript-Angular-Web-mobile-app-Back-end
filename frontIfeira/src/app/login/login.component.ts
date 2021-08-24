import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  senha: string;

  constructor(private router:Router) { }

  ngOnInit() {


  }

  public logar() {
    if (this.email == "lucas@email.com" && this.senha== "12345") {
      this.router.navigate(['/produtos']);
    } else {
      alert("Email ou senha invalido")
    }
  }
}
