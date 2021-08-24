import { Router } from '@angular/router';
import { Produto } from './../model/Produto';
import { ProdutoService } from './../service/produto.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-get-all-produto',
  templateUrl: './get-all-produto.component.html',
  styleUrls: ['./get-all-produto.component.css']
})
export class GetAllProdutoComponent implements OnInit {

  categorias= [];

  produtos = [];

  feirantes= [];

  listaProduto: Produto[]

  constructor(private produtoService: ProdutoService, private router:Router) { }

  ngOnInit() { 
    this.findAll()

    this.produtos.push({ nome: "Melancia", imagem: "https://pt.seaicons.com/wp-content/uploads/2015/06/melon-icon.png",preco:"R$ 7.00" });
    this.produtos.push({ nome: "Melão", imagem: "https://i0.wp.com/www.nutrivanessalodi.com.br/wp-content/uploads/2016/05/Mel%C3%A3o.jpg?resize=256%2C256&ssl=1",preco:"R$ 10.00" });
    this.produtos.push({ nome: "Banana", imagem: "https://images.rappi.com.br/products/2092520016-1534353702.png?d=200x200",preco:"R$ 2.00 a duzia" });
    this.produtos.push({ nome: "Uva", imagem: "https://img.olx.com.br/thumbs256x256/85/857707037802265.jpg",preco:"R$ 10.00 a caixa" }); 
    this.produtos.push({ nome: "Brocolis", imagem: "https://img.olx.com.br/thumbs256x256/07/076930029219916.jpg",preco:"R$ 10.00 o kilo" });
    this.produtos.push({ nome: "Abobrinha", imagem: "https://www.olhonopreco.com.br/media/461-abobrinha-italiana-a-granel-kg-md.jpg",preco:"R$ 5.00 o kilo" });  
    
    this.categorias.push({ nome: "Frutas", imagem: "https://i0.wp.com/www.nutrivanessalodi.com.br/wp-content/uploads/2016/05/Mel%C3%A3o.jpg?resize=256%2C256&ssl=1"});  
    this.categorias.push({ nome: "Legumes", imagem: "https://www.olhonopreco.com.br/media/461-abobrinha-italiana-a-granel-kg-md.jpg"}); 
    
    this.feirantes.push({ nome: "Paulo", imagem: "https://randomuser.me/api/portraits/men/2.jpg"}); 
    this.feirantes.push({ nome: "Zé", imagem: "https://randomuser.me/api/portraits/men/4.jpg"}); 
    this.feirantes.push({ nome: "João", imagem: "https://randomuser.me/api/portraits/men/5.jpg"}); 
    this.feirantes.push({ nome: "Camila", imagem: "https://randomuser.me/api/portraits/women/74.jpg"});
    this.feirantes.push({ nome: "Bianca", imagem: "https://randomuser.me/api/portraits/women/50.jpg"}); 
    this.feirantes.push({ nome: "Bruna", imagem: "https://randomuser.me/api/portraits/women/89.jpg"});  
  }
  findAll(){
    this.produtoService.getAllProdutos().subscribe((produtoOut: Produto[])=>{
      this.listaProduto= produtoOut;
    }, err =>{
      console.log(`Erro cod: ${err.status}`);
    })
  }
  novo(){
    this.router.navigate(['/postProduto','produto.id']);
  }

}
