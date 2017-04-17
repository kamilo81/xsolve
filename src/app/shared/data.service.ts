import { Injectable } from '@angular/core';
import { config } from '../config'
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";
@Injectable()
export class DataService {

  private url = config.apiUrl;
  constructor(private http: Http) { }

  getData(target): Promise<any> {
    return this.http.get(this.url+target)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  getStats() {
    return Observable.forkJoin(
      this.http.get(this.url + 'users').map((res) => res.json()),
      this.http.get(this.url + 'posts').map((res) => res.json())
    );
  }
}
