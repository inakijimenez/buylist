import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';
import { Card } from '../model/Card';

@Injectable()
export class CardsService {

    constructor(private http: HttpClient) {
        console.log('CardsService constructor');
    }
   
    post(card): Observable<any>{
        console.log('post %o', card);
        let url = GLOBAL.endpoint + 'cards';
        return this.http.post(url, card);
    }
}
