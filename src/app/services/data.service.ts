import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { buy } from '../shared/sell.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  api = "http://localhost:3000/workers";
  constructor(private http: HttpClient) {

   }
  

  add(a: buy) {
  
    return this.http.post(this.api, a).toPromise();
  }
  change(a: buy) {
  
    return this.http.put(this.api + "/" + a.id, a).toPromise();
  }


  delete(a) {

    return this.http.delete(this.api + "/" + a).toPromise();
  }

  
  get(): Promise<any> {

    return this.http.get(this.api).toPromise();

  }
}
