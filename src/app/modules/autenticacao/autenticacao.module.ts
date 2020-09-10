import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';



@NgModule({
  declarations: [LoginComponent, CadastroComponent],
  imports: [
    CommonModule
  ]
})
export class AutenticacaoModule { }
