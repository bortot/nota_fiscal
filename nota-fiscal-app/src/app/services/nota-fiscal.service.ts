import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {HttpClient} from '@angular/common/http';
import {NotaFiscal} from '../class/nota-fiscal';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService extends BaseService<NotaFiscal> {

  constructor(protected override http: HttpClient) {
    super(http);
  }

  path: string = 'nota-fiscal';
}
