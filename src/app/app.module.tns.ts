import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';
import { GetAllProdutoComponent } from '@src/app/get-all-produto/get-all-produto.component';
import { CadastrarComponent } from '@src/app/cadastrar/cadastrar.component';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NavbarComponent } from '@src/app/navbar/navbar.component';
import { GetAllCategoriasComponent } from '@src/app/get-all-categorias/get-all-categorias.component';
import { GetAllFeirantesComponent } from '@src/app/get-all-feirantes/get-all-feirantes.component';
import { NavbarProdComponent } from '@src/app/navbar-prod/navbar-prod.component';
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

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
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
