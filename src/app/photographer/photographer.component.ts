import {Component, OnInit} from '@angular/core';
import {PhotographerService} from '../photographer.service';
import {CommonModule} from '@angular/common';
import {PhotographerData} from '../PhotographerData'
import {ArtworksComponent} from "../artworks/artworks.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-photographer',
  standalone: true,
  imports: [CommonModule, ArtworksComponent],
  templateUrl: './photographer.component.html',
  styleUrl: './photographer.component.css'
})
export class PhotographerComponent implements OnInit {
  photographer: PhotographerData;

  constructor(private photographerService: PhotographerService, private _router: ActivatedRoute) {
    this.photographer = new PhotographerData("", "", new Date(), "", [])
  }


  ngOnInit(): void {
    const id = this._router.snapshot.paramMap.get("id")
    if (id){
      this.photographerService.getPhotographer(id).subscribe({
          next: photographer => {
            this.photographer = photographer;
            console.log(this.photographer.artworks)

          },
          error: err => {
          }
        }
      )
    }


  }
}
