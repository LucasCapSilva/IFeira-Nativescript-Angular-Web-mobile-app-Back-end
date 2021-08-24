import { DeleteProdutoComponent } from '@src/app/delete-produto/delete-produto.component';
import { PostProdutoComponent } from '@src/app/post-produto/post-produto.component';
import { GetAllProdutoComponent } from '@src/app/get-all-produto/get-all-produto.component';
import { GetAllFeirantesComponent } from '@src/app/get-all-feirantes/get-all-feirantes.component';
import { GetAllCategoriasComponent } from '@src/app/get-all-categorias/get-all-categorias.component';
import { CadastrarComponent } from '@src/app/cadastrar/cadastrar.component';
import { LoginComponent } from '@src/app/login/login.component';
import { HomeComponent } from '@src/app/home/home.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NativeScriptRouterModule, } from 'nativescript-angular/router';

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
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
