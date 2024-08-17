import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {PhotographerData} from "../PhotographerData";
import {PhotographerService} from "../photographer.service";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-photographers',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './photographers.component.html',
  styleUrl: './photographers.component.css'
})
export class PhotographersComponent implements OnInit {
  isLoggedIn: boolean=false
  isDataAvailable=false
  photographers: PhotographerData[];
  isNext: boolean = true;
  isPrevious: boolean = true;
  offset = environment.OFFSET
  limits = environment.LIMIT
  count: number = environment.COUNT;
  page = environment.PAGE;

  constructor(private _photographerService: PhotographerService, private _router: Router,private _authService:AuthService) {
    this.photographers = []
  }

  _getPhotographers() {
    this._photographerService.getAllPhotographer(this.offset, this.limits).subscribe({
      next: response => {
        this.isDataAvailable = response.length <= 0;
        console.log(this.offset,this.limits,this.count,this.page)
        this.photographers = response
        if (this.photographers.length >= this.limits) {
          this.count = this.photographers.length;
          this.isNext = false
        } else {
          this.isNext = true
        }
        this.isPrevious = this.page < 1;
      },
      error: err => {
      }
    })
  }

  ngOnInit(): void {
    this.isLoggedIn = this._authService.hasToken();
    this._getPhotographers()
  }

  goTOPhotographerPage(id: string) {
    this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT, id, environment.ARTWORK_ENDPOINT])
  }

  goToAddPhotographerPage() {
    this._router.navigate([environment.PHOTOGRAPHER_ENDPOINT, environment.ADD_ENDPOINT])
  }


  onNext() {
    this.offset += environment.LIMIT
    this.page++
    this._getPhotographers()
  }

  onPrevious() {
    this.offset -= environment.LIMIT
    this.page--
    this._getPhotographers()
  }

  protected readonly environment = environment;
}
