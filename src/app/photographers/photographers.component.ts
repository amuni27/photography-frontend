import {Component, OnInit} from '@angular/core';
import {DatePipe, NgForOf} from "@angular/common";
import {PhotographerData} from "../PhotographerData";
import {PhotographerService} from "../photographer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photographers',
  standalone: true,
  imports: [
    NgForOf,
    DatePipe
  ],
  templateUrl: './photographers.component.html',
  styleUrl: './photographers.component.css'
})
export class PhotographersComponent implements OnInit{
  photographers: PhotographerData[];
  isNext: boolean=true;
  isPrevious:boolean=true;
  offset =0
  limits = 10
  page=0;

  constructor(private _photographerService: PhotographerService,private _router:Router) {
    this.photographers = []
  }

  ngOnInit(): void {
    this._photographerService.getAllPhotographer(this.offset,this.limits).subscribe({
      next: response => {
        console.log(response)
        this.photographers=response
      },
      error: err => {}
    })
  }

  goTOPhotographerPage(id:string){
    console.log("id",id)
    this._router.navigate(["photographer",id])
  }

  goToAddPhotographerPage(){
    this._router.navigate(["photographer","add"])
  }

}
