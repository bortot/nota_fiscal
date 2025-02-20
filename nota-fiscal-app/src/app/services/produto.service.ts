import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseService} from './base.service';

@Injectable({providedIn: 'root'})
export class ProdutoService extends BaseService{

  // private apiUrl = `${environment.apiUrl}/produto`;
  path: string = "produto";

  constructor(protected override http: HttpClient) {
    super(http);
  }

  // getRecords(index: number, size: number): Observable<any> {
  //   return this.http.get<any>(`http://localhost:8080/produto?index=${index}&size=${size}`);
  // }

  countRecords(): Observable<number> {
    return this.http.get<number>(`http://localhost:8080/produto/count`);
  }
}
