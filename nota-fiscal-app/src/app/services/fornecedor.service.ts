import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {Fornecedor} from '../class/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService extends BaseService<Fornecedor> {

  path: string = "fornecedor";

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
