import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'Weather',component:WeatherAppComponent},
  {path:'',component:HomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
