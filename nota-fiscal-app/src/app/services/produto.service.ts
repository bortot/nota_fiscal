import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class ProdutoService extends BaseService{

  path: string = "produto";

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
