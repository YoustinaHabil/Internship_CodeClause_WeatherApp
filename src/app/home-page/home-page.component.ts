import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  cityName= "";


constructor(private router:Router){}
GoTo(){
this.router.navigate(['/Weather'])
}
}
