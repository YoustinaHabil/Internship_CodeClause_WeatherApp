import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    WeatherAppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
