import { Component,OnInit} from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent  {
  myWeather: any;
  temperature:number=0;
  feelsLikeTemp: number=0;
  humidity: number=0;
  pressure:  number=0;
  summary: string='';
  cityName= "";
  units:string='imperial';
  temp_max:number=0;
  temp_min:number=0;
  icon:any;
  todaysDate= new Date()

  constructor(private weatherService: WeatherService ,public httpClient:HttpClient){
  
  }

  ngOnInit():void{
    console.log(this.cityName)
    this.getWeatherData(this.cityName);
    this.cityName='';

    }
  onSubmit(){
this.getWeatherData(this.cityName);
this.cityName='';
  }
   getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName,this.units).subscribe({
      next:(res) => {
        console.log(res)
        
        this.myWeather=res;
        console.log(this.myWeather);
        this.temperature=this.myWeather.main.temp;
        this.temp_max=this.myWeather.main.temp_max;
        this.temp_min=this.myWeather.main.temp_min;
        this.feelsLikeTemp= this.myWeather.main.feels_like;
        this.humidity=this.myWeather.main.humidity;
        this.pressure=this.myWeather.main.pressure;
        this.summary=this.myWeather.weather[0].main;
       this.icon="https://openweathermap.org/img/w/" + this.myWeather.weather[0].icon+'.png'
      }
    });
  }
}


