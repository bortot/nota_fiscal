import {ProdutoSituacao} from '../enum/produto-situacao';

export class Produto {
  id?: number;
  codigo?: string;
  descricao?: string;
  situacao?: ProdutoSituacao;
}
