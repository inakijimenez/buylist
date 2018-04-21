import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class SellersService {

  constructor(private http: HttpClient) {
    console.log('CardsService constructor');
  }

  post(seller): Observable<any> {
    console.log('post %o', seller);
    let url = GLOBAL.endpoint + 'sellers';
    return this.http.post(url, seller);
  }
}
