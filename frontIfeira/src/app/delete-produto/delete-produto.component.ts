import { ProdutoService } from './../service/produto.service';
import { Produto } from './../model/Produto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-produto',
  templateUrl: './delete-produto.component.html',
  styleUrls: ['./delete-produto.component.css']
})
export class DeleteProdutoComponent implements OnInit {

  produto: Produto= new Produto(0,"","","",null)

  constructor(private route: ActivatedRoute,private produtoService: ProdutoService,private router: Router) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    this.findById(id);
  }

  findById(id:number){
    this.produtoService.getByIdProduto(id).subscribe((produtoOut:Produto)=>{
      this.produto= produtoOut;
    }, err => {
      console.log(`Erro cod: ${err.status}`)
    });
  }

  btnSim(){
    this.produtoService.delete(this.produto.id).subscribe((response:string)=>{
      this.router.navigate(['/produtos']);
    }, err => {
      console.log(err);
    });
  }

  btnNao(){
    this.router.navigate(['/produtos']);
  }

}
