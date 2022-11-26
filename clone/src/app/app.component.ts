import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { response } from 'express';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService:WeatherService){}
  ngOnInit(): void {
   this.weatherService.getWeatherData('New Delhi').subscribe({
    next:(response)=>{
      console.log(response)
    }
   })
  }

}
