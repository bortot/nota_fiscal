import {Fornecedor} from './fornecedor';
import {NotaFiscalItem} from './nota-fiscal-item';

export class NotaFiscal {
  numero?: string;
  endereco?: string;
  dataEmissao?: object;
  valorTotal?: number;
  fornecedor?: Fornecedor;
  notaFiscalItem?: NotaFiscalItem;
}
