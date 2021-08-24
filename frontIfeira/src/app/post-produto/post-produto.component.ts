import { Categoria } from './../model/Categoria';
import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-produto',
  templateUrl: './post-produto.component.html',
  styleUrls: ['./post-produto.component.css']
})
export class PostProdutoComponent implements OnInit {

  novo: boolean = false;
  idCat:number;
  listaCategorias: Categoria[]
  produto:Produto= new Produto(0,"","","",null)
  categoria:Categoria= new Categoria(0,"","")
  constructor(private route: ActivatedRoute,private produtoService: ProdutoService,private router:Router) { }

  ngOnInit() {
    this.findAllCategoria()
    let id:number = this.route.snapshot.params["id"];
    if(id == undefined){
      this.novo = true;
    } else {
      this.findById(id);
      this.novo = false;
    }
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((produtoOut:Produto)=>{
      this.produto= produtoOut;
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  getIdCategoria() {
    this.produtoService.getByIdCategoria(this.idCat).subscribe((categoriaOut: Categoria) => {
      this.categoria = categoriaOut;
    });
  }

  findAllCategoria(){
    this.produtoService.getAllCategorias().subscribe((CategoriaOut: Categoria[])=>{
      this.listaCategorias= CategoriaOut;
    })
  }

  save(){
    if (this.novo) {
      this.produto.categoria = this.categoria;
      this.produtoService.postProduto(this.produto).subscribe((produtoOut: Produto)=>{
        this.produto= produtoOut;
        this.router.navigate(['/produtos']);
      })
      
    } else {
      this.produtoService.putProduto(this.produto).subscribe((produtoOut: Produto)=>{
        this.produto= produtoOut;
        this.router.navigate(['/produtos']);
      })
    }
  }

}
