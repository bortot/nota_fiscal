import { Routes } from '@angular/router';
import {ProdutoComponent} from './components/produto/produto.component';
import {FornecedorComponent} from './components/fornecedor/fornecedor.component';
import {NotaFiscalComponent} from './components/nota-fiscal/nota-fiscal.component';
import {ProdutoCadastroComponent} from './components/produto-cadastro/produto-cadastro.component';

export const routes: Routes = [
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto/cadastro', component: ProdutoCadastroComponent },
  { path: 'produto/cadastro/:id', component: ProdutoCadastroComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'nota-fiscal', component: NotaFiscalComponent },
];
