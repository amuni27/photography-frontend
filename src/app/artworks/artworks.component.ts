import {Component, input, InputSignal, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {ArtworkData} from "../PhotographerData";

@Component({
  selector: 'app-artworks',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf
  ],
  templateUrl: './artworks.component.html',
  styleUrl: './artworks.component.css'
})
export class ArtworksComponent implements OnInit {
  artworks = input<ArtworkData[]>()

  constructor(private _router: Router) {

  }

  ngOnInit(): void {
    console.log(this.artworks())
  }

  goTOPhotographerPage(id: string) {
    this._router.navigate(["artwork", id])
  }
}
