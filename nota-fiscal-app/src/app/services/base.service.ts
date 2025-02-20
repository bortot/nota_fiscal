import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export abstract class BaseService {

  private apiUrl = `${environment.apiUrl}`

  abstract path: string;

  protected constructor(protected http: HttpClient) {}

  getRecords(index: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.path}?index=${index}&size=${size}`);
  }

  deleteRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.path}/${id}`);
  }
}
