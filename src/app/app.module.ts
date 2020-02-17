import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';
import { GetAllProdutoComponent } from '@src/app/get-all-produto/get-all-produto.component';
import { CadastrarComponent } from '@src/app/cadastrar/cadastrar.component';
import { NavbarComponent } from '@src/app/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { GetAllCategoriasComponent } from '@src/app/get-all-categorias/get-all-categorias.component';
import { GetAllFeirantesComponent } from '@src/app/get-all-feirantes/get-all-feirantes.component';
import { NavbarProdComponent } from '@src/app/navbar-prod/navbar-prod.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GetAllProdutoComponent,
    CadastrarComponent,
    NavbarComponent,
    GetAllCategoriasComponent,
    GetAllFeirantesComponent,
    NavbarProdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
