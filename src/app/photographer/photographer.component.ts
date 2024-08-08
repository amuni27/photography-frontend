import { Component, OnInit } from '@angular/core';
import { PhotographerService } from '../photographer.service';
import { CommonModule } from '@angular/common';
import {PhotographerData} from '../PhotographerData'

@Component({
  selector: 'app-photographer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photographer.component.html',
  styleUrl: './photographer.component.css'
})
export class PhotographerComponent implements OnInit {

  photographers: PhotographerData[];

  constructor(private photographerService: PhotographerService) {
    this.photographers = []
  }


  ngOnInit(): void {
    this.photographerService.getAllPhotographer(0, 5).subscribe(
      photographer => {
        this.photographers = photographer;
      }
    )

  }
}
