import { Categoria } from './../model/Categoria';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-categorias',
  templateUrl: './get-all-categorias.component.html',
  styleUrls: ['./get-all-categorias.component.css']
})
export class GetAllCategoriasComponent implements OnInit {

  categorias= [];

  listaCategorias: Categoria[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.findAllCategoria();

    this.categorias.push({ nome: "Frutas", imagem: "https://i0.wp.com/www.nutrivanessalodi.com.br/wp-content/uploads/2016/05/Mel%C3%A3o.jpg?resize=256%2C256&ssl=1"});  
    this.categorias.push({ nome: "Legumes", imagem: "https://www.olhonopreco.com.br/media/461-abobrinha-italiana-a-granel-kg-md.jpg"}); 
    
  }
  findAllCategoria(){
    this.produtoService.getAllCategorias().subscribe((CategoriaOut: Categoria[])=>{
      this.listaCategorias= CategoriaOut;
    })
  }


}
