import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardsService {

  constructor(private http:HttpClient) { 
    console.log('CardsService contructor');    
  }

  post(card): Observable<any>{
    console.log('Post card %o', card);

    return null;
  }

}
