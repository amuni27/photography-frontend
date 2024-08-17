import {Component, computed, input, InputSignal, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {ArtworkData} from "../PhotographerData";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.css'
})
export class ArtworksComponent implements OnInit {
  isDataAvailable: boolean = false
  artworks = input<ArtworkData[]>()
  photographId = input<String>()
  artworks_length = input<String>()

  constructor(private _router: Router) {

  }

  ngOnInit(): void {

    console.log(this.artworks_length())

    if (this.artworks()) {
      this.isDataAvailable = true;
    }
  }

  goTOPhotographerPage(id: string) {
    this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT, this.photographId(), environment.ARTWORK_ENDPOINT, id])
  }
}
