import { Produto } from './../model/Produto';
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

  getByIdProduto(id: number){
    return this.http.get(`http://localhost:8080/produto/${id}`)
  }
  postProduto( produto: Produto){
    return this.http.post("http://localhost:8080/produto", produto)
  }
  putProduto( produto: Produto){
    return this.http.post("http://localhost:8080/produto", produto)
  }
  delete(id: number){
    return this.http.delete(`http://localhost:8080/produto/${id}`);
  }
  getAllFeirantes(){
    return this.http.get("http://localhost:8080/feirante")
  }
  getAllCategorias(){
    return this.http.get("http://localhost:8080/categoria")
  }
  getByIdCategoria(id: number){
    return this.http.get(`http://localhost:8080/categoria/${id}`)
  }
  
}
