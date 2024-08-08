import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-photographer-work-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photographer-work-slider.component.html',
  styleUrl: './photographer-work-slider.component.css'
})
export class PhotographerWorkSliderComponent {
  slides:string[]=[
    "http://localhost:3434/image/women-new-portraits-misty-copeland.jpg",
    "http://localhost:3434/image/ronaldo-messi.png",
    "http://localhost:3434/image/Queen-Elizabeth-1.jpg",
  ]
}
