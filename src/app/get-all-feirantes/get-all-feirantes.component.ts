import { Feirante } from './../model/Feirante';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-feirantes',
  templateUrl: './get-all-feirantes.component.html',
  styleUrls: ['./get-all-feirantes.component.css']
})
export class GetAllFeirantesComponent implements OnInit {

  listaFeirante: Feirante[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllFeirante();
  }
  findAllFeirante(){
    this.produtoService.getAllFeirantes().subscribe((feiratenOut: Feirante[])=>{
      this.listaFeirante= feiratenOut;
    })
  }
}
