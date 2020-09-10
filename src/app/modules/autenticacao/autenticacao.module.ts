import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { LogarComponent } from './componentes';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LoginComponent,
    CadastroComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AutenticacaoModule {
}
