import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoModule } from './autenticacao.module';
import { LogarComponent } from './componentes/logar.component';

export const AutenticacaoRoutes: Routes = [
  {
    path: 'login',
    component: LogarComponent,
    children: [{path: '', component: AutenticacaoModule}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AutenticacaoRoutes)],
  exports: [RouterModule]
})
export class AutenticacaoRoutingModule {
}
