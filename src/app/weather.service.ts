import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(city:string, units:string){
return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}
&appid=7a20ec8d6ce3d9c58c3c9da9b54c2372&units=imperial`);
  }
}