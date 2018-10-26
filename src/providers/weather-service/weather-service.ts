import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WeatherServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherServiceProvider {

  constructor(public http: HttpClient) {
    
  }

  getLocation() {
    return this.http.get('https://opendata.aemet.es/opendata/sh/b4fb80e0');
  }

}
