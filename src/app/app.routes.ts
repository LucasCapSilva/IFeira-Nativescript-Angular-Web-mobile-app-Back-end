import { DeleteProdutoComponent } from '@src/app/delete-produto/delete-produto.component';
import { PostProdutoComponent } from '@src/app/post-produto/post-produto.component';
import { GetAllFeirantesComponent } from '@src/app/get-all-feirantes/get-all-feirantes.component';
import { GetAllCategoriasComponent } from '@src/app/get-all-categorias/get-all-categorias.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { GetAllProdutoComponent } from './get-all-produto/get-all-produto.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/home/home.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
},
{
  path: 'produtos',
  component: GetAllProdutoComponent,
},
{
  path: 'cadastrar',
  component: CadastrarComponent,
},
{
  path: 'categorias',
  component: GetAllCategoriasComponent,
},
{
  path: 'feirantes',
  component: GetAllFeirantesComponent,
},
{
  path: 'postProduto',
  component: PostProdutoComponent,
},
{
  path: 'deleteProduto',
  component: DeleteProdutoComponent,
},
];
