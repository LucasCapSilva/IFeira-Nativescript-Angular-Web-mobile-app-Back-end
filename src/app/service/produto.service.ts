import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {}

  getAllProdutos(){
    return this.http.get("http://localhost:8080/produto")
  }
  getAllFeirantes(){
    return this.http.get("http://localhost:8080/feirante")
  }
  getAllCategorias(){
    return this.http.get("http://localhost:8080/categoria")
  }
}
