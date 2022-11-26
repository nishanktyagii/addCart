import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { weatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient ) { }

  getWeatherData(cityname:string):Observable<weatherData>{
    return this.http.get<weatherData>(environment.weatherapiBaseUrl, {
      headers: new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeadervalue), params: new HttpParams()
          .set('q', cityname)
          .set('units', 'matric')
          .set('mode', 'json')
    });
  }
}
