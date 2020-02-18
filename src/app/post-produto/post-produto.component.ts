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
  produto:Produto= new Produto(0,"","","",null)
  constructor(private route: ActivatedRoute,private produtoService: ProdutoService,private router:Router) { }

  ngOnInit() {
    
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


  save(){
    if (this.novo) {
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
