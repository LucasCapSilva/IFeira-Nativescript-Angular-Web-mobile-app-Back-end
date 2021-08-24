import { GetAllFeirantesComponent } from './get-all-feirantes/get-all-feirantes.component';
import { GetAllCategoriasComponent } from './get-all-categorias/get-all-categorias.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DeleteProdutoComponent } from '@src/app/delete-produto/delete-produto.component';
import { PostProdutoComponent } from '@src/app/post-produto/post-produto.component';
import { GetAllProdutoComponent } from '@src/app/get-all-produto/get-all-produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'categorias', component: GetAllCategoriasComponent},
  {path: 'feirantes', component: GetAllFeirantesComponent},
  {path: 'produtos', component: GetAllProdutoComponent},
  {path: 'postProduto', component: PostProdutoComponent},
  {path: 'postProduto/:id', component: PostProdutoComponent},
  {path: 'deleteProduto/:id', component: DeleteProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
