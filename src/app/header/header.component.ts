import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private _router: Router){}


  singlePhotographer(){
    this._router.navigate(['photographer1','23'])
  }

  photographers(){
    this._router.navigate(['photographer'])
  }
}
