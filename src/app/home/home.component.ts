import { Component } from '@angular/core';
import {TopPhotographerComponent} from "../top-photographer/top-photographer.component";
import {PhotographerWorkSliderComponent} from "../photographer-work-slider/photographer-work-slider.component";
import {PhotographersComponent} from "../photographers/photographers.component";
import {ArtworksComponent} from "../artworks/artworks.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    TopPhotographerComponent,
    PhotographerWorkSliderComponent,
    PhotographersComponent,
    ArtworksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
