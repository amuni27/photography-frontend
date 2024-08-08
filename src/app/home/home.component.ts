import { Component } from '@angular/core';
import {TopPhotographerComponent} from "../top-photographer/top-photographer.component";
import {PhotographerWorkSliderComponent} from "../photographer-work-slider/photographer-work-slider.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopPhotographerComponent,
    PhotographerWorkSliderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
