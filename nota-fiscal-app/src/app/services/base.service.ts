import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export abstract class BaseService {

  private apiUrl = `${environment.apiUrl}`

  abstract path: string;

  protected constructor(protected http: HttpClient) {}

  save(entity: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${this.path}`, entity);
  }

  update(id: number, entity: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${this.path}/${id}`, entity);
  }

  page(index: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.path}?index=${index}&size=${size}`);
  }

  findById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${this.path}/${id}`);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${this.path}/${id}`);
  }
}
